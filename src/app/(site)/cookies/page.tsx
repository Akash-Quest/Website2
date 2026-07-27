'use client';

import React from 'react';
import Script from 'next/script';


// ================= GLOBAL CONFIGURATION CONSTANTS =================
// Reusable Tailwind class configurations for absolute consistency and DRY principles
const HEADING_STYLE = "text-3xl md:text-[52px] font-['Inter_Tight'] font-semibold text-[#03030F] leading-tight md:leading-[63px] tracking-tight border-b border-[#03030F]/20 pb-3";
const PARAGRAPH_STYLE = "mt-4 text-base md:text-lg leading-[26px] md:leading-[30px] text-justify block";
const SUB_BLOCK_GAP = "flex flex-col mt-4 text-base md:text-lg text-[#03030F]/70";
const LINK_STYLE = "text-[#0A87EE] underline underline-offset-4 hover:text-blue-600 transition-colors";

export default function PremiumCookiesPolicyPage() {
  return (
    <>
      {/* Structural Blueprint Grid Layout Panel Wrapper */}
      <div className="w-full bg-[#F7F5F1] text-[#03030F] font-['Inter_Tight'] min-h-screen  relative grid grid-cols-[240px_1fr_240px] max-xl:grid-cols-[1fr] overflow-x-hidden">
                

        {/* ================= LEFT STRUCTURAL LINE (Vector 635) ================= */}
        <div className="h-full border-r border-[#03030F]/10 hidden xl:block" />

        {/* ================= CENTER VALID CONTENT FRAME (Grid Area) ================= */}
        <div className="w-full max-w-[1920px] mx-auto bg-[#F7F5F1] flex flex-col min-h-screen relative pb-24 overflow-hidden">

          {/* ================= GLOBAL HORIZONTAL EXTENDED BORDER LINES (Edge-to-Edge) ================= */}
        <div className="absolute top-[150px] left-0 right-0 w-full border-b border-[#03030F]/10 pointer-events-none z-30" />
        <div className="absolute top-[280px] left-0 right-0 w-full border-b border-[#03030F]/10 pointer-events-none z-30" />

          
          {/* ================= BREADCRUMB TRAIL AREA ================= */}
          <div className="w-full py-25 px-6 text-sm text-[#03030F]/40 pb-8">
            <span>Home</span>
            <span> / </span>
            <span className="text-[#03030F]/70 font-medium">Cookies</span>
          </div>

          {/* Core Page Contents Wrapper with Inner Layout Spacing */}
          <div className="w-full px-6 md:px-12 mt-4 flex flex-col">
            
            {/* Main Caption Node Header Block */}
            <div className="pb-10">
              <span className="text-base text-[#1D1EE3] tracking-wider block mb-2">
                Skyquest
              </span>
              <h1 className="text-4xl md:text-[52px] font-semibold tracking-tight text-[#03030F] leading-tight md:leading-[63px]">
                Cookies
              </h1>
            </div>

            {/* Core Text Section Node Framework */}
            <div className="flex flex-col gap-12 mt-1 text-base md:text-lg leading-[26px] md:leading-[30px] text-[#03030F]/70">
              
              {/* 1. What are Cookies */}
              <div>
                <h2 className={HEADING_STYLE}>
                  What are <span className="font-['Playfair_Display'] italic font-semibold">Cookies?</span>
                </h2>
                <p className={PARAGRAPH_STYLE}>
                  Cookies are small pieces of text that are stored to your computer or mobile device when you visit a website. On your further visits to that website, the information stored in the cookie is sent back to the website. This allows the website to recognise you and tailor its content to your needs.
                </p>
              </div>

              {/* 2. Agreeing to Cookie Use */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Agreeing to <span className="font-['Playfair_Display'] italic font-semibold">Cookie Use</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>By continuing to use Skyquest Technology Group websites, you agree to Skyquest Technology Group ’s use of cookies.</p>
                  <p className={PARAGRAPH_STYLE}>Many web browsers allow fine grained control of which sites to accept or deny cookie setting from. You could use these settings to limit cookie setting from Skyquest Technology Group sites or to delete Skyquest Technology Group -set cookies completely. Please note that if you do delete all your cookies, you will not be able to use some features of Skyquest Technology Group websites.</p>
                  <p className={PARAGRAPH_STYLE}>There are links on this page to specifically opt out of Skyquest Technology Group’s external tracking services.</p>
                  <p className={PARAGRAPH_STYLE}>For what do Skyquest Technology Group websites use cookies?</p>
                </div>
              </div>

              {/* 3. Strictly Required Cookies */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Strictly Required <span className="font-['Playfair_Display'] italic font-semibold">Cookies</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>For our subscription environment, Skyquest Technology Group websites allow you to log in to access your subscription or paid content. Cookies are used to securely identify you on your current services, to simplify authentication when you navigate to other Skyquest Technology Group services, and to track that your usage complies with your license to use our paid subscription services.</p>
                  <p className={PARAGRAPH_STYLE}>For our e-commerce platforms, cookies help track what services you have added to a basket for purchase and allow you successfully to complete your purchase of our services.</p>
                </div>
              </div>

              {/* 4. Functionality Cookies Accordion Stack */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Functionality <span className="font-['Playfair_Display'] italic font-semibold">Cookies</span>
                </h2>
                <p className={PARAGRAPH_STYLE}>Cookies are used on individual Skyquest Technology Group websites to tailor your experience. For instance, cookies permit:</p>
                
                <ul className="flex flex-col gap-3 mt-4 pl-2">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#4D4C53] mt-2.5 shrink-0" />
                    <span className={PARAGRAPH_STYLE + " !mt-0"}>Some Skyquest Technology Group websites to determine your regional location and use this information to tailor contact details or website elements so that they are more relevant to you.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#4D4C53] mt-2.5 shrink-0" />
                    <span className={PARAGRAPH_STYLE + " !mt-0"}>Live chat support</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#4D4C53] mt-2.5 shrink-0" />
                    <span className={PARAGRAPH_STYLE + " !mt-0"}>The website to remember your log-in details.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#4D4C53] mt-2.5 shrink-0" />
                    <span className={PARAGRAPH_STYLE + " !mt-0"}>You to share pages with social networks like Facebook, Twitter and LinkedIn.</span>
                  </li>
                </ul>
              </div>

              {/* 5. Performance Cookies */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Performance <span className="font-['Playfair_Display'] italic font-semibold">Cookies</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>When you buy something, another party must verify your credit card. In addition, the name of your company (but not your name or contact information) may be shared with one of our third party suppliers depending upon the information you bought.</p>
                  <p className={PARAGRAPH_STYLE}>From time to time Skyquest Technology Group may send marketing emails informing you of different products and services relating to Skyquest Technology Group, if you do not wish to receive these emails do not check the appropriate box when you register or alternatively you may unsubscribe as detailed below.</p>
                </div>
              </div>

              {/* 6. Behaviourally Targeted Advertising Cookies */}
              <div>
                <h2 className={HEADING_STYLE}>
                  Behaviourally Targeted <span className="font-['Playfair_Display'] italic font-semibold">Advertising Cookies</span>
                </h2>
                <div className={SUB_BLOCK_GAP}>
                  <p className={PARAGRAPH_STYLE}>We utilise other cookies to analyse how you use our websites and to monitor website performance. This allows us to provide a high quality experience by customising our offerings and quickly identifying and fixing any issues that arise. For example, we might use performance cookies to keep track of which pages are most popular to determine which method of linking between pages is most effective, and to determine why some pages are receiving error messages. We might also use these cookies to highlight articles or website services that we think will be of interest to you based on your usage of the website.</p>
                  <p className={PARAGRAPH_STYLE}>If you access our website as a non-customer, then the browsing data collected is anonymised before any reporting is done; we cannot track back to you the pages that you visit.</p>
                  <p className={PARAGRAPH_STYLE}>If you access our website as a customer, then we track what information individuals access in order to report about the amount and type of information that your users access.</p>
                </div>
              </div>

              {/* Analytics Frame Tracking Table Grid */}
              <div className="w-full">
                <h3 className="text-xl font-['Inter Tight'] font-semibold text-[#03030F] tracking-tight mb-4">
                  Tools and technologies that Skyquest Technology Group uses for analytics:
                </h3>
                
                <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed break-words">
                  <div>
                    <p className="font-bold text-[#03030F]/90">Mixpanel – used for clients and non-clients</p>
                    <a href="#" className={LINK_STYLE}>
                      Click here to opt out or read Mixpanel's Privacy Policy
                    </a>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-bold text-[#03030F]/90">Google Analytics used for clients and non-clients.</p>
                    <a href="#" className={LINK_STYLE}>
                      Click here to opt out or read Google's Privacy Policy
                    </a>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[#03030F]/80">
                      <span className="font-bold">Salesforce</span> – used to track contact us requests and marketing campaign effectiveness. For more information please visit <a href="https://www.salesforce.com/in/company/privacy/full_privacy/" target="_blank" className={`${LINK_STYLE} break-all`}>https://www.salesforce.com/in/company/privacy/full_privacy/</a>
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="text-[#03030F]/80">
                      <span className="font-bold">SaleCycle</span> – SaleCycle uses cookies to collect information from your device such as products which were recently added to your basket without completion of your order. For more information please visit <a href="http://www.salecycle.com/service-privacy-notice" target="_blank" className={`${LINK_STYLE} break-all`}>http://www.salecycle.com/service-privacy-notice</a>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[#03030F]/80">
                      <span className="font-bold">LinkedIn</span> – LinkedIn uses cookies and tags to collect information to better serve you relevant ads based on previous behavior and improve our products. For more information please visit - <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" className={`${LINK_STYLE} break-all`}>https://www.linkedin.com/legal/privacy-policy</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. How to Reject and Delete Cookies */}
              <div>
                <h2 className={HEADING_STYLE}>
                  How to Reject and <span className="font-['Playfair_Display'] italic font-semibold">Delete Cookies</span>
                </h2>
                <p className={PARAGRAPH_STYLE}>
                  Most web browsers automatically accept cookies. However you do not have to accept cookies and you can, should you choose to at any time, reject or block the use of cookies and delete all cookies currently stored on your device. You can find out how to do this for your particular browser by clicking “help” on your browser's menu.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT STRUCTURAL LINE (Vector 634) ================= */}
        <div className="h-full border-l border-[#03030F]/10 hidden xl:block" />

      </div>

      {/* Global Framework Embedded Footer Component */}
      
    </>
  );
}