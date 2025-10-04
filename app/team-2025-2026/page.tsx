import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function Team2025_2026() {
  const roster = [
    { firstName: "Aarav", lastName: "Narula" },
    { firstName: "Aarush", lastName: "Lahiri" },
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
    { firstName: "Agriya", lastName: "Dutta" },
    { firstName: "Brandon", lastName: "Chen" },
    { firstName: "Daiwik", lastName: "Dinkesh" },
    { firstName: "Jeremy", lastName: "Shi" },
    { firstName: "Kelly", lastName: "Bi" },
    { firstName: "Mishika", lastName: "Desai" },
    { firstName: "Shlok", lastName: "Zambare" },
    { firstName: "Vihaan", lastName: "Panchal" },
    { firstName: "Ahan", lastName: "Arun" },
    { firstName: "Bala Vijay Kesav", lastName: "Sistla" },
    { firstName: "David", lastName: "Hyun" },
    { firstName: "Ethan", lastName: "Dai" },
    { firstName: "Felicia", lastName: "Lin" },
    { firstName: "Hansika", lastName: "Ram" },
    { firstName: "Maitreyee", lastName: "Paturkar" },
    { firstName: "Neil", lastName: "Katiyar" },
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
    { firstName: "Dheethya", lastName: "Srivathsan" },
    { firstName: "Jayden", lastName: "Kwon" },
    { firstName: "Pawan Kumar Thangasamy", lastName: "Suresh Kumar" },
    { firstName: "Riana", lastName: "Sahil" },
    { firstName: "Swastika", lastName: "Shukla" },
  ];

  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>2025-2026 Team</h1>
      <p className={styles.pageSubtitle}>
        Meet our talented team members for the 2025-2026 season
      </p>

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
