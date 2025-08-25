const ProfileAbout = () => {
  return (
    <div className="px-4">
      <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <h1 className="text-xl font-semibold">About Me</h1>
      </div>
      <p className="text-justify">
        Full Stack Engineer with more than five years of experience developing
        primarily web applications. Always interested in learning new languages
        and technologies and automating manual & error prone work.
      </p>
    </div>
  );
};

export default ProfileAbout;
