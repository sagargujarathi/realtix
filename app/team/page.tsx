import JoinTeamCta from "../../components/team/JoinTeamCta";
import TeamHero from "../../components/team/TeamHero";
import TeamMember from "../../components/team/TeamMember";

// Server Component
export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sagar Gujarathi",
      role: "Founder & Full Stack Developer",
      image: "/images/team/sagar.webp",
      bio: "Full-stack developer with expertise in web applications and AI solutions. Passionate about creating technology that solves real business problems.",
      socials: {
        github: "https://github.com/sagargujarathi",
        twitter: "https://x.com/SagarGujarathi9",
        linkedin: "https://www.linkedin.com/in/gujarathisagar/",
      },
    },
    {
      name: "Sampath Gujarathi",
      role: "Co-Founder & Lead Developer",
      image: "/images/team/sampath.webp",
      bio: "Expert in cloud infrastructure and DevOps practices. Leads the technical vision and architecture for all company projects.",
      socials: {
        github: "https://github.com/gujarathisampath",
        twitter: "https://x.com/GSampath__",
        linkedin: "https://www.linkedin.com/in/sampathgujarathi/",
      },
    },
    {
      name: "Abhi Jai Kategari",
      role: "Chief Marketing Officer",
      image: "/images/team/abhi-jai.webp",
      bio: "Marketing specialist with a knack for building brand presence and driving customer acquisition strategies.",
      socials: {
        github: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/abhijai-kategari-7968b5263/",
      },
    },
    {
      name: "PSLV Datta Manas",
      role: "Lead Engineer",
      image: "/images/team/datta-manas.webp",
      bio: "Specialized in backend development and database architecture. Creates robust systems that scale effectively.",
      socials: {
        github: "https://github.com/dattamanas09",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/p-v-l-s-datta-manas-ab7ab3273/",
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <TeamHero />

      {/* Team members grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join our team section */}
      <JoinTeamCta />
    </div>
  );
}
