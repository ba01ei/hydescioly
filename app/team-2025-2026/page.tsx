import PageLayout from "../components/PageLayout";
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

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Dynamic Planet</div>
                <div className={styles.eventResult}>12th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>13th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>13th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>14th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>16th</div>
                <div className={styles.eventTeam}>
                  ⚪ <strong>Group 1</strong> White
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>17th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>18th</div>
                <div className={styles.eventTeam}>
                  🟢 <strong>Group 4</strong> Green
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>23rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Disease Detectives</div>
                <div className={styles.eventResult}>26th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Rocks and Minerals</div>
                <div className={styles.eventResult}>26th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>28th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 6</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>29th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 4</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Meteorology</div>
                <div className={styles.eventResult}>30th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
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

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>8th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>10th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Write It Do It</div>
                <div className={styles.eventResult}>16th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 6</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Machines</div>
                <div className={styles.eventResult}>18th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 2</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>19th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>23rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Brainrot</div>
                <div className={styles.eventResult}>24th</div>
                <div className={styles.eventTeam}>🔵 Blue</div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>26th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Dynamic Planet</div>
                <div className={styles.eventResult}>25th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>27th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 6</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Heredity</div>
                <div className={styles.eventResult}>27th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>30th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Experimental Design</div>
                <div className={styles.eventResult}>30th</div>
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

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Dynamic Planet</div>
                <div className={styles.eventResult}>12th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Codebusters</div>
                <div className={styles.eventResult}>13th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 1</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>13th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 4</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>14th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Scrambler</div>
                <div className={styles.eventResult}>16th</div>
                <div className={styles.eventTeam}>
                  ⚪ <strong>Group 1</strong> White
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Potions and Poisons</div>
                <div className={styles.eventResult}>17th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 7</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Mission Possible</div>
                <div className={styles.eventResult}>18th</div>
                <div className={styles.eventTeam}>
                  🟢 <strong>Group 4</strong> Green
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>23rd</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Disease Detectives</div>
                <div className={styles.eventResult}>26th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 6</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Rocks and Minerals</div>
                <div className={styles.eventResult}>26th</div>
                <div className={styles.eventTeam}>
                  🟡 <strong>Group 5</strong> Gold
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Boomilever</div>
                <div className={styles.eventResult}>28th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 6</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Crime Busters</div>
                <div className={styles.eventResult}>29th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 4</strong> Blue
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.eventName}>Meteorology</div>
                <div className={styles.eventResult}>30th</div>
                <div className={styles.eventTeam}>
                  🔵 <strong>Group 1</strong> Blue
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
          <h3>🎉 Welcome to the 2025-2026 Season!</h3>
          <p>
            We&apos;re excited to embark on another incredible Science Olympiad
            journey together. Through dedication, teamwork, and a passion for
            science, we&apos;ll achieve great things this year. Good luck to all
            team members!
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
