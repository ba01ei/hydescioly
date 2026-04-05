import PageLayout from "./components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.teamPhotoSection}>
        <div className={`${styles.teamPhoto} glass`}>
          <Image
            src="/2026team.jpg"
            alt="Hyde Science Olympiad Team 2025-2026"
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
          Building tomorrow&apos;s scientists through collaborative learning and
          competitive excellence
        </p>
      </div>

      <div className={styles.cards}>
        <Link href="/resources" className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>📚</div>
          <h2 className={styles.cardTitle}>Resources</h2>
          <p className={styles.cardDesc}>
            Access study materials, practice tests, and helpful links for all
            events
          </p>
        </Link>

        <Link href="/team-2025-2026" className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>🏆</div>
          <h2 className={styles.cardTitle}>2025-2026 Team</h2>
          <p className={styles.cardDesc}>
            View our team members, competition results, and achievements
          </p>
        </Link>

        <a href="mailto:hsoteams@gmail.com" className={`${styles.card} glass`}>
          <div className={styles.cardIcon}>👋</div>
          <h2 className={styles.cardTitle}>Interested in joining?</h2>
          <p className={styles.cardDesc}>
            If you are a Hyde Middle School family interested in joining the
            team, please get in touch with us in the Hyde Parents group chat,
            or email hsoteams@gmail.com
          </p>
        </a>
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
