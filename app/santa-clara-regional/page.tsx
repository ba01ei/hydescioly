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
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="schedule" className={styles.sectionTitle}>
          <a href="#schedule" className={styles.anchorLink}>Event Schedule by Group<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <p className={styles.scheduleNote}>
          Some groups have different schedules for Gold/Blue vs White teams.
        </p>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 id="group1" className={styles.groupTitle}><a href="#group1" className={styles.anchorLink}>Group 1<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Meteorology</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Experimental Design</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Code Busters</span>
                <span className={styles.eventTime}>12:15-1:15</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Scrambler (Gold/Blue)</span>
                <span className={styles.eventTime}>1:30-2:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Scrambler (White)</span>
                <span className={styles.eventTime}>2:45-3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group2" className={styles.groupTitle}><a href="#group2" className={styles.anchorLink}>Group 2<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Machines</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Remote Sensing</span>
                <span className={styles.eventTime}>12:15-1:15</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Anatomy and Physiology</span>
                <span className={styles.eventTime}>1:30-2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group3" className={styles.groupTitle}><a href="#group3" className={styles.anchorLink}>Group 3<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Water Quality</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Entomology</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Hovercraft</span>
                <span className={styles.eventTime}>1:30-2:30</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group4" className={styles.groupTitle}><a href="#group4" className={styles.anchorLink}>Group 4<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Mission Possible (Gold/Blue)</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Mission Possible (White)</span>
                <span className={styles.eventTime}>12:15-1:15</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Crime Busters</span>
                <span className={styles.eventTime}>1:30-2:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Heredity</span>
                <span className={styles.eventTime}>2:45-3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group5" className={styles.groupTitle}><a href="#group5" className={styles.anchorLink}>Group 5<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Circuit Lab</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Helicopter</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Rocks and Minerals</span>
                <span className={styles.eventTime}>2:45-3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group6" className={styles.groupTitle}><a href="#group6" className={styles.anchorLink}>Group 6<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Disease Detectives</span>
                <span className={styles.eventTime}>12:15-1:15</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Write It Do It</span>
                <span className={styles.eventTime}>1:30-2:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Boomilever</span>
                <span className={styles.eventTime}>2:45-3:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group7" className={styles.groupTitle}><a href="#group7" className={styles.anchorLink}>Group 7<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Dynamic Planet</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Metric Mastery</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Solar System</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Potions and Poisons</span>
                <span className={styles.eventTime}>2:45-3:45</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
