import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function Team() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>2024-2025 Team</h1>
      <p className={styles.pageSubtitle}>
        Our achievements and competition results for the 2024-2025 season
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          2025 Santa Clara Regional Results
        </h2>
        <div className={`${styles.resultsHighlight} glass`}>
          <div className={styles.highlightContent}>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>🏅</div>
              <div className={styles.achievementText}>
                <div className={styles.achievementLabel}>
                  Strong Regional Performance
                </div>
                <div className={styles.achievementDesc}>5th Place Overall</div>
              </div>
            </div>
          </div>
          <a
            href="https://scilympiad.com/santa-clara-so/Info/Results/0b4bff75-2c1c-474c-8509-8addf5ad5ab8"
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
            <div className={styles.teamPlace}>6th Place</div>
            <p className={styles.teamDesc}>
              Outstanding performance with multiple medals
            </p>
          </div>

          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>🔵 Hyde Blue</h3>
            <div className={styles.teamPlace}>10th Place</div>
            <p className={styles.teamDesc}>
              Strong showing with medal placements
            </p>
          </div>

          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>⚪ Hyde White</h3>
            <div className={styles.teamPlace}>12th Place</div>
            <p className={styles.teamDesc}>
              Solid performance and valuable experience
            </p>
          </div>

          <div className={`${styles.teamCard} glass`}>
            <h3 className={styles.teamName}>🏫 Overall School</h3>
            <div className={styles.teamPlace}>5th Place</div>
            <p className={styles.teamDesc}>
              Combined team effort and achievement
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Medal-Winning Events</h2>
        <div className={`${styles.eventsTable} glass`}>
          <div className={styles.tableHeader}>
            <div className={styles.eventName}>Event</div>
            <div className={styles.eventResult}>Placement</div>
            <div className={styles.eventTeam}>Team</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Crime Busters</div>
            <div className={styles.eventResult}>🥈 2nd</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Disease Detectives</div>
            <div className={styles.eventResult}>🥈 2nd</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Fossils</div>
            <div className={styles.eventResult}>🥈 2nd</div>
            <div className={styles.eventTeam}>🔵 Hyde Blue</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Write It Do It</div>
            <div className={styles.eventResult}>🥈 2nd</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Codebusters</div>
            <div className={styles.eventResult}>🥉 3rd</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Reach for the Stars</div>
            <div className={styles.eventResult}>🥉 3rd</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Codebusters</div>
            <div className={styles.eventResult}>4th</div>
            <div className={styles.eventTeam}>🔵 Hyde Blue</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Disease Detectives</div>
            <div className={styles.eventResult}>4th</div>
            <div className={styles.eventTeam}>🔵 Hyde Blue</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Scrambler</div>
            <div className={styles.eventResult}>4th</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Microbe Mission</div>
            <div className={styles.eventResult}>5th</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Mission Impossible</div>
            <div className={styles.eventResult}>5th</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.eventName}>Potions and Poisons</div>
            <div className={styles.eventResult}>6th</div>
            <div className={styles.eventTeam}>🟡 Hyde Gold</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Invitational Results</h2>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>STEMBoost Invitational</h3>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 20</span>
              <span className={styles.teamResult}>🔵 Blue: 23</span>
              <span className={styles.teamResult}>⚪ White: 33</span>
              <span className={styles.teamResult}>🟢 Green: 35</span>
            </div>
            <a
              href="https://scilympiad.com/stemboost/Info/Results/8eed6449-c329-4d53-b0ff-de341462f8c9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailsLink}
            >
              View Details →
            </a>
          </div>
        </div>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>Apollo Invitational</h3>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 4</span>
              <span className={styles.teamResult}>🔵 Blue: 8</span>
              <span className={styles.teamResult}>⚪ White: 9</span>
              <span className={styles.teamResult}>🟢 Green: 12</span>
            </div>
            <a
              href="https://www.scilympiad.com/apollo/Info/Results/83849328-0a40-4481-8d81-bf5161cd0fee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailsLink}
            >
              View Details →
            </a>
          </div>
        </div>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>Kennedy Invitational</h3>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 14</span>
              <span className={styles.teamResult}>🔵 Blue: 24</span>
              <span className={styles.teamResult}>⚪ White: 44</span>
              <span className={styles.teamResult}>🟢 Green: 32</span>
            </div>
            <div className={styles.miniMedals}>
              <div className={styles.miniMedal}>
                Road Scholar - 🟡 Gold - 6th
              </div>
              <div className={styles.miniMedal}>
                Potions and Poisons - 🔵 Blue - 4th
              </div>
              <div className={styles.miniMedal}>
                Code Busters - 🟡 Gold - 5th
              </div>
            </div>
            <a
              href="https://www.duosmium.org/results/2025-01-25_kennedy_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailsLink}
            >
              View Details →
            </a>
          </div>
        </div>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>Mira Loma Invitational</h3>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 12</span>
              <span className={styles.teamResult}>🔵 Blue: 14</span>
            </div>
            <div className={styles.miniMedals}>
              <div className={styles.miniMedal}>
                Crime Busters - 🟡 Gold - 🥈 2nd
              </div>
              <div className={styles.miniMedal}>
                Code Busters - 🟡 Gold - 🥈 2nd
              </div>
              <div className={styles.miniMedal}>
                Code Busters - 🔵 Blue - 🥉 3rd
              </div>
              <div className={styles.miniMedal}>
                Road Scholar - 🟡 Gold - 4th
              </div>
            </div>
          </div>
        </div>

        <div className={styles.invitationalCard}>
          <div className={`${styles.invitational} glass`}>
            <h3 className={styles.invitationalName}>Rickards Invitational</h3>
            <div className={styles.teamResults}>
              <span className={styles.teamResult}>🟡 Gold: 63</span>
              <span className={styles.teamResult}>🔵 Blue: 88</span>
              <span className={styles.teamResult}>⚪ White: 98</span>
              <span className={styles.teamResult}>🟢 Green: 130</span>
            </div>
            <a
              href="https://scilympiad.com/rickards/Info/Results/5b812c0d-fc3d-498c-8a3e-be807a2e4c1e"
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
        <h2 className={styles.sectionTitle}>Season Highlights</h2>
        <div className={`${styles.highlightsGrid}`}>
          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>4</div>
            <div className={styles.highlightLabel}>Teams Participated</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>12</div>
            <div className={styles.highlightLabel}>Regional Medals</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>5</div>
            <div className={styles.highlightLabel}>Invitationals</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>5th</div>
            <div className={styles.highlightLabel}>Regional Ranking</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.congratsBox} glass`}>
          <h3>🎉 Congratulations to all team members!</h3>
          <p>
            Your hard work, dedication, and collaborative spirit made this
            season a tremendous success. Thank you to all coaches, parents, and
            supporters who made it possible.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
