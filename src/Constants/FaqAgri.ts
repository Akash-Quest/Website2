export const agriFaqs = [
    {
    question: "Which states is AgriMap currently available in?",
    answer:
      "AgriMap is currently deployed and live in Bihar across all 38 districts. Pilots are underway in Uttar Pradesh and Madhya Pradesh. The platform is built to scale to any Indian state with DSE and ICAR data pipelines.",
  },
  {
    question: "Where does the seed data come from?",
    answer:
      "Data is sourced from DSE Bihar crop and seed reports, ICAR-IIWBR, ICAR-IPR, the State Seed Sub-Committee, and the BAMETI ground surveys. Satellite imagery is from open NDVI data fused with ground truth. New variety data is pulled directly from the BRBN national registry.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Core SRR and distribution data updates on a weekly cadence during the season. NDVI satellite layers refresh every 5–10 days depending on cloud cover. Market prices update daily. Pest alert layers are updated in near-real-time via field input and partner APIs.",
  },
  {
    question: "Can banks integrate AgriMap data into their own systems?",
    answer:
      "Yes. AgriMap provides a REST API and data export layer for financial institutions. Banks can pull KrishiScore, SRR, and NDVI indices by district or block code and integrate them into credit scoring workflows or loan origination systems.",
  },
  {
    question: "Is the platform available in Hindi and other regional languages?",
    answer:
      "The advisory dispatch system sends farmer messages in Hindi. The dashboard UI currently operates in English, with Hindi localization in development. Advisory templates can be customized per crop, block, and season by state agriculture teams.",
  },
  {
    question: "What does onboarding look like for a new state?",
    answer:
      "Onboarding takes 4–6 weeks. Our team handles data pipeline configuration, boundary mapping, user provisioning, and a two-day training session for departmental users. We provide ongoing support through a dedicated state account team.",
  },
];
 