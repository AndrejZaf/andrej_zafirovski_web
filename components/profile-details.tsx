import { Code, Mail, MapPinIcon, Phone } from "lucide-react";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col gap-1 px-4">
      <div className="flex items-center gap-x-2">
        <Code size={14} />
        <div>Software Engineer</div>
      </div>
      <div className="flex items-center gap-x-2">
        <MapPinIcon size={14} />
        <div>Skopje, North Macedonia</div>
      </div>
      <div className="flex items-center gap-x-2">
        <Phone size={14} />
        <div>+389 72 206 354</div>
      </div>
      <div className="flex items-center gap-x-2">
        <Mail size={14} />
        <div>andrej.zafirovski@gmail.com</div>
      </div>
    </div>
  );
};

export default ProfileDetails;
