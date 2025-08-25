const ProfileLinks = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold px-4">Links</h1>
      <div className="grid grid-cols-2 border-t gap-x-4">
        <a
          href="https://github.com/AndrejZaf"
          className="hover:underline border-r p-4"
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
          href="https://www.linkedin.com/in/andrej-zafirovski"
          className="hover:underline border-l p-4"
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
