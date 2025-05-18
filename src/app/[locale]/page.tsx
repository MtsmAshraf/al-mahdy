import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
// import Work from "@/components/Work/Work";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Loader from "@/components/Loader/Loader";
import { use, useEffect } from "react";
import Fields from "@/components/Fields/fields";

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>

}) {
  
  const { locale } = await params;
  
  return (
    <div className={styles.page}>
      {/* <Loader></Loader> */}
      <Hero lo={locale}></Hero>
      <About lo={locale}></About>
      <Fields lo={locale}></Fields>
      <Services lo={locale}></Services>
      <Products lo={locale}></Products>
      {/* <Work lo={locale}></Work>
      <Testimonials parentEl={"home"} lo={locale}></Testimonials> */}
      <Contact lo={locale}></Contact>
    </div>
  );
}
