import type { ContentBlock } from "@/lib/reports";

export type Insight = {
  id: number;
  image: string;
  /** Content-type facet shown on the card. */
  category: string;
  /** Middle breadcrumb crumb on the detail page, e.g. "Case Snapshot". */
  type: string;
  /** Topic tag shown as the badge above the title and as the last breadcrumb crumb (lowercased). */
  topic: string;
  date: string;
  readTime: string;
  title: string;
  /** Trailing portion of `title` (must be a suffix of it) rendered in italic serif emphasis on the detail page. */
  titleEmphasis?: string;
  description: string;
  /** Kicker line rendered below the hero image on the detail page. */
  subtitle: string;
  /** Trailing portion of `subtitle` (must be a suffix of it) rendered in italic serif emphasis. */
  subtitleEmphasis?: string;
  body: ContentBlock[];
};

export const insightData = {
  eyebrow: "Insight",
  heading: (
    <>
      From Insight To <em className="font-semibold">Action</em>
    </>
  ),
  description:
    "Discover thought leadership designed to help organisations make smarter decisions, scale innovation, and create measurable impact.",
  viewAllButton: "View All Insight",
  viewAllHref: "/insight",
  readMoreButton: "Read More",
  caseStudies: [
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1780299799/skyquest/insight/dsga3ncwopnn7ut0eygt.webp",
      category: "Articles",
      type: "Article",
      topic: "Healthcare",
      date: "August 03, 2026",
      readTime: "8 Min read",
      title: "Medical Device Innovation in 2025: Redefining the Frontiers of Clinical Technology",
      titleEmphasis: "Frontiers of Clinical Technology",
      description:
        "Exploring the breakthroughs in intelligent diagnostics, wearable therapies, and next-generation clinical technologies.",
      subtitle: "Advancing Patient Outcomes Through Intelligent Diagnostics and Connected Therapies",
      subtitleEmphasis: "Intelligent Diagnostics and Connected Therapies",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "2025 marked a turning point for the global medical device industry, a year when intelligence, personalization, and real-time data moved from experimental to essential. What had long been driven by incremental engineering improvements evolved into a convergence of advanced materials, intelligent systems, and digitally enabled design philosophies. Medical devices were no longer viewed as isolated tools but as adaptive, data-driven extensions of clinical decision-making and patient care.",
        },
        {
          type: "paragraph",
          text: "Healthcare systems worldwide faced growing burdens from chronic disease prevalence, aging populations, clinician shortages, and rising care costs. In response, medical device manufacturers accelerated innovation by integrating real-time sensing, connectivity, and artificial intelligence (AI) into therapeutic and diagnostic platforms. Regulatory pathways also adapted, enabling faster translation of breakthrough technologies into clinical practice without compromising safety or efficacy.",
        },
        {
          type: "paragraph",
          text: "The result was a market defined by precision, personalization, and performance, where next-generation devices actively contributed to patient outcomes rather than serving purely mechanical functions.",
        },
        { type: "heading", text: "Why 2025 Was Different" },
        {
          type: "paragraph",
          text: "Unlike prior years marked by incremental progress, 2025 represented a clear inflection point for the medical device industry. Artificial intelligence shifted from experimental pilots to embedded, clinically trusted functionality within core devices. Wearables and at-home therapies gained regulatory approval and real-world validation, moving decisively into mainstream care. At the same time, maturing regulatory frameworks enabled faster commercialization without compromising safety, allowing innovation to scale with confidence rather than caution.",
        },
        { type: "heading", text: "Key M&A and Consolidation Trends" },
        {
          type: "paragraph",
          text: "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth. Leading manufacturers prioritized acquisitions and partnerships that strengthened their positions in smart devices, digital integration, advanced materials, and AI-enabled platforms rather than pursuing traditional volume-driven growth.",
        },
        { type: "heading", text: "Key consolidation patterns included:" },
        {
          type: "image",
          src: "https://res.cloudinary.com/dftrsspaz/image/upload/v1769601299/skyquest/editor/elmseizf3wegf5p2gzze.webp",
          alt: "Key Consolidation Patterns: AI & data-driven startups, digital health partnerships, femtech & orthopedic ventures, private equity fusion",
          caption: "Key Consolidation Patterns",
        },
        {
          type: "list",
          items: [
            "Established device companies acquiring startups specializing in AI-enabled sensing, software-driven therapy optimization, and real-time data analytics.",
            "Increased partnerships between medical device manufacturers and digital health or imaging companies to accelerate connected and interoperable device ecosystems.",
            "Strategic investments in femtech, neuromodulation, and orthopedic innovation, where unmet clinical need and regulatory momentum aligned.",
            "Private equity activity concentrating on differentiated, IP-rich device platforms with clear regulatory pathways and scalable manufacturing models.",
          ],
        },
        { type: "heading", text: "What 2025 M&A Trends Signal for Device Manufacturers" },
        {
          type: "list",
          items: [
            "For mid-sized medical device companies, 2025 consolidation trends signal rising pressure to clearly define a differentiated technology niche, as acquirers increasingly favor capability-led expansion over pure revenue or geographic scale.",
            "IP-rich platforms are being prioritized over scale-driven assets because proprietary algorithms, data, and defensible patents enable faster innovation cycles, stronger pricing power, and smoother integration into connected, software-centric device ecosystems.",
          ],
        },
        { type: "heading", text: "Notable Product Launches and Platform Innovations" },
        { type: "subheading", text: "Medtronic" },
        {
          type: "paragraph",
          text: "In February 2025, Medtronic plc received U.S. Food and Drug Administration (FDA) approval for its BrainSense™ Adaptive deep brain stimulation (aDBS) and BrainSense™ Electrode Identifier (EI). This next-generation technology personalized therapy in real time by responding dynamically to a patient's brain signals, reducing the need for manual intervention and improving symptom control.",
        },
        {
          type: "paragraph",
          text: "The clinical and technological significance of this advancement was underscored by its inclusion in TIME magazine's list of Best Innovations of 2025, reinforcing the growing role of intelligent neuromodulation in treating complex neurological conditions.",
        },
        { type: "subheading", text: "Osteoboost Health Inc." },
        {
          type: "paragraph",
          text: "In May 2025, Osteoboost Health Inc. announced nationwide availability of Osteoboost, the first and only FDA-approved wearable prescription medical device designed to address low bone density. Intended for at-home use, the device delivers targeted vibration therapy to the spine and hips—regions most susceptible to osteoporotic fractures.",
        },
        {
          type: "paragraph",
          text: "Clinical validation played a critical role in its adoption. A double-blinded, placebo-controlled study conducted at the University of Nebraska Medical Center demonstrated substantial reductions in bone density and strength loss among postmenopausal women with osteopenia. These outcomes highlighted a shift toward preventive, wearable-based interventions that extend care beyond traditional clinical settings.",
        },
        { type: "subheading", text: "Sebela Women's Health Inc." },
        {
          type: "paragraph",
          text: "In February 2025, Sebela Women's Health Inc. announced FDA approval of MIUDELLA®, a novel copper intrauterine system for pregnancy prevention lasting up to three years.",
        },
        {
          type: "paragraph",
          text: "MIUDELLA® introduced a differentiated design by using less than half the copper of existing copper-based IUDs in the United States, supported by a flexible nitinol frame. Its fully preloaded inserter with a reduced diameter simplified placement, and improved patient comfort, addressing long-standing barriers to IUD adoption.",
        },
        { type: "subheading", text: "Proprio" },
        {
          type: "paragraph",
          text: "In April 2025, Proprio received its second major FDA 510(k) clearance for its AI-powered surgical guidance platform. Proprio's Paradigm platform enabled real-time, 3D, dynamic visualization of patient anatomy during surgery—allowing surgeons to assess alignment, positioning, and procedural success intraoperatively. Prior to this innovation, surgeons often relied on intermittent imaging that required procedural pauses, increasing anesthesia time and surgical risk.",
        },
        {
          type: "paragraph",
          text: "The integration of real-time AI-driven feedback marked a turning point in surgical precision, reducing the likelihood of revision procedures and setting new standards for intraoperative decision-making.",
        },
        { type: "heading", text: "Government Initiatives and Large-Scale Projects Worldwide" },
        {
          type: "paragraph",
          text: "Government support is expected to be highly crucial for shaping and fast-tracking medical device innovation in the future. With support funding and incentives for local manufacturing, governments are attracting more investments in the medical device sector.",
        },
        {
          type: "list",
          items: [
            "In November 2025, the Government of South Korea announced the launch of a new USD 622.1 million initiative to boost the innovation of next-gen medical technologies. The initiative targets AI diagnostics, medical robotics, and next-gen implants. The Ministry of Trade, Industry and Energy said the program is being developed as a pan-government collaboration that will prioritize technologies with strong clinical and commercial potential.",
          ],
        },
        { type: "heading", text: "Strategic Takeaways from 2025" },
        {
          type: "paragraph",
          text: "Medical device innovation in 2025 revealed several defining themes shaping the industry's future:",
        },
        {
          type: "list",
          items: [
            "Intelligence is becoming embedded, not adjunct: Devices are evolving into adaptive systems that respond dynamically to patient data.",
            "Wearable and at-home therapies are gaining clinical credibility: Preventive and decentralized care models are accelerating adoption.",
            "Patient-centric design is now a competitive necessity: Ease of use and comfort are critical to long-term success.",
            "AI is redefining clinical precision: Real-time analytics and guidance are reshaping diagnostics, surgery, and therapy delivery.",
            "Regulatory alignment is enabling faster innovation cycles: Adaptive frameworks are supporting responsible technology adoption.",
          ],
        },
        {
          type: "paragraph",
          text: "As the medical device industry moves beyond 2025, innovation is no longer measured solely by technological novelty but by its ability to seamlessly integrate into clinical workflows, improve outcomes, and scale responsibly. The convergence of engineering excellence, digital intelligence, and regulatory maturity is setting the stage for a new era of patient-centered healthcare innovation.",
        },
        { type: "heading", text: "What This Means for 2026" },
        {
          type: "list",
          items: [
            "Capital in 2026 is expected to concentrate on AI-native medical devices, connected surgical platforms, neuromodulation, and clinically validated wearable therapies with clear outcome and reimbursement pathways.",
            "The most attractive device categories will be those enabling preventive care, decentralized treatment models, and software-driven optimization integrated into clinical workflows.",
            "Funding momentum is likely to slow for standalone hardware innovations, incremental feature upgrades, and technologies lacking strong clinical validation, interoperability, or a scalable commercialization strategy.",
          ],
        },
      ] as ContentBlock[],
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1758190105/skyquest/insight/w2uqryq6ki2rhmvj9vqj.webp",
      category: "Articles",
      type: "Article",
      topic: "Agriculture",
      date: "TBD",
      readTime: "5 Min read",
      title: "Emerging Trends and Markets in the Fertilizers & Agri-Chemicals Sector",
      titleEmphasis: "Fertilizers & Agri-Chemicals Sector",
      description:
        "Explore the top 10 emerging markets in the fertilizers and agricultural chemicals sector, from biopesticides and biofertilizers to seed treatments and microgreens, driving sustainable farming and future food security.",
      subtitle: "Charting the Top 10 Emerging Markets in Fertilizers & Agri-Chemicals",
      subtitleEmphasis: "Fertilizers & Agri-Chemicals",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "The push for higher crop yields while sustainability and environmental concerns remain under wraps is giving the agricultural sector a major shake-up in industry. The fertilizer & agricultural chemical industry is rapidly changing as food security becomes paramount. Innovations such as biopesticides, biofertilizers, and complicated crop protection methods are being developed to allow farmers over these hurdles.",
        },
        {
          type: "heading",
          text: "Top 10 Globe's Top Developing Markets in the Industry that will Shape the Future of Agriculture",
        },
        {
          type: "table",
          headers: ["Markets", "2024", "2025", "2032", "CAGR"],
          rows: [
            ["Agrochemicals Market", "USD 261.38 Billion", "USD 270.78 Billion", "USD 346.86 Billion", "3.6%"],
            ["Biopesticides Market", "USD 8.32 Billion", "USD 9.48 Billion", "USD 23.74 Billion", "14.0%"],
            ["Crop Protection Chemicals Market", "USD 83.4 Billion", "USD 87.48 Billion", "USD 116.54 Billion", "4.9%"],
            ["Seed Treatment Market", "USD 7.38 Billion", "USD 7.98 Billion", "USD 13.86 Billion", "8.2%"],
            ["Biofertilizer Market", "USD 2.87 Billion", "USD 3.16 Billion", "USD 6.28 Billion", "10.3%"],
            ["Nitric Acid Market", "USD 25.86 Billion", "USD 26.79 Billion", "USD 34.31 Billion", "3.6%"],
            ["Agricultural Surfactants Market", "USD 1.44 Billion", "USD 1.52 Billion", "USD 2.3 Billion", "5.3%"],
            ["Agricultural Micronutrients Market", "USD 4567.62 Million", "USD 4933.03 Million", "USD 8454.35 Million", "8%"],
            ["Microgreens Market", "USD 3.18 Billion", "USD 3.53 Billion", "USD 7.37 Billion", "11.1%"],
            ["Insecticides Market", "USD 9.54 Billion", "USD 9.98 Billion", "USD 13.68 Billion", "4.6%"],
          ],
        },
        {
          type: "paragraph",
          text: "Agrochemicals Market: Today farming increasingly depends on the agrochemical market that comprises fertilizers, insecticides, and herbicides. As the world's population continues to grow, so does the demand to enhance crop yields and defend crops against insects and diseases. The trend in the sector is towards sustainable agrochemical solutions since consumers claim their agricultural practices are organic and green. According to a report, the agrochemicals market size is expected to reach USD 346.86 Billion by 2032.",
          segments: [
            { text: "Agrochemicals Market: ", bold: true },
            "Today farming increasingly depends on the agrochemical market that comprises fertilizers, insecticides, and herbicides. As the world's population continues to grow, so does the demand to enhance crop yields and defend crops against insects and diseases. The trend in the sector is towards sustainable agrochemical solutions since consumers claim their agricultural practices are organic and green. According to a report, the agrochemicals market size is expected to reach USD 346.86 Billion by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Biopesticides Market: Biopesticides are one of the fast-growing alternatives to conventional chemical pesticides as they have gained widespread acceptance due to environmental safety. The market is rapidly growing because of the rise in consumer demand for organic food and growing concerns about pesticide resistance. The biopesticides market size is expected to grow at a 14.0% compound annual growth rate (CAGR), owing to the growing shift of producers and farmers towards safer and more sustainable farming practices.",
          segments: [
            { text: "Biopesticides Market: ", bold: true },
            "Biopesticides are one of the fast-growing alternatives to conventional chemical pesticides as they have gained widespread acceptance due to environmental safety. The market is rapidly growing because of the rise in consumer demand for organic food and growing concerns about pesticide resistance. The biopesticides market size is expected to grow at a 14.0% compound annual growth rate (CAGR), owing to the growing shift of producers and farmers towards safer and more sustainable farming practices.",
          ],
        },
        {
          type: "paragraph",
          text: "Crop Protection Chemicals Market: Crop protection chemicals protect crops against weeds, pests, and diseases. One of the significant crop protection chemicals market trends is integrated pest management that entails chemical, biological, and mechanical control. Two of the innovations underway in crop protection products include microencapsulation and slow-release pesticides made to enhance crop protection product's efficiency with less negative impact on the environment. The crop protection chemicals market size is poised to register a CAGR of 4.9% by 2032.",
          segments: [
            { text: "Crop Protection Chemicals Market: ", bold: true },
            "Crop protection chemicals protect crops against weeds, pests, and diseases. One of the significant crop protection chemicals market trends is integrated pest management that entails chemical, biological, and mechanical control. Two of the innovations underway in crop protection products include microencapsulation and slow-release pesticides made to enhance crop protection product's efficiency with less negative impact on the environment. The crop protection chemicals market size is poised to register a CAGR of 4.9% by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Seed Treatment Market: Seed treatment is an important step for enhancing germination rates and protection of seeds from pests and diseases before planting. Since farmers would like to improve the resistance of their crops and would want assured improved seed quality right from the planting time, this industry is, in fact, mushrooming. Chemical and biological seed treatments protect seeds from diseases and facilitate nutrient uptake for the overall health of seeds. The global seed treatment market share is expected to be around USD 13.86 Billion by 2032.",
          segments: [
            { text: "Seed Treatment Market: ", bold: true },
            "Seed treatment is an important step for enhancing germination rates and protection of seeds from pests and diseases before planting. Since farmers would like to improve the resistance of their crops and would want assured improved seed quality right from the planting time, this industry is, in fact, mushrooming. Chemical and biological seed treatments protect seeds from diseases and facilitate nutrient uptake for the overall health of seeds. The global seed treatment market share is expected to be around USD 13.86 Billion by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Biofertilizer Market: Biofertilizers are increasingly being adopted as a more environmentally friendly alternative to chemical fertilizers since they utilize natural microorganisms for improving the fertility of the soil and stimulating plant growth. These products also decrease harmful effects of chemical fertilizers on the environment, enhance availability of nutrients, and increase nitrogen fixation in soils. Organic farming is increasing, and it's an environmentally friendly solution to agriculture; this increases the demand for biofertilizers. The biofertilizers market is expected to grow at a CAGR of 10.3% by 2032.",
          segments: [
            { text: "Biofertilizer Market: ", bold: true },
            "Biofertilizers are increasingly being adopted as a more environmentally friendly alternative to chemical fertilizers since they utilize natural microorganisms for improving the fertility of the soil and stimulating plant growth. These products also decrease harmful effects of chemical fertilizers on the environment, enhance availability of nutrients, and increase nitrogen fixation in soils. Organic farming is increasing, and it's an environmentally friendly solution to agriculture; this increases the demand for biofertilizers. The biofertilizers market is expected to grow at a CAGR of 10.3% by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Nitric Acid Market: The fertilizer in the form of ammonium nitrate is a critical part of increasing crop output, and the demand for that has given rise to nitric acid. The need for nitrogenous fertilizers used to improve soil fertility has created the market for nitric acid. Agriculture is becoming increasingly expansive and demanding fertilizers; therefore, this is changing the market's demand for nitric acid. For the world, there would be an increased demand for nitrogen fertilizers, thus boosting the nitric acid market growth to USD 34.31 billion in 2032.",
          segments: [
            { text: "Nitric Acid Market: ", bold: true },
            "The fertilizer in the form of ammonium nitrate is a critical part of increasing crop output, and the demand for that has given rise to nitric acid. The need for nitrogenous fertilizers used to improve soil fertility has created the market for nitric acid. Agriculture is becoming increasingly expansive and demanding fertilizers; therefore, this is changing the market's demand for nitric acid. For the world, there would be an increased demand for nitrogen fertilizers, thus boosting the nitric acid market growth to USD 34.31 billion in 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Agricultural Surfactants Market: Agricultural surfactants are the chemicals that enhance the dispersion, wetting, and spreading of fertilizers, insecticides, and herbicides on plant surfaces. These surfactants are witnessing increased demand as precision farming becomes more fashionable and is applied with more precision. The agricultural surfactants industry is estimated to reach USD 2.3 billion by 2032.",
          segments: [
            { text: "Agricultural Surfactants Market: ", bold: true },
            "Agricultural surfactants are the chemicals that enhance the dispersion, wetting, and spreading of fertilizers, insecticides, and herbicides on plant surfaces. These surfactants are witnessing increased demand as precision farming becomes more fashionable and is applied with more precision. The agricultural surfactants industry is estimated to reach USD 2.3 billion by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Agricultural Micronutrients Market: Micronutrients include minerals, zinc, iron, copper, and manganese, which are used in the plant for growth and development. Although they are needed only in trace amounts, these micronutrients are essential to improving crop quality and quantity. Lack of a significant number of micronutrients has been found to lead to reduced yields and unhealthy plant growth. Consequently, the increased knowledge of agricultural micronutrients among farmers has led to an increased demand for the products. The agricultural micronutrients market will still grow at a CAGR of 8% by 2032, as farmers continue to pursue crop production and maximize nutrition for their plants.",
          segments: [
            { text: "Agricultural Micronutrients Market: ", bold: true },
            "Micronutrients include minerals, zinc, iron, copper, and manganese, which are used in the plant for growth and development. Although they are needed only in trace amounts, these micronutrients are essential to improving crop quality and quantity. Lack of a significant number of micronutrients has been found to lead to reduced yields and unhealthy plant growth. Consequently, the increased knowledge of agricultural micronutrients among farmers has led to an increased demand for the products. The agricultural micronutrients market will still grow at a CAGR of 8% by 2032, as farmers continue to pursue crop production and maximize nutrition for their plants.",
          ],
        },
        {
          type: "paragraph",
          text: "Microgreens Market: With their flavor and nutritional benefit, microgreens, young, edible plants collected at an early development stage, are increasingly being adopted by the food sector. These tiny greens, including arugula, cilantro, and basil, are antioxidant-rich and contain vitamins and minerals. Urban gardening and the push for fresh, local, and healthy vegetables are fueling demand for microgreens. The microgreens industry is expected to grow substantially at a CAGR of 11.1% by 2032.",
          segments: [
            { text: "Microgreens Market: ", bold: true },
            "With their flavor and nutritional benefit, microgreens, young, edible plants collected at an early development stage, are increasingly being adopted by the food sector. These tiny greens, including arugula, cilantro, and basil, are antioxidant-rich and contain vitamins and minerals. Urban gardening and the push for fresh, local, and healthy vegetables are fueling demand for microgreens. The microgreens industry is expected to grow substantially at a CAGR of 11.1% by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Insecticides Market: Much of crop protection is ensured through the efficacy of insecticides, controlling the insect pests that destroy crops and lower yields. There is now an increasing need to develop new insecticides and broader pest controlling techniques where pesticide resistance is increasing. Advances in ways of combating resistance while keeping the environment safe will drive the global insecticides industry forward, reaching USD 13.68 billion by 2032.",
          segments: [
            { text: "Insecticides Market: ", bold: true },
            "Much of crop protection is ensured through the efficacy of insecticides, controlling the insect pests that destroy crops and lower yields. There is now an increasing need to develop new insecticides and broader pest controlling techniques where pesticide resistance is increasing. Advances in ways of combating resistance while keeping the environment safe will drive the global insecticides industry forward, reaching USD 13.68 billion by 2032.",
          ],
        },
        { type: "heading", text: "Charting a Greener Future for Global Agriculture" },
        {
          type: "paragraph",
          text: "The fertilizer & agricultural chemicals industry is evolving rapidly with new markets that come with creative answers to issues of environmental preservation, sustainability, and food production. Among them are technologies that help farmers get as much produce as possible while lowering their environmental impact, biopesticides, biofertilizers, and seed treatments. Such markets will be crucial to food security across the globe while helping the world move towards agricultural methods that are safer for the environment as it expands. With such hopeful changes, agricultural futures look bright because these new industries open doors for even more productive and environmentally friendly agricultural landscapes.",
        },
        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          text: "The fertilizers and agricultural chemicals sector is entering a period of dynamic transformation, fueled by the urgent need to balance food security with sustainability. From biopesticides and biofertilizers to seed treatments, surfactants, and microgreens, the emerging markets highlighted here reflect a clear shift toward innovation, efficiency, and eco-friendly practices. As global demand for higher yields intensifies, these markets will play a crucial role in shaping the future of farming, driving productivity while reducing environmental impact. For industry players, investors, and policymakers, staying ahead in these evolving segments offers not just growth opportunities, but also a pathway to building a more resilient and sustainable agricultural ecosystem for the future.",
        },
      ] as ContentBlock[],
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1758117832/skyquest/insight/o0ec5idsd0h0oevccpez.webp",
      category: "Articles",
      type: "Article",
      topic: "Chemicals",
      date: "TBD",
      readTime: "5 Min read",
      title: "Top Emerging Opportunities in the Diversified Chemicals Sector - Q3 2025",
      titleEmphasis: "Diversified Chemicals Sector - Q3 2025",
      description:
        "Discover the top emerging markets in the diversified chemicals sector for Q3 2025. Explore opportunities in activated carbon, ammonia, polyurethane foam, propylene oxide, and green ammonia driven by sustainability and rising industrial demand.",
      subtitle: "Charting the Top 5 Emerging Markets in Diversified Chemicals",
      subtitleEmphasis: "Diversified Chemicals",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "High investments in research and development of novel chemicals and robust increase in chemical manufacturing activity around the world are slated to primarily bolster sales of diversified chemicals. Surging use of diversified chemicals in multiple end-use industries and growing emphasis on sustainability are also creating new opportunities for diversified chemical providers going forward. Here are some of the most opportune markets to target in the diversified chemicals sector for companies to maximize their revenue generation potential.",
        },
        { type: "heading", text: "Top 5 Markets Size and Forecast in the Diversified Chemicals Sector" },
        {
          type: "table",
          headers: ["Markets", "2024", "2025", "2032", "CAGR"],
          rows: [
            ["Activated Carbon Market", "USD 5.41 Billion", "USD 5.86 Billion", "USD 11.25 Billion", "8.3%"],
            ["Ammonia Market", "USD 76.03 Billion", "USD 80.29 Billion", "USD 117.57 Billion", "5.6%"],
            ["Polyurethane Foam Market", "USD 52.72 Billion", "USD 56.15 Billion", "USD 87.24 Billion", "6.50%"],
            ["Propylene Oxide Market", "USD 25.25 Billion", "USD 26.74 Billion", "USD 39.94 Billion", "5.9%"],
            ["Green Ammonia Market", "USD 565.53 Million", "USD 1,024.69 Million", "USD 65,723.02 Million", "81.2%"],
          ],
        },
        {
          type: "paragraph",
          text: "Activated Carbon Market: Surging use of activated carbon in water treatment applications amidst rising demand for potable water around the world is projected to primarily drive market growth. Use of activated carbon to clean air and gases and make them free from contaminants is estimated to emerge as a key opportunity for all activated carbon providers in the future. Global activated carbon demand is forecasted to increase at a stellar 8.3% CAGR from 2025 to 2032. Granulated activated carbon is expected to be highly sought-after across all industry verticals.",
          segments: [
            { text: "Activated Carbon Market: ", bold: true },
            "Surging use of activated carbon in water treatment applications amidst rising demand for potable water around the world is projected to primarily drive market growth. Use of activated carbon to clean air and gases and make them free from contaminants is estimated to emerge as a key opportunity for all activated carbon providers in the future. Global activated carbon demand is forecasted to increase at a stellar 8.3% CAGR from 2025 to 2032. Granulated activated carbon is expected to be highly sought-after across all industry verticals.",
          ],
        },
        {
          type: "paragraph",
          text: "Ammonia Market: Rising use of ammonia in energy storage and transportation applications is estimated to be the primary driver for ammonia market development. Growing use of ammonia as a fertilizer and expansion of the renewable energy industry are key trends for ammonia companies to focus on over the coming years. The global ammonia industry is anticipated to develop at a modest 5.6% CAGR from 2025 to 2032. Most ammonia sales revenue is expected to come from its agricultural applications in the long run.",
          segments: [
            { text: "Ammonia Market: ", bold: true },
            "Rising use of ammonia in energy storage and transportation applications is estimated to be the primary driver for ammonia market development. Growing use of ammonia as a fertilizer and expansion of the renewable energy industry are key trends for ammonia companies to focus on over the coming years. The global ammonia industry is anticipated to develop at a modest 5.6% CAGR from 2025 to 2032. Most ammonia sales revenue is expected to come from its agricultural applications in the long run.",
          ],
        },
        {
          type: "paragraph",
          text: "Polyurethane Foam Market: Rapidly increasing investments in infrastructure development activity and growing use of polyurethane foam in multiple construction applications are estimated to bolster market development. Use of bio-derived materials to manufacture polyurethane foam to eliminate the use of fossil-based materials in the wake of sustainability is a key polyurethane foam market trend. Global sales of polyurethane foam are estimated to bring in a revenue valuation of USD 87.24 billion in 2032. Spray polyurethane foam is estimated to be the most extensively used type of polyurethane foam.",
          segments: [
            { text: "Polyurethane Foam Market: ", bold: true },
            "Rapidly increasing investments in infrastructure development activity and growing use of polyurethane foam in multiple construction applications are estimated to bolster market development. Use of bio-derived materials to manufacture polyurethane foam to eliminate the use of fossil-based materials in the wake of sustainability is a key polyurethane foam market trend. Global sales of polyurethane foam are estimated to bring in a revenue valuation of USD 87.24 billion in 2032. Spray polyurethane foam is estimated to be the most extensively used type of polyurethane foam.",
          ],
        },
        {
          type: "paragraph",
          text: "Propylene Oxide Market: Rising demand for energy-efficient materials in multiple industry verticals and growing use of polyurethane foams are expected to be prime factors driving propylene oxide demand. Investing in the development of bio-based propylene oxide as emphasis on sustainability picks up pace is emerging as a key trend for almost all market players. The global propylene oxide industry is estimated to expand at a 5.9% CAGR by 2032.",
          segments: [
            { text: "Propylene Oxide Market: ", bold: true },
            "Rising demand for energy-efficient materials in multiple industry verticals and growing use of polyurethane foams are expected to be prime factors driving propylene oxide demand. Investing in the development of bio-based propylene oxide as emphasis on sustainability picks up pace is emerging as a key trend for almost all market players. The global propylene oxide industry is estimated to expand at a 5.9% CAGR by 2032.",
          ],
        },
        {
          type: "paragraph",
          text: "Green Ammonia Market: Rising use of ammonia in marine fuel applications and surging demand for organic fertilizers are expected to primarily boost sales of green ammonia in the future. Surging investments in the development of sustainable energy solutions are expected to present new opportunities for green ammonia providers in the long run. The global green ammonia market size is forecasted to expand at an astronomical 81.2% CAGR from 2025 to 2032 on the back of high emphasis on sustainability.",
          segments: [
            { text: "Green Ammonia Market: ", bold: true },
            "Rising use of ammonia in marine fuel applications and surging demand for organic fertilizers are expected to primarily boost sales of green ammonia in the future. Surging investments in the development of sustainable energy solutions are expected to present new opportunities for green ammonia providers in the long run. The global green ammonia market size is forecasted to expand at an astronomical 81.2% CAGR from 2025 to 2032 on the back of high emphasis on sustainability.",
          ],
        },
        { type: "heading", text: "Power Generation and Agriculture Industry Hold Sway Over Future Diversified Chemicals Demand" },
        {
          type: "paragraph",
          text: "Sustainability is expected to remain a key underlying factor influencing not only the demand for diversified chemicals but the chemical industry as a whole. Increasing application scope and demand for diversified chemicals from multiple consumer-oriented markets is maintaining the opportune stance for almost all diversified chemical companies. Power generation and agriculture are estimated to be prime industries where the demand for diversified chemicals is estimated to shine brightly in the long run. Along with the creation of sustainable chemicals, diversified chemical companies should also focus on opting for sustainable manufacturing processes to make their business eco-friendlier in the future.",
        },
        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          text: "The diversified chemicals sector is poised for significant expansion, driven by sustainability initiatives, rising end-use demand, and innovation in eco-friendly solutions. With strong growth opportunities in activated carbon, ammonia, polyurethane foam, propylene oxide, and green ammonia, companies must align strategies with evolving market needs. By investing in sustainable processes and catering to power generation and agriculture, industry players can secure long-term growth and maintain a competitive edge in this dynamic market.",
        },
      ] as ContentBlock[],
    },
    {
      id: 1,
      image: "/CaseStudy/re1.jpg",
      category: "Articles",
      type: "Article",
      topic: "Agriculture & Livestock",
      date: "April 27, 2026",
      readTime: "5 Min read",
      title: " Livestock Innovation to Transform Smallholder Farming in India",
      titleEmphasis: "Smallholder Farming in India",
      description:
        "Partnered with regional cooperatives to deploy data-driven herd management tools, helping over 12,000 smallholder farmers increase dairy yield by 28% within the first season while cutting veterinary response time in half.",
      subtitle: "Enabling Resilient Dairy Yields Through Data-Driven Herd Management",
      subtitleEmphasis: "Data-Driven Herd Management",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Across India's dairy belt, smallholder farmers have long managed herd health and yield through memory and word of mouth rather than data. In 2026, a coalition of regional cooperatives partnered to change that, deploying a mobile-first herd management platform that put real-time health alerts, breeding schedules, and yield tracking directly into farmers' hands. The result was a measurable shift in how smallholder operations were run, from reactive care to proactive, data-informed decision-making.",
          segments: [
            "cross India's dairy belt, smallholder farmers have long managed herd health and yield through memory and word of mouth rather than data. In 2026, a coalition of regional cooperatives partnered to change that, deploying a ",
            { text: "mobile-first herd management platform", href: "#" },
            " that put real-time health alerts, breeding schedules, and yield tracking directly into farmers' hands. The result was a measurable shift in how smallholder operations were run, from reactive care to ",
            { text: "proactive, data-informed decision-making", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Herd records were fragmented across notebooks and memory, veterinary visits were reactive rather than preventive, and cooperatives had no shared view of yield performance across their member farms. Early signs of illness routinely went unnoticed until they became costly, and inconsistent record-keeping made it difficult to identify which interventions were actually improving output.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Deployed a low-bandwidth mobile app for farmers to log herd health, feeding, and breeding events in real time.",
            "Built predictive health alerts that flag early signs of illness based on behavioral and feeding-pattern anomalies.",
            "Gave cooperative managers a shared dashboard to track yield trends and dispatch veterinary support where it was needed most.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "28% increase in dairy yield within the first season across participating farms.",
            "12,000+ smallholder farmers onboarded across partner cooperatives.",
            "Veterinary response time cut in half through predictive alerts and better dispatch routing.",
          ],
        },
        {
          type: "paragraph",
          text: "The programme demonstrated that meaningful gains in smallholder agriculture don't require large capital investment, they require putting the right information in front of the people making daily decisions. Cooperatives are now expanding the platform to cover feed optimization and breeding recommendations for the next phase of the rollout.",
        },
      ] as ContentBlock[],
    },
    {
      id: 2,
      image: "/CaseStudy/re2.jpg",
      category: "Articles",
      type: "Article",
      topic: "Urban Mobility",
      date: "March 12, 2026",
      readTime: "5 Min read",
      title: "Reimagining Urban Mobility Through Real-Time Crowd Intelligence",
      titleEmphasis: "Real-Time Crowd Intelligence",
      description:
        "Built a city-wide pedestrian flow platform that helped municipal planners reduce congestion at transit hubs by 34%, using anonymized movement data to redesign walkways across six metro stations.",
      subtitle: "Redesigning City Transit Through Real-Time Pedestrian Analytics",
      subtitleEmphasis: "Real-Time Pedestrian Analytics",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Rush-hour congestion at transit hubs had become a defining frustration for commuters in one of the country's fastest-growing metro networks. In 2026, municipal planners partnered with a mobility analytics team to deploy a city-wide, anonymized pedestrian flow platform, one that turned foot traffic into a live signal for redesigning walkways, entrances, and signage before congestion ever became gridlock.",
          segments: [
            "ush-hour congestion at transit hubs had become a defining frustration for commuters in one of the country's fastest-growing metro networks. In 2026, municipal planners partnered with a mobility analytics team to deploy a ",
            { text: "city-wide, anonymized pedestrian flow platform", href: "#" },
            ", one that turned foot traffic into a live signal for redesigning walkways, entrances, and signage before congestion ever became ",
            { text: "gridlock", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Six metro stations were bottlenecking during peak hours, but planners had no reliable way to see where pedestrians were actually backing up. Manual counts were sparse and quickly outdated, and walkway redesigns were being made on intuition rather than evidence, often missing the exact chokepoints commuters experienced every day.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Deployed anonymized movement sensors across six metro stations to build a live picture of pedestrian density and flow.",
            "Modeled congestion patterns by time of day to identify recurring chokepoints at entrances, turnstiles, and platform transitions.",
            "Worked with station architects to redesign walkway geometry and signage using the flow data as ground truth.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "34% reduction in congestion at transit hubs after walkway redesigns.",
            "Six metro stations redesigned using anonymized movement data.",
            "Faster, evidence-based approval cycles for future station upgrades.",
          ],
        },
        {
          type: "paragraph",
          text: "With chokepoints now visible in near real time, the transit authority has moved from reactive crowd-control measures to planned infrastructure changes, and is extending the platform to additional stations ahead of next year's ridership growth.",
        },
      ] as ContentBlock[],
    },
    {
      id: 3,
      image: "/CaseStudy/re3.jpg",
      category: "Articles",
      type: "Article",
      topic: "Financial Inclusion",
      date: "February 3, 2026",
      readTime: "6 Min read",
      title: "Powering Inclusive Finance with Embedded Digital Wallets",
      titleEmphasis: "Embedded Digital Wallets",
      description:
        "Launched an embedded-finance layer for regional banks that brought 2.4 million unbanked customers into the formal financial system, processing over $180M in microloans in the first year.",
      subtitle: "Bringing Millions Into the Formal Economy Through Embedded Finance",
      subtitleEmphasis: "Embedded Finance",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Millions of working adults across the region remained outside the formal financial system, unable to access credit, savings, or insurance products through traditional bank branches. In 2026, a group of regional banks partnered to launch an embedded-finance layer, distributed through everyday merchant and telecom apps, that let first-time users open a wallet, build a credit history, and access microloans without ever visiting a branch.",
          segments: [
            "illions of working adults across the region remained outside the formal financial system, unable to access credit, savings, or insurance products through traditional bank branches. In 2026, a group of regional banks partnered to launch an ",
            { text: "embedded-finance layer", href: "#" },
            ", distributed through everyday merchant and telecom apps, that let first-time users open a wallet, build a credit history, and access microloans without ever visiting a ",
            { text: "branch", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Traditional onboarding required physical documentation, branch visits, and credit history that most unbanked customers simply didn't have. Banks wanted to serve this segment but lacked a low-cost distribution channel and a credit model that worked without a conventional financial track record.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Embedded digital wallet and KYC flows directly into merchant and telecom apps customers already used daily.",
            "Built an alternative credit-scoring model using transaction and usage signals in place of conventional credit history.",
            "Rolled out microloan products with repayment terms suited to irregular, cash-based income patterns.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "2.4 million previously unbanked customers brought into the formal financial system.",
            "Over $180M in microloans processed in the first year.",
            "Onboarding time cut from a multi-day branch process to minutes, in-app.",
          ],
        },
        {
          type: "paragraph",
          text: "The programme's success has prompted partner banks to extend the wallet into savings and micro-insurance products, treating financial inclusion not as a one-time onboarding event but as an ongoing relationship built on data the customer generates themselves.",
        },
      ] as ContentBlock[],
    },
    {
      id: 4,
      image: "/CaseStudy/re1.jpg",
      category: "Articles",
      type: "Article",
      topic: "Agriculture & Livestock",
      date: "January 21, 2026",
      readTime: "5 Min read",
      title: "Scaling Precision Agriculture Across Three States",
      titleEmphasis: "Across Three States",
      description:
        "Rolled out satellite-based soil monitoring to 8,500 farms, cutting fertilizer waste by 22% and giving cooperatives a shared dashboard to track yield forecasts in real time.",
      subtitle: "Cutting Fertilizer Waste Through Satellite-Based Soil Monitoring",
      subtitleEmphasis: "Satellite-Based Soil Monitoring",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Fertilizer application across smallholder farms had long been guided by habit rather than soil condition, leading to persistent overuse, rising input costs, and diminishing returns on yield. In 2026, a precision-agriculture rollout brought satellite-based soil monitoring to 8,500 farms across three states, replacing guesswork with a shared, real-time view of soil health and forecasted yield.",
          segments: [
            "ertilizer application across smallholder farms had long been guided by habit rather than soil condition, leading to persistent overuse, rising input costs, and diminishing returns on yield. In 2026, a precision-agriculture rollout brought ",
            { text: "satellite-based soil monitoring", href: "#" },
            " to 8,500 farms across three states, replacing guesswork with a shared, real-time view of ",
            { text: "soil health and forecasted yield", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Farmers were applying fertilizer at flat, uniform rates regardless of actual soil nutrient levels, and cooperatives had no aggregated way to forecast regional yield or plan input distribution. The result was consistent overspending on fertilizer paired with yield variability that was hard to explain or address.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Used satellite imagery and soil sensors to build farm-level nutrient and moisture profiles across the region.",
            "Generated tailored fertilizer recommendations per plot instead of applying a single blanket rate.",
            "Built a cooperative-facing dashboard aggregating soil health data into real-time yield forecasts.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "22% reduction in fertilizer waste across participating farms.",
            "8,500 farms onboarded to satellite-based soil monitoring.",
            "Real-time yield forecasting now available to cooperative managers across all three states.",
          ],
        },
        {
          type: "paragraph",
          text: "Beyond the immediate cost savings, the shared dashboard gave cooperatives a planning tool they had never had before, a live, aggregated view of regional soil health that informs everything from input procurement to storage planning ahead of harvest.",
        },
      ] as ContentBlock[],
    },
    
  ] as Insight[],
};

export function getInsightById(id: number): Insight | undefined {
  return insightData.caseStudies.find((insight) => insight.id === id);
}
