const ProfileAbout = () => {
  return (
    <div className="px-4">
      <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <h1 className="text-xl font-semibold">About Me</h1>
      </div>
      <p className="text-justify">
        Full Stack Engineer with 5+ years of experience building scalable
        microservices and modern web applications. Experienced in Java,
        TypeScript, Spring Boot, and React. Passionate about automation, clean
        architecture, and solving complex system problems.
      </p>
    </div>
  );
};

export default ProfileAbout;
