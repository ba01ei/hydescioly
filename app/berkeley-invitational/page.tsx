import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function BerkeleyInvitational() {
  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Berkeley Invitational 2026</h1>

      <section className={styles.infoSection}>
        <div className={`${styles.infoGrid} glass`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🗓️</div>
            <div className={styles.infoLabel}>Date</div>
            <div className={styles.infoValue}>February 28, 2026</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏫</div>
            <div className={styles.infoLabel}>Hyde Teams</div>
            <div className={styles.infoValue}>
              <span className={styles.teamBadge}>🔵 B18</span>{" "}
              <span className={styles.teamBadge}>🟡 B19</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🎪</div>
            <div className={styles.infoLabel}>Gathering Area</div>
            <a href="https://maps.app.goo.gl/yCrDW4v7Sqyj6qfr5" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
              Memorial Glade
            </a>
            <div className={styles.infoHint}>Remember to pick up wristband</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🅿️</div>
            <div className={styles.infoLabel}>Parking</div>
            <a href="https://maps.app.goo.gl/Y8hibQaUfV5ELCW77" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
              Lower Hearst Structure
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🚗</div>
            <div className={styles.infoLabel}>Carpool</div>
            <a href="https://docs.google.com/spreadsheets/d/14X2Zhz9Xd_e_Zr9Y0lCY_Y8ad1gnFTjZtllFfgZj0cY/edit?gid=364426998" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
              Sign-up Sheet
            </a>
          </div>

          <a className={styles.infoCard} href="https://docs.google.com/document/u/0/d/10txG7eVULIdfm6XKQ9G9wJOGeAJNN6PWA7J3LulyRFA/mobilebasic" target="_blank" rel="noopener noreferrer">
            <div className={styles.infoIcon}>📋</div>
            <div className={styles.infoLabel}>Instructions</div>
            <div className={styles.infoLink}>Hyde Team Instructions</div>
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="schedule" className={styles.sectionTitle}>
          <a href="#schedule" className={styles.anchorLink}>Event Schedule by Group<span className={styles.anchorIcon}>#</span></a>
        </h2>

        <div className={styles.scheduleGrid}>
          <div className={`${styles.groupCard} glass`}>
            <h3 id="group1" className={styles.groupTitle}><a href="#group1" className={styles.anchorLink}>Group 1<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 583</a>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.impoundBadge}>Impound</span> 7:30-8:30
                </span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Experimental Design</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 145</a>
                </div>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Scrambler</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 583</a>
                </div>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Meteorology</span>
                  <a href="https://www.google.com/maps/place/Hearst+Memorial+Mining+Building/@37.8741545,-122.2597671,17z/data=!3m1!4b1!4m6!3m5!1s0x80857c2386b3f1b1:0xd94eeacd07b34def!8m2!3d37.8741545!4d-122.2571922!16zL20vMDVubWoy?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Hearst Mining (B) 348</a>
                </div>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Code Busters</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 145</a>
                </div>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group2" className={styles.groupTitle}><a href="#group2" className={styles.anchorLink}>Group 2<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Anatomy and Physiology</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 179</a>
                </div>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Machines</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 535</a>
                </div>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Remote Sensing</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 187</a>
                </div>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group3" className={styles.groupTitle}><a href="#group3" className={styles.anchorLink}>Group 3<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) Ground Floor Lobby</a>
                </div>
                <span className={styles.eventTime}>
                  <span className={styles.impoundBadge}>Impound</span> 7:30-8:30
                </span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Water Quality</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 246</a>
                </div>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Entomology</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 242</a>
                </div>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft (Blue)</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) Ground Floor Lobby</a>
                </div>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Hovercraft (Gold)</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) Ground Floor Lobby</a>
                </div>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group4" className={styles.groupTitle}><a href="#group4" className={styles.anchorLink}>Group 4<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Crime Busters</span>
                  <a href="https://www.google.com/maps/place/Latimer+Hall/@37.8731063,-122.2608624,17z/data=!3m1!4b1!4m6!3m5!1s0x80857c24ee879a9d:0x306c5b99d834385d!8m2!3d37.8731064!4d-122.2559915!16s%2Fg%2F11b6zndjsr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Latimer (A) 209</a>
                </div>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Mission Possible</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 105</a>
                </div>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Heredity</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 246</a>
                </div>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group5" className={styles.groupTitle}><a href="#group5" className={styles.anchorLink}>Group 5<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Circuit Lab</span>
                  <a href="https://www.google.com/maps/place/Hearst+Memorial+Mining+Building/@37.8741545,-122.2597671,17z/data=!3m1!4b1!4m6!3m5!1s0x80857c2386b3f1b1:0xd94eeacd07b34def!8m2!3d37.8741545!4d-122.2571922!16zL20vMDVubWoy?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Hearst Mining (B) 350</a>
                </div>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Helicopter</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 183</a>
                </div>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Rocks and Minerals</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 575</a>
                </div>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group6" className={styles.groupTitle}><a href="#group6" className={styles.anchorLink}>Group 6<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Boomilever</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 183</a>
                </div>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Write It Do It</span>
                  <a href="https://www.google.com/maps/place/McCone+Hall/@37.8740817,-122.2622537,16z/data=!3m1!5s0x80857c215b85ab13:0xc67f4429158e09c9!4m6!3m5!1s0x80857c23e2961955:0xd58d3301cf4cbb37!8m2!3d37.8740817!4d-122.2596788!16s%2Fg%2F1pp2vjyjr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>McCone (C) 535 &amp; 575</a>
                </div>
                <span className={styles.eventTime}>11:00-12:00</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Disease Detectives</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 179</a>
                </div>
                <span className={styles.eventTime}>1:55-2:55</span>
              </div>
            </div>
          </div>

          <div className={`${styles.groupCard} glass`}>
            <h3 id="group7" className={styles.groupTitle}><a href="#group7" className={styles.anchorLink}>Group 7<span className={styles.anchorIcon}>#</span></a></h3>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Dynamic Planet</span>
                  <a href="https://www.google.com/maps/place/Hearst+Memorial+Mining+Building/@37.8741545,-122.2597671,17z/data=!3m1!4b1!4m6!3m5!1s0x80857c2386b3f1b1:0xd94eeacd07b34def!8m2!3d37.8741545!4d-122.2571922!16zL20vMDVubWoy?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Hearst Mining (B) 348</a>
                </div>
                <span className={styles.eventTime}>8:30-9:30</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Solar System</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 187</a>
                </div>
                <span className={styles.eventTime}>9:45-10:45</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Metric Mastery</span>
                  <a href="https://www.google.com/maps/place/Dwinelle+Hall/@37.8705318,-122.2631791,17z/data=!3m2!4b1!5s0x80857c2689c390db:0x8b103ea0c1da5aad!4m6!3m5!1s0x80857c26610ad571:0xbe2fcc5cc90918e1!8m2!3d37.8705318!4d-122.2606042!16zL20vMGNmdjB0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Dwinelle (D) 242</a>
                </div>
                <span className={styles.eventTime}>12:40-1:40</span>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDetails}>
                  <span className={styles.eventName}>Potions and Poisons</span>
                  <a href="https://www.google.com/maps/place/Latimer+Hall/@37.8731063,-122.2608624,17z/data=!3m1!4b1!4m6!3m5!1s0x80857c24ee879a9d:0x306c5b99d834385d!8m2!3d37.8731064!4d-122.2559915!16s%2Fg%2F11b6zndjsr?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocation}>Latimer (A) 209</a>
                </div>
                <span className={styles.eventTime}>3:10-4:10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="awards" className={styles.sectionTitle}>
          <a href="#awards" className={styles.anchorLink}>Award Ceremony<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <div className={`${styles.content} glass`}>
          <p className={styles.infoHint}>Medals for top 4 teams, trophies for top 4 schools</p>
          <div className={styles.eventList}>
            <div className={styles.eventItem}>
              <div className={styles.eventDetails}>
                <a href="https://www.google.com/maps/place/Pimentel+Hall/@37.8734123,-122.2585925,16z/data=!3m1!4b1!4m6!3m5!1s0x80857c2492c492f3:0x32f43b40f867ecdb!8m2!3d37.8734123!4d-122.2560176!16s%2Fg%2F11xv78s35?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.eventLocationLarge}>Pimentel Hall</a>
                <span className={styles.infoHint}>Chairs for competitors and 1 coach/team only. Wristband required.</span>
              </div>
              <div className={styles.eventDetails}>
                <span className={styles.eventTime}>5:30-7:00 PM</span>
                <span className={styles.infoHint}>Coaches can pick up exams from McCone 340 after 7 PM.</span>
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <img
              src="/berkeley_award.png"
              alt="Pimentel Hall seating chart"
              className={styles.mapImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="map" className={styles.sectionTitle}>
          <a href="#map" className={styles.anchorLink}>Campus Map<span className={styles.anchorIcon}>#</span></a>
        </h2>
        <p className={styles.scheduleNote}>
          A = Latimer, B = Hearst Mining, C = McCone, D = Dwinelle, Memorial Glade is right next to C
        </p>
        <div className={`${styles.mapContainer} glass`}>
          <img
            src="/berkeley_map.png"
            alt="UC Berkeley campus map with event buildings marked"
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
              <div className={styles.timeLabel}>7:30 - 8:30</div>
              <div className={styles.timeEvents}>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Hovercraft (Impound)</span>
                <span className={`${styles.eventTag} ${styles.impoundTag}`}>Scrambler (Impound)</span>
              </div>
            </div>

            <div className={styles.timeBlock}>
              <div className={styles.timeLabel}>8:30 - 9:30</div>
              <div className={styles.timeEvents}>
                <span className={styles.eventTag}>Boomilever</span>
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
                <span className={styles.eventTag}>Helicopter</span>
                <span className={styles.eventTag}>Scrambler</span>
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
                <span className={styles.eventTag}>Hovercraft (Blue)</span>
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
                <span className={styles.eventTag}>Hovercraft (Gold)</span>
                <span className={styles.eventTag}>Mission Possible</span>
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

            <div className={`${styles.timeBlock} ${styles.photoBlock}`}>
              <div className={styles.timeLabel}>4:10 - 4:45</div>
              <div className={styles.timeDesc}>Hyde SciOly Team Photo Session</div>
              <div className={styles.timeDetail}>Assemble at gathering area and go to photo location as directed by photo captain</div>
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
