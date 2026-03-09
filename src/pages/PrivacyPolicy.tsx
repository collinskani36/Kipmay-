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

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy \u2014 Chattify";
  }, []);

  const sections: Section[] = [
    {
      title: "1. Introduction",
      content:
        "Chattify is a product of Kipmay Technologies (\u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d), a company duly registered and operating under the laws of Kenya. We provide AI-powered WhatsApp automation services that enable businesses (\u201cClients\u201d) to automate customer interactions, manage conversations through an intelligent dashboard, and deliver consistent, high-quality customer experiences. This Privacy Policy governs the collection, processing, storage, sharing, and deletion of personal data across all Chattify services. It applies to business clients who subscribe to Chattify; end users (customers of our business clients) who interact with AI-powered WhatsApp bots we deploy; and visitors to our website and any other individuals whose data we process in connection with our services. By using our services, you acknowledge that you have read and understood this Privacy Policy.",
    },
    {
      title: "2. Who We Are & Our Role as Data Controller",
      content:
        "Kipmay Technologies operates Chattify as the primary Data Controller for data collected through our platform. This means we determine the purposes and means of processing personal data. In circumstances where we process data on behalf of our business clients, we may also act as a Data Processor under their instruction. Company: Kipmay Technologies | Product: Chattify | Contact: helpdesk@kipmay.org | Jurisdiction: Republic of Kenya.",
    },
    {
      title: "3. What Data We Collect",
      subsections: [
        {
          subtitle: "3.1 Business Client Data",
          items: [
            "Full name, business name, and registered business address;",
            "Email address and phone number (including the WhatsApp Business number being automated);",
            "Billing information and subscription plan details;",
            "WhatsApp Business API credentials and configuration settings;",
            "Dashboard usage data, including login times, feature usage, and session identifiers;",
            "Custom bot configuration, workflow rules, and response templates created by the client.",
          ],
        },
        {
          subtitle: "3.2 End User (Customer) Conversation Data",
          items: [
            "WhatsApp phone number and display name;",
            "Full content of messages sent to and received from the AI bot;",
            "Timestamps, message delivery status, and session identifiers;",
            "Any personal information voluntarily shared during the conversation (e.g., name, order details, location);",
            "Media files such as images, documents, or voice notes exchanged in the conversation.",
          ],
        },
        {
          subtitle: "3.3 Automatically Collected Technical Data",
          items: [
            "IP addresses and device identifiers;",
            "Browser type, operating system, and platform;",
            "API request logs, error logs, and diagnostic data;",
            "Session tokens and authentication records.",
          ],
        },
      ],
    },
    {
      title: "4. Legal Basis for Processing",
      items: [
        "Contractual Necessity: Processing required to deliver the services you have contracted with us for, including operating the WhatsApp bot and providing dashboard access;",
        "Legitimate Interests: Improving our platform, preventing fraud, maintaining security, and ensuring service reliability, where these interests are not overridden by your rights;",
        "Legal Compliance: Processing required to meet our obligations under Kenyan law, including the Data Protection Act, 2019, and applicable international regulations;",
        "Consent: Where required (e.g., for marketing communications or AI model training using your data), we will obtain your explicit consent before processing.",
      ],
    },
    {
      title: "5. How We Use Your Data",
      subsections: [
        {
          subtitle: "5.1 Service Delivery",
          items: [
            "Operating and routing WhatsApp messages between end users and the AI system;",
            "Processing queries through Anthropic's Claude AI and returning intelligent, context-aware responses;",
            "Storing conversation histories in Firebase for display on the business client's dashboard;",
            "Sending automated notifications, reminders, and business-specific replies.",
          ],
        },
        {
          subtitle: "5.2 Service Improvement",
          items: [
            "Analyzing anonymized conversation patterns to improve AI response quality and accuracy;",
            "Monitoring platform performance, identifying bugs, and improving system reliability;",
            "Developing new features and service enhancements.",
          ],
        },
        {
          subtitle: "5.3 Security & Compliance",
          items: [
            "Detecting and preventing unauthorized access, fraud, or misuse of our platform;",
            "Maintaining audit logs for security investigation purposes;",
            "Complying with legal and regulatory requirements.",
          ],
        },
      ],
    },
    {
      title: "6. Data Storage & Infrastructure",
      subsections: [
        {
          subtitle: "6.1 Firebase (Google Cloud)",
          content:
            "All conversation data, user records, and dashboard content are stored in Firebase, a Google Cloud platform. Firebase provides enterprise-grade security, automatic encryption at rest, redundant backups, and high availability. Data stored in Firebase is governed by Google's data processing terms and is configured to comply with applicable laws.",
        },
        {
          subtitle: "6.2 Anthropic Claude AI",
          content:
            "AI-generated responses are powered by Anthropic's Claude API. When a user sends a message, the content is securely transmitted to Anthropic's servers for processing. Message content sent to the Claude API is subject to Anthropic's API usage policies and privacy commitments. We do not share personally identifiable information beyond what is necessary for message processing.",
        },
        {
          subtitle: "6.3 WhatsApp Business API",
          content:
            "Our platform integrates with the WhatsApp Business API provided by Meta Platforms, Inc. Message routing is subject to WhatsApp's terms of service and Meta's privacy policy. We use WhatsApp solely as a communication channel and do not receive metadata beyond what is required to route and log messages.",
        },
      ],
    },
    {
      title: "7. Data Retention",
      items: [
        "Active conversation data: Retained for the duration of the client's subscription plus 90 days after termination, to allow for data export;",
        "Business client account data: Retained for the duration of the subscription and up to 7 years as required by Kenyan tax and business law;",
        "Technical and security logs: Retained for up to 12 months;",
        "Anonymized analytics data: Retained for up to 36 months for service improvement purposes;",
        "Data subject to a legal hold: Retained until the matter is resolved, regardless of standard retention periods.",
      ],
      footer:
        "Upon expiry of the retention period, data is securely deleted or irreversibly anonymized.",
    },
    {
      title: "8. Data Sharing & Third Parties",
      subsections: [
        {
          subtitle: "8.1 Authorized Sub-processors",
          items: [
            "Google Firebase / Google Cloud \u2014 Data storage and hosting;",
            "Anthropic, Inc. \u2014 AI message processing;",
            "Meta Platforms, Inc. \u2014 WhatsApp message routing via the Business API.",
          ],
          footer:
            "All sub-processors are bound by contractual data protection obligations and are required to process data only as necessary to provide the relevant service.",
        },
        {
          subtitle: "8.2 Business Clients",
          content:
            "End user conversation data is made available to the business client whose WhatsApp number is being automated. Business clients are independently responsible for handling that data in compliance with applicable data protection laws.",
        },
        {
          subtitle: "8.3 Legal Obligations",
          content:
            "We may disclose personal data to competent authorities, courts, or regulatory bodies when required to do so by Kenyan law, a court order, or other legal process. We will notify affected users where legally permitted.",
        },
        {
          subtitle: "8.4 Business Transfers",
          content:
            "In the event of a merger, acquisition, or sale of all or part of our business, personal data may be transferred to the successor entity, subject to equivalent data protection obligations.",
        },
      ],
    },
    {
      title: "9. Data Security",
      items: [
        "TLS/HTTPS encryption for all data in transit;",
        "Encryption at rest for data stored in Firebase;",
        "Role-based access controls (RBAC) limiting data access to authorized personnel only;",
        "Secure API key management and authentication for all third-party integrations;",
        "Regular security reviews and vulnerability assessments;",
        "Incident response procedures with defined notification timelines.",
      ],
      footer:
        "While we apply industry-standard protections, no digital system can be guaranteed 100% secure. In the event of a data breach that is likely to result in risk to your rights, we will notify affected parties and relevant regulators in accordance with applicable law.",
    },
    {
      title: "10. AI Processing & Anthropic Claude",
      content:
        "Chattify uses Anthropic's Claude AI as the core intelligence layer for generating automated replies. Message content and relevant conversation context are transmitted to Anthropic's API via an encrypted connection. Claude processes the message and returns a response, which is then sent back to the end user via WhatsApp. We do not use end user conversations to train Anthropic's foundation models without explicit consent. Any use of conversation data for AI improvement purposes will be done using anonymized, aggregated data only, and subject to obtaining appropriate consents.",
    },
    {
      title: "11. International Data Transfers",
      content:
        "Our sub-processors (Firebase/Google, Anthropic) are based primarily in the United States. When data is transferred outside Kenya, we ensure appropriate safeguards are in place, including standard contractual clauses and reliance on sub-processors who maintain compliance with internationally recognized data protection frameworks. By using our services, you acknowledge that your data may be processed outside Kenya.",
    },
    {
      title: "12. Your Rights",
      items: [
        "Right of Access: Request a copy of the personal data we hold about you;",
        "Right to Rectification: Request correction of any inaccurate or outdated information;",
        "Right to Erasure: Request deletion of your personal data, subject to our legal retention obligations;",
        "Right to Restriction: Request that we limit the processing of your data in certain circumstances;",
        "Right to Data Portability: Receive a copy of your data in a structured, machine-readable format;",
        "Right to Object: Object to processing based on legitimate interests;",
        "Right to Withdraw Consent: Where processing is based on consent, withdraw that consent at any time without affecting prior lawful processing.",
      ],
      footer:
        'To exercise any of these rights, please contact us at helpdesk@kipmay.org with the subject line "Data Rights Request." We will respond within 30 days. Business clients can also export conversation data directly from the Chattify dashboard.',
    },
    {
      title: "13. Business Clients' Responsibilities",
      items: [
        "Ensuring you have a lawful basis (including user consent where required) before deploying automated WhatsApp bots to your customers;",
        "Providing your own privacy notice to your end users that discloses the use of AI-powered automation;",
        "Complying with WhatsApp's Business Policy and Meta's Terms of Service;",
        "Not using Chattify to collect or process sensitive categories of personal data (e.g., health, financial, or children's data) without additional safeguards and written agreement with us;",
        "Reporting any suspected data breaches or misuse to us immediately at helpdesk@kipmay.org.",
      ],
    },
    {
      title: "14. Children's Privacy",
      content:
        "Chattify is intended exclusively for use by businesses and individuals aged 18 and above. We do not knowingly collect or process personal data of children under 18. If you believe we have inadvertently collected data from a minor, please contact us at helpdesk@kipmay.org immediately and we will take prompt steps to delete such data.",
    },
    {
      title: "15. Changes to This Privacy Policy",
      content:
        'We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal obligations. When we make material changes, we will notify business clients via email (at the registered contact address) and update the "Last Updated" date at the top of this document. Continued use of Chattify after changes are posted constitutes acceptance of the updated policy.',
    },
    {
      title: "16. Governing Law & Dispute Resolution",
      content:
        "This Privacy Policy is governed by the laws of the Republic of Kenya, including the Data Protection Act, 2019. Any disputes arising from this Privacy Policy shall be subject to the jurisdiction of the courts of Kenya. We are committed to resolving data-related complaints promptly and fairly. You may also lodge a complaint with the Office of the Data Protection Commissioner of Kenya.",
    },
    {
      title: "17. Contact & Data Protection Inquiries",
      content:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us.",
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
            &ldquo;Privacy Request&rdquo; or &ldquo;Data Rights Request&rdquo;
          </p>
          <p>
            <span className="font-semibold text-foreground">Response Time:</span>{" "}
            Within 30 days of receipt
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
              Privacy Policy
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-foreground mb-1 text-sm">
              Last updated: March 9, 2026
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-12 text-sm">
              Effective date: March 9, 2026
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card p-8 sm:p-12 space-y-10">
              <p className="text-muted-foreground leading-relaxed border-l-2 border-blue-500 pl-4 italic">
                Kipmay Technologies operates Chattify and is fully responsible as Data
                Controller for all personal data processed through our platform. We are
                committed to transparency, security, and compliance with the Kenya Data
                Protection Act, 2019 and applicable international data protection law.
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

export default PrivacyPolicy;