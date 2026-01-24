import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function BerkeleyInvitational() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Berkeley Invitational 2026</h1>

      <section className={styles.infoSection}>
        <div className={`${styles.infoGrid} glass`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📅</div>
            <div className={styles.infoLabel}>Date</div>
            <div className={styles.infoValue}>February 28, 2026</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoLabel}>Location</div>
            <div className={styles.infoValue}>UC Berkeley</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🔵</div>
            <div className={styles.infoLabel}>Hyde Blue</div>
            <div className={styles.infoValue}>Team B18</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🟡</div>
            <div className={styles.infoLabel}>Hyde Gold</div>
            <div className={styles.infoValue}>Team B19</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Event Schedule by Group</h2>
        <p className={styles.scheduleNote}>
          Events are scheduled based on team numbers B18/B19 (B13-B24 block).
          Times shown are when our teams compete.
        </p>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 1</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Scrambler</span>
                <span className={styles.eventTime}>
                  <span className={styles.impoundBadge}>Impound</span> 7:30-8:30
                </span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Experimental Design</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Meteorology</span>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Code Busters</span>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 2</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Anatomy and Physiology</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Machines</span>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Remote Sensing</span>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 3</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Hovercraft</span>
                <span className={styles.eventTime}>
                  <span className={styles.impoundBadge}>Impound</span> 7:30-8:30
                </span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Water Quality</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Entomology</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 4</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Crime Busters</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Mission Possible</span>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-Scheduled</span>
                </span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Heredity</span>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 5</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Circuit Lab</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Helicopter</span>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-Scheduled</span>
                </span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Rocks and Minerals</span>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 6</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Write It Do It</span>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Boomilever</span>
                <span className={styles.eventTime}>
                  <span className={styles.selfScheduledBadge}>Self-Scheduled</span>
                </span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Disease Detectives</span>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 className={styles.groupTitle}>Group 7</h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Dynamic Planet</span>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Solar System</span>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Metric Mastery</span>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>Potions and Poisons</span>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Day Overview</h2>
        <div className={`${styles.content} glass`}>
          <div className={styles.dayTimeline}>
            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>7:30 - 8:30</div>
              <div className={styles.timeEvents}>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Hovercraft (Impound)</span>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Scrambler (Impound)</span>
              </div>
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
                <span className={styles.eventTag}>Entomology</span>
                <span className={styles.eventTag}>Experimental Design</span>
                <span className={styles.eventTag}>Solar System</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>11:00 - 12:00</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Anatomy and Physiology</span>
                <span className={styles.eventTag}>Crime Busters</span>
                <span className={styles.eventTag}>Write It Do It</span>
              </div>
            </div>

            <div className={`${styles.timeBlock} ${styles.lunchBlock}`}>
              <div className={styles.timeLabel}>12:00 - 12:40</div>
              <div className={styles.timeDesc}>Lunch Break</div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>12:40 - 1:40</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Machines</span>
                <span className={styles.eventTag}>Meteorology</span>
                <span className={styles.eventTag}>Metric Mastery</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>1:55 - 2:55</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Code Busters</span>
                <span className={styles.eventTag}>Disease Detectives</span>
                <span className={styles.eventTag}>Remote Sensing</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>3:10 - 4:10</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Heredity</span>
                <span className={styles.eventTag}>Potions and Poisons</span>
                <span className={styles.eventTag}>Rocks and Minerals</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>Self-Scheduled</div>
              <div className={styles.timeEvents}>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Boomilever</span>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Helicopter</span>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Hovercraft</span>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Mission Possible</span>
                <span className={`${styles.eventTag} ${styles.selfScheduledTag}`}>Scrambler</span>
              </div>
            </div>

            <div className={`${styles.timeBlock} ${styles.awardsBlock}`}>
              <div className={styles.timeLabel}>5:30 - 7:00</div>
              <div className={styles.timeDesc}>Awards Ceremony</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
