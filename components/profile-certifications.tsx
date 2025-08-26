import { ExternalLink } from "lucide-react";

export const ProfileCertification = () => {
  const CERTIFICATIONS = [
    {
      id: 1,
      title: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      date: "August 2023",
      image: "./apollo.svg",
      url: "https://www.apollographql.com/tutorials/certifications/39d99138-f297-4c0e-9374-f0c5cad26dce",
    },
    {
      id: 2,
      title: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "August 2023",
      image: "./neo4j.svg",
      url: "https://graphacademy.neo4j.com/c/1f303ca8-dc29-4b29-b212-7006427104f8/",
    },
  ];

  return (
    <div className="px-4">
      <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <h1 className="text-xl font-semibold">Certifications</h1>
      </div>
      <div className="flex flex-col">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw] last:after:bg-transparent"
          >
            <a href={cert.url}>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-12 w-12"
                  />
                  <div className="border-l p-2">
                    <div className="font-semibold">{cert.title}</div>
                    <div className="text-sm text-gray-500">{cert.issuer}</div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                </div>
                <ExternalLink className="text-muted-foreground" size={18} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCertification;
