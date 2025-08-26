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
      <div className="mx-auto max-w-2xl">
        <Header />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileHeader />
        </div>
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileDetails />
        </div>
        <Separator />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileAbout />
        </div>
        <Separator />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileLinks />
        </div>
        <Separator />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileExperience />
        </div>
        <div className="relative flex h-8 w-full border-x border-edge before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-fg:var(--color-black)]/5"></div>
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileEduction />
        </div>
        <Separator />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <ProfileCertification />
        </div>
        <Separator />
        <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] border-x">
          <TechnologyStack />
        </div>
      </div>
    </div>
  );
};

export default Page;
