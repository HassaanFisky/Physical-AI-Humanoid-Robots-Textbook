import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import SnowButton from "../components/ui/SnowButton";

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
              to="/docs/intro"
            >
              Start Learning →
            </Link>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.secondaryBtn
              )}
              to="/docs/examples"
            >
              View Examples
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
        {/* Hero Illustration */}
        <div className={styles.heroImage}>
          <img
            src="/img/undraw_docusaurus_react.svg"
            alt="AI Robotics Illustration"
            className={styles.heroIllustration}
          />
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, image, icon }) {
  return (
    <div className={styles.featureCard}>
      {image && (
        <div className={styles.featureImage}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.featureContent}>
        {icon && <div className={styles.featureIcon}>{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: "Comprehensive Chapters",
      description:
        "Five in-depth chapters covering fundamentals, architecture, implementation, real-world case studies, and essential resources for robotics development.",
      image: "/img/undraw_docusaurus_tree.svg",
    },
    {
      title: "Runnable Examples",
      description:
        "Every chapter includes working Node.js code examples you can run immediately. Learn by doing with practical implementations.",
      image: "/img/undraw_docusaurus_mountain.svg",
    },
    {
      title: "AI-Powered Assistant",
      description:
        "Get instant answers from our OpenRouter-powered textbook assistant. Ask questions and receive source-cited responses from the content.",
      image: "/img/undraw_docusaurus_react.svg",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Everything You Need to{" "}
            <span className={styles.gradientText}>Master Robotics</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From foundational concepts to advanced implementations, this
            textbook provides a complete learning path.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterPreview() {
  const chapters = [
    { num: "01", title: "Introduction", desc: "Foundation & Overview" },
    { num: "02", title: "Core Concepts", desc: "Architecture & Systems" },
    { num: "03", title: "How-To Guides", desc: "Practical Implementation" },
    { num: "04", title: "Case Studies", desc: "Real-World Examples" },
    { num: "05", title: "Resources", desc: "Tools & References" },
  ];

  return (
    <section className={styles.chaptersSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.gradientText}>Explore</span> All Chapters
        </h2>
        <div className={styles.chaptersGrid}>
          {chapters.map((ch, idx) => (
            <Link
              key={idx}
              to={`/docs/${ch.title.toLowerCase().replace(" ", "-")}`}
              className={styles.chapterCard}
            >
              <span className={styles.chapterNum}>{ch.num}</span>
              <div>
                <h4>{ch.title}</h4>
                <p>{ch.desc}</p>
              </div>
            </Link>
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
        <ChapterPreview />
      </main>
      <SnowButton />
    </Layout>
  );
}
