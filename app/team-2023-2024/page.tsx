import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function Team20232024() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>2023-2024 Team</h1>
      <p className={styles.pageSubtitle}>
        A historic season - our first time qualifying for the Northern
        California State Tournament!
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Season Highlights</h2>
        <div className={`${styles.highlightsGrid}`}>
          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightIcon}>🏆</div>
            <div className={styles.highlightNumber}>5th</div>
            <div className={styles.highlightLabel}>State Tournament</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightIcon}>🥉</div>
            <div className={styles.highlightNumber}>3rd</div>
            <div className={styles.highlightLabel}>Regional Ranking</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightIcon}>🌟</div>
            <div className={styles.highlightNumber}>1st</div>
            <div className={styles.highlightLabel}>Time at State</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightIcon}>🎯</div>
            <div className={styles.highlightNumber}>3</div>
            <div className={styles.highlightLabel}>Competition Teams</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Northern California State Tournament
        </h2>
        <div className={`${styles.stateHighlight} glass`}>
          <div className={styles.stateContent}>
            <div className={styles.stateBadge}>🏆 Historic Achievement</div>
            <h3 className={styles.stateTitle}>5th Place at State</h3>
            <p className={styles.stateDesc}>
              The first and only year in Hyde Science Olympiad history that we
              qualified for and competed at the Northern California State
              Tournament!
            </p>
            <div className={styles.stateDetails}>
              <div className={styles.stateDetail}>
                <span className={styles.stateLabel}>Date:</span>
                <span className={styles.stateValue}>April 6, 2024</span>
              </div>
              <div className={styles.stateDetail}>
                <span className={styles.stateLabel}>Location:</span>
                <span className={styles.stateValue}>
                  California State University, East Bay
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://www.duosmium.org/results/2024-04-06_nCA_states_b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resultsButton}
          >
            View Official State Results →
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Santa Clara County Regional Results
        </h2>
        <div className={`${styles.resultsHighlight} glass`}>
          <div className={styles.regionalAchievement}>
            <div className={styles.achievementIcon}>🥉</div>
            <div className={styles.achievementText}>
              <div className={styles.achievementLabel}>
                Outstanding Regional Performance
              </div>
              <div className={styles.achievementDesc}>3rd Place Overall</div>
            </div>
          </div>
          <a
            href="https://www.duosmium.org/results/2024-03-16_CA_scc_regional_b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resultsLink}
          >
            View Official Results →
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Team Performance</h2>
        <div className={styles.teamsGrid}>
          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>🟡 Hyde Gold</h3>
            <div className={styles.teamPlace}>4th Place</div>
            <p className={styles.teamDesc}>
              Exceptional performance at regionals
            </p>
          </div>

          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>🔵 Hyde Blue</h3>
            <div className={styles.teamPlace}>10th Place</div>
            <p className={styles.teamDesc}>Strong showing across all events</p>
          </div>

          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>⚪ Hyde White</h3>
            <div className={styles.teamPlace}>12th Place</div>
            <p className={styles.teamDesc}>Solid performance and growth</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Invitational Results</h2>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>
              2024 Kennedy Invitational
            </h3>
            <div className={styles.invitationalDate}>February 10, 2024</div>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 10th</span>
              <span className={styles.teamResult}>🔵 Blue: 16th</span>
              <span className={styles.teamResult}>⚪ White: 19th</span>
            </div>
            <a
              href="https://www.duosmium.org/results/2024-02-10_kennedy_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailsLink}
            >
              View Details →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.congratsBox} glass`}>
          <h3>🎉 A Historic Season!</h3>
          <p>
            The 2023-2024 season marked a milestone achievement for Hyde Science
            Olympiad. Our qualification and strong performance at the State
            Tournament demonstrated the dedication, hard work, and collaborative
            spirit of our entire team. Thank you to all students, coaches,
            parents, and supporters who made this historic season possible!
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
