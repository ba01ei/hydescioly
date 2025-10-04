import PageLayout from "../components/PageLayout";
import styles from "./page.module.css";

export default function Resources() {
  const resources = [
    {
      category: "Official Resources",
      items: [
        {
          name: "Science Olympiad Official Website",
          url: "https://www.soinc.org/",
        },
        { name: "2026 Rules Manual", url: "https://www.soinc.org/rules-2026" },
        {
          name: "Division B Event Pages",
          url: "https://www.soinc.org/events/2026-division-b-events",
        },
      ],
    },
    {
      category: "Study Materials",
      items: [
        { name: "Scioly.org - Wiki & Resources", url: "https://scioly.org/" },
        { name: "Test Exchange", url: "https://scioly.org/tests/" },
        {
          name: "Event Coaching Resources",
          url: "https://scioly.org/wiki/index.php/Main_Page",
        },
      ],
    },
    {
      category: "Communication",
      items: [
        {
          name: "Team Email: hsoteams@gmail.com",
          url: "mailto:hsoteams@gmail.com",
        },
        { name: "Hyde PTSA", url: "https://www.hydeptsa.org" },
      ],
    },
  ];

  return (
    <PageLayout>
      <h1 className={styles.pageTitle}>Resources</h1>
      <p className={styles.pageSubtitle}>
        Essential links, study materials, and resources for all Science Olympiad
        events
      </p>

      {resources.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.category}</h2>
          <div className={`${styles.resourcesGrid}`}>
            {section.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`${styles.resourceCard} glass`}
              >
                <div className={styles.resourceIcon}>📄</div>
                <div className={styles.resourceName}>{item.name}</div>
                <div className={styles.resourceArrow}>→</div>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Need Help?</h2>
        <div className={`${styles.helpBox} glass`}>
          <p>
            If you need coaching assistance, have questions about events, or
            need help finding resources, please reach out to your group coach or
            email the team coordinators.
          </p>
          <a href="mailto:hsoteams@gmail.com" className={styles.contactButton}>
            Contact Team Coordinators
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
