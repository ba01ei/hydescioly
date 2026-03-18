import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function SantaClaraRegional() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Santa Clara County Regional 2026</h1>

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
                  <span className={styles.eventName}>Meteorology</span>
                  <span className={styles.eventLocation}>E14</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Experimental Design</span>
                  <span className={styles.eventLocation}>L47</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Codebusters</span>
                  <span className={styles.eventLocation}>L15</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler (Gold/Blue)</span>
                  <span className={styles.eventLocation}>Large Gym</span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler (White)</span>
                  <span className={styles.eventLocation}>Large Gym</span>
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
                  <span className={styles.eventLocation}>L41</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Remote Sensing</span>
                  <span className={styles.eventLocation}>E12</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Anatomy and Physiology</span>
                  <span className={styles.eventLocation}>L01</span>
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
                  <span className={styles.eventName}>Water Quality</span>
                  <span className={styles.eventLocation}>L32</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Entomology</span>
                  <span className={styles.eventLocation}>L14</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft</span>
                  <span className={styles.eventLocation}>Large Gym</span>
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
                  <span className={styles.eventLocation}>Cafeteria</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible (White)</span>
                  <span className={styles.eventLocation}>Cafeteria</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Crime Busters</span>
                  <span className={styles.eventLocation}>L33</span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Heredity</span>
                  <span className={styles.eventLocation}>L04</span>
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
                  <span className={styles.eventLocation}>L03</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter</span>
                  <span className={styles.eventLocation}>Small Gym</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Rocks and Minerals</span>
                  <span className={styles.eventLocation}>L06</span>
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
                  <span className={styles.eventLocation}>L13</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Write It Do It</span>
                  <span className={styles.eventLocation}>L05 / L23</span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Boomilever</span>
                  <span className={styles.eventLocation}>Cafeteria Platform</span>
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
                  <span className={styles.eventLocation}>E15</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Metric Mastery</span>
                  <span className={styles.eventLocation}>L44</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Solar System</span>
                  <span className={styles.eventLocation}>E16</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Potions and Poisons</span>
                  <span className={styles.eventLocation}>L46</span>
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
                <span className={styles.eventTag}>Helicopter</span>
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
                <span className={styles.eventTag}>Mission Possible (White)</span>
                <span className={styles.eventTag}>Remote Sensing</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>1:30 - 2:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Anatomy and Physiology</span>
                <span className={styles.eventTag}>Crime Busters</span>
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
