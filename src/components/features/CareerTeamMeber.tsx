"use client";

import Image from "next/image";
import Reveal from "../ui/Reveal";

type Member = {
  name: string;
  title: string;
  location: string;
  image: string;
  email?: string;
  linkedin?: string;
  group: "team" | "advisory";
};

const members: Member[] = [
  {
    name: "Shriya Damani",
    title: "Co-Founder & CEO",
    location: "Global",
    image: "/Careers/Shriya.png",
    linkedin: "https://in.linkedin.com/in/shriya-damani-b460936",
    group: "team",
  },
  {
    name: "Akash Bhavsar",
    title: "Co-founder",
    location: "Global",
    image: "/Careers/Akash.png",
    linkedin: "https://www.linkedin.com/in/akashbhavsar",
    group: "team",
  },
  {
    name: "Dr. Shumete Gizaw",
    title: "Global Principal Advisor Government, Technology & Sovereign Partnerships",
    location: "",
    image: "/Careers/Shumete.jpg",
    group: "team",
  },
  {
    name: "Selamawit Zemene Mewosha",
    title: "Country Director Ethiopia",
    location: "",
    image: "/Careers/Selamawit.jpg",
    group: "team",
  },
  {
    name: "Addisu Asfaw Debea",
    title: "Senior Consultant (Program Management)",
    location: "",
    image: "/Careers/Addisu.jpg",
    group: "team",
  },
  {
    name: "Rajeev Sharan",
    title: "Project Director – Seed",
    location: "",
    image: "/Careers/Rajeeb.jpg",
    group: "team",
  },
  
  {
    name: "Yogender Narayan",
    title: "Associate Strategy Consultant",
    location: "",
    image: "/Careers/yogendra.png",
    group: "team",
  },
  {
    name: "Teresa Khanna",
    title: "Sr. Associate Consultant",
    location: "",
    image: "/Careers/Teresa.jpg",
    group: "team",
  },
  {
    name: "Disha Yadav",
    title: "Associate Consultant",
    location: "",
    image: "/Careers/Disha.jpg",
    group: "team",
  },
  {
    name: "Harshita Gupta",
    title: "Sr. Associate Consultant",
    location: "",
    image: "/Careers/Harshita.jpg",
    group: "team",
  },

  {
    name: "Swapna Singh",
    title: "Lead Senior Research Analyst",
    location: "",
    image: "/Careers/Swapna.jpg",
    group: "team",
  },
  {
    name: "Hardik Prajapati",
    title: "Accountant",
    location: "",
    image: "/Careers/Hardhik.png",
    group: "team",
  },
  {
    name: "Richa Thankur",
    title: "Lead - HR",
    location: "",
    image: "/Careers/Richa.jpg",
    group: "team",
  },
  {
    name: "Aditya Agrwal",
    title: "Software Engineer",
    location: "",
    image: "/Careers/Aditya.png",
    group: "team",
  },
  {
    name: "Simolee Dawada",
    title: "Jr. HR Executive",
    location: "",
    image: "/Careers/Simolee.png",
    group: "team",
  },
  {
    name: "Raginee Sarkar",
    title: "Team Lead Content Editor",
    location: "",
    image: "/Careers/Raginee.png",
    group: "team",
  },
  {
    name: "Goutam Prajapat",
    title: "Design Executive (Graphics & UI/UX)",
    location: "",
    image: "/Careers/Goutam.png",
    group: "team",
  },
  
  {
    name: "Priyanshi Harwani",
    title: "Senior Business Development Executive",
    location: "",
    image: "/Careers/Priyanshi.jpg",
    group: "team",
  },
  {
    name: "Chinmay Parab",
    title: "Senior Content Writer",
    location: "",
    image: "/Careers/Chinamay.png",
    group: "team",
  },
  {
    name: "Prachi Mishra",
    title: "Research Associate",
    location: "",
    image: "/Careers/Prachi.png",
    group: "team",
  },
  {
    name: "Shivani Chaudhary",
    title: "Research Associate",
    location: "",
    image: "/Careers/Shibani.png",
    group: "team",
  },
   {
    name: "Maharishi Pancholi",
    title: "Research Associate",
    location: "",
    image: "/Careers/Maharishi.jpg",
    group: "team",
  },
   {
    name: "Deb Sundar Khan",
    title: "Jr. Data Science Engineer",
    location: "",
    image: "/Careers/Dev.Jpg",
    group: "team",
  },
   {
    name: "Jash Vaghela",
    title: "Jr. AI/ML Developer",
    location: "",
    image: "/Careers/Jash.jpg",
    group: "team",
  },
  
   {
    name: "Akash Rout",
    title: "Frontend Developer",
    location: "",
    image: "/Careers/Akash2.jpg",
    group: "team",
  },
  
];

function MemberCard({
  member,
  showIcons = true,
  index = 0,
}: {
  member: Member;
  showIcons?: boolean;
  index?: number;
}) {
  return (
    <Reveal as="div" variant="upSm" custom={index} className="flex gap-4 bg-background rounded-xl p-2 ">
      {/* Left: Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-22  2xl:w-25 self-stretch rounded-lg object-cover flex-shrink-0"
      />
      {/* Right: Description */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <p className=" font-semibold text-gray-900 text-body-lg">{member.name}</p>
          <p className=" text-[#03030FB2] ">{member.title}</p>
          <p className=" text-[#03030FB2] ">{member.location}</p>
        </div>
        {showIcons && (member.email || member.linkedin) && (
          <div className="flex justify-end gap-2 mt-0">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="w-7 h-7 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
              >
                <Image src="/Careers/mail.svg" alt="" width={16} height={16} className="w-6 h-6" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="w-7 h-7 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
              >
                <Image src="/Careers/linkedin.svg" alt="" width={20} height={20} className="w-6 h-6" />
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function TeamGrid() {
  const team = members.filter((m) => m.group === "team");
  const founders = team.slice(0, 2);
  const restOfTeam = team.slice(2);
  const advisory = members.filter((m) => m.group === "advisory");

  return (
    <section className="bg-white">
      <div className="page-container">
        <h2 className="font-bold">
          Our People Powering<br />

        <em className="font-semibold">
          Transformation
        </em>
        </h2>

        {advisory.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-4 font-bold text-gray-900 text-body-2xl">Advisors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisory.map((member, idx) => (
                <MemberCard member={member} index={idx} key={idx} />
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-8">
          <h3 className="mb-4 font-bold text-gray-900 text-body-2xl">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {founders.map((member, idx) => (
              <MemberCard member={member} index={idx} key={idx} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {restOfTeam.map((member, idx) => (
              <MemberCard member={member} showIcons={false} index={idx} key={idx} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}