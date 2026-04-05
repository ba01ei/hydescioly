import PageLayout from "../../components/PageLayout";
import styles from "./page.module.css";

export default function SantaClaraRegional() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Santa Clara County Regional 2026</h1>

      <section className={styles.section}>
        <h2 id="results" className={styles.sectionTitle}>
          <a href="#results" className={styles.anchorLink}>Results<span className={styles.anchorIcon}>#</span></a>
        </h2>
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

        <div className={`${styles.resultsHighlight} glass`}>
          <div className={styles.achievementBadge}>🏆 4th Place School Ranking</div>
          <div className={styles.achievementTitle}>45 teams competed</div>
          <a
            href="https://scilympiad.com/santa-clara-so/Info/Results/0b4bff75-2c1c-474c-8509-8addf5ad5ab8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resultsLink}
          >
            View Official Results →
          </a>
        </div>

        <div className={styles.teamsResultGrid}>
          <div className={`${styles.teamResultCard} glass`}>
            <div className={styles.teamResultName}>🏫 Overall School</div>
            <div className={styles.teamResultPlace}>4th</div>
          </div>
          <div className={`${styles.teamResultCard} glass`}>
            <div className={styles.teamResultName}>🟡 Hyde Gold</div>
            <div className={styles.teamResultPlace}>5th</div>
          </div>
          <div className={`${styles.teamResultCard} glass`}>
            <div className={styles.teamResultName}>🔵 Hyde Blue</div>
            <div className={styles.teamResultPlace}>11th</div>
          </div>
          <div className={`${styles.teamResultCard} glass`}>
            <div className={styles.teamResultName}>⚪ Hyde White</div>
            <div className={styles.teamResultPlace}>15th</div>
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Medal-Winning Events</h3>
        <div className={`${styles.medalsTable} glass`}>
          <div className={styles.medalHeader}>
            <div className={styles.medalEvent}>Event</div>
            <div className={styles.medalResult}>Placement</div>
            <div className={styles.medalTeam}>Team</div>
          </div>

          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Experimental Design</div>
            <div className={styles.medalResult}>🥇 1st</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 1</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Potions and Poisons</div>
            <div className={styles.medalResult}>🥈 2nd</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 7</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Circuit Lab</div>
            <div className={styles.medalResult}>🥉 3rd</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 5</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Codebusters</div>
            <div className={styles.medalResult}>🥉 3rd</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 1</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Crime Busters</div>
            <div className={styles.medalResult}>🥉 3rd</div>
            <div className={styles.medalTeam}>🔵 <strong>Group 4</strong> Blue</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Experimental Design</div>
            <div className={styles.medalResult}>🥉 3rd</div>
            <div className={styles.medalTeam}>🔵 <strong>Group 1</strong> Blue</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Remote Sensing</div>
            <div className={styles.medalResult}>🏅 4th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 2</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Helicopter</div>
            <div className={styles.medalResult}>5th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 5</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Solar System</div>
            <div className={styles.medalResult}>5th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 7</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Write It Do It</div>
            <div className={styles.medalResult}>5th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 6</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Boomilever</div>
            <div className={styles.medalResult}>6th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 6</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Experimental Design</div>
            <div className={styles.medalResult}>6th</div>
            <div className={styles.medalTeam}>⚪ <strong>Group 1</strong> White</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Heredity</div>
            <div className={styles.medalResult}>6th</div>
            <div className={styles.medalTeam}>🟡 <strong>Group 4</strong> Gold</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Hovercraft</div>
            <div className={styles.medalResult}>6th</div>
            <div className={styles.medalTeam}>⚪ <strong>Group 3</strong> White</div>
          </div>
          <div className={styles.medalRow}>
            <div className={styles.medalEvent}>Write It Do It</div>
            <div className={styles.medalResult}>6th</div>
            <div className={styles.medalTeam}>🔵 <strong>Group 6</strong> Blue</div>
          </div>
        </div>

      </section>

      <section className={styles.infoSection}>
        <div className={`${styles.infoGrid} glass`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🗓️</div>
            <div className={styles.infoLabel}>Date</div>
            <div className={styles.infoValue}>March 21, 2026</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoLabel}>Location</div>
            <div className={styles.infoValue}>Milpitas High School</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏫</div>
            <div className={styles.infoLabel}>Hyde Teams</div>
            <div className={styles.infoValue}>
              <span className={styles.teamBadge}>🟡 B32 Gold</span>{" "}
              <span className={styles.teamBadge}>🔵 B31 Blue</span>{" "}
              <span className={styles.teamBadge}>⚪ B33 White</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📝</div>
            <div className={styles.infoLabel}>Registration</div>
            <div className={styles.infoValue}>7:15 - 8:15 AM</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoLabel}>Locations</div>
            <div className={styles.infoValue}>
              <a href="https://maps.app.goo.gl/nrdxhzuXHzmUmEqR9" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Parking</a>{" "}
              <a href="https://maps.app.goo.gl/Bv4TM4egxZeJbXVR7" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Coach/Volunteer Check-in</a>
            </div>
          </div>

          <a className={styles.infoCard} href="https://docs.google.com/document/u/0/d/129GUeSgopXycYmoxLS19zYQg-bO6PLLZOH7KVxFLkvo/mobilebasic" target="_blank" rel="noopener noreferrer">
            <div className={styles.infoIcon}>📋</div>
            <div className={styles.infoLabel}>Detailed Info</div>
            <div className={styles.infoLink}>Hyde Team Instructions</div>
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="schedule" className={styles.sectionTitle}>
          <a href="#schedule" className={styles.anchorLink}>Event Schedule by Group<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <p className={styles.scheduleNote}>
          Draft #2 schedule. Room numbers refer to Milpitas High School buildings.
        </p>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 id="group1" className={styles.groupTitle}><a href="#group1" className={styles.anchorLink}>Group 1<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler Impound</span>
                  <a href="https://maps.app.goo.gl/7WzTXAxogm4ReaVw9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Large Gym</a>
                </div>
                <span className={styles.eventTime}>7:30 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Meteorology</span>
                  <a href="https://maps.app.goo.gl/24AyoAyjHBFREDXy5" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>E14</a>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Experimental Design</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L47</a>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Codebusters</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L15</a>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler (Gold/Blue)</span>
                  <a href="https://maps.app.goo.gl/7WzTXAxogm4ReaVw9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Large Gym</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler (White)</span>
                  <a href="https://maps.app.goo.gl/7WzTXAxogm4ReaVw9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Large Gym</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group2" className={styles.groupTitle}><a href="#group2" className={styles.anchorLink}>Group 2<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Machines</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L41</a>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Remote Sensing</span>
                  <a href="https://maps.app.goo.gl/24AyoAyjHBFREDXy5" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>E12</a>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Anatomy and Physiology</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L01</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group3" className={styles.groupTitle}><a href="#group3" className={styles.anchorLink}>Group 3<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft Impound</span>
                  <a href="https://maps.app.goo.gl/7WzTXAxogm4ReaVw9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Large Gym</a>
                </div>
                <span className={styles.eventTime}>7:30 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Water Quality</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L32</a>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Entomology</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L14</a>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft</span>
                  <a href="https://maps.app.goo.gl/7WzTXAxogm4ReaVw9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Large Gym</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group4" className={styles.groupTitle}><a href="#group4" className={styles.anchorLink}>Group 4<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible (Gold/Blue)</span>
                  <a href="https://maps.app.goo.gl/xfcbHNM6JZpK5DUp9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Cafeteria</a>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible (White)</span>
                  <a href="https://maps.app.goo.gl/xfcbHNM6JZpK5DUp9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Cafeteria</a>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Crime Busters</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L33</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Heredity</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L04</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group5" className={styles.groupTitle}><a href="#group5" className={styles.anchorLink}>Group 5<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Circuit Lab</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L03</a>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter (Gold/Blue)</span>
                  <a href="https://maps.app.goo.gl/TxVukjDX2Dmnnv4n8" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Small Gym</a>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter (White)</span>
                  <a href="https://maps.app.goo.gl/TxVukjDX2Dmnnv4n8" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Small Gym</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Rocks and Minerals</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L06</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group6" className={styles.groupTitle}><a href="#group6" className={styles.anchorLink}>Group 6<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Disease Detectives</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L13</a>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Write It Do It</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L05 / L23</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Boomilever</span>
                  <a href="https://maps.app.goo.gl/xfcbHNM6JZpK5DUp9" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Cafeteria Platform</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group7" className={styles.groupTitle}><a href="#group7" className={styles.anchorLink}>Group 7<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Dynamic Planet</span>
                  <a href="https://maps.app.goo.gl/24AyoAyjHBFREDXy5" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>E15</a>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Metric Mastery</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L44</a>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Solar System</span>
                  <a href="https://maps.app.goo.gl/24AyoAyjHBFREDXy5" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>E16</a>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Potions and Poisons</span>
                  <a href="https://maps.app.goo.gl/tKbMPQaH2t4WSnk19" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>L46</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="map" className={styles.sectionTitle}>
          <a href="#map" className={styles.anchorLink}>Campus Map<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <div className={`${styles.mapContainer} glass`}>
          <img
            src="/mhs_map.png"
            alt="Milpitas High School campus map with room numbers"
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="overview" className={styles.sectionTitle}>
          <a href="#overview" className={styles.anchorLink}>Day Overview<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <div className={`${styles.content} glass`}>
          <div className={styles.dayTimeline}>
            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>7:15 - 8:15</div>
              <div className={styles.timeDesc}>Registration</div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>8:30 - 9:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Circuit Lab</span>
                <span className={styles.eventTag}>Dynamic Planet</span>
                <span className={styles.eventTag}>Water Quality</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>9:45 - 10:45</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Machines</span>
                <span className={styles.eventTag}>Meteorology</span>
                <span className={styles.eventTag}>Metric Mastery</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>11:00 - 12:00</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Entomology</span>
                <span className={styles.eventTag}>Experimental Design</span>
                <span className={styles.eventTag}>Mission Possible (Gold/Blue)</span>
                <span className={styles.eventTag}>Solar System</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>12:15 - 1:15</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Codebusters</span>
                <span className={styles.eventTag}>Disease Detectives</span>
                <span className={styles.eventTag}>Helicopter (Gold/Blue)</span>
                <span className={styles.eventTag}>Mission Possible (White)</span>
                <span className={styles.eventTag}>Remote Sensing</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>1:30 - 2:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Anatomy and Physiology</span>
                <span className={styles.eventTag}>Crime Busters</span>
                <span className={styles.eventTag}>Helicopter (White)</span>
                <span className={styles.eventTag}>Hovercraft</span>
                <span className={styles.eventTag}>Scrambler (Gold/Blue)</span>
                <span className={styles.eventTag}>Write It Do It</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>2:45 - 3:45</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Boomilever</span>
                <span className={styles.eventTag}>Heredity</span>
                <span className={styles.eventTag}>Potions and Poisons</span>
                <span className={styles.eventTag}>Rocks and Minerals</span>
                <span className={styles.eventTag}>Scrambler (White)</span>
              </div>
            </div>

            <div className={`${styles.timeBlock} ${styles.photoBlock}`}>
              <div className={styles.timeLabel}>4:00</div>
              <div className={styles.timeDesc}>Group Picture</div>
            </div>

            <div className={`${styles.timeBlock} ${styles.awardsBlock}`}>
              <div className={styles.timeLabel}>5:30 - 7:30</div>
              <div className={styles.timeDesc}>Awards Ceremony</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
