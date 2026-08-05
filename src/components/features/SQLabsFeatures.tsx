'use client';
 
import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';
 
export default function SQLabsFeatures() {
  const audienceCards = [
    {
      icon: <Courthouse size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: '15-Minute Report Turnaround',
      desc: 'Qualified MD pathologist reports delivered and signed in under 15 minutes day or night, 365 days a year.',
    },
    {
      icon: <Bank size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'AI + ML Assisted Diagnosis',
      desc: 'Machine learning flags anomalies and assists pathologists  reducing human error and accelerating review time.',
    },
    {
      icon: <Bank size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: '5-Year Cloud Records',
      desc: 'Every patient\'s digital data stored securely in the cloud for 5 years accessible any time, no paper records required.',
    },
    {
      icon: <Courthouse size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Compliance Ready',
      desc: 'Meets Supreme Court guidelines. Approved and valid for insurance company and TPA reimbursements from dayone.',
    },
    {
      icon: <Buildings size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Admin & Billing Dashboard',
      desc: 'Real-time consumption analysis, billing management, referral doctor tracking, and daily report sheets for seniors.',
    },
    {
      icon: <Buildings size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Ongoing Staff Training',
      desc: 'Periodic online training sessions for lab technicians keeping your team current with protocols, quality standards, and platform updates.',
    },
    {
      icon: <Courthouse size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Instant Multi-Channel Delivery',
      desc: 'Reports sent simultaneously by WhatsApp, SMS, and Email to patient, referring doctor, and hospital the moment they\'re ready.',
    },
    {
      icon: <Bank size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Rural & Remote Access',
      desc: 'Brings qualified pathology to semi-urban and rural areas that have never had local diagnostic capability without physical infrastructure.',
    },
    {
      icon: <Buildings size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Universal Machine Integration',
      desc: 'All lab equipment connects directly to the LIMS. Zero manual data entry. Results flow automatically the moment a test completes.',
    },
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-3xl flex flex-col gap-4 Z-20">
            <Reveal as="p" variant="upSm" custom={0} className=" text-primary mb-3 block"> Platform Features</Reveal>

          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
            Everything A Modern Diagnostic <br />
            <em className="font-Semibold ">Network Needs.</em>
          </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug mx-auto ">
            Skyquest Labs is more than a reporting tool it's a complete operating system for your pathology network.
          </Reveal>
        </div>

        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="bg-white rounded-[16px] p-8 flex flex-col gap-4 border border-gray-200/30 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-10 h-10 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="font-semibold text-body-xl text-[#03030F] ">
                  {card.title}
                </h3>

                {/* Description Context string */}
                <p className="tracking-wide leading-relaxed text-muted">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
 
      </div>
    </section>
  );
}