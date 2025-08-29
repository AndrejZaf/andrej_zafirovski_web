import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/about-me";
import Certification from "@/components/certifications";
import Details from "@/components/details";
import Eduction from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Links from "@/components/links";
import { Separator } from "@/components/separator";
import TechnologyStack from "@/components/technology-stack";

const Page = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="mx-auto max-w-2xl border-l border-r">
        <Navbar />
        <Header />
        <Details />
        <AboutMe />
        <Separator />
        <Links />
        <Separator />
        <Experience />
        <Separator />
        <Eduction />
        <Separator />
        <Certification />
        <Separator />
        <TechnologyStack />
        <Separator />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
