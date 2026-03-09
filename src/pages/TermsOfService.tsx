import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Subsection = {
  subtitle: string;
  content?: string;
  items?: string[];
  footer?: string;
};

type Section = {
  title: string;
  content?: string;
  items?: string[];
  footer?: string;
  contact?: boolean;
  subsections?: Subsection[];
};

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service \u2014 Chattify";
  }, []);

  const sections: Section[] = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing, registering for, or using Chattify (\u201cthe Service\u201d), you (\u201cClient,\u201d \u201cyou,\u201d or \u201cyour\u201d) agree to be legally bound by these Terms of Service (\u201cTerms\u201d) and all policies incorporated by reference, including our Privacy Policy. These Terms constitute a binding legal agreement between you and Kipmay Technologies, the company that owns and operates Chattify.",
      footer:
        "If you are accepting these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity. If you do not agree to these Terms, you must not use the Service.",
    },
    {
      title: "2. Definitions",
      items: [
        "\u201cChattify\u201d or \u201cthe Service\u201d means the AI-powered WhatsApp automation platform operated by Kipmay Technologies;",
        "\u201cKipmay Technologies\u201d or \u201cwe\u201d means the company registered in Kenya that owns and operates Chattify;",
        "\u201cClient\u201d or \u201cyou\u201d means the business or individual who subscribes to and uses Chattify;",
        "\u201cEnd User\u201d means a customer or third party who interacts with a WhatsApp bot deployed by a Client through our platform;",
        "\u201cDashboard\u201d means the Chattify web interface through which Clients manage their bots, view conversations, and configure settings;",
        "\u201cAI System\u201d means the artificial intelligence and automation technology, including Anthropic\u2019s Claude API, used to generate automated responses;",
        "\u201cWhatsApp Business API\u201d means Meta Platforms\u2019 official API used for automated WhatsApp messaging;",
        "\u201cContent\u201d means all text, data, files, images, or materials submitted to or processed by the Service.",
      ],
    },
    {
      title: "3. Description of Service",
      content:
        "Chattify provides AI-powered WhatsApp automation to businesses. Upon subscription, we connect to your WhatsApp Business number via the official WhatsApp Business API and deploy an AI assistant that handles customer conversations on your behalf. The Service includes:",
      items: [
        "Automated AI responses to incoming WhatsApp messages, powered by Anthropic\u2019s Claude AI;",
        "A real-time dashboard for monitoring conversations, reviewing transcripts, and managing bot settings;",
        "Custom bot configuration, including knowledge base setup, response templates, and workflow automation;",
        "Conversation history storage in Firebase for your access and review;",
        "Ongoing maintenance, updates, and technical support as described in your plan.",
      ],
      footer:
        "We reserve the right to modify, suspend, or discontinue any feature of the Service at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of features.",
    },
    {
      title: "4. Eligibility & Account Registration",
      subsections: [
        {
          subtitle: "4.1 Eligibility",
          items: [
            "You must be at least 18 years of age to use the Service;",
            "You must be a registered business or a legal entity, or an individual using the Service for legitimate commercial purposes;",
            "You must have the authority to connect and automate the WhatsApp Business number you register with us;",
            "You must comply with all applicable laws in your jurisdiction.",
          ],
        },
        {
          subtitle: "4.2 Account Security",
          content:
            "You are responsible for maintaining the confidentiality of your account credentials and Dashboard access. You agree to notify us immediately at helpdesk@kipmay.org if you suspect any unauthorized access to your account. Kipmay Technologies is not liable for any loss or damage arising from your failure to maintain account security.",
        },
        {
          subtitle: "4.3 Accurate Information",
          content:
            "You agree to provide accurate, current, and complete information during registration and to keep your account information updated. We reserve the right to suspend or terminate accounts where information is found to be inaccurate, misleading, or incomplete.",
        },
      ],
    },
    {
      title: "5. Acceptable Use",
      content:
        "You agree to use Chattify only for lawful business purposes and in accordance with these Terms. You must not use the Service to:",
      items: [
        "Send spam, unsolicited bulk messages, or engage in any form of mass messaging that violates WhatsApp\u2019s Business Policy;",
        "Transmit, store, or process content that is illegal, defamatory, obscene, hateful, or infringes on any third party\u2019s rights;",
        "Impersonate any person, business, or entity, or misrepresent your identity or affiliation;",
        "Collect, store, or process sensitive personal data (such as health records, financial account numbers, or national ID data) without our prior written consent and appropriate safeguards;",
        "Automate messages to minors or operate services targeted at children under 18;",
        "Engage in any activity that violates applicable Kenyan law, international law, or WhatsApp\u2019s Terms of Service and Business Policy;",
        "Attempt to reverse engineer, decompile, or extract the underlying AI models, source code, or algorithms used in the Service;",
        "Resell, sublicense, or white-label the Service without a separate written agreement with Kipmay Technologies.",
      ],
      footer:
        "Violation of this Acceptable Use policy may result in immediate suspension or termination of your account without refund.",
    },
    {
      title: "6. WhatsApp & Meta Platform Compliance",
      content:
        "Chattify operates via the official WhatsApp Business API provided by Meta Platforms, Inc. By using our Service, you acknowledge and agree that:",
      items: [
        "Your use of Chattify is subject to WhatsApp\u2019s Business Policy, Commerce Policy, and Meta\u2019s Terms of Service, in addition to these Terms;",
        "You are solely responsible for ensuring your messaging activities comply with WhatsApp\u2019s policies, including obtaining proper opt-in consent from your customers before sending automated messages;",
        "WhatsApp and Meta may change their platform policies, features, or APIs at any time. Kipmay Technologies is not liable for any disruptions to the Service caused by Meta\u2019s platform changes, policy enforcement, or API restrictions;",
        "Your WhatsApp Business Account may be suspended or banned by Meta independently of any action by Kipmay Technologies. We will not be responsible for any such action by Meta;",
        "Template messages used with the Service must be approved by WhatsApp. You are responsible for the content and compliance of all message templates submitted under your account.",
      ],
    },
    {
      title: "7. Subscription Plans & Payment Terms",
      subsections: [
        {
          subtitle: "7.1 Plans & Pricing",
          content:
            "Chattify is offered on a subscription basis with plans priced in Kenyan Shillings (KES). Details of current plans, features, and pricing are available on our website. We reserve the right to change pricing with at least 30 days\u2019 written notice to existing subscribers. Price changes take effect at the start of your next billing cycle.",
        },
        {
          subtitle: "7.2 Billing",
          items: [
            "Subscriptions are billed monthly or annually depending on the plan selected at checkout;",
            "Payment is due at the start of each billing cycle. Failure to pay may result in suspension of your account;",
            "All fees are exclusive of applicable taxes. You are responsible for any taxes, levies, or duties imposed on your subscription by applicable law;",
            "Invoices are issued electronically and are available in your Dashboard.",
          ],
        },
        {
          subtitle: "7.3 Free Trial",
          content:
            "New Clients may be eligible for a free trial period as advertised on our website. No payment method is required to begin a free trial. At the end of the trial period, you must subscribe to a paid plan to continue using the Service. We reserve the right to modify or discontinue free trial offers at any time.",
        },
        {
          subtitle: "7.4 Late Payment & Suspension",
          content:
            "If payment is not received within 7 days of the due date, we reserve the right to suspend your account and bot operations. Suspended accounts will have their data retained for 30 days, after which data may be deleted. Reinstatement requires full payment of outstanding amounts.",
        },
      ],
    },
    {
      title: "8. Cancellation & Refund Policy",
      subsections: [
        {
          subtitle: "8.1 Cancellation by Client",
          content:
            "You may cancel your subscription at any time through your Dashboard or by contacting us at helpdesk@kipmay.org. Cancellation takes effect at the end of the current billing cycle. You will retain full access to the Service until the end of your paid period.",
        },
        {
          subtitle: "8.2 Refunds",
          content:
            "Chattify operates a no-refund policy for partial billing periods. If you cancel mid-cycle, you will not receive a pro-rated refund for the unused portion. Exceptions may be made at our sole discretion in cases of verified technical failure directly attributable to Chattify that rendered the Service materially unusable for an extended period. Requests for exceptional refunds must be submitted within 14 days of the issue.",
        },
        {
          subtitle: "8.3 Cancellation by Kipmay Technologies",
          content:
            "We reserve the right to suspend or terminate your account at any time for breach of these Terms, non-payment, or other legitimate business reasons. In cases of termination not caused by your breach, we will provide a pro-rated refund for the unused portion of your current billing cycle.",
        },
      ],
    },
    {
      title: "9. AI-Generated Content & Accuracy",
      content:
        "Chattify uses Anthropic\u2019s Claude AI to generate automated responses on behalf of your business. You acknowledge and agree that:",
      items: [
        "AI-generated responses are automated and may not always be accurate, complete, or appropriate for every situation;",
        "You are solely responsible for reviewing and validating the knowledge base, response templates, and AI configuration you provide to train the bot;",
        "Kipmay Technologies does not guarantee that AI responses will be error-free, factually correct, or suitable for your specific business needs;",
        "You remain fully responsible for any AI-generated responses sent to your End Users under your WhatsApp Business number;",
        "You should implement human oversight and review mechanisms, particularly for high-stakes customer interactions such as complaints, refunds, or legal matters.",
      ],
      footer:
        "Kipmay Technologies shall not be liable for any loss, damage, or harm arising from AI-generated content that is inaccurate, misleading, or inappropriate.",
    },
    {
      title: "10. Data & Privacy",
      content:
        "Your use of the Service involves the collection and processing of personal data, including End User conversation data. Our collection and use of this data is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you agree to our Privacy Policy. Key points include:",
      items: [
        "Conversation data is stored securely in Google Firebase and is accessible to you via the Dashboard;",
        "You are responsible for ensuring your use of Chattify complies with the Kenya Data Protection Act, 2019 and any other applicable data protection laws in your jurisdiction;",
        "You must obtain appropriate consent from your End Users before deploying automated WhatsApp bots on their interactions;",
        "You must provide your End Users with a privacy notice that discloses the use of AI-powered automation.",
      ],
    },
    {
      title: "11. Intellectual Property",
      subsections: [
        {
          subtitle: "11.1 Our Property",
          content:
            "All software, algorithms, AI models, trademarks, branding, documentation, and technology underlying the Chattify platform are the exclusive property of Kipmay Technologies or our licensors (including Anthropic). Nothing in these Terms grants you any ownership interest in the Service or its underlying technology. You are granted a limited, non-exclusive, non-transferable licence to use the Service solely for your own business purposes during your subscription.",
        },
        {
          subtitle: "11.2 Your Content",
          content:
            "All business data, content, knowledge base materials, and information you provide to configure your bot remain your property. By uploading content to the Service, you grant Kipmay Technologies a limited licence to process and use that content solely for the purpose of providing the Service to you. We will not use your proprietary business content for any other purpose without your consent.",
        },
        {
          subtitle: "11.3 Feedback",
          content:
            "If you provide feedback, suggestions, or ideas about the Service, you grant Kipmay Technologies a perpetual, irrevocable, royalty-free licence to use that feedback for any purpose, including improving the Service, without any obligation to compensate you.",
        },
      ],
    },
    {
      title: "12. Service Availability & Uptime",
      content:
        "Kipmay Technologies aims to maintain high availability of the Chattify platform. However, we do not guarantee uninterrupted, error-free, or 100% uptime. The Service may be temporarily unavailable due to:",
      items: [
        "Scheduled maintenance (we will provide advance notice where possible);",
        "Unplanned technical issues, infrastructure failures, or security incidents;",
        "Disruptions caused by third-party services including WhatsApp Business API, Google Firebase, or Anthropic\u2019s Claude API;",
        "Force majeure events including natural disasters, government action, or internet infrastructure failures.",
      ],
      footer:
        "We will use reasonable efforts to restore the Service promptly in the event of an outage. Kipmay Technologies is not liable for any loss of revenue, data, or business opportunity resulting from Service unavailability.",
    },
    {
      title: "13. Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, Kipmay Technologies and its directors, employees, agents, and licensors shall not be liable for:",
      items: [
        "Any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, loss of goodwill, or business interruption;",
        "Any damages arising from AI-generated responses that are inaccurate, incomplete, or inappropriate;",
        "Any damages resulting from unauthorized access to or alteration of your data or transmissions;",
        "Any damages caused by third-party services including WhatsApp, Meta, Google Firebase, or Anthropic;",
        "Any loss resulting from your failure to comply with WhatsApp\u2019s Business Policy or applicable laws.",
      ],
      footer:
        "In any event, our total cumulative liability to you for any claims arising from these Terms or your use of the Service shall not exceed the total amount paid by you to Kipmay Technologies in the three (3) months immediately preceding the event giving rise to the claim.",
    },
    {
      title: "14. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless Kipmay Technologies, its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:",
      items: [
        "Your use of the Service or violation of these Terms;",
        "Content you submit, upload, or make available through the Service;",
        "Your violation of WhatsApp\u2019s Business Policy or any applicable law or regulation;",
        "Any claim by an End User arising from your use of Chattify to automate their conversations;",
        "Any unauthorized use of your account.",
      ],
    },
    {
      title: "15. Confidentiality",
      content:
        "Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Service that is designated as confidential or reasonably should be understood to be confidential. This obligation does not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party prior to disclosure; (c) is independently developed by the receiving party without reference to the confidential information; or (d) is required to be disclosed by law or court order, provided the disclosing party is given prompt written notice where legally permissible.",
    },
    {
      title: "16. Modifications to Terms",
      content:
        "Kipmay Technologies reserves the right to modify these Terms at any time. When we make material changes, we will notify you by email at the address associated with your account and update the \u201cLast Updated\u201d date at the top of this page. Changes take effect 14 days after notification. Your continued use of the Service after the effective date constitutes acceptance of the revised Terms. If you do not agree to the revised Terms, you must cancel your subscription before the effective date.",
    },
    {
      title: "17. Termination",
      content:
        "Either party may terminate these Terms and your access to the Service as follows:",
      items: [
        "You may cancel your subscription at any time as described in Section 8;",
        "We may suspend or terminate your account immediately and without notice if you breach these Terms, engage in fraudulent activity, or cause harm to the Service or other users;",
        "We may terminate the Service entirely with 30 days\u2019 written notice.",
      ],
      footer:
        "Upon termination, your right to use the Service ceases immediately. You may export your conversation data from the Dashboard within 30 days of termination, after which data may be permanently deleted in accordance with our Privacy Policy.",
    },
    {
      title: "18. Governing Law & Dispute Resolution",
      content:
        "These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any dispute, controversy, or claim arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall first be referred to good-faith negotiation between the parties. If the dispute is not resolved within 30 days of written notice, it shall be subject to the exclusive jurisdiction of the courts of Kenya. Nothing in this clause prevents either party from seeking urgent injunctive relief from a court of competent jurisdiction.",
    },
    {
      title: "19. General Provisions",
      items: [
        "Entire Agreement: These Terms, together with our Privacy Policy and any applicable order forms, constitute the entire agreement between you and Kipmay Technologies regarding the Service and supersede all prior agreements;",
        "Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect;",
        "Waiver: Failure by Kipmay Technologies to enforce any provision of these Terms shall not constitute a waiver of our right to enforce it in the future;",
        "Assignment: You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights to a successor entity in connection with a merger or acquisition;",
        "Force Majeure: Neither party shall be liable for delays or failure to perform due to causes beyond their reasonable control, including acts of God, government action, internet outages, or third-party platform failures.",
      ],
    },
    {
      title: "20. Contact",
      content:
        "For questions, concerns, or legal notices regarding these Terms of Service, please contact us:",
      contact: true,
    },
  ];

  const renderSection = (s: Section) => (
    <>
      {s.content && (
        <p className="text-muted-foreground leading-relaxed">{s.content}</p>
      )}
      {s.items && (
        <ul className="space-y-2 mt-2">
          {s.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {s.subsections?.map((sub, si) => (
        <div key={si} className="mt-4 space-y-2">
          <h3 className="text-foreground font-medium text-sm tracking-wide uppercase opacity-70">
            {sub.subtitle}
          </h3>
          {sub.content && (
            <p className="text-muted-foreground leading-relaxed">{sub.content}</p>
          )}
          {sub.items && (
            <ul className="space-y-2">
              {sub.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {sub.footer && (
            <p className="text-muted-foreground leading-relaxed text-sm italic mt-2">
              {sub.footer}
            </p>
          )}
        </div>
      ))}
      {s.footer && (
        <p className="text-muted-foreground leading-relaxed text-sm italic mt-3">
          {s.footer}
        </p>
      )}
      {s.contact && (
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4 space-y-1 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Company:</span>{" "}
            Kipmay Technologies (Chattify)
          </p>
          <p>
            <span className="font-semibold text-foreground">Email:</span>{" "}
            <a href="mailto:helpdesk@kipmay.org" className="text-blue-500 hover:underline">
              helpdesk@kipmay.org
            </a>
          </p>
          <p>
            <span className="font-semibold text-foreground">Subject Line:</span>{" "}
            &ldquo;Terms Inquiry&rdquo; or &ldquo;Legal Notice&rdquo;
          </p>
          <p>
            <span className="font-semibold text-foreground">Response Time:</span>{" "}
            Within 5 business days
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeInUp} className="mb-2 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Legal
              </span>
              <span className="h-px flex-1 bg-border" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold text-foreground mb-2"
            >
              Terms of Service
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-foreground mb-1 text-sm">
              Last updated: March 9, 2026
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-12 text-sm">
              Effective date: March 9, 2026
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card p-8 sm:p-12 space-y-10">
              <p className="text-muted-foreground leading-relaxed border-l-2 border-blue-500 pl-4 italic">
                These Terms of Service govern your use of Chattify, an AI-powered WhatsApp
                automation platform operated by Kipmay Technologies. Please read them
                carefully. By using our Service, you agree to be bound by these Terms.
              </p>

              {sections.map((s, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="text-foreground font-semibold text-lg">{s.title}</h2>
                  <div className="space-y-3">{renderSection(s)}</div>
                  {i < sections.length - 1 && (
                    <div className="pt-4 border-b border-border/50" />
                  )}
                </div>
              ))}

              <div className="pt-4 text-center text-xs text-muted-foreground space-y-1">
                <p>&copy; 2026 Kipmay Technologies. All rights reserved.</p>
                <p>Chattify is a product of Kipmay Technologies, operating under the laws of Kenya.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;