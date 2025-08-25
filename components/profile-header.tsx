const ProfileHeader = () => {
  return (
    // <div className="flex justify-center border-b">
    //   <div className="w-full md:w-lg">
    <div className="flex">
      <div className="border-r">
        <div className="p-0.5">
          <img
            src="./me.jpeg"
            alt="Small profile"
            className="aspect-square w-48 rounded-full outline-1 outline-offset-2 mx-auto object-cover object-top"
          />
        </div>
      </div>
      <div className="w-full self-end">
        <div className="text-xl font-semibold border-y px-4">
          Andrej Zafirovski
        </div>
        <div className="px-4">Software Engineer</div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ProfileHeader;
