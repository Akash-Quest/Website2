'use client';

import React from 'react';

// ================= GLOBAL CONFIGURATION CONSTANTS =================
// Reusable Tailwind class configurations for absolute consistency and DRY principles
const HEADING_STYLE = "text-3xl md:text-[52px] font-['Inter_Tight'] font-semibold text-[#03030F] leading-tight md:leading-[63px] tracking-tight border-b border-[#03030F]/20 pb-3";
const SUB_HEADING_STYLE = "text-xl md:text-2xl font-bold text-[#03030F] tracking-tight mt-6 mb-1 block";
const PARAGRAPH_STYLE = "mt-4 text-base md:text-lg leading-[26px] md:leading-[30px] text-base block";
const SUB_BLOCK_GAP = "flex flex-col mt-4 text-base md:text-lg text-[#03030F]/70";
const LINK_STYLE = "text-[#0A87EE] underline underline-offset-4 hover:text-blue-600 transition-colors";

export default function PremiumPrivacyPolicyPage() {
  return (
    <>
      {/* Structural Blueprint Grid Layout Panel Wrapper */}
      <div className="w-full bg-[#F7F5F1] text-[#03030F] font-['Inter_Tight'] min-h-screen select-none relative grid grid-cols-[240px_1fr_240px] max-xl:grid-cols-[1fr] overflow-x-hidden">
        
        {/* ================= GLOBAL HORIZONTAL EXTENDED BORDER LINES (Edge-to-Edge) ================= */}
        

        {/* ================= LEFT STRUCTURAL LINE (Vector 635) ================= */}
        <div className="h-full border-r border-[#03030F]/10 hidden xl:block" />

        {/* ================= CENTER VALID CONTENT FRAME (Grid Area) ================= */}
        <div className="w-full max-w-[1920px] mx-auto bg-[#F7F5F1] flex flex-col min-h-screen relative pb-24 overflow-hidden">

        <div className="absolute top-[150px] left-0 right-0 w-full border-b border-[#03030F]/10 pointer-events-none z-30" />
        <div className="absolute top-[280px] left-0 right-0 w-full border-b border-[#03030F]/10 pointer-events-none z-30" />
          
          {/* ================= BREADCRUMB TRAIL AREA ================= */}
          <div className="w-full py-25 px-6 text-sm text-[#03030F]/40 pb-8">
            <span>Home</span>
            <span> / </span>
            <span className="text-[#03030F]/70 font-medium">Privacy Policy</span>
          </div>

          {/* Core Page Contents Wrapper with Inner Layout Spacing */}
          <div className="w-full px-6 md:px-12 mt-4 flex flex-col">
            
            {/* Main Caption Node Header Block */}
            <div className="pb-10">
              <span className="text-base text-[#1D1EE3] tracking-wider block mb-2">
                Skyquest
              </span>
              <h1 className="text-4xl md:text-[52px] font-semibold tracking-tight text-[#03030F] leading-tight md:leading-[63px]">
                Privacy Policy
              </h1>
            </div>

            {/* Core Text Section Node Framework */}
            <div className="flex flex-col gap-10 mt-1 text-base md:text-lg leading-[26px] md:leading-[30px] text-[#03030F]/70">
              
              {/* 1. STG Privacy Statement */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Skyquest Technology Group <span className="font-['Playfair_Display'] italic font-semibold">Privacy Statement</span>
                </h2>
                <p className={PARAGRAPH_STYLE}>
                  Skyquest Technology Group are committed to securing your personal data and respecting the choices you make. “Personal data” is any information from which you could be personally identified. This statement informs you of our collection and privacy practices for personal data.
                </p>
                <p className={PARAGRAPH_STYLE}>
                  Skyquest Technology Group operate our procedures in line with the EU General Data Protection Regulation and/or local applicable laws.
                </p>
              </div>

              {/* 2. Our Principles */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Our <span className="font-['Playfair_Display'] italic font-semibold">Principles</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>We operate a privacy program within Skyquest Technology Group to meet our data protection obligations and principles. Those principles are as follows:</p>
                  
                  <span className={SUB_HEADING_STYLE}>Be lawful, fair and transparent</span>
                  <p className={PARAGRAPH_STYLE}>Where we process the personal data of clients, our employees, third parties or private individuals, our practices should be lawful, fair and clear in purpose. To achieve this we shall ensure that we hold a legal basis, consent, or a balanced legitimate business reason to process personal data in our business practices.</p>
                  
                  <span className={SUB_HEADING_STYLE}>For Example:</span>
                  <p className={`${PARAGRAPH_STYLE} font-bold text-[#03030F]/70`}>Where you are a Skyquest Technology Group client.</p>
                  <p className={PARAGRAPH_STYLE}>To service our relationship, we shall rely upon performance of a contract to offer you support, service update news, collect usage metrics, record interactions during the duration of the relationship.</p>
                  
                  <p className={`${PARAGRAPH_STYLE} font-bold text-[#03030F]/70`}>Where you have downloaded Skyquest Technology Group content as an interested party.</p>
                  <p className={PARAGRAPH_STYLE}>We will seek and rely upon your consent to offer newsletters, similar content alerts, etc., and offer you the chance to change your preferences.</p>
                  
                  <p className={`${PARAGRAPH_STYLE} font-bold text-[#03030F]/70`}>Where we connect with you as a potential business client.</p>
                  <p className={PARAGRAPH_STYLE}>We shall describe who we are, why we are contacting you and shall respect your right to end that communication. We will rely upon legitimate interest to perform this business requirement.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Provide clear information & choice</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group shall be clear on what we do, providing information and choice when collecting and processing personal data. We shall not use personal data in a way incompatible with these principles, our notices and this privacy statement.</p>
                  <p className={PARAGRAPH_STYLE}>Our clients, staff, job applicants and partners will be provided with reasonable means to review, amend and delete personal data each has shared with Skyquest Technology Group.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Accurate and limited in purpose</span>
                  <p className={PARAGRAPH_STYLE}>We only use personal data for the described purposes or entirely compatible purposes in accordance with law. We shall take reasonable steps to ensure that personal data remains accurate, complete and current. Skyquest Technology Group respect your data rights.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Data Security</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group protect all personal data against disclosure or unauthorised access using a variety of technical, physical and administrative measures.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Onward Transfer</span>
                  <p className={PARAGRAPH_STYLE}>Where we transfer or share personal data with third parties, or in different regions of the world, we shall seek equivalent levels of protection through due diligence and contract. Where we transfer EU personal data outside of the EEA, we shall seek and apply adequate safeguards such as:</p>
                  
                  <p className={`${PARAGRAPH_STYLE} text-[#03030F]/80`}>
                    <span className="font-bold">Privacy Shield </span>- an assurance scheme between EU and United States entities <a href="https://www.privacyshield.gov" target="_blank" className={`${LINK_STYLE} break-all`}>https://www.privacyshield.gov</a>
                  </p>
                  <p className={`${PARAGRAPH_STYLE} text-[#03030F]/80`}>
                    <span className="font-bold">Standard Model Clauses </span>- a legal and contractual agreement describing adequate protection of data in the performance of a contract.
                  </p>
                  <p className={`${PARAGRAPH_STYLE} text-[#03030F]/80`}>
                    <span className="font-bold">Explicit Consent </span> - seeking clear consent from the data subject.
                  </p>
                  <p className={PARAGRAPH_STYLE}>
                    For a more detailed description of Skyquest Technology Group's personal data transfers please contact us at <a href="mailto:privacy@skyquestt.com" className={`${LINK_STYLE} break-all`}>privacy@skyquestt.com</a>
                  </p>
                </div>
              </div>

              {/* 3. Protecting Data */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Protecting <span className="font-['Playfair_Display'] italic font-semibold">Your Data</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>Where we collect, store, process or transfer personal data Skyquest Technology Group will use physical, technical and administrative controls to protect that data. Where we are required to process payment or password information, we will protect the information using an enterprise level encryption protocol such as TLS (Transport Layer Security)</p>
                </div>
              </div>

              {/* 4. How we use data */}
              <div>
                <h2 className={HEADING_STYLE}>
                  How We <span className="font-['Playfair_Display'] italic font-semibold">Use Data</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group collect and use personal data in person, verbally and electronically to manage how we interact and deliver personal experience to you and grow our business. Those purposes include:</p>              
                  
                  <span className={SUB_HEADING_STYLE}>Customer Experience:</span>
                  <p className={PARAGRAPH_STYLE}>We will utilise your data to deliver customer support, personalise your online experience and create services and opportunities tailored to your preferences. Often we will hold client training and events onsite, online and over the phone.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Innovation</span>
                  <p className={PARAGRAPH_STYLE}>To develop our services, create new features and understand our offering, Skyquest Technology Group incorporate some data analysis activities, web analytics and cookies to help us make decisions within the business.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Marketing & Communication</span>
                  <p className={PARAGRAPH_STYLE}>To tell you all about services in which you have expressed an interest we will present you with insight and offers/sales opportunities in line with your privacy preferences.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Business Operations</span>
                  <p className={PARAGRAPH_STYLE}>To operate our business we use personnel recruitment and training data, integrate security into our websites and our physical locations and collect information to detect crime and remain compliant with applicable laws protecting ourselves, our clients and relevant third parties. We will maintain copies of data for backup and business continuity purposes.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Administrative Support</span>
                  <p className={PARAGRAPH_STYLE}>We will use your data to support your requests, assist with ordering of our services and maintain appropriate contact with our people and clients. Skyquest Technology Group will retain some information to resolve disputes as required.</p>
                </div>
              </div>

              {/* 5. Data We Collect */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Data <span className="font-['Playfair_Display'] italic font-semibold">We Collect</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>You will not always be required to share the personal data that we request and we will attempt to collect no more than is fit for purpose; however in some circumstances we may be unable to meet your needs without it, our process is likely to depend on the nature of the interaction.</p>
                  <p className={PARAGRAPH_STYLE}>At Skyquest Technology Group we collect personal data through a variety of sources across the business inclusive of:</p>
                  
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Contact Data </span> - We may collect personal and/or business contact data including your first name, last name, mailing address, telephone number, fax number, email address and other similar contact information.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Account Data </span> - We collect information such as purchase/sale history and service interest(s) to serve our clients.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Location Data </span> - Network IP addressing may allow us to identify a general country or region as part of Skyquest Technology Group's analytics capability; this data may also be used to provide support and/or protect our computer systems.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Detailed Location Data </span> - A more detailed location when you enable location-based services on a device or when you choose to provide location related information during a registration.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">CCTV images </span> - At our premises across Skyquest Technology Group, we operate CCTV schemes for the purposes of crime prevention.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Application Data </span> - We collect some information related to applications such as location, language, data sharing choices and update details.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Website Browsing Data </span> - We collect information about your visits to and your activity on our websites that you view and interact with, the address of the website from which you arrived and other clickstream behaviour such as the pages you view or the links you click. Some of this information is collected using Automatic Data Collection Tools which include cookies, web beacons and embedded web links.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Anonymous or Aggregated Data </span> - We may collect anonymous and/or aggregated information during the course of our operations, we may also apply a process of deidentification to your data to making it unlikely to identify you.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Security Credentials Data </span> - We collect user IDs, passwords, and similar security information required for authentication to our websites and services.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Demographic Data </span> - We may collect, or obtain from third parties, certain demographic data including country, gender, age and preferred language.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Preferences </span> - We collect information about your preferences and interests as they relate to our services and how you prefer to receive communications from us.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">Other Unique Identifying Information </span> - Examples of other unique information that we may collect from you include information you provide when you interact in-person, online or by phone or mail.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Third-Party information sources</span>
                  <p className={PARAGRAPH_STYLE}>On occasion we may collect information from third party sources, either public or on a commercial basis. Where we do this, we shall conduct diligence on these sources' integrity and collection models. Primary examples of third party sources are LinkedIn Navigator, Dun and Bradstreet insights and EDS.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Collection of special categories of data</span>
                  <p className={PARAGRAPH_STYLE}>“Special categories of data” is defined by the General Data Protection Regulation (GDPR) as processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation.</p>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group do not collect these types of information on our clients, partners or service users.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Collection of children's information</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group does not knowingly collect, retain or utilise personal data regarding children under 16 years of age. Our services are not marketed or intended to achieve that outcome. Please contact us at <a href="mailto:privacy@skyquestt.com" className={LINK_STYLE}>privacy@skyquestt.com</a> if you have an enquiry on this topic.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Collection of data for research purposes</span>
                  <p className={PARAGRAPH_STYLE}>Data collected for research purposes is processed for commercial purposes with no medical intent. All data is collected and processed in accordance with Skyquest Technology Group's data policies, which data largely will be aggregated and anonymous. Research data is collected for the context of commercial marketing research. Please contact us at <a href="mailto:privacy@skyquestt.com" className={LINK_STYLE}>privacy@skyquestt.com</a> if you have an enquiry on this topic.</p>
                </div>
              </div>

              {/* 6. Data Sharing */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Sharing <span className="font-['Playfair_Display'] italic font-semibold">Your Data</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group on occasion shall share your personal data with:</p>
                  
                  <span className={SUB_HEADING_STYLE}>Companies within the Skyquest Technology Group group</span>
                  <p className={PARAGRAPH_STYLE}>We may transfer your data within the Skyquest Technology Group group of companies for the purposes outlined in this privacy statement. These entities exist globally inclusive of the US and are bound by our privacy requirements and inter-company model clauses in contract.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Compliance with the Law</span>
                  <p className={PARAGRAPH_STYLE}>Where we have an obligation to comply with law enforcement, the courts or other recognised authorities or to protect Skyquest Technology Group's legitimate interests in line with law, we may be required to share or reproduce personal data to satisfy those requirements.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Business Transactions</span>
                  <p className={PARAGRAPH_STYLE}>Where Skyquest Technology Group process online transactions, your payment details are sent via a trusted third party payment gateway. Skyquest Technology Group do not hold or store card details on our systems.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Service providers</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group will utilise select service providers and partners to enhance or manage aspects of our business operations. Our partners are required in contract to safeguard personal data inclusive of data transfer and to process only in a way instructed by us.</p>
                </div>
              </div>

              {/* 7. REFUND POLICY */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Refund <span className="font-['Playfair_Display'] italic font-semibold">Policy</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <span className={SUB_HEADING_STYLE}>Introduction</span>
                  <p className={PARAGRAPH_STYLE}>This policy outlines our stance on refunds for payments made towards the purchase of our research reports and other related services. To ensure the efficient management of our resources and the protection of our intellectual property, we have established a strict no-refund policy once payment has been made.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Policy Rationale</span>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">1. Intellectual Property Security:</span> Our reports contain valuable proprietary information. Allowing refunds after access could compromise the confidentiality and integrity of our work.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">2. Resource Commitment:</span> The creation and maintenance of high-quality research involve significant investment in time and resources. A no-refund policy ensures that these resources are utilized effectively to continue delivering top-notch research.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Policy Details</span>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">1. Resource Commitment:</span> Once a payment is made, no refunds will be issued. This includes scenarios such as accidental purchases, change of mind, or dissatisfaction with the report content.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">2. Pre-Purchase Review:</span> Potential customers are encouraged to carefully review the product descriptions, table of contents, and any available samples or previews before making a purchase. Our customer service team is available to answer any pre-purchase inquiries to ensure informed decisions.</p>
                  <p className={PARAGRAPH_STYLE}><span className="font-bold">3. Exceptional Circumstances:</span> While our standard policy does not permit refunds, we recognize that exceptional situations may arise. Refund requests under exceptional circumstances will be considered on a case-by-case basis at the sole discretion of our organization. The decision made in such cases will be final.</p>
                </div>
              </div>

              {/* 8. Contact */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Contact <span className="font-['Playfair_Display'] italic font-semibold">Information</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>For any questions or further clarification regarding our No Refund Once Payment Made Policy, please contact our customer support team at <a href="mailto:sales@skyquestt.com" className={LINK_STYLE}>sales@skyquestt.com.</a></p>
                  
                  <span className={SUB_HEADING_STYLE}>Conclusion</span>
                  <p className={PARAGRAPH_STYLE}>Our no-refund policy is designed to protect the value of our research and maintain the sustainability of our operations. We appreciate our customers' understanding and support in adhering to this policy.</p>
                </div>
              </div>

              {/* 9. Auto Data */}
              <div>
                <h2 className={HEADING_STYLE}>
                  How We Use Automatic <span className="font-['Playfair_Display'] italic font-semibold">Data Collection Tools</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>To accurately understand our clients' use of our services, optimise our web content for you and serve you with the most relevant content, we use Skyquest Technology Group and other companies' cookies, web beacons and embedded hyperlinks.</p>
                  
                  <span className={SUB_HEADING_STYLE}>What are cookies & how do we use them?</span>
                  <p className={PARAGRAPH_STYLE}>When you visit a website, small text files are placed upon your device and can be read by the website owner. Some are temporary and are deleted when you shut the web browser, some remain on your device for longer or until deleted.</p>
                  <p className={PARAGRAPH_STYLE}>Cookies serve a variety of purposes inclusive of browser identification, remembering you and your choices, personalisation of the experience, website performance and usage analytics.</p>
                  <p className={PARAGRAPH_STYLE}>To change your cookie preferences see the "Respecting Your Privacy Preferences" section of this privacy statement.</p>
                  
                  <span className={SUB_HEADING_STYLE}>What are web beacons & how do we use them?</span>
                  <p className={PARAGRAPH_STYLE}>Web beacons (usually in combination with cookies) is an embedded image which can compile information about your website usage and your interaction with email or other communications, to measure performance, understand usage and to provide content.</p>
                  <p className={PARAGRAPH_STYLE}>For instance, we may include web beacons in our promotional email messages or newsletters to determine whether our messages have been opened or acted upon and whether our mailing tools are working correctly.</p>
                  <p className={PARAGRAPH_STYLE}>To change you web beacon preferences see the "Respecting Your Privacy Preferences" section of this privacy statement.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Embedded hyperlinks</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group may use hyperlinks to determine the effectiveness of our initiatives. For example, in emails we could determine whether you have clicked a link, and this interaction may be connected to your personal identity.</p>
                </div>
              </div>

              {/* 10. Mandate */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Mandatory <span className="font-['Playfair_Display'] italic font-semibold">Client Messaging</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>To operate our business there are some circumstances where we are obliged to remain in touch. For example:</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span><span className="font-bold">Contract related</span> – inclusion or removal of new content within the subscription as part of renewal negotiations.</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span><span className="font-bold">Service related</span> – adjustments to our service model which may impact how users interact with us.</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span><span className="font-bold">T&C related</span> – relevant reminders or changes to the terms and conditions of a customer agreement.</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span><span className="font-bold">Legal related</span> – A result of changing legislation where we are required to communicate to our user community.</p>
                </div>
              </div>

              {/* 11. Respect */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Respecting Your <span className="font-['Playfair_Display'] italic font-semibold">Privacy Preferences</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>We shall seek your permission when we collect your personal data regardless of the collection method and give you tools to manage your relationship with us. To assist with selecting your preferences across systems you can:</p>
                  
                  <span className={SUB_HEADING_STYLE}>Manage your email preferences:</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group may use hyperlinks to determine the effectiveness of our initiatives. For example, in emails we could determine whether you have clicked a link, and this interaction may be connected to your personal identity.</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span>Our unsubscribe service found in our emails</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span>Managing an existing account(s) setting</p>
                  <p className={PARAGRAPH_STYLE}><span className="mx-2 text-[#03030F]/40">&bull;</span>Registering your preference with us at <a href="mailto:privacy@skyquestt.com" className={LINK_STYLE}>privacy@skyquestt.com</a></p>
                  
                  <span className={SUB_HEADING_STYLE}>Understand web beacons:</span>
                  <p className={PARAGRAPH_STYLE}>Web beacons are an embedded part of a web page and may not always be straightforward to refuse, although they can be disabled when embedded in email by setting your email client to not download images</p>
                  <p className={PARAGRAPH_STYLE}>Web beacons can also be disrupted by opting out of third party cookies in your browser settings.</p>
                </div>
              </div>

              {/* 12. Rights */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Exercising <span className="font-['Playfair_Display'] italic font-semibold">Your Rights</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>You have the right to access any personal data that you have provided to us or that we maintain about you. In addition, you have the right to withdraw any consent previously granted or to request correction, amendment, restriction, anonymization or deletion of your personal data and to request an explanation of the processing.</p>
                  <p className={PARAGRAPH_STYLE}>In certain cases, your request may be denied where we have a legitimate reason to do so. You can expect that we will explain our decision if this applies.</p>
                  <p className={PARAGRAPH_STYLE}>This type of request should be received in writing. Email or Post is fine.</p>
                </div>
              </div>

              {/* 13. Contact Us */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Contact <span className="font-['Playfair_Display'] italic font-semibold">Us</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>If you would like to contact us regarding our privacy statement, register a subject access request or just have a question, then please get in touch. All communication will be treated as confidential, and we will respond to you in a timely manner.</p>
                  
                  <span className={SUB_HEADING_STYLE}>The Data Protection team</span>
                  <p className={PARAGRAPH_STYLE}>Skyquest Technology Group Ltd.</p>
                  <p className={PARAGRAPH_STYLE}>1 Apache Way, Westford, Massachusetts 01886</p>
                  <p className={PARAGRAPH_STYLE}>E: <a href="mailto:privacy@skyquestt.com" className={LINK_STYLE}>privacy@skyquestt.com</a></p>
                  
                  <span className={SUB_HEADING_STYLE}>I have a complaint</span>
                  <p className={PARAGRAPH_STYLE}>We want to resolve your problems and would like you duly to give us the opportunity. However, if we are unable to do so, then you have the right to contact the Supervisory Authority regarding a personal data matter. You can contact Skyquest Technology Group or the Information Commissioner's Office in the UK for guidance.</p>
                  
                  <span className={SUB_HEADING_STYLE}>Changes to Our Privacy Statement</span>
                  <p className={PARAGRAPH_STYLE}>From time to time we may be required to revise the content of this privacy statement. If we do so, for example due to material changes to our practices, then we will consider the effect on those on whom we hold personal data and publish here the revised privacy statement.</p>
                  <p className={`${PARAGRAPH_STYLE} font-medium text-[#03030F] mt-6`}>This statement was reviewed on: 13 July 2026</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT STRUCTURAL LINE (Vector 634) ================= */}
        <div className="h-full border-l border-[#03030F]/10 hidden xl:block" />

      </div>

    </>
  );
}