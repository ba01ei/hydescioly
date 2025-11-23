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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2024-2025 Team Roster</h2>
        <div className={`${styles.rosterCard} glass`}>
          <p className={styles.totalCount}>70 Team Members</p>
          <div className={styles.rosterGrid}>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Agriya Dutta</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Daiwik Dinkesh</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>K</div>
              <div className={styles.memberName}>Kelly Bi</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Mishika Desai</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>N</div>
              <div className={styles.memberName}>Nikit Sai Annapureddy</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>R</div>
              <div className={styles.memberName}>Rihana Shaik</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Shlok Zambare</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Diya Malhotra</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Samanyu Virupaksha</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Sarthak Gupta</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Aarav Narula</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Anya Mulchandani</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Sameehan Vaidya</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Aaditya Agrawal</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Anish Dhariya</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>H</div>
              <div className={styles.memberName}>Hanna Lei</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Sakina Mohamed Meeran</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Avinash Mehta</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Dhruv Uppuluri</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>R</div>
              <div className={styles.memberName}>Rithvik Rajendran</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>V</div>
              <div className={styles.memberName}>Vivian Yuan</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>H</div>
              <div className={styles.memberName}>Hansika Ram</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>N</div>
              <div className={styles.memberName}>Nirvi Thota</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>V</div>
              <div className={styles.memberName}>Vihaan Panchal</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Maitreyee Paturkar</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Miraya Vardhan</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>V</div>
              <div className={styles.memberName}>Vedant Agrawal</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>B</div>
              <div className={styles.memberName}>Baidehi Das</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Daniel (Hajun) Cho</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Anaya Goteti</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Mahathi Bharathwaj</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>J</div>
              <div className={styles.memberName}>Jaydon Ranatunga</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Mootsen Hsieh</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>E</div>
              <div className={styles.memberName}>Ethan Lee</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>H</div>
              <div className={styles.memberName}>Hanrui Shou</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>
                Srivathsa Chakkaravarthy Rajaji Ramgopal
              </div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Andre (AJ) Azar</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>J</div>
              <div className={styles.memberName}>Jessica Li</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Arjun Amara</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>B</div>
              <div className={styles.memberName}>Brandon Chen</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>L</div>
              <div className={styles.memberName}>Louis Young</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Saanvi Gottimukkula</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Sarah Anna Mathew</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Ariv Pasad</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Subramani Palanissamy</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Aaryan Varshney</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>P</div>
              <div className={styles.memberName}>Pritika Dangui</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>David Hyun</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Sara Biyani</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Daniel Chin</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Dheethya Srivathsan</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Dilan Somani</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Suha Lee</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Allison Kim</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>R</div>
              <div className={styles.memberName}>Ryan Kim</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>J</div>
              <div className={styles.memberName}>Jayden Bae</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>D</div>
              <div className={styles.memberName}>Dhruvan Singireddy</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Swastika Shukla</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Ankur Dubey</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>J</div>
              <div className={styles.memberName}>Jyothis Jayaraj</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>K</div>
              <div className={styles.memberName}>Kadhir Sanganathan</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>L</div>
              <div className={styles.memberName}>Laura Bruennert</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>M</div>
              <div className={styles.memberName}>Mihir Bhatt</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>P</div>
              <div className={styles.memberName}>Paarth Sharma</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>S</div>
              <div className={styles.memberName}>Siddharth Rajesh</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>A</div>
              <div className={styles.memberName}>Arjun Krishna</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>R</div>
              <div className={styles.memberName}>Riana Sahil</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>V</div>
              <div className={styles.memberName}>Vivienne Bruennert</div>
            </div>
            <div className={styles.memberCard}>
              <div className={styles.memberInitial}>V</div>
              <div className={styles.memberName}>Vikas Golla</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
