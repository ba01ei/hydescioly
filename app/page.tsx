import PageLayout from "./components/PageLayout";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.teamPhotoSection}>
        <div className={`${styles.teamPhoto} glass`}>
          <Image
            src="/2025team.jpg"
            alt="Hyde Science Olympiad Team 2024-2025"
            width={1200}
            height={800}
            className={styles.teamImage}
            priority
          />
        </div>
      </div>

      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to Hyde Science Olympiad</h1>
        <p className={styles.subtitle}>
          Building tomorrow's scientists through collaborative learning and
          competitive excellence
        </p>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>📋</div>
          <h2 className={styles.cardTitle}>Instructions</h2>
          <p className={styles.cardDesc}>
            Find guidelines, event assignments, team structure, and season
            timeline
          </p>
        </div>

        <div className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>📚</div>
          <h2 className={styles.cardTitle}>Resources</h2>
          <p className={styles.cardDesc}>
            Access study materials, practice tests, and helpful links for all
            events
          </p>
        </div>

        <div className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>🏆</div>
          <h2 className={styles.cardTitle}>2024-2025 Team</h2>
          <p className={styles.cardDesc}>
            View our team members, competition results, and achievements
          </p>
        </div>
      </div>

      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Our Team</h2>
        <div className={`${styles.aboutContent} glass`}>
          <p>
            Hyde Science Olympiad represents Hyde Middle School in Cupertino,
            California. We are a competitive academic team dedicated to
            excellence in science, technology, engineering, and mathematics. Our
            students participate in 23 diverse events spanning topics from
            anatomy to astronomy, from forensics to physics.
          </p>
          <p>
            Through weekly practices, collaborative learning, and competition
            experience, our team members develop critical thinking,
            problem-solving, and teamwork skills that extend far beyond the
            classroom.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
