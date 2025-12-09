import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            <span>GIAIC Hackathon 2024</span>
          </div>
          <h1 className={styles.heroTitle}>
            Physical AI &<br />
            <span className={styles.gradientText}>Humanoid Robotics</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive textbook bridging artificial intelligence with
            physical embodiment. Learn to build intelligent machines that
            interact with the real world.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/01-intro"
            >
              Start Learning →
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Chapters</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Examples</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>AI</span>
              <span className={styles.statLabel}>Powered</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: "Comprehensive Chapters",
      description:
        "Five in-depth chapters covering fundamentals, architecture, implementation, case studies, and resources.",
      icon: "📚",
    },
    {
      title: "Runnable Examples",
      description:
        "Every chapter includes working Node.js code examples you can run immediately.",
      icon: "💻",
    },
    {
      title: "AI Assistant",
      description:
        "Get instant answers from our OpenRouter-powered textbook assistant with source citations.",
      icon: "🤖",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="Physical AI & Humanoid Robotics - A comprehensive educational textbook"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
