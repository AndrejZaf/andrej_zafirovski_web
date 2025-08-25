export const ProfileEduction = () => {
  return (
    <div className="px-4">
      <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <h1 className="text-xl font-semibold">Education</h1>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">
          Faculty of Computer Science and Engineering within UKIM
        </div>
        <div className="flex justify-between">
          <div className="italic text-sm text-gray-500">
            Bachelor of Science (B.S.) in Computer Science
          </div>
          <div className="text-sm text-gray-500">
            September 2017 – August 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEduction;
