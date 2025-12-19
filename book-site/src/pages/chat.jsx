import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import lunr from 'lunr';
import styles from './chat.module.css';

export default function Chat() {
  const [index, setIndex] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadIndex() {
      try {
        const response = await fetch('/chat-index.json');
        const docs = await response.json();
        setDocuments(docs);

        const lunrIndex = lunr(function () {
          this.ref('id');
          this.field('title');
          this.field('section');
          this.field('text');
          
          docs.forEach(doc => {
            this.add(doc);
          });
        });

        setIndex(lunrIndex);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load index", err);
        setLoading(false);
      }
    }
    loadIndex();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!index || !query) return;

    // Search with wildcards for better partial matching
    const searchResults = index.search(query + "*" + " " + query + "~1");
    
    // Map back to documents
    const hits = searchResults.slice(0, 5).map(result => {
      const doc = documents.find(d => d.id == result.ref);
      return { ...doc, score: result.score };
    });

    setResults(hits);
  };

  const shareOnWhatsApp = () => {
    const url = window.location.origin;
    const text = `Physical AI & Humanoid Robotics Textbook + Grounded Chatbot (Hackathon). Live demo: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Layout title="AI Chatbot" description="Chat with the textbook">
      <div className="container margin-vert--lg" style={{maxWidth: '800px'}}>
        <div className="text--center">
            <h1>🤖 Textbook Chat</h1>
            <p className="hero__subtitle">Zero-Key • Offline • Grounded</p>
            <div className="badge badge--success margin-bottom--md">100% Local Browser Execution</div>
        </div>

        <div className="card shadow--md">
            <div className="card__body">
                <form onSubmit={handleSearch} style={{display: 'flex', gap: '10px'}}>
                    <input 
                        type="text" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask about ZMP, sensors, or safety..."
                        className="button button--outline button--secondary button--block"
                        style={{flex: 1, textAlign: 'left', cursor: 'text'}} 
                    />
                    <button type="submit" className="button button--primary" disabled={loading}>
                        {loading ? 'Loading Index...' : 'Ask'}
                    </button>
                </form>
            </div>
        </div>

        {results.length > 0 && (
            <div className="margin-top--lg">
                <h3>Grounded Answer</h3>
                <div className="alert alert--info margin-bottom--md">
                    <p>Based on <strong>{results.length}</strong> retrieved passages:</p>
                </div>
                
                {results.map((hit, i) => (
                    <div key={i} className="card margin-bottom--md">
                        <div className="card__header">
                            <h4>{hit.title} &rnaarr; {hit.section}</h4>
                        </div>
                        <div className="card__body">
                            <p>{hit.text}</p>
                        </div>
                        <div className="card__footer">
                            <a href={hit.url} className="button button--sm button--link">Read full chapter</a>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {results.length === 0 && query && !loading && (
             <div className="margin-top--lg text--center">
                <p>No direct matches found in the textbook. Try "kinematics", "ros 2", or "ethics".</p>
             </div>
        )}

        <div className="text--center margin-top--xl">
            <button onClick={shareOnWhatsApp} className="button button--success button--lg">
                 Share on WhatsApp 📱
            </button>
        </div>
      </div>
    </Layout>
  );
}
