import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about">

      <div className={styles.about}>

        <div>
          <h2 className="code-heading fs-600 center-text mb-200">About</h2>
          <div className={styles.card}>

            {/* <h3 className="fs-400">
            Lorem Ipsum
          </h3> */}

            <div className={styles.aboutMe}>
              <p>
                My journey began in 2014 creating custom websites and plugins as a
                freelance web developer. Since then, I've had the privledge of
                building software for a{" "}
                <a href="https://oaksterdamuniversity.com">university </a>and a{" "}
                <a href="https://plpcsanjose.com">cannabis dispensary</a>.
              </p>

              <p>
                When I&apos;m not coding, I usually spend my time playing guitar,
                hiking, and learning motorcycle mechanics.
              </p>
            </div>

          </div>
        </div>
        <div>Image</div>
      </div>
    </section>
  );
}