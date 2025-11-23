import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function Instructions() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Instructions & Guidelines</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Event Assignments</h2>
        <div className={`${styles.content} glass`}>
          <div className={styles.groupsGrid}>
            <div className={styles.group}>
              <h3>Group 1</h3>
              <ul>
                <li>Code Busters</li>
                <li>Experimental Design</li>
                <li>Meteorology</li>
                <li>Scrambler</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 2</h3>
              <ul>
                <li>Anatomy and Physiology</li>
                <li>Machines</li>
                <li>Remote Sensing</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 3</h3>
              <ul>
                <li>Entomology</li>
                <li>Hovercraft</li>
                <li>Water Quality</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 4</h3>
              <ul>
                <li>Crime Busters</li>
                <li>Heredity</li>
                <li>Mission Possible</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 5</h3>
              <ul>
                <li>Circuit Lab</li>
                <li>Helicopter</li>
                <li>Rocks and Minerals</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 6</h3>
              <ul>
                <li>Boomilever</li>
                <li>Disease Detectives</li>
                <li>Write it Do it</li>
              </ul>
            </div>

            <div className={styles.group}>
              <h3>Group 7</h3>
              <ul>
                <li>Dynamic Planet</li>
                <li>Metric Mastery</li>
                <li>Potions and Poisons</li>
                <li>Solar System</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Donation</h2>
        <div className={`${styles.content} glass`}>
          <div className={styles.donationBox}>
            <div className={styles.donationAmount}>$300 per child</div>

            <div className={styles.donationInstructions}>
              <h3>How to Donate</h3>
              <p>
                Please donate through Hyde PTSA at{" "}
                <a
                  href="https://www.hydeptsa.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.donationLink}
                >
                  www.hydeptsa.org/donate
                </a>
              </p>

              <div className={styles.importantNote}>
                <strong>Important:</strong> In the donation message, please
                include:
                <ul>
                  <li>Student&apos;s name</li>
                  <li>Grade</li>
                  <li>Note that 100% of funds should go to Science Olympiad</li>
                </ul>
              </div>
            </div>

            <div className={styles.ptsaMembership}>
              <h3>💙 Support Hyde PTSA</h3>
              <p>
                Consider becoming a Hyde PTSA member to support our school
                community! Membership helps fund programs like Science Olympiad,
                library resources, student clubs, and school events.
              </p>
              <a
                href="https://www.hydeptsa.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.membershipButton}
              >
                Join Hyde PTSA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Season Timeline & Competitions</h2>
        <div className={`${styles.content} glass`}>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>November 1-8</div>
              <div className={styles.timelineDesc}>
                Rickards Invitational (Remote)
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>January 17-31</div>
              <div className={styles.timelineDesc}>
                Stemboost Invitational (Remote)
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>TBD</div>
              <div className={styles.timelineDesc}>Kennedy Invitational</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>March 21</div>
              <div className={styles.timelineDesc}>
                Santa Clara County Regionals
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>April (TBD)</div>
              <div className={styles.timelineDesc}>
                NorCal State Competition
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={`${styles.content} glass`}>
          <p>For questions or concerns, please contact us at:</p>
          <p className={styles.contactEmail}>
            <a href="mailto:hsoteams@gmail.com">hsoteams@gmail.com</a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
