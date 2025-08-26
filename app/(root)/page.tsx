import Header from "@/components/header";
import ProfileAbout from "@/components/profile-about";
import ProfileCertification from "@/components/profile-certifications";
import ProfileDetails from "@/components/profile-details";
import ProfileEduction from "@/components/profile-education";
import ProfileExperience from "@/components/profile-experience";
import ProfileHeader from "@/components/profile-header";
import ProfileLinks from "@/components/profile-links";
import { Separator } from "@/components/separator";
import TechnologyStack from "@/components/technology-stack";

const Page = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="mx-auto max-w-2xl border-l border-r">
        <Header />
        <ProfileHeader />
        <ProfileDetails />
        <ProfileAbout />
        <Separator />
        <ProfileLinks />
        <Separator />
        <ProfileExperience />
        <ProfileEduction />
        <Separator />
        <ProfileCertification />
        <Separator />
        <TechnologyStack />
      </div>
    </div>
  );
};

export default Page;
