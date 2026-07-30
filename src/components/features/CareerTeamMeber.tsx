"use client";

import Image from "next/image";

type Member = {
  name: string;
  title: string;
  location: string;
  image: string;
};

const members: Member[] = [
  {
    name: "Judith Rodriguez",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe1.jpg",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe2.jpg",
  },
  {
    name: "Bradley Lawlor",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe1.jpg",
  },
  {
    name: "Judith Rodriguez",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe2.jpg",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe1.jpg",
  },
  {
    name: "Bradley Lawlor",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe2.jpg",
  },
  {
    name: "Judith Rodriguez",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe1.jpg",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "/Careers/pe2.jpg",
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex gap-4 bg-background rounded-xl p-2 ">
      {/* Left: Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-22 2xl:w-25 self-stretch rounded-lg object-cover flex-shrink-0"
      />
      {/* Right: Description */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <p className=" font-semibold text-gray-900 text-body-lg">{member.name}</p>
          <p className=" text-[#03030FB2] ">{member.title}</p>
          <p className=" text-[#03030FB2] ">{member.location}</p>
        </div>
        <div className="flex justify-end gap-2 mt-0">
          <button
            type="button"
            aria-label={`Email ${member.name}`}
            className="w-7 h-7 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
          >
            <Image src="/Careers/mail.svg" alt="" width={16} height={16} className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label={`${member.name} on LinkedIn`}
            className="w-7 h-7 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
          >
            <Image src="/Careers/linkedin.svg" alt="" width={20} height={20} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamGrid() {
  const [leaders, team] = [members.slice(0, 2), members.slice(2)];

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
              <MemberCard member={member} key={idx} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-bold text-gray-900 text-body-2xl">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, idx) => (
              <MemberCard member={member} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}