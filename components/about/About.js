import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about">

      <div className={styles.about}>

        <div>
          <h2 className="code-heading fs-600 center-text mb-200">About</h2>
          <div className={styles.card}>
          <div className={styles.thumbnail}>mobile thumbnail</div>
            <div className={styles.bio}>
              <p>
                My journey began in 2014 building websites as
                freelance developer. Since then, I've had the privledge of
                building software for a{" "}
                <a href="https://oaksterdamuniversity.com">university </a>and a{" "}
                <a href="https://plpcsanjose.com">cannabis dispensary</a>.
              </p>

              <p>
                When I&apos;m not at the computer, I usually spend my time playing guitar,
                hiking, and learning motorcycle mechanics.
              </p>
            </div>

          </div>
        </div>

        <div className={styles.photo}>Image</div>

      </div>
      
    </section>
  );
}