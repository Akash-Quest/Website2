'use client';

import React from 'react';
import { Location, Buildings, Notification } from 'iconsax-react';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';

export default function AlwaysOnGovernance() {
  const items = [
    {
      icon: Location,
      title: 'AI-Powered Chatbot',
      description: 'Handles applications, status checks, and FAQs conversationally, across every department.',
    },
    {
      icon: Buildings,
      title: 'Voice-Assisted',
      description: 'Spoken interaction support for citizens with low literacy or limited typing comfort.',
    },
    {
      icon: Notification,
      title: 'Multilingual By Default',
      description: 'English, Hindi, and any regional language Garhwali, Kumaoni, and more.',
    },
    {
      icon: Location,
      title: 'Fully Encrypted',
      description: 'End-to-end encrypted, government-verified channel citizens can trust.',
    },
    {
      icon: Buildings,
      title: 'Real-Time Dashboards',
      description: 'Live oversight for officials case load, grievance status, project delays, alerts.',
    },
    {
      icon: Notification,
      title: '300+ Service Integrations',
      description: 'Proven integration depth from the Andhra Pradesh state-wide rollout, ready to replicate.',
    },
  ];

  return (
    <WhatWeOfferGrid
      eyebrow="Platform Features"
      heading={
        <>
          Built To Deliver Governance At{" "}
          <em className="font-semibold">Population Scale.</em>
        </>
      }
      description="AlwaysON is more than a chatbot it's a complete digital governance layer deployable by any state government in weeks."
      items={items}
      bgClassName="bg-[#F7F5F1]"
    />
  );
}
