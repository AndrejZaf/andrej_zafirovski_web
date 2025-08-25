const ProfileLinks = () => {
  return (
    <div>
      <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <h1 className="text-xl font-semibold px-4">Links</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <a
          href="https://github.com/AndrejZaf"
          className="hover:underline border-r p-4"
          target="_blank"
        >
          <div className="flex flex-row gap-x-2 items-center">
            <div>
              <img src="./github.svg" alt="GitHub" className="h-12 w-12" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">GitHub</div>
              <div>AndrejZaf</div>
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/andrej-zafirovski/"
          className="hover:no-underline border-l p-4"
          target="_blank"
        >
          <div className="flex flex-row gap-x-2 items-center">
            <div>
              <img src="./linkedin.svg" alt="LinkedIn" className="h-12 w-12" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">LinkedIn</div>
              <div>andrej-zafirovski</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProfileLinks;
