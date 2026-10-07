/**
 * Open positions shown on the /careers page. Kept as plain data (no JSX) so
 * the job descriptions can be edited without touching the component.
 */

export interface JobSection {
  heading?: string;
  /** One-line lead-in shown under the heading. */
  intro?: string;
  items: string[];
}

export interface JobDetails {
  tagline?: string;
  meta?: { label: string; value: string }[];
  role?: string[];
  highlights?: string[];
  /** Defaults to "What You'll Do". */
  responsibilitiesTitle?: string;
  responsibilitiesIntro?: string;
  responsibilities?: JobSection[];
  requirementsIntro?: string;
  requirements?: JobSection[];
  offer?: string[];
  /** Any further titled sections, rendered last (e.g. "What Success Looks Like"). */
  extraSections?: { title: string; intro?: string; items: string[] }[];
}

export interface Job {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  details?: JobDetails;
}

export const CATEGORY_LABELS = [
  "All positions",
  "Consulting",
  "Pursuits & Growth",
  "Engineering",
  "Finance & Accounts",
  "Human Resources",
  "Product",
  "Design",
  "Operations",
  "Marketing",
];

export const jobs: Job[] = [
  {
    id: 6,
    title: "Associate – Strategy Consulting",
    category: "Consulting",
    tags: ["Ahmedabad · Onsite", "Full-time", "1+ Year"],
    description:
      "Take on unstructured client problems and build the answer from first principles: the research, the model, and the recommendation. Work across sectors, present directly to senior leadership, and stay through implementation.",
    details: {
      tagline: "Solve real problems. See your recommendations built.",
      meta: [
        { label: "Experience", value: "1+ Year" },
        { label: "Location", value: "Ahmedabad · Onsite" },
        { label: "Function", value: "Strategy Consulting & Advisory" },
        {
          label: "Reporting To",
          value: "You will work directly with senior leadership on live engagements.",
        },
        { label: "Employment Type", value: "Full-time" },
      ],
      role: [
        "SkyQuest Technology Consulting is one of the fastest-growing global organisations in market intelligence, innovation management, and commercialisation. For over 20 years, we have bridged the gap between good ideas and the markets, networks, and partners that turn them into something real.",
        "This role sits at the centre of that work. You will take on unstructured problems: a client entering an unfamiliar market, a programme that is underperforming, a decision that requires evidence. You will build the answer from first principles: the research, the model, and the recommendation that follows.",
        "It is a broad brief, and deliberately so. You will move across sectors, engagement types, and stakeholder environments, and you will have far more ownership than the years on your CV would usually allow.",
      ],
      highlights: [
        "You will not sit in one industry. You will work across multiple sectors and problem types in a single year.",
        "You will present to the people who decide: senior leadership, government partners, and clients, not through an intermediary layer.",
        "Your work does not stop at the recommendation. You will stay through implementation and see what actually worked.",
        "Small teams, high visibility. You will receive direct ownership and visibility for what you build.",
      ],
      responsibilities: [
        {
          heading: "Structure the problem",
          items: [
            "Turn ambiguous client challenges into clear hypotheses, work plans, and measurable outcomes",
            "Conduct due diligence, feasibility studies, and opportunity assessments",
            "Translate strategic direction into execution roadmaps that teams can follow and implement",
          ],
        },
        {
          heading: "Build the evidence",
          items: [
            "Conduct primary and secondary research across markets, industries, and competitive landscapes",
            "Build financial models, business cases, and scenario analyses",
            "Benchmark performance against industry standards and comparable organisations",
            "Synthesise large volumes of information into conclusions that withstand challenge",
          ],
        },
        {
          heading: "Own the delivery",
          items: [
            "Run engagements end to end, from scoping through to final recommendations",
            "Manage your workstreams against quality standards, timelines, and client expectations",
            "Build genuine working relationships with client teams and external partners",
            "Contribute to engagement planning, resourcing, and risk identification",
          ],
        },
        {
          heading: "Make the data speak",
          items: [
            "Build dashboards, MIS reports, and performance trackers across live engagements",
            "Identify trends, gaps, risks, and improvement opportunities before they surface elsewhere",
            "Support decisions through data analysis, scenario planning, and forecasting",
          ],
        },
        {
          heading: "Carry it into implementation",
          items: [
            "Support the design and rollout of client programmes and internal initiatives",
            "Develop action plans, budgets, and resource schedules",
            "Track KPIs and milestones, and drive priorities through to closure",
            "Design and manage monitoring and evaluation frameworks",
          ],
        },
        {
          heading: "Win the next piece of work",
          items: [
            "Evaluate new opportunities, partnerships, and expansion areas",
            "Write proposals, concept notes, pitch decks, and capability documents",
            "Track the pipeline, engagement progress, and conversion",
          ],
        },
        {
          heading: "Communicate it well",
          items: [
            "Build presentations that engage senior audiences",
            "Make complex ideas accessible to non-specialist audiences",
            "Prepare briefing notes and talking points for senior leadership",
            "Engage clients, government bodies, financial institutions, and industry partners",
          ],
        },
      ],
      requirementsIntro:
        "We care more about how you think than where you have worked. If you read the list below and recognise yourself in most of it, we would like to hear from you.",
      requirements: [
        {
          heading: "Experience",
          items: [
            "1+ years in strategy or management consulting, analytics, business operations, or a comparable advisory role",
            "Exposure to both strategic advisory work and hands-on implementation",
            "Experience with government, multilateral, or large enterprise clients is a plus",
            "Graduates from any discipline are welcome to apply; a postgraduate qualification is advantageous but not required",
          ],
        },
        {
          heading: "How you work",
          items: [
            "You find the root cause rather than the symptom and propose something workable",
            "You connect data, business context, and long-term goals while maintaining a clear view of all three",
            "You are comfortable when the brief is unclear and the path is yours to define",
            "You take work from idea to implementation and remain accountable for the outcomes",
            "You measure your work and hold yourself accountable",
          ],
        },
        {
          heading: "Your toolkit",
          items: [
            "Strong Excel and Google Sheets: advanced formulas, pivots, and modelling",
            "Proficiency in PowerPoint for executive-ready deliverables",
            "Familiarity with BI tools (Power BI, Tableau, Looker) is welcome",
            "Comfort with analysing large datasets and presenting what matters",
          ],
        },
        {
          heading: "How you communicate",
          items: [
            "Clear, structured writing for proposals, briefs, and strategy documents",
            "Confident presentation and storytelling skills in front of senior audiences",
            "Strong stakeholder-management skills across cultures and organisational levels",
            "Fluency in English; working proficiency in Hindi",
            "Ability to handle sensitive information with discretion",
          ],
        },
      ],
      offer: [
        "Exposure to a wide range of sectors, clients, and problem types: a strong way to build consulting experience early",
        "Direct access to senior leadership, clients, and external partners",
        "A platform to shape strategy, influence real decisions, and observe the impact of those decisions",
        "A broad, high-ownership mandate with visible impact on live engagements",
      ],
    },
  },
  {
    id: 7,
    title: "Bid & Proposals Lead",
    category: "Pursuits & Growth",
    tags: ["Ahmedabad · Onsite", "3+ Years"],
    description:
      "Own the end-to-end bid lifecycle at SkyQuest, from discovery to submission, and make sure every proposal we send is complete, compliant, and competitive.",
    details: {
      meta: [
        { label: "Role", value: "Sr. Bid Specialist" },
        { label: "Location", value: "Ahmedabad (On-site)" },
        { label: "Experience", value: "3+ Years" },
        { label: "Team", value: "Pursuits & Growth" },
        {
          label: "Designation",
          value: "The final designation will depend on the candidate's years of experience.",
        },
      ],
      role: [
        "We are looking for a proactive, dedicated, and detail-oriented Bid Specialist with 3 years of experience in preparing, submitting, and managing technical and commercial bids, tenders, and proposals.",
        "This is a hands-on execution role at the heart of SkyQuest's growth engine. You will coordinate the full bid lifecycle: discovering opportunities, building bid documents, managing submissions across government and private portals, and ensuring every bid that leaves the firm is on time, fully compliant, and well positioned to win.",
        "If you are organised, process-oriented, and energised by deadlines, this role is for you.",
      ],
      responsibilitiesTitle: "What You'll Own",
      responsibilitiesIntro:
        "Four clear areas of ownership. Every bid we submit passes through your hands, and your discipline is what keeps the pipeline moving.",
      responsibilities: [
        {
          heading: "1. Lead Generation & Market Research",
          intro: "Find the opportunities before competitors do.",
          items: [
            "Identify relevant tenders, RFPs, RFQs, and EOIs from government websites, tender portals, ministry sites, and private bid platforms.",
            "Track central and state government portals (GeM, CPPP, NIC, state e-procurement portals) and relevant international tender platforms on a daily basis.",
            "Maintain a structured live database of identified tenders and bid opportunities: issuing authority, deadline, value, and fit assessment.",
            "Flag high-priority opportunities to leadership early so bid/no-bid decisions can be taken with time to spare.",
          ],
        },
        {
          heading: "2. Bid Preparation & Documentation",
          intro: "Build bids that meet every requirement without exception.",
          items: [
            "Study RFPs, RFQs, EOIs, and tender documents in full; build a clear requirement map before drafting begins.",
            "Prepare complete technical and commercial bid documents, including checklists, bid summary, eligibility criteria, compliance matrices, BOQs, and supporting annexures.",
            "Coordinate with internal SMEs and project teams to gather inputs, case studies, CVs, and technical content for each bid.",
            "Maintain version control across drafts; track changes, comments, and approvals cleanly.",
          ],
        },
        {
          heading: "3. Bid Submission & Coordination",
          intro: "On time. Fully compliant. Every single time.",
          items: [
            "Upload and submit bids on government portals (GeM, eTender, NIC, CPPP, state e-procurement portals) and private bid platforms.",
            "Manage digital signatures, portal logins, OEM authorisations, EMD/bid security, and other procedural requirements ahead of submission.",
            "Run a final compliance check against the RFP checklist before every submission: formats, page limits, mandatory annexures, signatures, registrations.",
            "Maintain a structured record of all submissions: bid copies, versions, portal logins, approval flows, and acknowledgements.",
            "Coordinate with finance, legal, and leadership for approvals, sign-offs, and any clarifications during the bid process.",
          ],
        },
        {
          heading: "4. Knowledge & Research",
          intro: "Build the institutional memory that makes every bid easier than the last.",
          items: [
            "Stay updated on the latest technologies, industry guidelines, and tender standards across SkyQuest's priority sectors.",
            "Maintain a clean, current repository of templates, case studies, certificates, registrations, and company profiles, bid-ready at all times.",
            "Conduct competitive research on past bid winners, evaluation patterns, and pricing benchmarks to strengthen bid positioning.",
            "Document lessons from every won, lost, and shortlisted bid; feed them back into our templates, processes, and bid checklists.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Who You Are",
          items: [
            "You have 3 years in bidding, proposals, or tender management at a consulting firm, research firm, IT/ITeS company, or a vendor that bids regularly into government.",
            "You are proficient with government tender portals: GeM, CPPP, NIC, state e-procurement, and at least a couple of international platforms. You know where the friction points are.",
            "You read RFPs carefully. You can spot the eligibility traps, the disqualifiers, and the scoring weights on the first reading.",
            "You write clear, compliant, well-structured prose. Your bid summaries are something a reviewer can scan in 90 seconds.",
            "You are relentless on deadlines and unflustered when three bids are due in the same week.",
          ],
        },
        {
          heading: "Must-Have Skills & Experience",
          items: [
            "2–4 years of hands-on experience preparing, submitting, and managing technical and commercial bids, tenders, and proposals.",
            "Working knowledge of major government tender portals (GeM, CPPP, NIC, state e-procurement portals) plus at least basic familiarity with international/private bid platforms.",
            "Strong understanding of RFPs, RFQs, EOIs, eligibility criteria, compliance requirements, BOQs, and standard tender documentation.",
            "Experience preparing complete bid sets: technical proposals, financial bids, annexures, certificates, declarations, and supporting documentation.",
            "Familiarity with digital signature workflows, EMD/bid security, OEM authorisations, and portal-specific procedural requirements.",
            "Comfort coordinating across internal teams, SMEs, finance, legal, and leadership under tight, non-negotiable deadlines.",
            "Proficiency with MS Word, Excel, and PowerPoint; clean document formatting and basic version-control discipline.",
          ],
        },
        {
          heading: "Soft Skills",
          items: [
            "Strong written and verbal communication.",
            "Dedicated, quick to learn, and comfortable picking up new portals, sectors, and document standards.",
            "Excellent coordination with internal teams; patient, clear, and persistent.",
            "Ability to meet deadlines while managing multiple priorities.",
            "Organised and process-oriented; you build systems instead of relying on memory.",
          ],
        },
        {
          heading: "Bonus Points",
          items: [
            "Experience bidding for consulting, research, or advisory mandates rather than solely for product or IT supply tenders.",
            "Exposure to multilateral or bilateral donor bids (World Bank, ADB, UN agencies, USAID, FCDO, GIZ, etc.), even at a supporting level.",
            "Familiarity with SkyQuest's priority sectors: life sciences, agritech, ICT, ESG, and innovation/IP.",
            "Hands-on experience with bid management or proposal tools.",
          ],
        },
      ],
      extraSections: [
        {
          title: "What Success Looks Like",
          items: [
            "Zero missed deadlines. Zero non-compliant submissions.",
            "A live, current tender database that leadership can trust as a single source of truth.",
            "A clean, organised bid repository of templates, certificates, profiles, and case studies that makes the next bid faster than the last.",
            "A measurable improvement in submission quality and shortlisting rate over your first two quarters.",
            "Internal teams reaching out to you early because they know bids are in good hands.",
          ],
        },
        {
          title: "How to Apply",
          intro: "Apply using the form below with your CV, and include:",
          items: [
            "A list of 4–6 bids you've worked on in the last two years: issuing authority, sector, value, your role, and outcome.",
            "The government tender portals you've actually submitted on, and one line on which you find easiest to use and which you find most challenging.",
            "Optional, but helpful: a screenshot or short description of how you organise your bid tracker today.",
          ],
        },
      ],
    },
  },
  {
    id: 8,
    title: "Machine Learning / AI Engineer",
    category: "Engineering",
    tags: ["Ahmedabad · Onsite", "Full-time", "3–4 Years"],
    description:
      "Independently build, deploy, and optimise production-grade ML and deep learning models for enterprise applications, from NLP and LLMs to computer vision and generative AI.",
    details: {
      meta: [
        { label: "Experience", value: "3–4 years (AI / ML)" },
        { label: "Location", value: "Ahmedabad, Gujarat" },
        { label: "Employment Type", value: "Full-time" },
        { label: "Workdays", value: "Monday to Friday" },
      ],
      role: [
        "SkyQuest Technology Consulting is a leading Market Research & Market Intelligence firm. At SkyQuest, we empower employees to forge their own paths, add value, and make a meaningful impact every day, and we offer opportunities to apply your skills in innovative ways across the organisation.",
        "We are looking for professionals with 3–4 years of hands-on experience in AI, Machine Learning, and Deep Learning, with advanced proficiency across major ML/DL frameworks, capable of independently building, deploying, and optimising production-grade models for enterprise applications.",
      ],
      requirements: [
        {
          heading: "Core Technical Skills (Advanced / High-Level Proficiency Required)",
          items: [
            "Expert proficiency in Python and advanced, production-level experience with machine learning frameworks: TensorFlow, PyTorch, Scikit-learn, and Keras",
            "Advanced proficiency in deep learning architectures (CNNs, RNNs, Transformers, and attention-based models), including designing, training, and tuning them",
            "Strong hands-on experience with data preprocessing, feature engineering, and model optimisation using modern toolchains",
            "Proven experience in NLP, including LLMs, embeddings, and fine-tuning models like BERT, GPT, and LLaMA",
            "Computer Vision: OpenCV, YOLO, EfficientNet",
            "In-depth knowledge of MLOps practices, including model deployment, version control, monitoring, and CI/CD for ML pipelines",
            "Hands-on experience with cloud-based AI platforms such as AWS SageMaker, Azure ML, or GCP Vertex AI",
            "Strong understanding of vector databases (FAISS, Pinecone, Weaviate) and generative AI applications",
          ],
        },
        {
          heading: "Preferred Experience",
          items: [
            "Integrating generative AI (LLMs, Diffusion Models, and Prompt Engineering) into enterprise solutions",
            "Experience with data engineering tools such as Airflow, Spark, Databricks, and Kafka",
            "Hands-on knowledge of containerisation and orchestration tools such as Docker and Kubernetes, as well as API-based ML model deployment",
            "Prior experience managing the end-to-end AI product lifecycle, from model design and development through deployment and scaling",
          ],
        },
      ],
      extraSections: [
        {
          title: "Why Join Us",
          items: [
            "Work in a dynamic, growth-oriented environment",
            "Opportunity to leverage and expand your AI and ML skills",
            "Collaborate on cutting-edge projects with an impact on business and research",
          ],
        },
      ],
    },
  },
  {
    id: 9,
    title: "Account Executive / Senior Account Executive",
    category: "Finance & Accounts",
    tags: ["Ahmedabad · Onsite", "Full-time", "1–4+ Years"],
    description:
      "Manage client accounts from an accounting and compliance perspective as the primary point of contact for TDS, GST, and balance sheet queries, keeping every transaction accurately recorded, reconciled, and reported.",
    details: {
      meta: [
        { label: "Location", value: "Ahmedabad (Gujarat)" },
        { label: "Employment Type", value: "Full-time" },
        { label: "Working Days", value: "Monday to Saturday" },
        { label: "Experience", value: "1–4+ years" },
        {
          label: "Function",
          value: "Finance & Accounts (Taxation, Compliance & Client Accounting)",
        },
        {
          label: "Levels Open",
          value: "Account Executive / Senior Account Executive (designation based on experience)",
        },
      ],
      role: [
        "SkyQuest Technology Group is a Market Research and Market Intelligence firm seeking experienced and talented professionals to join our organisation. At SkyQuest, we encourage our team members to take ownership, add value, and make a meaningful impact.",
        "We are strengthening our Finance & Accounts function and are hiring at two levels, Account Executive and Senior Account Executive. The role holder will manage client accounts from an accounting and compliance perspective, serving as a primary point of contact for TDS, GST, and balance sheet-related queries while ensuring that all transactions are accurately recorded, reconciled, and reported in accordance with applicable accounting standards and statutory regulations.",
        "Candidates with an MBA in Finance will be preferred. The Senior Account Executive role additionally involves reviewing the work of junior team members, mentoring, process ownership, oversight of complex international transactions, and audit coordination.",
      ],
      responsibilitiesTitle: "Key Responsibilities",
      responsibilities: [
        {
          heading: "Client Account Management",
          items: [
            "Manage client accounts and serve as the primary point of contact for TDS, GST, and balance sheet-related queries and issues.",
            "Provide accurate guidance to clients on TDS, GST, and accounting matters, including tax planning and optimisation strategies.",
            "Collaborate with internal teams to address client needs and deliver comprehensive financial solutions.",
            "Track receivables, follow up on outstanding payments, and ensure timely collection in line with contractual terms and milestones.",
            "Build long-term client confidence through accuracy, responsiveness, and consistent delivery.",
          ],
        },
        {
          heading: "Direct Taxation (TDS)",
          items: [
            "Ensure accurate deduction of tax at source (TDS) on payments to vendors, contractors, professionals, and landlords in accordance with applicable provisions and rates.",
            "Prepare and file quarterly TDS returns, generate Form 16 and Form 16A, and resolve defaults, notices, and mismatches identified through the TRACES portal.",
            "Reconcile TDS deducted, deposited, and reported with the books of account and Form 26AS on a periodic basis.",
            "Maintain complete, accurate, and audit-ready documentation supporting all TDS-related positions and transactions.",
          ],
        },
        {
          heading: "GST & Indirect Taxation",
          items: [
            "Ensure compliance with GST regulations through timely and accurate filing of GSTR-1, GSTR-3B, and annual returns.",
            "Perform GSTR-2B reconciliation, manage input tax credit eligibility, and resolve vendor-side mismatches.",
            "Prepare, review, and coordinate GST filings related to the export of services, including LUT filings and refund applications where applicable.",
            "Maintain proper documentation and respond to notices, queries, and departmental correspondence.",
          ],
        },
        {
          heading: "Financial Reporting & Balance Sheet",
          items: [
            "Prepare and maintain accurate balance sheets, profit and loss statements, and other financial reports for clients.",
            "Review financial transactions and ensure they are recorded correctly in accordance with accounting standards and regulations.",
            "Carry out month-end and year-end closing activities, including provisions, accruals, prepaid schedules, and depreciation.",
            "Perform bank, vendor, customer, and intercompany reconciliations and resolve open items.",
            "Support statutory, internal, and tax audits by preparing schedules and responding to auditor queries.",
          ],
        },
        {
          heading: "International Transactions & Risk",
          items: [
            "Manage complex international transactions, including foreign remittances, Form 15CA/Form 15CB coordination, and applicable withholding provisions.",
            "Account for foreign exchange gains and losses and support compliance with FEMA and related documentation requirements.",
            "Identify financial and compliance risks in client transactions and recommend mitigation measures.",
            "Foster strong client relationships across global markets through clear, well-documented financial communication.",
          ],
        },
        {
          heading: "Additional Responsibilities – Senior Account Executive",
          items: [
            "Review the work of junior team members, including returns, reconciliations, and closing schedules, before submission.",
            "Mentor and train Account Executives on taxation updates, accounting treatment, and client handling.",
            "Own the compliance calendar and ensure that no statutory deadlines are missed across assigned accounts.",
            "Act as the escalation point for complex client issues, assessments, and departmental notices.",
            "Drive process improvements, standardisation, and automation within the accounts function.",
          ],
        },
        {
          heading: "Regulatory Awareness",
          items: [
            "Stay updated on changes in TDS, GST, income tax, and accounting regulations.",
            "Assess the impact of regulatory changes on client accounts and communicate updates to clients and internal teams as necessary.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Qualifications & Education",
          items: [
            "Bachelor's degree in Accounting, Finance, Commerce, or a related field is essential.",
            "MBA (Finance) will be given preference. CA Inter, CMA Inter, or M.Com candidates with relevant hands-on experience will also be considered.",
            "Account Executive: a minimum of 1 year of experience in account management with exposure to TDS, GST, and balance sheet preparation.",
            "Senior Account Executive: 4+ years of experience, including independent ownership of client accounts and statutory compliance.",
          ],
        },
        {
          heading: "Core Capabilities",
          items: [
            "Technical Proficiency: Strong understanding of TDS, GST, and accounting principles, standards, and regulations.",
            "Systems Skills: Proficiency in accounting software such as Tally, Zoho Books, or ERP platforms, along with advanced Microsoft Excel.",
            "Analytical Ability: Detail-oriented approach with the ability to interpret data, spot discrepancies, and resolve them at source.",
            "Communication: Excellent communication and interpersonal skills, with the ability to explain financial and tax positions to non-finance stakeholders.",
            "Ownership: Ability to work independently, prioritise tasks effectively, and deliver within statutory deadlines.",
          ],
        },
        {
          heading: "Candidate Attributes",
          items: [
            "Accuracy First: Committed to precision in numbers, documentation, and reporting.",
            "Compliance Mindset: Treats statutory deadlines and audit readiness as non-negotiable.",
            "Client-Centric: Responsive, professional, and dependable in every client interaction.",
            "Continuous Learner: Actively tracks regulatory changes and applies them to day-to-day work.",
            "Team Orientation: Collaborates well with internal functions to deliver end-to-end financial solutions.",
          ],
        },
      ],
      offer: [
        "Salary: Best in the industry",
        "Exposure to domestic and international client accounts across multiple industries",
        "A clear growth path from Account Executive to Senior Account Executive and beyond",
        "A culture that encourages ownership, initiative, and measurable impact",
      ],
      extraSections: [
        {
          title: "How to Apply",
          intro:
            "If you are interested in this opportunity, apply using the form below with your updated resume, and include:",
          items: ["Current CTC", "Expected CTC", "Notice Period"],
        },
      ],
    },
  },
  {
    id: 10,
    title: "Consultant – Agribusiness Investment Readiness",
    category: "Consulting",
    tags: ["India & Nigeria", "Fixed-term · 24 months", "15+ Years"],
    description:
      "Lead the agribusiness investment readiness agenda of a technical assistance programme for a national agricultural development finance institution in Nigeria: prepare enterprises for investment, build a bankable pipeline, and originate transactions.",
    details: {
      meta: [
        {
          label: "Programme",
          value:
            "Technical Assistance to a National Agricultural Development Finance Institution in Nigeria, funded by a leading global philanthropic foundation",
        },
        {
          label: "Reports To",
          value:
            "TSU Manager (Team Leader), working alongside a designated Institution counterpart in the Investment team",
        },
        {
          label: "Key Working Relationships",
          value:
            "The Institution's investment teams; seed tollers and agribusinesses; TSU specialist leads for Agri-Finance, Credit & Risk and Capital Mobilisation & Blended Finance; DFIs and investors",
        },
        { label: "Location", value: "India and Nigeria, with in-country travel" },
        { label: "Engagement Type", value: "Full-time, fixed-term consultancy" },
        { label: "Duration", value: "24 months (full programme duration)" },
      ],
      role: [
        "SkyQuest is supporting a leading national agricultural development finance institution in Nigeria (the Institution) through a multi-year technical assistance programme funded by a leading global philanthropic foundation. The programme aims to strengthen the Institution's capacity and help it mobilise and deploy capital more effectively to agricultural enterprises and organisations that serve smallholder farmers, particularly women and other underserved producers.",
        "The programme covers agricultural finance and credit risk, digital and data capabilities, agribusiness investment readiness, blended-finance capital mobilisation including the design of a multi-source financing facility, and climate finance. It is delivered over 24 months in three phases (Diagnose & Baseline, Co-Design & Build, and Embed & Transition) by a Technical Support Unit (TSU) working alongside the Institution's teams, with the aim that the Institution fully owns and operates all validated capabilities by programme close.",
        "The Consultant – Agribusiness Investment Readiness will lead the programme's agribusiness investment readiness agenda across all three phases. Working directly with seed tollers and agribusinesses, the role prepares enterprises for investment, builds a bankable pipeline, and originates transactions that can be financed by development finance institutions and investors.",
        "The consultant will develop investor-grade business plans and financial models, strengthen financial records and governance, prepare data rooms, and support due diligence and transaction closing. The role includes a live seed-enterprise demonstration through which the Institution's staff can learn, and an assessment of African expansion plans with grain alliances and seed companies. The approach will be codified into templates and toolkits that the Institution's investment team can apply independently.",
      ],
      responsibilitiesTitle: "Key Responsibilities",
      responsibilities: [
        {
          heading: "Key Deliverables",
          items: [
            "1. Investment Readiness Diagnostic: readiness criteria and pipeline shaping for Board approval.",
            "2. First-Cohort Investment Cases: business plans, investment cases and data rooms for the first enterprise cohort.",
            "3. Investor Engagement and Due Diligence: support for investor engagement, due diligence and closing.",
            "4. Investment Readiness Toolkit: a codified toolkit and a live, diversified pipeline of investment-ready agribusinesses.",
            "5. Training and Handover: capability transfer and handover to the Institution's investment team.",
          ],
        },
        {
          heading: "Diagnose & Baseline",
          items: [
            "Assess the Institution's investment pipeline, documentation and due diligence practices.",
            "Interview investment teams, enterprises and investors to identify readiness gaps.",
            "Score and sequence priority interventions for validation by the Institution's management and approval by the Board.",
          ],
        },
        {
          heading: "Readiness Framework and Enterprise Support",
          items: [
            "Establish agribusiness investment readiness criteria, documentation standards and stage-gate rules.",
            "Work with seed tollers and companies to strengthen governance, operations and financial records.",
            "Develop investor-grade business plans, financial models and investment cases, and prepare data rooms.",
          ],
        },
        {
          heading: "Pipeline and Origination",
          items: [
            "Build a diversified pipeline across seed value chains and agribusinesses, directing each enterprise to the Institution's lending programmes, the multi-source financing facility, or external investors as appropriate.",
            "Originate investment opportunities and support investor engagement, due diligence, and transaction closing.",
            "Assess African expansion plans with grain alliances and seed companies.",
          ],
        },
        {
          heading: "Pilot and Codify",
          items: [
            "Test the methodology with the first enterprise cohort, including the live seed-enterprise demonstration.",
            "Refine the approach into standardised templates and toolkits for the Institution's staff.",
          ],
        },
        {
          heading: "Institutionalisation and Transition",
          items: [
            "Embed the methodology into the Institution's origination and investment committee procedures.",
            "Train the Institution's investment team, hand over to named owners and set the pipeline scale-up pathway.",
            "Contribute performance indicators, results and lessons to TSU progress reporting and the programme's MEL framework.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Education",
          items: [
            "Bachelor's degree in Finance, Business, Agribusiness or a related field. An MBA or CFA qualification is an advantage.",
          ],
        },
        {
          heading: "Essential",
          items: [
            "15+ years of experience in investment banking, transaction advisory, private equity, or agribusiness investment.",
            "Proven ability to build bankable business cases, financial models and data rooms, and to manage due diligence processes.",
            "Track record of deal origination and investor engagement through to closing.",
            "Willingness to work across India and Nigeria.",
          ],
        },
        {
          heading: "Desirable",
          items: [
            "Strong knowledge of seed systems or agricultural value chains.",
            "Experience with DFI, impact or blended-finance transactions in Sub-Saharan Africa.",
            "Experience working on programmes funded by development partners such as the World Bank Group, AfDB, FCDO or major philanthropic foundations.",
          ],
        },
        {
          heading: "Core Competencies",
          items: [
            "Financial analysis: builds rigorous, investor-grade business cases and financial models.",
            "Transaction execution: manages data rooms and due diligence to closing.",
            "Investor engagement: originates opportunities and builds credible relationships with capital providers.",
            "Enterprise advisory: strengthens governance and operations in growing agribusinesses.",
            "Cross-cultural collaboration: works effectively across India and Nigeria.",
            "Integrity: exercises discretion with sensitive information.",
          ],
        },
        {
          heading: "Language",
          items: ["Fluency in written and spoken English is required."],
        },
      ],
      extraSections: [
        {
          title: "Working Principles",
          items: [
            "Ground every decision and recommendation in documented evidence.",
            "Keep a clear focus on how stronger institutional capabilities lead to better financing for organisations that serve smallholder farmers.",
            "Work alongside the Institution's teams and designated counterparts to build shared ownership rather than operating in parallel.",
            "Handle confidential institutional, staff and borrower information with discretion and in line with applicable data-protection and responsible AI requirements.",
            "Uphold the funder's anti-corruption and anti-terrorism obligations throughout the engagement.",
          ],
        },
      ],
    },
  },
  {
    id: 11,
    title: "Consultant – Climate Finance & Credit Integration",
    category: "Consulting",
    tags: ["Nigeria", "Fixed-term · 24 months", "12+ Years"],
    description:
      "Lead the climate finance agenda of a technical assistance programme for a national agricultural development finance institution in Nigeria: unlock climate finance and integrate climate risk into credit decisions.",
    details: {
      meta: [
        {
          label: "Programme",
          value:
            "Technical Assistance to a National Agricultural Development Finance Institution, Nigeria, funded by a leading global philanthropic foundation",
        },
        {
          label: "Reports To",
          value:
            "TSU Manager (Team Leader); works alongside a designated Institution counterpart in Risk and Sustainability",
        },
        {
          label: "Key Working Relationships",
          value:
            "The Institution's risk, credit, treasury and sustainability teams; TSU specialist leads for Agri-Finance, Credit & Risk, Technology, Data & AI, and Capital Mobilisation & Blended Finance; climate funds, DFIs and accredited entities",
        },
        { label: "Location", value: "Nigeria, with in-country travel" },
        { label: "Engagement Type", value: "Full-time, fixed-term consultancy" },
        { label: "Duration", value: "24 months (full programme duration)" },
      ],
      role: [
        "SkyQuest is supporting a leading national agricultural development finance institution in Nigeria (the Institution) through a multi-year technical assistance programme funded by a leading global philanthropic foundation. The programme aims to strengthen the Institution's capacity and help it mobilise and deploy capital more effectively to agricultural enterprises and organisations that serve smallholder farmers, particularly women and other underserved producers.",
        "The programme covers agricultural finance and credit risk, digital and data capabilities, agribusiness investment readiness, blended-finance capital mobilisation (including the design of a multi-source financing facility), and climate finance. It is delivered over 24 months in three phases (Diagnose & Baseline, Co-Design & Build, and Embed & Transition) by a Technical Support Unit (TSU) working alongside the Institution's teams, to ensure the Institution fully owns and operates all validated capabilities by programme close.",
        "The Consultant – Climate Finance & Credit Integration leads the programme's climate finance agenda across all three phases. The role has two connected objectives: to position the Institution to access and deploy climate finance from multilateral climate funds, development finance institutions and other sources; and to integrate climate risk and resilience into the Institution's credit processes, so that lending decisions reflect the physical and transition risks facing Nigerian agriculture.",
        "The position will assess the Institution's climate finance readiness, develop a climate finance strategy and pipeline, and design climate-smart and adaptation-focused lending products for smallholder value chains. Working closely with the credit, risk and technology specialists, the role will embed climate risk screening, scoring and portfolio monitoring into the Institution's appraisal methodology and risk framework, and strengthen the environmental and social safeguards that climate funders require. All validated tools and frameworks will be handed over to named Institution owners by programme close.",
      ],
      responsibilitiesTitle: "Key Responsibilities",
      responsibilities: [
        {
          heading: "Key Deliverables",
          items: [
            "1. Climate Finance Readiness Diagnostic: an assessment of the Institution's climate finance readiness, climate risk exposure and safeguards capacity, with prioritised interventions for Board approval.",
            "2. Climate Finance Strategy and Access Roadmap: a strategy identifying priority climate funds and partners, and the steps toward accreditation or partnership.",
            "3. Climate-Risk Credit Integration Framework: climate-risk screening and scoring tools embedded in credit appraisal, risk rating and portfolio monitoring.",
            "4. Climate-Smart Lending Products and Pipeline: adaptation-focused products and a pipeline of climate-eligible investments, piloted and refined on evidence.",
            "5. Institutionalisation and Handover Pack: updated policies, safeguards procedures, climate reporting and training, handed over to named Institution owners.",
          ],
        },
        {
          heading: "Diagnose & Baseline",
          items: [
            "Assess the Institution's climate finance readiness, including governance, policies, fiduciary standards and environmental and social safeguards.",
            "Analyse the climate risk exposure of the Institution's loan portfolio by crop, value chain and region.",
            "Score and sequence priority interventions for validation by the Institution's management and approval by the Board.",
          ],
        },
        {
          heading: "Climate Finance Strategy and Access",
          items: [
            "Develop a climate finance strategy and identify priority sources, including the Green Climate Fund, Global Environment Facility, Adaptation Fund, DFIs and philanthropic funders.",
            "Map the pathway to accreditation or partnership with climate funds, and prepare concept notes and funding proposals.",
            "Coordinate with the Capital Mobilisation & Blended Finance specialist to align climate finance windows with the multi-source financing facility.",
          ],
        },
        {
          heading: "Climate-Risk Integration in Credit",
          items: [
            "Design climate-risk screening and scoring tools and embed them in credit appraisal, risk rating and provisioning, in collaboration with the Agri-Finance and Credit & Risk specialist.",
            "Work with the Technology, Data & AI specialist to integrate climate, weather, and geospatial data into credit scoring and portfolio monitoring.",
            "Develop portfolio-level climate stress-testing and early-warning indicators.",
          ],
        },
        {
          heading: "Climate-Smart Products and Pipeline",
          items: [
            "Design climate-smart and adaptation-focused lending products, such as finance for irrigation, drought-tolerant seed, post-harvest storage and renewable energy solutions.",
            "Explore complementary risk-transfer mechanisms, including index-based agricultural insurance.",
            "Build and pilot a pipeline of climate-eligible investments, and refine products on portfolio evidence.",
          ],
        },
        {
          heading: "Safeguards, Reporting and Transition",
          items: [
            "Strengthen the Institution's environmental and social management system and climate-related disclosure in line with funder and international standards.",
            "Establish climate finance tracking and reporting, including adaptation and resilience indicators for smallholder farmers.",
            "Embed validated tools into the Institution's policies and procedures, deliver role-based training and hand over to named Institution owners.",
            "Contribute performance indicators, results and lessons to TSU progress reporting and the programme's MEL framework.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Education",
          items: [
            "Master's degree in Climate Finance, Environmental Economics, Development Finance, Agricultural Economics, or a related field.",
          ],
        },
        {
          heading: "Essential",
          items: [
            "12+ years of experience in climate finance, sustainable finance or climate-risk management, including within banks or development finance institutions.",
            "Demonstrated experience preparing funding proposals or accreditation for multilateral climate funds such as the Green Climate Fund, GEF or Adaptation Fund.",
            "Hands-on experience integrating climate risk into credit appraisal, risk management or portfolio monitoring.",
            "Strong understanding of environmental and social safeguards and climate-related reporting standards.",
          ],
        },
        {
          heading: "Desirable",
          items: [
            "Experience with climate-smart agriculture, agricultural adaptation or index-based insurance in Sub-Saharan Africa, particularly Nigeria.",
            "Familiarity with climate data, geospatial analysis and climate-risk modelling tools.",
            "Experience with programmes funded by development partners such as the World Bank Group, AfDB, FCDO or major philanthropic foundations.",
          ],
        },
        {
          heading: "Core Competencies",
          items: [
            "Climate-finance expertise: understands the climate finance landscape and how to access it.",
            "Risk integration: translates climate risk into practical credit and portfolio tools.",
            "Product design: develops climate-smart financial products suited to smallholder value chains.",
            "Standards and safeguards: applies funder and international environmental and social standards rigorously.",
            "Collaboration: works across credit, technology and capital mobilisation teams to deliver integrated solutions.",
            "Integrity: exercises discretion with sensitive information.",
          ],
        },
        {
          heading: "Language",
          items: ["Fluency in written and spoken English is required."],
        },
      ],
      extraSections: [
        {
          title: "Working Principles",
          items: [
            "Ground every decision and recommendation in documented evidence.",
            "Keep a clear focus on how stronger institutional capabilities lead to better financing for organisations that serve smallholder farmers.",
            "Work alongside the Institution's teams and designated counterparts to build shared ownership rather than operating in parallel.",
            "Handle confidential institutional, staff and borrower information with discretion and in line with data protection and responsible AI requirements.",
            "Uphold the funder's anti-corruption and anti-terrorism obligations throughout the engagement.",
          ],
        },
      ],
    },
  },
  {
    id: 12,
    title: "Senior Human Resources Business Partner (Senior HRBP)",
    category: "Human Resources",
    tags: ["Ahmedabad · Onsite", "Full-time", "10+ Years"],
    description:
      "Lead and strengthen SkyQuest's people function as a strategic and hands-on HR partner to senior leadership, across workforce planning, talent acquisition, performance, engagement, policy and compliance.",
    details: {
      meta: [
        { label: "Function", value: "Human Resources / People & Culture" },
        { label: "Location", value: "Ahmedabad, Gujarat, India" },
        { label: "Work Model", value: "Work from Office (WFO)" },
        { label: "Engagement Type", value: "Full-time" },
        { label: "Experience", value: "10+ years of progressive HR experience" },
      ],
      role: [
        "SkyQuest is looking for a business-focused Senior Human Resources Business Partner to lead and strengthen the organisation's people function. The Senior HRBP will work closely with senior leadership and business teams across workforce planning, talent acquisition, employee lifecycle management, performance management, employee engagement, HR operations, policy, compliance, and organisational development.",
        "The Senior HRBP will combine strategic HR business partnering with hands-on execution. The role will be responsible for translating business requirements into practical people strategies, strengthening HR systems and processes, developing talent pipelines, managing complex people matters and building a high-performing and accountable workplace culture.",
        "This role is particularly suited to an experienced HR professional who has independently managed a broad HR portfolio, led HR teams, handled senior stakeholder relationships and demonstrated the ability to build and improve people processes in a growing organisation.",
        "As a strategic and operational HR partner to the business, the Senior HRBP will own key HR processes end-to-end, lead talent and workforce initiatives, strengthen employee experience and HR governance, and support leadership in building a high-performance, accountable and people-centric culture.",
      ],
      responsibilitiesTitle: "Key Responsibilities",
      responsibilities: [
        {
          heading: "1. HR Business Partnership & People Strategy",
          items: [
            "Build trusted relationships with employees, managers and senior leadership, acting as a credible and approachable HR partner.",
            "Understand business priorities, growth plans and organisational requirements and translate them into actionable people strategies.",
            "Partner with leadership on organisation design, workforce requirements, succession planning, capability development and people-related decisions.",
            "Identify people risks, capability gaps and organisational challenges and recommend practical solutions.",
            "Provide data-driven HR insights and recommendations to support business and people decisions.",
          ],
        },
        {
          heading: "2. Workforce & Business Resource Planning",
          items: [
            "Lead annual and periodic workforce planning in alignment with business plans, project requirements and organisational growth.",
            "Develop resource plans covering headcount, skills, hiring priorities, deployment and capacity requirements.",
            "Work with business leaders to forecast talent demand and identify critical and future hiring requirements.",
            "Monitor headcount, vacancies, attrition and resource requirements and provide regular insights to leadership.",
            "Develop proactive hiring plans and talent pipelines for critical positions.",
          ],
        },
        {
          heading: "3. Talent Acquisition & Headhunting",
          items: [
            "Own and strengthen the end-to-end Talent Acquisition strategy for professional, specialist and leadership positions.",
            "Lead proactive headhunting and market mapping for critical and hard-to-fill positions.",
            "Build and maintain strong candidate pipelines through direct sourcing, professional networks, referrals, recruitment partners and targeted outreach.",
            "Set hiring plans, priorities and recruitment SLAs while ensuring quality, timely hiring, and a positive candidate experience.",
            "Partner with hiring managers on role definition, interview structures, selection decisions and offer closure.",
            "Build talent pools for consulting, development-sector, multilateral, DFI, technology and other specialist profiles as relevant to business needs.",
          ],
        },
        {
          heading: "4. HR Team Leadership",
          items: [
            "Lead, coach and develop the HR team, establishing clear responsibilities, goals, service standards and performance expectations.",
            "Allocate workloads and priorities across the HR function to ensure timely delivery of key commitments.",
            "Conduct regular performance reviews and provide coaching and feedback to HR team members.",
            "Build HR team capability through structured development, knowledge sharing and continuous improvement.",
            "Establish clear ownership for talent acquisition, HR operations, employee engagement and other core HR activities.",
          ],
        },
        {
          heading: "5. Employee Lifecycle & HR Operations",
          items: [
            "Oversee the employee lifecycle from onboarding and probation through transfers, role changes, development, performance management and separation.",
            "Strengthen onboarding, induction, employee documentation, HR records and operational processes.",
            "Ensure consistent and efficient execution of core HR processes across the organisation.",
            "Handle employee relations matters with fairness, confidentiality, sound judgement, and appropriate documentation.",
            "Review HR workflows and identify opportunities to improve efficiency, transparency and employee experience.",
          ],
        },
        {
          heading: "6. Performance Management & Employee Development",
          items: [
            "Lead performance-management cycles, including goal-setting, reviews, feedback discussions and appraisal processes.",
            "Partner with managers to strengthen performance conversations, accountability and development planning.",
            "Identify high performers, critical talent and capability gaps and recommend appropriate development interventions.",
            "Support succession planning and internal talent development for key roles.",
            "Promote a performance culture based on clear expectations, regular feedback and measurable outcomes.",
          ],
        },
        {
          heading: "7. HR Policies, SOPs & Compliance",
          items: [
            "Lead the development, review and implementation of HR policies, SOPs, guidelines and people processes.",
            "Ensure HR operations and documentation comply with applicable employment laws, statutory requirements and internal governance standards.",
            "Coordinate periodic HR compliance reviews, audits and documentation checks and ensure timely closure of identified gaps.",
            "Establish and maintain clear controls for recruitment, onboarding, employee records, performance management and separation processes.",
            "Maintain strict confidentiality while handling sensitive employee and organisational information.",
          ],
        },
        {
          heading: "8. Campus Talent & Early-Career Hiring",
          items: [
            "Develop and execute Tier 1 and Tier 2 campus placement strategies aligned with current and future talent requirements.",
            "Build relationships with universities, institutes, placement cells and academic stakeholders.",
            "Plan campus hiring calendars, assessment processes, interviews, offers and onboarding.",
            "Develop sustainable talent pipelines for consulting, research, technology, business and corporate functions.",
          ],
        },
        {
          heading: "9. Employee Engagement, Culture & People Experience",
          items: [
            "Plan and execute employee engagement, recognition, communication and culture-building initiatives.",
            "Strengthen employee experience across key stages of the employee lifecycle.",
            "Work with leadership to understand employee sentiment and translate feedback into practical people initiatives.",
            "Promote a workplace culture based on accountability, collaboration, trust and continuous development.",
            "Support initiatives that improve employee engagement, retention and organisational effectiveness.",
          ],
        },
        {
          heading: "10. Employer Branding & Talent Attraction",
          items: [
            "Strengthen SkyQuest's employer brand across relevant recruitment and professional channels.",
            "Develop initiatives to improve talent attraction, employee advocacy, candidate experience and campus visibility.",
            "Partner with internal teams to communicate SkyQuest's culture, career opportunities, employee value proposition and people practices.",
            "Support employer-brand initiatives that strengthen recruitment for specialist and leadership positions.",
          ],
        },
        {
          heading: "11. HR Analytics & Continuous Improvement",
          items: [
            "Develop and maintain HR dashboards covering headcount, recruitment, performance, and employee engagement.",
            "Analyse HR data to identify trends, risks and improvement opportunities.",
            "Present actionable HR insights to senior leadership to support people and business decisions.",
            "Continuously review and improve HR processes, systems and workflows.",
          ],
        },
        {
          heading: "12. Stakeholder Management & Consulting Environment",
          items: [
            "Partner effectively with senior leaders, business heads, managers and employees across the organisation.",
            "Communicate HR policies, decisions, and recommendations clearly to diverse stakeholders.",
            "Build trusted relationships across business and people functions, and contribute to organisational decision-making from both business and people perspectives.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Education",
          items: [
            "Bachelor's or master's degree in Human Resources, Business Administration, Management or a related field.",
            "A master's degree or professional HR certification will be an advantage.",
          ],
        },
        {
          heading: "Essential Experience",
          items: [
            "10+ years of progressive experience across Human Resources, with strong exposure to Talent Acquisition, HR Operations, and HR Business Partnering.",
            "Demonstrated experience independently managing a broad HR portfolio and leading HR teams.",
            "Strong experience in headhunting, specialist and leadership hiring, workforce planning and resource planning.",
            "Hands-on experience across employee lifecycle management, performance management, employee engagement, HR policies, SOPs and compliance.",
            "Proven experience developing, implementing or improving HR policies, processes and operating frameworks.",
            "Experience managing campus hiring programmes and building early-career talent pipelines.",
            "Demonstrated experience partnering with senior leadership and business heads in a fast-paced professional environment.",
          ],
        },
        {
          heading: "Preferred Experience",
          items: [
            "Experience in consulting, IT, professional services, research, advisory or other knowledge-intensive organisations.",
            "Experience working with development-sector organisations, multilateral organisations, development finance institutions (DFIs), foundations or international development partners will be an advantage.",
            "Experience in organisations where HR operates as a strategic business partner rather than solely as an administrative function.",
            "Demonstrated track record of building, scaling or significantly improving an HR function, HR process or talent-acquisition capability.",
          ],
        },
        {
          heading: "Desired Skills & Attributes",
          items: [
            "Strong understanding of HR fundamentals across Talent Acquisition, HR Operations, employee relations, performance management, engagement and compliance.",
            "Strong people-management and team-leadership skills, with the ability to coach, develop and motivate HR team members.",
            "Excellent communication, negotiation and stakeholder-management skills.",
            "Strong business acumen and the ability to connect people strategy with business priorities and workforce requirements.",
            "Strong problem-solving and decision-making skills with a practical, solutions-oriented approach.",
            "High level of ownership, accountability, confidentiality and attention to detail.",
            "Ability to manage multiple priorities and deliver within defined timelines.",
            "Ability to handle sensitive and complex employee matters with maturity and discretion.",
            "Strong analytical skills and comfort working with HR metrics, dashboards and data.",
            "Ability to work independently, take initiative and drive continuous improvement.",
            "High integrity, empathy and professionalism.",
          ],
        },
        {
          heading: "Core Competencies",
          items: [
            "People Leadership: Builds capable HR teams and creates clarity, accountability and ownership.",
            "Business Partnership: Connects HR priorities with business strategy, growth and resource requirements.",
            "Talent Leadership: Builds pipelines, conducts strategic hiring and develops strong talent networks.",
            "Stakeholder Management: Builds trusted relationships with employees, managers, leadership and external stakeholders.",
            "Strategic & Operational Execution: Converts HR strategy into structured programmes, processes and measurable outcomes.",
            "Culture & Employee Experience: Builds an environment based on trust, engagement, recognition and accountability.",
            "Judgement & Integrity: Handles confidential information and complex people matters with discretion and sound judgement.",
            "Continuous Improvement: Identifies process gaps and develops scalable HR systems, SOPs and practices.",
          ],
        },
      ],
      extraSections: [
        {
          title: "Success in the Role",
          intro: "Success in this role will be demonstrated through:",
          items: [
            "A scalable HR function aligned with SkyQuest's business and growth priorities.",
            "Improved quality, efficiency and predictability of hiring.",
            "Proactive talent pipelines for critical and specialist positions.",
            "Effective workforce and resource planning aligned with organisational requirements.",
            "Consistent employee lifecycle, performance, engagement, policy and compliance processes.",
            "A high-performing HR team with clear ownership and strong service orientation.",
            "Improved employee experience, engagement and retention.",
            "Stronger employer brand and campus talent pipelines.",
            "Trusted relationships between HR, employees and leadership.",
            "Continuous improvement and greater efficiency across HR systems and processes.",
          ],
        },
      ],
    },
  },
  {
    id: 13,
    title: "Strategy Officer, India – Gates Foundation",
    category: "Consulting",
    tags: ["Ahmedabad · Onsite", "Full-time", "3–8 Years"],
    description:
      "Support the Gates Foundation's agricultural development agenda in India: structure ambiguous problems, build the evidence base, and turn findings into strategy recommendations, go-to-market pathways and executable plans.",
    details: {
      meta: [
        { label: "Partner Organisation", value: "Gates Foundation" },
        { label: "Location", value: "Ahmedabad, India" },
        { label: "Experience", value: "3–8 years (band to be confirmed based on level)" },
        { label: "Engagement Type", value: "Full-time" },
        { label: "Reports To", value: "Senior Program Officers (SPOs)" },
        {
          label: "Consultant Position",
          value: "Strategy Officer, India (level to be mapped based on experience)",
        },
        {
          label: "SkyQuest Position",
          value:
            "Consultant / Senior Consultant / Lead Consultant / Associate Manager / Manager (designation and level to be finalised based on candidate experience and project assignment)",
        },
        {
          label: "Travel",
          value:
            "Open to national and international travel, including Africa, South Asia and other Foundation geographies",
        },
      ],
      role: [
        "SkyQuest Technology Consulting is one of the fastest-growing global organisations in the development sector, consulting, innovation management, and commercialisation, committed to bridging the gap between innovations and new markets, networks, and collaborators. Our mission aligns with advancing the Sustainable Development Goals (SDGs) through impactful strategies and solutions. With over 20 years of experience, we provide consulting and advisory services across agriculture, water and sanitation, youth and entrepreneurship, and the development sector.",
        "SkyQuest values its longstanding partnership with the Gates Foundation, supporting its mission on a project basis through a consulting role aligned to the assignment and working closely with the foundation.",
        "The Gates Foundation is a global nonprofit committed to reducing inequity and improving lives worldwide. In agricultural development, it focuses on reducing poverty and hunger by empowering smallholder farmers, primarily in South Asia: developing climate-smart crop varieties, supporting livestock health, promoting digital tools for farm productivity, strengthening market access, improving financial services, and fostering supportive policies, with a strong emphasis on gender equity so that women farmers have equal access to resources and opportunities.",
        "The role sits at the intersection of strategy consulting and impact in the development sector. As part of a lean, high-ownership team supporting the Foundation's agricultural development agenda in India, you will structure ambiguous problems, run the underlying research and analysis, build the evidence base, and convert findings into strategy recommendations and executable plans. The work spans diagnostics and landscape assessments, stakeholder engagement across government, private sector, and NGOs, and the design of go-to-market and scale-up pathways for agricultural innovations.",
        "The role demands strong analytical rigour, crisp communication, and the ability to operate independently in a fast-moving, multi-stakeholder environment, and carries a significant travel component within India and internationally across Africa, South Asia, and other Foundation geographies.",
      ],
      responsibilitiesTitle: "Key Responsibilities",
      responsibilities: [
        {
          items: [
            "Conduct gap assessments and identify opportunities for investment and adaptation in agricultural development.",
            "Use research and capacity assessment outputs to inform strategy development and support evidence-based decision-making.",
            "Support stakeholder consultations with governments, the private sector, and NGOs to socialise and refine recommendations.",
            "Support and develop strategy recommendations and actionable plans to support the vision for the agricultural ecosystem.",
            "Support the development of Go-to-Market (GTM) strategies for agricultural innovations, products, and services, covering market sizing, segmentation, channel and partner selection, pricing strategies, and adoption pathways for smallholder farmers.",
            "Prepare knowledge products and project pipelines based on assessments and stakeholder consultations.",
            "Structure ambiguous problems using hypothesis-driven problem solving and issue trees, and design the analytical approach to test them.",
            "Conduct primary research through expert interviews, field visits, surveys, and reviews of published and industry databases, and synthesise findings into clear insights.",
            "Build financial models, business cases, and cost-benefit analyses to support investment decisions and prioritisation.",
            "Conduct market landscaping, benchmarking, and competitive analysis across geographies and comparable programmes.",
            "Develop client-ready deliverables: structured, narrative-driven presentations, analytical models, dashboards, and written reports for senior leadership and external stakeholders.",
            "Support monitoring, evaluation, and learning (MEL) by defining KPIs, success metrics, and impact measurement frameworks for initiatives.",
            "Own discrete workstreams end-to-end: planning, timeline management, quality control, and stakeholder communication with minimal supervision.",
            "Collaborate with team members, programme managers, directors, and other stakeholders to strengthen agricultural systems.",
            "Assist in translating approved strategies into implementation plans and execution pipelines.",
            "Adaptable work approach: willingness to handle occasional responsibilities beyond regular weekdays or standard working hours.",
          ],
        },
      ],
      requirements: [
        {
          heading: "Candidate Requirements",
          items: [
            "Prior experience in strategy development, Go-To-Market (GTM) strategy, data analysis, finance, or private sector engagement.",
            "Exposure to GTM planning, market entry, commercialisation, or scale-up of products and services is preferred.",
            "Prior experience with a consulting firm, strategy/advisory practice, think tank, impact advisory, or corporate strategy team is strongly preferred.",
            "Advanced proficiency in PowerPoint and Excel; familiarity with data tools such as SQL, Python, Power BI, or Tableau is an added advantage.",
            "Strong business writing skills: able to produce concept notes, reports, and executive summaries independently.",
            "Degree in Applied Sciences, Engineering, Statistics, Computer Science, Data Science, or a related field is preferred.",
            "Knowledge of agriculture is preferred.",
            "Experience in global development or international programmes is a strong advantage.",
            "Comfortable working in dynamic, cross-geographical environments and collaborating with multicultural teams.",
            "Must be open to frequent national and international travel, including to Africa, South Asia, and other Foundation geographies, and able to coordinate across multiple time zones.",
            "Valid passport, or willingness to obtain one, and the ability to travel internationally without restrictions.",
            "Willingness to work flexible hours, including occasional extended hours or weekend responsibilities.",
          ],
        },
        {
          heading: "Skills & Competencies",
          items: [
            "Strong analytical and quantitative skills, including modelling, data visualisation, and interpretation of complex datasets.",
            "Working knowledge of Go-To-Market (GTM) frameworks: market sizing, segmentation, channel strategy, pricing, and adoption/scale-up planning.",
            "Excellent communication and facilitation skills for both technical and non-technical audiences.",
            "Strong relationship management and collaboration skills; able to lead teams through complex, ambiguous projects.",
            "Cultural sensitivity and ability to work effectively across geographies, time zones, and diverse stakeholders.",
            "Flexibility and adaptability in work schedules, including occasional extended hours or weekend work.",
            "Ability to think creatively, challenge assumptions, and influence without formal authority.",
            "Commitment to the Foundation's mission, values, and core principles.",
            "Structured problem-solving: able to break down open-ended questions into testable components and drive to an answer.",
            "Storylining and executive presence: able to build a clear narrative and present confidently to senior stakeholders.",
            "High attention to detail and strong ownership of quality in analysis and deliverables.",
            "Comfort with ambiguity and the ability to make progress with incomplete information.",
            "Positive outlook, proactive attitude, and a team-oriented approach.",
          ],
        },
      ],
      offer: [
        "Direct exposure to a globally respected Foundation and its India agricultural development agenda.",
        "High-ownership work with visibility to senior leadership from day one.",
        "Cross-geography exposure across India, Africa, and South Asia.",
        "Strong learning opportunities at the intersection of strategy consulting and development impact.",
        "Compensation aligned to experience and level, benchmarked to industry standards.",
      ],
      extraSections: [
        {
          title: "Selection Process",
          items: [
            "Profile screening and initial HR discussion.",
            "Technical or case-based discussion assessing problem structuring and analytical depth.",
            "Panel round with SkyQuest leadership.",
            "Discussion with the partner organisation, as applicable.",
            "Offer, documentation, and background verification.",
          ],
        },
        {
          title: "How to Apply",
          items: ["Interested candidates may share their updated profile using the form below."],
        },
      ],
    },
  },
];

export const categories = CATEGORY_LABELS.map((label) => ({
  label,
  count: label === "All positions" ? jobs.length : jobs.filter((j) => j.category === label).length,
}));
