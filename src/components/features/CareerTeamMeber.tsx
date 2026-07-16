"use client";

import { Mail, } from "lucide-react";

type Member = {
  name: string;
  title: string;
  location: string;
  image: string;
};
const Linkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const members: Member[] = [
  {
    name: "Judith Rodriguez", 
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Bradley Lawlor",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Judith Rodriguez",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Bradley Lawlor",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Judith Rodriguez",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Chris Glasser",
    title: "Founder & Chief Executive Officer",
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/120?img=12",
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex gap-4 bg-background rounded-xl p-2 ">
      {/* Left: Image */}
      <img 
        src={member.image}
        alt={member.name}
        className="w-22 h-22 rounded-lg object-cover flex-shrink-0"
      />
      {/* Right: Description */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <p className="text-sm font-semibold text-gray-900">{member.name}</p>
          <p className="text-xs text-[#03030FB2] mt-0">{member.title}</p>
          <p className="text-xs text-[#03030FB2] mt-0">{member.location}</p>
        </div>
        <div className="flex justify-end gap-2 mt-0">
          <button
            type="button"
            aria-label={`Email ${member.name}`}
            className="w-6 h-6 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label={`${member.name} on LinkedIn`}
            className="w-6 h-6 flex items-center justify-center rounded-sm border-none text-gray-500 bg-white"
          >
            <Linkedin  />
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
          <h3 className="mb-4 text-lg font-bold text-gray-900">Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaders.map((member, idx) => (
              <MemberCard member={member} key={idx} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Our Team</h3>
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