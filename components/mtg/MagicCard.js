import styles from "./Mtg.module.scss";
// https://mana.andrewgioia.com/icons.html
export default function MagicCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.frameBackground} />
      <div className={styles.frame}>
        <div className={styles.header}>
          <div className={styles.title}>Lorem Ipsum</div>
          <div className={styles.mana}>mana</div>
        </div>
        <div className={styles.image}>
          <img src="/images/mugen.jpg" alt="mugen art" width="auto" />
        </div>
        <div className={styles.type}>
          <div className={styles.typeLine}>Creature — Cat</div>
          <div className={styles.set}>set</div>
        </div>
        <div className={styles.body}>
          <div className={styles.description}>
            When Mugen enters the battlefield, Each player discards all the cards in their hand.
          </div>
          <div className={styles.description}>
            Sacrafice a Food: Return Mugen to the top of its owner's library
          </div>
          <div className={styles.flavorText}>
            The void consumes all
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.stamp}></div>
          <div className={styles.stats}>0/0</div>

          <div className={styles.details}>001/001 R  <br/>M24 EN AceGK</div>
          <div className={styles.copywrite}>™ & © 2024 Wizards of the Toast</div>
        </div>

      </div>
    </div>
  );
}
