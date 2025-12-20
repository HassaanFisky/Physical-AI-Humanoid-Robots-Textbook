import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import SnowButton from "../components/ui/SnowButton";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const shareOnWhatsApp = () => {
    // Dynamic origin
    const url =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://physical-ai-textbook.vercel.app";
    const text = `Physical AI & Humanoid Robotics Textbook + Grounded Chatbot (Hackathon). Live demo: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            <span>GIAIC Hackathon 2025</span>
          </div>
          <h1 className={styles.heroTitle}>
            Physical AI &<br />
            <span className={styles.gradientText}>Humanoid Robotics</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive textbook bridging artificial intelligence with
            physical embodiment. 5 Modules. 15 Chapters. Zero-Key Chatbot.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/module-01-foundations/what-is-physical-ai"
            >
              Dive into Module 1 →
            </Link>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.secondaryBtn
              )}
              to="/chat"
            >
              Chat with Book 🤖
            </Link>
          </div>

          <div className="margin-top--md">
            <button
              onClick={shareOnWhatsApp}
              className="button button--success"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Share on WhatsApp</span>
              <span style={{ fontSize: "1.2em" }}>📱</span>
            </button>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Modules</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Chapters</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Offline AI</span>
            </div>
          </div>
        </div>
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

function HomepageFeatures() {
  const features = [
    {
      title: "Foundations First",
      description:
        "From Perception-Actuation loops to Kalman Filters and Sim-to-Real gaps. Build the math before the code.",
      image: "/img/undraw_docusaurus_mountain.svg",
    },
    {
      title: "Hardware & Control",
      description:
        "Understand kinematics, dynamics, actuation, and the full ROS 2 control stack for humanoids.",
      image: "/img/undraw_docusaurus_tree.svg",
    },
    {
      title: "Zero-Key Grounded Chat",
      description:
        "Ask questions and get answers based ONLY on this textbook. No API keys, no hallucinations, fully local.",
      image: "/img/undraw_docusaurus_react.svg",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulePreview() {
  const modules = [
    {
      title: "Module 1: Foundations",
      link: "/docs/module-01-foundations/what-is-physical-ai",
      desc: "Sensors, Filters, Sim-to-Real",
    },
    {
      title: "Module 2: Hardware",
      link: "/docs/module-02-hardware/kinematics-dynamics",
      desc: "Walking, Balance, Actuators",
    },
    {
      title: "Module 3: Software",
      link: "/docs/module-03-software/ros2-concepts",
      desc: "ROS 2, Control Stack, Perception",
    },
    {
      title: "Module 4: Deployment",
      link: "/docs/module-04-deployment/digital-twins",
      desc: "Safety, Ethics, Benchmarks",
    },
  ];

  return (
    <section className={styles.chaptersSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Course Modules</h2>
        <div className={styles.chaptersGrid}>
          {modules.map((m, idx) => (
            <Link key={idx} to={m.link} className={styles.chapterCard}>
              <span className={styles.chapterNum}>M{idx + 1}</span>
              <div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Textbook of Physical AI"
      description="The definitive guide to Physical AI and Humanoid Robotics"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ModulePreview />
      </main>
      <SnowButton />
    </Layout>
  );
}
