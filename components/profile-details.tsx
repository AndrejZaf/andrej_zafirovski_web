import { Code, Mail, MapPinIcon, Phone } from "lucide-react";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col gap-1 px-4 py-1">
      <div className="flex items-center gap-x-2">
        <div
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground border"
          aria-hidden
        >
          <Code size={14} />
        </div>
        <div>Software Engineer</div>
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground border"
          aria-hidden
        >
          <MapPinIcon size={14} />
        </div>
        <div>Skopje, North Macedonia</div>
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground border"
          aria-hidden
        >
          <Phone size={14} />
        </div>
        <div>+389 72 206 354</div>
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground border"
          aria-hidden
        >
          <Mail size={14} />
        </div>
        <div>andrej.zafirovski@gmail.com</div>
      </div>
    </div>
  );
};

export default ProfileDetails;
