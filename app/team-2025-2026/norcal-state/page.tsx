import PageLayout from "../../components/PageLayout";
import styles from "./page.module.css";

export default function NorCalState() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>NorCal State Competition 2026</h1>

      <section className={styles.infoSection}>
        <div className={`${styles.infoGrid} glass`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🗓️</div>
            <div className={styles.infoLabel}>Date</div>
            <div className={styles.infoValue}>April 4, 2026</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoLabel}>Location</div>
            <div className={styles.infoValue}>CSU East Bay</div>
            <a href="https://www.google.com/maps/place/25800+Carlos+Bee+Blvd,+Hayward,+CA+94542/@37.6530468,-122.0549277,18.22z/data=!4m6!3m5!1s0x808f9389c49b2ced:0x80957bb65b61c2dd!8m2!3d37.6532194!4d-122.0532647!16s%2Fg%2F11c4z56m4n?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.infoHintLink}>25800 Carlos Bee Blvd, Hayward, CA 94542</a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏫</div>
            <div className={styles.infoLabel}>Hyde Team</div>
            <div className={styles.infoValue}>
              <span className={styles.teamBadge}>🟡 B01</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏠</div>
            <div className={styles.infoLabel}>Home Base</div>
            <a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.infoHintLink}>N-120</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="results" className={styles.sectionTitle}>
          <a href="#results" className={styles.anchorLink}>Tournament Results<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <div className={`${styles.resultsBox} glass`}>
          <div className={styles.overallPlace}>
            <div className={styles.placeNumber}>5th</div>
            <div className={styles.placeLabel}>out of 32 teams</div>
          </div>

          <div className={styles.recordCallout}>
            <div className={styles.recordTitle}>🏆 New Record: 13 medals in State competition</div>
          </div>

          <div className={styles.resultsTable}>
            <div className={styles.resultsTableHeader}>
              <div>Event</div>
              <div>Rank</div>
              <div>Place</div>
            </div>

            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Anatomy and Physiology</div>
              <div className={styles.resultRank}>2</div>
              <div className={styles.resultPlace}>🥈 2nd <span className={styles.groupTag}>Group 2</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Circuit Lab</div>
              <div className={styles.resultRank}>2</div>
              <div className={styles.resultPlace}>🥈 2nd <span className={styles.groupTag}>Group 5</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Dynamic Planet</div>
              <div className={styles.resultRank}>2</div>
              <div className={styles.resultPlace}>🥈 2nd <span className={styles.groupTag}>Group 7</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Potions and Poisons</div>
              <div className={styles.resultRank}>2</div>
              <div className={styles.resultPlace}>🥈 2nd <span className={styles.groupTag}>Group 7</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Machines</div>
              <div className={styles.resultRank}>3</div>
              <div className={styles.resultPlace}>🥉 3rd <span className={styles.groupTag}>Group 2</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Codebusters</div>
              <div className={styles.resultRank}>4</div>
              <div className={styles.resultPlace}>🏅 4th <span className={styles.groupTag}>Group 1</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Experimental Design</div>
              <div className={styles.resultRank}>4</div>
              <div className={styles.resultPlace}>🏅 4th <span className={styles.groupTag}>Group 1</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Metric Mastery</div>
              <div className={styles.resultRank}>5</div>
              <div className={styles.resultPlace}>5th <span className={styles.groupTag}>Group 7</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Remote Sensing</div>
              <div className={styles.resultRank}>5</div>
              <div className={styles.resultPlace}>5th <span className={styles.groupTag}>Group 2</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Solar System</div>
              <div className={styles.resultRank}>5</div>
              <div className={styles.resultPlace}>5th <span className={styles.groupTag}>Group 7</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Water Quality</div>
              <div className={styles.resultRank}>5</div>
              <div className={styles.resultPlace}>5th <span className={styles.groupTag}>Group 3</span></div>
            </div>
            <div className={`${styles.resultsTableRow} ${styles.medalRow}`}>
              <div className={styles.resultEvent}>Boomilever</div>
              <div className={styles.resultRank}>6</div>
              <div className={styles.resultPlace}>6th <span className={styles.groupTag}>Group 6</span></div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Write It Do It</div>
              <div className={styles.resultRank}>8</div>
              <div className={styles.resultPlace}>8th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Helicopter</div>
              <div className={styles.resultRank}>9</div>
              <div className={styles.resultPlace}>9th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Scrambler</div>
              <div className={styles.resultRank}>9</div>
              <div className={styles.resultPlace}>9th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Crime Busters</div>
              <div className={styles.resultRank}>11</div>
              <div className={styles.resultPlace}>11th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Mission Possible</div>
              <div className={styles.resultRank}>11</div>
              <div className={styles.resultPlace}>11th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Disease Detectives</div>
              <div className={styles.resultRank}>12</div>
              <div className={styles.resultPlace}>12th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Heredity</div>
              <div className={styles.resultRank}>13</div>
              <div className={styles.resultPlace}>13th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Rocks and Minerals</div>
              <div className={styles.resultRank}>13</div>
              <div className={styles.resultPlace}>13th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Entomology</div>
              <div className={styles.resultRank}>14</div>
              <div className={styles.resultPlace}>14th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Meteorology</div>
              <div className={styles.resultRank}>15</div>
              <div className={styles.resultPlace}>15th</div>
            </div>
            <div className={styles.resultsTableRow}>
              <div className={styles.resultEvent}>Hovercraft</div>
              <div className={styles.resultRank}>16</div>
              <div className={styles.resultPlace}>16th</div>
            </div>

            <div className={`${styles.resultsTableRow} ${styles.trialRow}`}>
              <div className={styles.resultEvent}>Code Craze <span className={styles.trialBadge}>Trial</span></div>
              <div className={styles.resultRank}>0</div>
              <div className={styles.resultPlace}>🥉 3rd</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="schedule" className={styles.sectionTitle}>
          <a href="#schedule" className={styles.anchorLink}>Event Schedule by Group<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <p className={styles.scheduleNote}>
          Schedule for team B01 (in the B01-11 group).
        </p>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 id="group1" className={styles.groupTitle}><a href="#group1" className={styles.anchorLink}>Group 1<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler Impound</span>
                  <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Gym</a>
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Meteorology</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-3" className={styles.eventLocation}>S337</a></span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler</span>
                  <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Gym</a>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Experimental Design</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-2" className={styles.eventLocation}>S205</a></span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Codebusters</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-2" className={styles.eventLocation}>S213</a></span>
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
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-1" className={styles.eventLocation}>S125</a></span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Anatomy & Physiology</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-3" className={styles.eventLocation}>N307</a></span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Remote Sensing</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-2" className={styles.eventLocation}>S247</a></span>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group3" className={styles.groupTitle}><a href="#group3" className={styles.anchorLink}>Group 3<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft Impound</span>
                  <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Gym</a>
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Water Quality</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-3" className={styles.eventLocation}>S302</a></span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Entomology</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-2" className={styles.eventLocation}>N215</a></span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft</span>
                  <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Gym</a>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group4" className={styles.groupTitle}><a href="#group4" className={styles.anchorLink}>Group 4<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible Impound</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N142</a></span>
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Heredity</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-2" className={styles.eventLocation}>N206</a></span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Crime Busters</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-3" className={styles.eventLocation}>S321</a></span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N142</a></span>
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
                  <span className={styles.eventName}>Rocks and Minerals</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-2" className={styles.eventLocation}>N212</a></span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Circuit Lab</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-3" className={styles.eventLocation}>N346</a></span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter</span>
                  <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Upper Gym</a>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group6" className={styles.groupTitle}><a href="#group6" className={styles.anchorLink}>Group 6<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Boomilever</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N108</a></span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Write It Do It</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-4" className={styles.eventLocation}>N437/N436</a></span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Disease Detectives</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-2" className={styles.eventLocation}>N207</a></span>
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
                  <span className={styles.eventName}>Potions & Poisons</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-4" className={styles.eventLocation}>S437</a></span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Metric Mastery</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N119</a></span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Dynamic Planet</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N104</a></span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Solar System</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-N</a>{" "}<a href="#floor-1" className={styles.eventLocation}>N112</a></span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="trial" className={styles.groupTitle}><a href="#trial" className={styles.anchorLink}>Trial Event<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Code Craze</span>
                  <span className={styles.eventLocationGroup}><a href="https://maps.app.goo.gl/49SreZZCvRbMBtkv9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>SC-S</a>{" "}<a href="#floor-1" className={styles.eventLocation}>S138</a></span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="maps" className={styles.sectionTitle}>
          <a href="#maps" className={styles.anchorLink}>Science Building Room Maps<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <div id="floor-1" className={`${styles.mapContainer} glass`}>
          <img src="/1st-floor.png" alt="CSU East Bay Science Buildings 1st floor map" className={styles.mapImage} />
          <p className={styles.mapLabel}>1st Floor</p>
        </div>
        <div id="floor-2" className={`${styles.mapContainer} glass`} style={{ marginTop: '1rem' }}>
          <img src="/2nd-floor.png" alt="CSU East Bay Science Buildings 2nd floor map" className={styles.mapImage} />
          <p className={styles.mapLabel}>2nd Floor</p>
        </div>
        <div id="floor-3" className={`${styles.mapContainer} glass`} style={{ marginTop: '1rem' }}>
          <img src="/3rd-floor.png" alt="CSU East Bay Science Buildings 3rd floor map" className={styles.mapImage} />
          <p className={styles.mapLabel}>3rd Floor</p>
        </div>
        <div id="floor-4" className={`${styles.mapContainer} glass`} style={{ marginTop: '1rem' }}>
          <img src="/4th-floor.png" alt="CSU East Bay Science Buildings 4th floor map" className={styles.mapImage} />
          <p className={styles.mapLabel}>4th Floor</p>
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
                <span className={styles.eventTag}>Heredity</span>
                <span className={styles.eventTag}>Potions & Poisons</span>
                <span className={styles.eventTag}>Rocks and Minerals</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>9:45 - 10:45</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Boomilever</span>
                <span className={styles.eventTag}>Code Craze (Trial)</span>
                <span className={styles.eventTag}>Machines</span>
                <span className={styles.eventTag}>Meteorology</span>
                <span className={styles.eventTag}>Metric Mastery</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>11:00 - 12:00</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Circuit Lab</span>
                <span className={styles.eventTag}>Dynamic Planet</span>
                <span className={styles.eventTag}>Scrambler</span>
                <span className={styles.eventTag}>Water Quality</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>12:15 - 1:15</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Anatomy & Physiology</span>
                <span className={styles.eventTag}>Crime Busters</span>
                <span className={styles.eventTag}>Write It Do It</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>1:30 - 2:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Entomology</span>
                <span className={styles.eventTag}>Experimental Design</span>
                <span className={styles.eventTag}>Helicopter</span>
                <span className={styles.eventTag}>Solar System</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>2:45 - 3:45</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Codebusters</span>
                <span className={styles.eventTag}>Disease Detectives</span>
                <span className={styles.eventTag}>Hovercraft</span>
                <span className={styles.eventTag}>Mission Possible</span>
                <span className={styles.eventTag}>Remote Sensing</span>
              </div>
            </div>

            <div className={`${styles.timeBlock} ${styles.awardsBlock}`}>
              <div className={styles.timeLabel}>5:30 - 7:30</div>
              <div className={styles.timeDesc}>Awards Ceremony — <a href="https://maps.app.goo.gl/76cnkXcoRt4rTMVW9?g_st=ic" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>PE Gym</a></div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
