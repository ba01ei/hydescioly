import PageLayout from "../components/PageLayout";
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
            <div className={styles.infoIcon}>📝</div>
            <div className={styles.infoLabel}>Registration</div>
            <div className={styles.infoValue}>7:15 - 8:15 AM</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="schedule" className={styles.sectionTitle}>
          <a href="#schedule" className={styles.anchorLink}>Event Schedule by Group<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <p className={styles.scheduleNote}>
          Schedule for team B01 (in the B01-11 group). Self-scheduled event times are TBD.
        </p>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 id="group1" className={styles.groupTitle}><a href="#group1" className={styles.anchorLink}>Group 1<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler Impound</span>
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Meteorology</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Experimental Design</span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Codebusters</span>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler</span>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-scheduled</span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group2" className={styles.groupTitle}><a href="#group2" className={styles.anchorLink}>Group 2<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Machines</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Anatomy & Physiology</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Remote Sensing</span>
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
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Water Quality</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Entomology</span>
                </div>
                <span className={styles.eventTime}>1:30 - 2:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft</span>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-scheduled</span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group4" className={styles.groupTitle}><a href="#group4" className={styles.anchorLink}>Group 4<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible Impound</span>
                </div>
                <span className={styles.eventTime}>7:15 - 8:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Heredity</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Crime Busters</span>
                </div>
                <span className={styles.eventTime}>12:15 - 1:15</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible</span>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-scheduled</span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group5" className={styles.groupTitle}><a href="#group5" className={styles.anchorLink}>Group 5<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Rocks and Minerals</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Circuit Lab</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter</span>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-scheduled</span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group6" className={styles.groupTitle}><a href="#group6" className={styles.anchorLink}>Group 6<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Write It Do It</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Disease Detectives</span>
                </div>
                <span className={styles.eventTime}>2:45 - 3:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Boomilever</span>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-scheduled</span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group7" className={styles.groupTitle}><a href="#group7" className={styles.anchorLink}>Group 7<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Potions & Poisons</span>
                </div>
                <span className={styles.eventTime}>8:30 - 9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Metric Mastery</span>
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Dynamic Planet</span>
                </div>
                <span className={styles.eventTime}>11:00 - 12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Solar System</span>
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
                </div>
                <span className={styles.eventTime}>9:45 - 10:45</span>
              </div>
            </div>
          </div>
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
                <span className={styles.eventTag}>Write It Do It</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>9:45 - 10:45</div>
              <div className={styles.timeEvents}>
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
                <span className={styles.eventTag}>Water Quality</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>12:15 - 1:15</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Anatomy & Physiology</span>
                <span className={styles.eventTag}>Crime Busters</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>1:30 - 2:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Entomology</span>
                <span className={styles.eventTag}>Experimental Design</span>
                <span className={styles.eventTag}>Solar System</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>2:45 - 3:45</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Codebusters</span>
                <span className={styles.eventTag}>Disease Detectives</span>
                <span className={styles.eventTag}>Remote Sensing</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>Self-Scheduled</div>
              <div className={styles.timeEvents}>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Boomilever</span>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Helicopter</span>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Hovercraft</span>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Mission Possible</span>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Scrambler</span>
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
