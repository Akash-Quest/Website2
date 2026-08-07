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
  group: "leadership" | "team" | "advisory";
};

const members: Member[] = [
  {
    name: "Shriya Damani",
    title: "Co-Founder & CEO",
    location: "",
    image: "/Careers/Shriya.jpg",
    linkedin: "https://in.linkedin.com/in/shriya-damani-b460936",
    group: "leadership",
  },
  {
    name: "Akash Bhavsar",
    title: "Co-founder",
    location: "",
    image: "/Careers/Akash.jpg",
    linkedin: "https://www.linkedin.com/in/akashbhavsar",
    group: "leadership",
  },
  {
    name: "Rajeev Sharan",
    title: "Project Director - Seed Systems" ,
    location: "Delhi, India",
    image: "/Careers/Rajeev.jpg",
    group: "team",
  },
  {
    name: "Harshita Gupta",
    title: "Sr. Associate Consultant",
    location: "Delhi, India",
    image: "/Careers/Harshita.jpg",
    group: "team",
  },
  {
    name: "Teresa Khanna",
    title: "Sr. Consultant",
    location: "Noida, India",
    image: "/Careers/Teresa.jpg",
    group: "team",
  },
  {
    name: "Disha Yadav",
    title: "Associate Consultant",
    location: "Delhi, India",
    image: "/Careers/Disha.jpg",
    group: "team",
  },
  {
    name: "Yogender Narayan",
    title: "Associate Strategy Consultant",
    location: "Delhi, India",
    image: "/Careers/Yogender.jpg",
    group: "team",
  },
   {
    name: "Sambhav Jain",
    title: "Associate Consultant",
    location: "Delhi, India",
    image: "/Careers/Sambhav.jpg",
    group: "team",
  },

  {
    name: "Swapna Singh",
    title: "Lead Senior Research Analyst",
    location: "Ahmedabad, India",
    image: "/Careers/Swapna.jpg",
    group: "team",
  },
  {
    name: "Addisu Asfaw",
    title: "Senior Consultant",
    location: "Addis Ababa, Ethiopia",
    image: "/Careers/Addisu.jpg",
    group: "advisory",
  },
  // Advisory board — to be added later.
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
  const leaders = members.filter((m) => m.group === "leadership");
  const team = members.filter((m) => m.group === "team");
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
        <div className="mt-8">
          <h3 className="mb-4 font-bold text-gray-900 text-body-2xl">Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaders.map((member, idx) => (
              <MemberCard member={member} index={idx} key={idx} />
            ))}
          </div>
        </div>

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
            {team.map((member, idx) => (
              <MemberCard member={member} showIcons={false} index={idx} key={idx} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}