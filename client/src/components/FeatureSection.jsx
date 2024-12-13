import React from "react";
import styles from "./FeatureSection.module.css";
import img1 from "../assets/img_1.png"
import img4 from "../assets/img_4.png"
import img3 from "../assets/img_3.png"

const FeatureSection = () => {
  const features = [
    {
      title: "Reach more buyers & leads",
      description: "Get discovered by contractors and companies looking for your products.",
      image: img1
    },
    {
      title: "Simplify your operations.",
      description: "Manage your inventory, deliveries and projects digitally.",
      image: img4
    },
    {
      title: "Get paid faster.",
      description: "Secure, streamlined payments with clear transaction records.",
      image: img3
    }
  ];

  return (
    <section className={styles.featureSection}>
      <h2 className={styles.featureTitle}>Why sell with us?</h2>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className= {styles.imagewrap}> 
            <img src={feature.image} alt="" className={styles.featureImage} />
          </div> 
          <div className={styles.featureText}>
            <h3 className={styles.featureItemTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeatureSection;
