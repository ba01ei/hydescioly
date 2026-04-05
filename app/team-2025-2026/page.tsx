import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "2025-2026 Team",
  description:
    "Hyde Science Olympiad 2025-2026 season results. 5th place at NorCal State with record-breaking 13 medals, 4th place school ranking at Santa Clara County Regionals. Team roster and competition history.",
  alternates: { canonical: "https://scioly.hydeptsa.org/team-2025-2026" },
};
import styles from "./page.module.css";

export default function Team2025_2026() {
  const roster = [
    { firstName: "Aadya", lastName: "Janesh" },
    { firstName: "Aarav", lastName: "Narula" },
    { firstName: "Abhinav", lastName: "Hebbar" },
    { firstName: "Anish", lastName: "Dhariya" },
    { firstName: "Anya", lastName: "Mulchandani" },
    { firstName: "Eddie", lastName: "Yang" },
    { firstName: "Ekansh", lastName: "Agrawal" },
    { firstName: "Hanna", lastName: "Lei" },
    { firstName: "Leah", lastName: "Han" },
    { firstName: "Skylar", lastName: "Qian" },
    { firstName: "Smyan", lastName: "Shetty" },
    { firstName: "Yashika", lastName: "Boddu" },
    { firstName: "Brandon", lastName: "Chen" },
    { firstName: "Daiwik", lastName: "Dinkesh" },
    { firstName: "Dylan", lastName: "Cheng" },
    { firstName: "Jeremy", lastName: "Shi" },
    { firstName: "Luke", lastName: "Wang" },
    { firstName: "Navnidh", lastName: "Arora" },
    { firstName: "Vihaan", lastName: "Panchal" },
    { firstName: "Vikram", lastName: "Mukund" },
    { firstName: "Ahan", lastName: "Arun" },
    { firstName: "Ethan", lastName: "Dai" },
    { firstName: "Felicia", lastName: "Lin" },
    { firstName: "Gagan", lastName: "Albin" },
    { firstName: "Hansika", lastName: "Ram" },
    { firstName: "Maitreyee", lastName: "Paturkar" },
    { firstName: "Neil", lastName: "Katiyar" },
    { firstName: "Ryan", lastName: "Budhiraja" },
    { firstName: "Aaradhy", lastName: "Singhvi" },
    { firstName: "Achal", lastName: "Gupta" },
    { firstName: "Anaya", lastName: "Goteti" },
    { firstName: "Arjun", lastName: "Krishna" },
    { firstName: "Mahathi", lastName: "Bharathwaj" },
    { firstName: "Mootsen", lastName: "Hsieh" },
    { firstName: "Ryan", lastName: "Gao" },
    { firstName: "Vincy", lastName: "Shao" },
    { firstName: "Anika", lastName: "Chidambaram" },
    { firstName: "Arjun", lastName: "Amara" },
    { firstName: "Hongyi", lastName: "Xiao" },
    { firstName: "Joshua", lastName: "Chin" },
    { firstName: "Kaustav", lastName: "Grandhi" },
    { firstName: "Louis", lastName: "Young" },
    { firstName: "Subramani", lastName: "Palanissamy" },
    { firstName: "Vibha", lastName: "Geethakrishnan" },
    { firstName: "Anwesha", lastName: "Kuber" },
    { firstName: "Daniel", lastName: "Chin" },
    { firstName: "Darren", lastName: "Park" },
    { firstName: "Dilan", lastName: "Somani" },
    { firstName: "Nirvi", lastName: "Thota" },
    { firstName: "Saanvi", lastName: "Gottimukkula" },
    { firstName: "Sara", lastName: "Biyani" },
    { firstName: "Vivienne", lastName: "Bruennert" },
    { firstName: "Ankur", lastName: "Dubey" },
    { firstName: "Ashmit", lastName: "Senapati" },
    { firstName: "Bhaavik Shreehith", lastName: "Morumpalle" },
    { firstName: "Harish", lastName: "Ram" },
    { firstName: "Jayden", lastName: "Kwon" },
    { firstName: "Pawan Kumar Thangasamy", lastName: "Suresh Kumar" },
    { firstName: "Riana", lastName: "Sahil" },
    { firstName: "Swastika", lastName: "Shukla" },
  ];

  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>2025-2026 Team</h1>
      <p className={styles.pageSubtitle}>
        Second time State qualifier with a record-breaking 13 medals at NorCal State!
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Season Highlights</h2>
        <div className={styles.highlightsGrid}>
          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>5th</div>
            <div className={styles.highlightLabel}>NorCal State</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>4th</div>
            <div className={styles.highlightLabel}>Regional School Ranking</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>13</div>
            <div className={styles.highlightLabel}>State Medals (New Record)</div>
          </div>

          <div className={`${styles.highlightCard} glass`}>
            <div className={styles.highlightNumber}>15</div>
            <div className={styles.highlightLabel}>Regional Medals</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              NorCal State Tournament - April 2026
            </h2>
            <a
              href="https://www.duosmium.org/results/2026-04-04_nCA_states_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.recordCallout}>
            <div className={styles.recordTitle}>🏆 New Record: 13 medals in State competition</div>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde (B01)</div>
              <div className={styles.teamPlace}>5th</div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>Teams</div>
              <div className={styles.teamPlace}>32</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Medal-Winning Events (Top 6)</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Group</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Anatomy and Physiology</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}><strong>Group 2</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Circuit Lab</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}><strong>Group 5</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Dynamic Planet</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}><strong>Group 7</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}><strong>Group 7</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Machines</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}><strong>Group 2</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>🏅 4th</div>
                <div className={styles.eventTeam}><strong>Group 1</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>🏅 4th</div>
                <div className={styles.eventTeam}><strong>Group 1</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Metric Mastery</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}><strong>Group 7</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Remote Sensing</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}><strong>Group 2</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Solar System</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}><strong>Group 7</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Water Quality</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}><strong>Group 3</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}><strong>Group 6</strong></div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Code Craze</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>Trial Event</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Santa Clara County Regional - March 2026
            </h2>
            <a
              href="https://scilympiad.com/santa-clara-so/Info/Results/0b4bff75-2c1c-474c-8509-8addf5ad5ab8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.stateAdvance}>
            <div className={styles.stateAdvanceTitle}>
              🎉 Hyde Advances to NorCal State Tournament!
            </div>
            <ul className={styles.stateAdvanceList}>
              <li>2nd time qualifying for State in Hyde history</li>
              <li>1st time Hyde Gold earned 10+ medals at Regionals</li>
              <li>1st time Hyde White earned multiple medals at Regionals</li>
            </ul>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🏫 Overall School</div>
              <div className={styles.teamPlace}>4th</div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>5th</div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>11th</div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>15th</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Medal-Winning Events (Top 6)</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>🥇 1st</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 1</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 7</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Circuit Lab</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 5</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 1</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>🔵 <strong>Group 4</strong> Blue</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>🔵 <strong>Group 1</strong> Blue</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Remote Sensing</div>
                <div className={styles.eventResult}>🏅 4th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 2</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Helicopter</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 5</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Solar System</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 7</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 6</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 6</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>⚪ <strong>Group 1</strong> White</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Heredity</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>🟡 <strong>Group 4</strong> Gold</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Hovercraft</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>⚪ <strong>Group 3</strong> White</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>🔵 <strong>Group 6</strong> Blue</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Berkeley Invitational - February 2026
            </h2>
            <a
              href="https://www.duosmium.org/results/2026-02-28_berkeley_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>10th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>15th</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Circuit Lab</div>
                <div className={styles.eventResult}>🥇 1st</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>🥇 1st</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 6</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Machines</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 2</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>🏅 4th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Dynamic Planet</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Heredity</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Helicopter</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Jordan Invitational (Remote) - February 2026
            </h2>
            <a
              href="https://www.duosmium.org/results/2026-02-14_jordan_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>7th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>21st</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>44th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟢 Hyde Green</div>
              <div className={styles.teamPlace}>63rd</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟢 <strong>Group 4</strong> Green
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              California Invitational - January 2026
            </h2>
            <a
              href="https://www.duosmium.org/results/2026-01-20_official_california_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>20th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>32nd</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>56th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟢 Hyde Green</div>
              <div className={styles.teamPlace}>62nd</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Hovercraft</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 3</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Metric Mastery</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Boyceville Satellite Invitational - December 2025
            </h2>
            <a
              href="https://www.duosmium.org/results/2025-12-01_boyceville_satellite_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>13th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>69th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>72nd</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟢 Hyde Green</div>
              <div className={styles.teamPlace}>96th</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Circuit Lab</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Monta Vista Invitational - November 2025
            </h2>
            <a
              href="https://www.duosmium.org/results/2025-11-14_monta_vista_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>🥉 3rd</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>14th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>19th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟢 Hyde Green</div>
              <div className={styles.teamPlace}>24th</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>🥈 2nd</div>
                <div className={styles.eventTeam}>
                  🟢 <strong>Group 6</strong> Green
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>🥉 3rd</div>
                <div className={styles.eventTeam}>
                  ⚪ <strong>Group 6</strong> White
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 4</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>5th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Meteorology</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Remote Sensing</div>
                <div className={styles.eventResult}>6th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 2</strong> Gold
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.competitionResults} glass`}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.competitionTitle}>
              Rickards Invitational - November 2025
            </h2>
            <a
              href="https://www.duosmium.org/results/2025-11-01_rickards_invitational_b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              View Official Results →
            </a>
          </div>

          <div className={styles.teamsGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟡 Hyde Gold</div>
              <div className={styles.teamPlace}>27th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🔵 Hyde Blue</div>
              <div className={styles.teamPlace}>47th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>⚪ Hyde White</div>
              <div className={styles.teamPlace}>87th</div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamName}>🟢 Hyde Green</div>
              <div className={styles.teamPlace}>103rd</div>
            </div>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Event Highlights</h3>
            <div className={styles.eventsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.eventName}>Event</div>
                <div className={styles.eventResult}>Rank</div>
                <div className={styles.eventTeam}>Team</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Circuit Lab</div>
                <div className={styles.eventResult}>🥇 1st</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.rosterCard} glass`}>
          <h2 className={styles.sectionTitle}>Team Roster</h2>
          <p className={styles.totalCount}>{roster.length} Team Members</p>

          <div className={styles.rosterGrid}>
            {roster.map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <div className={styles.memberInitial}>
                  {member.firstName.charAt(0)}
                </div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberName}>
                    {member.firstName} {member.lastName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.statsCard} glass`}>
          <h2 className={styles.sectionTitle}>Season Information</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>60</div>
              <div className={styles.statLabel}>Team Members</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>Groups</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>23</div>
              <div className={styles.statLabel}>Events</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Teams</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.welcomeBox} glass`}>
          <h3>🎉 An Outstanding Season!</h3>
          <p>
            The 2025-2026 season was one for the record books! We placed 5th at
            NorCal State with a record-breaking 13 medals, earned 4th place
            school ranking at Regionals with 15 medals, and qualified for State
            for only the 2nd time in Hyde history. Congratulations to every team
            member for their dedication and hard work!
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Archive</h2>
        <div className={styles.archiveGrid}>
          <Link href="/team-2025-2026/norcal-state" className={`${styles.archiveCard} glass`}>
            <div className={styles.archiveIcon}>🏅</div>
            <div className={styles.archiveLabel}>NorCal State</div>
          </Link>
          <Link href="/team-2025-2026/santa-clara-regional" className={`${styles.archiveCard} glass`}>
            <div className={styles.archiveIcon}>🏆</div>
            <div className={styles.archiveLabel}>Santa Clara Regional</div>
          </Link>
          <Link href="/team-2025-2026/berkeley-invitational" className={`${styles.archiveCard} glass`}>
            <div className={styles.archiveIcon}>🏛️</div>
            <div className={styles.archiveLabel}>Berkeley Invitational</div>
          </Link>
          <Link href="/team-2025-2026/instructions" className={`${styles.archiveCard} glass`}>
            <div className={styles.archiveIcon}>📋</div>
            <div className={styles.archiveLabel}>Instructions</div>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
