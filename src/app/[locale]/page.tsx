import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Contact from "@/components/Contact/Contact";
// import Work from "@/components/Work/Work";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Fields from "@/components/Fields/fields";
import Why from "@/components/Why/why";
import Brands from "@/components/Brands/Brands";
import Manufacturing from "@/components/Manufacturing/Manufacturing";

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
      {/* <About lo={locale}></About> */}
      <Why lo={locale}></Why>
      <Manufacturing lo={locale}></Manufacturing>
      <Fields lo={locale}></Fields>
      <Brands lo={locale}></Brands>
      <Products lo={locale}></Products>
      {/* <Work lo={locale}></Work>
      <Testimonials parentEl={"home"} lo={locale}></Testimonials> */}
      <Contact lo={locale}></Contact>
    </div>
  );
}
