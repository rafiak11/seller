import React from "react";
import styles from "./Hero.module.css";
import heroImage from '../assets/img_hero.jpg';
import background from '../assets/heroBackground.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={background} alt="Hero Background" className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <div className={styles.heroImageWrapper}>
          <img src={heroImage} alt="Construction Materials" className={styles.heroImage} />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Sell construction materials with CoPro</h1>
          <p className={styles.heroSubtitle}>Let customers find you.</p>
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>Register your business</button>
            <p className={styles.signInLink}>
             <u> Already have an account? <a href="#signin">Sign in</a> </u>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
