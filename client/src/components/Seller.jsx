import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FixBorder from "./FixBorder"
import QuestionSection from "./QuestionSection";
import FeatureSection from "./FeatureSection";
import FAQ from "./FAQ";
import Footer from "./Footer";
import styles from "./SellerPage.module.css";

const SellerPage = () =>  {
  return (
    <div className={styles.sellerPage}>
      <Header />
      <Hero />
      <FixBorder/>
      <QuestionSection/>
      <FeatureSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default SellerPage;