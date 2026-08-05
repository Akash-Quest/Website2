export type PrivacySegment = string | { text: string; href?: string; bold?: boolean };

export type PrivacyBlock =
  | { type: "paragraph"; segments: PrivacySegment[]; variant?: "bold" | "muted" | "note" }
  | { type: "subheading"; text: string }
  | { type: "bullet"; segments: PrivacySegment[] };

export interface PrivacySection {
  heading: string;
  headingEmphasis: string;
  blocks: PrivacyBlock[];
}

export const privacyPolicySections: PrivacySection[] = [
  {
    heading: "Skyquest Technology Group ",
    headingEmphasis: "Privacy Statement",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group are committed to securing your personal data and respecting the choices you make. “Personal data” is any information from which you could be personally identified. This statement informs you of our collection and privacy practices for personal data.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group operate our procedures in line with the EU General Data Protection Regulation and/or local applicable laws.",
        ],
      },
    ],
  },
  {
    heading: "Our ",
    headingEmphasis: "Principles",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "We operate a privacy program within Skyquest Technology Group to meet our data protection obligations and principles. Those principles are as follows:",
        ],
      },
      { type: "subheading", text: "Be lawful, fair and transparent" },
      {
        type: "paragraph",
        segments: [
          "Where we process the personal data of clients, our employees, third parties or private individuals, our practices should be lawful, fair and clear in purpose. To achieve this we shall ensure that we hold a legal basis, consent, or a balanced legitimate business reason to process personal data in our business practices.",
        ],
      },
      { type: "subheading", text: "For Example:" },
      {
        type: "paragraph",
        variant: "bold",
        segments: ["Where you are a Skyquest Technology Group client."],
      },
      {
        type: "paragraph",
        segments: [
          "To service our relationship, we shall rely upon performance of a contract to offer you support, service update news, collect usage metrics, record interactions during the duration of the relationship.",
        ],
      },
      {
        type: "paragraph",
        variant: "bold",
        segments: ["Where you have downloaded Skyquest Technology Group content as an interested party."],
      },
      {
        type: "paragraph",
        segments: [
          "We will seek and rely upon your consent to offer newsletters, similar content alerts, etc., and offer you the chance to change your preferences.",
        ],
      },
      {
        type: "paragraph",
        variant: "bold",
        segments: ["Where we connect with you as a potential business client."],
      },
      {
        type: "paragraph",
        segments: [
          "We shall describe who we are, why we are contacting you and shall respect your right to end that communication. We will rely upon legitimate interest to perform this business requirement.",
        ],
      },
      { type: "subheading", text: "Provide clear information & choice" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group shall be clear on what we do, providing information and choice when collecting and processing personal data. We shall not use personal data in a way incompatible with these principles, our notices and this privacy statement.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Our clients, staff, job applicants and partners will be provided with reasonable means to review, amend and delete personal data each has shared with Skyquest Technology Group.",
        ],
      },
      { type: "subheading", text: "Accurate and limited in purpose" },
      {
        type: "paragraph",
        segments: [
          "We only use personal data for the described purposes or entirely compatible purposes in accordance with law. We shall take reasonable steps to ensure that personal data remains accurate, complete and current. Skyquest Technology Group respect your data rights.",
        ],
      },
      { type: "subheading", text: "Data Security" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group protect all personal data against disclosure or unauthorised access using a variety of technical, physical and administrative measures.",
        ],
      },
      { type: "subheading", text: "Onward Transfer" },
      {
        type: "paragraph",
        segments: [
          "Where we transfer or share personal data with third parties, or in different regions of the world, we shall seek equivalent levels of protection through due diligence and contract. Where we transfer EU personal data outside of the EEA, we shall seek and apply adequate safeguards such as:",
        ],
      },
      {
        type: "paragraph",
        variant: "muted",
        segments: [
          { text: "Privacy Shield ", bold: true },
          "- an assurance scheme between EU and United States entities ",
          { text: "https://www.privacyshield.gov", href: "https://www.privacyshield.gov" },
        ],
      },
      {
        type: "paragraph",
        variant: "muted",
        segments: [
          { text: "Standard Model Clauses ", bold: true },
          "- a legal and contractual agreement describing adequate protection of data in the performance of a contract.",
        ],
      },
      {
        type: "paragraph",
        variant: "muted",
        segments: [
          { text: "Explicit Consent ", bold: true },
          " - seeking clear consent from the data subject.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "For a more detailed description of Skyquest Technology Group's personal data transfers please contact us at ",
          { text: "privacy@skyquestt.com", href: "mailto:privacy@skyquestt.com" },
        ],
      },
    ],
  },
  {
    heading: "Protecting ",
    headingEmphasis: "Your Data",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "Where we collect, store, process or transfer personal data Skyquest Technology Group will use physical, technical and administrative controls to protect that data. Where we are required to process payment or password information, we will protect the information using an enterprise level encryption protocol such as TLS (Transport Layer Security)",
        ],
      },
    ],
  },
  {
    heading: "How We ",
    headingEmphasis: "Use Data",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group collect and use personal data in person, verbally and electronically to manage how we interact and deliver personal experience to you and grow our business. Those purposes include:",
        ],
      },
      { type: "subheading", text: "Customer Experience:" },
      {
        type: "paragraph",
        segments: [
          "We will utilise your data to deliver customer support, personalise your online experience and create services and opportunities tailored to your preferences. Often we will hold client training and events onsite, online and over the phone.",
        ],
      },
      { type: "subheading", text: "Innovation" },
      {
        type: "paragraph",
        segments: [
          "To develop our services, create new features and understand our offering, Skyquest Technology Group incorporate some data analysis activities, web analytics and cookies to help us make decisions within the business.",
        ],
      },
      { type: "subheading", text: "Marketing & Communication" },
      {
        type: "paragraph",
        segments: [
          "To tell you all about services in which you have expressed an interest we will present you with insight and offers/sales opportunities in line with your privacy preferences.",
        ],
      },
      { type: "subheading", text: "Business Operations" },
      {
        type: "paragraph",
        segments: [
          "To operate our business we use personnel recruitment and training data, integrate security into our websites and our physical locations and collect information to detect crime and remain compliant with applicable laws protecting ourselves, our clients and relevant third parties. We will maintain copies of data for backup and business continuity purposes.",
        ],
      },
      { type: "subheading", text: "Administrative Support" },
      {
        type: "paragraph",
        segments: [
          "We will use your data to support your requests, assist with ordering of our services and maintain appropriate contact with our people and clients. Skyquest Technology Group will retain some information to resolve disputes as required.",
        ],
      },
    ],
  },
  {
    heading: "Data ",
    headingEmphasis: "We Collect",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "You will not always be required to share the personal data that we request and we will attempt to collect no more than is fit for purpose; however in some circumstances we may be unable to meet your needs without it, our process is likely to depend on the nature of the interaction.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "At Skyquest Technology Group we collect personal data through a variety of sources across the business inclusive of:",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Contact Data ", bold: true },
          " - We may collect personal and/or business contact data including your first name, last name, mailing address, telephone number, fax number, email address and other similar contact information.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Account Data ", bold: true },
          " - We collect information such as purchase/sale history and service interest(s) to serve our clients.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Location Data ", bold: true },
          " - Network IP addressing may allow us to identify a general country or region as part of Skyquest Technology Group's analytics capability; this data may also be used to provide support and/or protect our computer systems.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Detailed Location Data ", bold: true },
          " - A more detailed location when you enable location-based services on a device or when you choose to provide location related information during a registration.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "CCTV images ", bold: true },
          " - At our premises across Skyquest Technology Group, we operate CCTV schemes for the purposes of crime prevention.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Application Data ", bold: true },
          " - We collect some information related to applications such as location, language, data sharing choices and update details.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Website Browsing Data ", bold: true },
          " - We collect information about your visits to and your activity on our websites that you view and interact with, the address of the website from which you arrived and other clickstream behaviour such as the pages you view or the links you click. Some of this information is collected using Automatic Data Collection Tools which include cookies, web beacons and embedded web links.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Anonymous or Aggregated Data ", bold: true },
          " - We may collect anonymous and/or aggregated information during the course of our operations, we may also apply a process of deidentification to your data to making it unlikely to identify you.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Security Credentials Data ", bold: true },
          " - We collect user IDs, passwords, and similar security information required for authentication to our websites and services.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Demographic Data ", bold: true },
          " - We may collect, or obtain from third parties, certain demographic data including country, gender, age and preferred language.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Preferences ", bold: true },
          " - We collect information about your preferences and interests as they relate to our services and how you prefer to receive communications from us.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Other Unique Identifying Information ", bold: true },
          " - Examples of other unique information that we may collect from you include information you provide when you interact in-person, online or by phone or mail.",
        ],
      },
      { type: "subheading", text: "Third-Party information sources" },
      {
        type: "paragraph",
        segments: [
          "On occasion we may collect information from third party sources, either public or on a commercial basis. Where we do this, we shall conduct diligence on these sources' integrity and collection models. Primary examples of third party sources are LinkedIn Navigator, Dun and Bradstreet insights and EDS.",
        ],
      },
      { type: "subheading", text: "Collection of special categories of data" },
      {
        type: "paragraph",
        segments: [
          "“Special categories of data” is defined by the General Data Protection Regulation (GDPR) as processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group do not collect these types of information on our clients, partners or service users.",
        ],
      },
      { type: "subheading", text: "Collection of children's information" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group does not knowingly collect, retain or utilise personal data regarding children under 16 years of age. Our services are not marketed or intended to achieve that outcome. Please contact us at ",
          { text: "privacy@skyquestt.com", href: "mailto:privacy@skyquestt.com" },
          " if you have an enquiry on this topic.",
        ],
      },
      { type: "subheading", text: "Collection of data for research purposes" },
      {
        type: "paragraph",
        segments: [
          "Data collected for research purposes is processed for commercial purposes with no medical intent. All data is collected and processed in accordance with Skyquest Technology Group's data policies, which data largely will be aggregated and anonymous. Research data is collected for the context of commercial marketing research. Please contact us at ",
          { text: "privacy@skyquestt.com", href: "mailto:privacy@skyquestt.com" },
          " if you have an enquiry on this topic.",
        ],
      },
    ],
  },
  {
    heading: "Sharing ",
    headingEmphasis: "Your Data",
    blocks: [
      {
        type: "paragraph",
        segments: ["Skyquest Technology Group on occasion shall share your personal data with:"],
      },
      { type: "subheading", text: "Companies within the Skyquest Technology Group" },
      {
        type: "paragraph",
        segments: [
          "We may transfer your data within the Skyquest Technology Group group of companies for the purposes outlined in this privacy statement. These entities exist globally inclusive of the US and are bound by our privacy requirements and inter-company model clauses in contract.",
        ],
      },
      { type: "subheading", text: "Compliance with the Law" },
      {
        type: "paragraph",
        segments: [
          "Where we have an obligation to comply with law enforcement, the courts or other recognised authorities or to protect Skyquest Technology Group's legitimate interests in line with law, we may be required to share or reproduce personal data to satisfy those requirements.",
        ],
      },
      { type: "subheading", text: "Business Transactions" },
      {
        type: "paragraph",
        segments: [
          "Where Skyquest Technology Group process online transactions, your payment details are sent via a trusted third party payment gateway. Skyquest Technology Group do not hold or store card details on our systems.",
        ],
      },
      { type: "subheading", text: "Service providers" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group will utilise select service providers and partners to enhance or manage aspects of our business operations. Our partners are required in contract to safeguard personal data inclusive of data transfer and to process only in a way instructed by us.",
        ],
      },
    ],
  },
  {
    heading: "Refund ",
    headingEmphasis: "Policy",
    blocks: [
      { type: "subheading", text: "Introduction" },
      {
        type: "paragraph",
        segments: [
          "This policy outlines our stance on refunds for payments made towards the purchase of our research reports and other related services. To ensure the efficient management of our resources and the protection of our intellectual property, we have established a strict no-refund policy once payment has been made.",
        ],
      },
      { type: "subheading", text: "Policy Rationale" },
      {
        type: "paragraph",
        segments: [
          { text: "1. Intellectual Property Security:", bold: true },
          " Our reports contain valuable proprietary information. Allowing refunds after access could compromise the confidentiality and integrity of our work.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "2. Resource Commitment:", bold: true },
          " The creation and maintenance of high-quality research involve significant investment in time and resources. A no-refund policy ensures that these resources are utilized effectively to continue delivering top-notch research.",
        ],
      },
      { type: "subheading", text: "Policy Details" },
      {
        type: "paragraph",
        segments: [
          { text: "1. Resource Commitment:", bold: true },
          " Once a payment is made, no refunds will be issued. This includes scenarios such as accidental purchases, change of mind, or dissatisfaction with the report content.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "2. Pre-Purchase Review:", bold: true },
          " Potential customers are encouraged to carefully review the product descriptions, table of contents, and any available samples or previews before making a purchase. Our customer service team is available to answer any pre-purchase inquiries to ensure informed decisions.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "3. Exceptional Circumstances:", bold: true },
          " While our standard policy does not permit refunds, we recognize that exceptional situations may arise. Refund requests under exceptional circumstances will be considered on a case-by-case basis at the sole discretion of our organization. The decision made in such cases will be final.",
        ],
      },
    ],
  },
  {
    heading: "Contact ",
    headingEmphasis: "Information",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "For any questions or further clarification regarding our No Refund Once Payment Made Policy, please contact our customer support team at ",
          { text: "sales@skyquestt.com.", href: "mailto:sales@skyquestt.com" },
        ],
      },
      { type: "subheading", text: "Conclusion" },
      {
        type: "paragraph",
        segments: [
          "Our no-refund policy is designed to protect the value of our research and maintain the sustainability of our operations. We appreciate our customers' understanding and support in adhering to this policy.",
        ],
      },
    ],
  },
  {
    heading: "How We Use Automatic ",
    headingEmphasis: "Data Collection Tools",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "To accurately understand our clients' use of our services, optimise our web content for you and serve you with the most relevant content, we use Skyquest Technology Group and other companies' cookies, web beacons and embedded hyperlinks.",
        ],
      },
      { type: "subheading", text: "What are cookies & how do we use them?" },
      {
        type: "paragraph",
        segments: [
          "When you visit a website, small text files are placed upon your device and can be read by the website owner. Some are temporary and are deleted when you shut the web browser, some remain on your device for longer or until deleted.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Cookies serve a variety of purposes inclusive of browser identification, remembering you and your choices, personalisation of the experience, website performance and usage analytics.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          'To change your cookie preferences see the "Respecting Your Privacy Preferences" section of this privacy statement.',
        ],
      },
      { type: "subheading", text: "What are web beacons & how do we use them?" },
      {
        type: "paragraph",
        segments: [
          "Web beacons (usually in combination with cookies) is an embedded image which can compile information about your website usage and your interaction with email or other communications, to measure performance, understand usage and to provide content.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "For instance, we may include web beacons in our promotional email messages or newsletters to determine whether our messages have been opened or acted upon and whether our mailing tools are working correctly.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          'To change you web beacon preferences see the "Respecting Your Privacy Preferences" section of this privacy statement.',
        ],
      },
      { type: "subheading", text: "Embedded hyperlinks" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group may use hyperlinks to determine the effectiveness of our initiatives. For example, in emails we could determine whether you have clicked a link, and this interaction may be connected to your personal identity.",
        ],
      },
    ],
  },
  {
    heading: "Mandatory ",
    headingEmphasis: "Client Messaging",
    blocks: [
      {
        type: "paragraph",
        segments: ["To operate our business there are some circumstances where we are obliged to remain in touch. For example:"],
      },
      {
        type: "bullet",
        segments: [
          { text: "Contract related", bold: true },
          " – inclusion or removal of new content within the subscription as part of renewal negotiations.",
        ],
      },
      {
        type: "bullet",
        segments: [
          { text: "Service related", bold: true },
          " – adjustments to our service model which may impact how users interact with us.",
        ],
      },
      {
        type: "bullet",
        segments: [
          { text: "T&C related", bold: true },
          " – relevant reminders or changes to the terms and conditions of a customer agreement.",
        ],
      },
      {
        type: "bullet",
        segments: [
          { text: "Legal related", bold: true },
          " – A result of changing legislation where we are required to communicate to our user community.",
        ],
      },
    ],
  },
  {
    heading: "Respecting Your ",
    headingEmphasis: "Privacy Preferences",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "We shall seek your permission when we collect your personal data regardless of the collection method and give you tools to manage your relationship with us. To assist with selecting your preferences across systems you can:",
        ],
      },
      { type: "subheading", text: "Manage your email preferences:" },
      {
        type: "paragraph",
        segments: [
          "Skyquest Technology Group may use hyperlinks to determine the effectiveness of our initiatives. For example, in emails we could determine whether you have clicked a link, and this interaction may be connected to your personal identity.",
        ],
      },
      { type: "bullet", segments: ["Our unsubscribe service found in our emails"] },
      { type: "bullet", segments: ["Managing an existing account(s) setting"] },
      {
        type: "bullet",
        segments: [
          "Registering your preference with us at ",
          { text: "privacy@skyquestt.com", href: "mailto:privacy@skyquestt.com" },
        ],
      },
      { type: "subheading", text: "Understand web beacons:" },
      {
        type: "paragraph",
        segments: [
          "Web beacons are an embedded part of a web page and may not always be straightforward to refuse, although they can be disabled when embedded in email by setting your email client to not download images",
        ],
      },
      {
        type: "paragraph",
        segments: ["Web beacons can also be disrupted by opting out of third party cookies in your browser settings."],
      },
    ],
  },
  {
    heading: "Exercising ",
    headingEmphasis: "Your Rights",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "You have the right to access any personal data that you have provided to us or that we maintain about you. In addition, you have the right to withdraw any consent previously granted or to request correction, amendment, restriction, anonymization or deletion of your personal data and to request an explanation of the processing.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "In certain cases, your request may be denied where we have a legitimate reason to do so. You can expect that we will explain our decision if this applies.",
        ],
      },
      {
        type: "paragraph",
        segments: ["This type of request should be received in writing. Email or Post is fine."],
      },
    ],
  },
  {
    heading: "Contact ",
    headingEmphasis: "Us",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "If you would like to contact us regarding our privacy statement, register a subject access request or just have a question, then please get in touch. All communication will be treated as confidential, and we will respond to you in a timely manner.",
        ],
      },
      { type: "subheading", text: "The Data Protection team" },
      { type: "paragraph", segments: ["Skyquest Technology Group Ltd."] },
      { type: "paragraph", segments: ["1 Apache Way, Westford, Massachusetts 01886"] },
      {
        type: "paragraph",
        segments: ["E: ", { text: "privacy@skyquestt.com", href: "mailto:privacy@skyquestt.com" }],
      },
      { type: "subheading", text: "I have a complaint" },
      {
        type: "paragraph",
        segments: [
          "We want to resolve your problems and would like you duly to give us the opportunity. However, if we are unable to do so, then you have the right to contact the Supervisory Authority regarding a personal data matter. You can contact Skyquest Technology Group or the Information Commissioner's Office in the UK for guidance.",
        ],
      },
      { type: "subheading", text: "Changes to Our Privacy Statement" },
      {
        type: "paragraph",
        segments: [
          "From time to time we may be required to revise the content of this privacy statement. If we do so, for example due to material changes to our practices, then we will consider the effect on those on whom we hold personal data and publish here the revised privacy statement.",
        ],
      },
      {
        type: "paragraph",
        variant: "note",
        segments: ["This statement was reviewed on: 13 July 2026"],
      },
    ],
  },
];
