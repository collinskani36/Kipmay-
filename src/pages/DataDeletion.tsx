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
  subsections?: Subsection[];
  template?: boolean;
  timeline?: boolean;
  contact?: boolean;
};

const DataDeletion = () => {
  useEffect(() => {
    document.title = "Data Deletion \u2014 BotServe";
  }, []);

  const timeline = [
    { step: "Request Received", day: "Day 0", desc: "We acknowledge your request within 2 business days via email." },
    { step: "Identity Verification", day: "Days 1\u20135", desc: "We verify your identity to prevent unauthorized deletions." },
    { step: "Data Located", day: "Days 6\u20138", desc: "We identify all personal data associated with your account across our systems." },
    { step: "Deletion Executed", day: "Days 9\u201325", desc: "We permanently delete your data from Firebase, our dashboard, and all active systems." },
    { step: "Confirmation Sent", day: "Day 30", desc: "You receive written confirmation that deletion is complete." },
  ];

  const sections: Section[] = [
    {
      title: "1. Your Right to Deletion",
      content:
        "Under the Kenya Data Protection Act, 2019, you have the right to request the deletion of your personal data held by Kipmay Technologies (BotServe) at any time. This right applies to End Users whose data was collected through interactions with a BotServe-powered WhatsApp bot, as well as to business clients who wish to close their accounts and have their data removed.",
      footer:
        "We will process all valid deletion requests within 30 days of receipt. This page explains exactly what data we hold, what gets deleted, and how to make your request.",
    },
    {
      title: "2. What Data We Hold",
      subsections: [
        {
          subtitle: "2.1 End User Data (WhatsApp Conversation Participants)",
          items: [
            "Your WhatsApp phone number and display name;",
            "Full conversation transcripts between you and the AI bot;",
            "Message timestamps, delivery status, and session identifiers;",
            "Any personal information you voluntarily shared during the conversation (e.g., name, location, order details);",
            "Media files exchanged in the conversation (images, documents, voice notes).",
          ],
        },
        {
          subtitle: "2.2 Business Client Data",
          items: [
            "Account registration details (name, business name, email, phone number);",
            "WhatsApp Business number and API configuration;",
            "Billing records and subscription history;",
            "Bot configuration, knowledge base materials, and response templates;",
            "Dashboard usage logs and session data.",
          ],
        },
        {
          subtitle: "2.3 Technical Data",
          items: [
            "IP addresses and device identifiers;",
            "API request and error logs;",
            "Session tokens and authentication records.",
          ],
        },
      ],
    },
    {
      title: "3. What Gets Deleted",
      content: "Upon a verified deletion request, we will permanently remove:",
      items: [
        "All conversation transcripts and message content associated with your phone number or account;",
        "Your contact information, profile data, and session identifiers;",
        "Media files and attachments exchanged in your conversations;",
        "Business client account data, bot configurations, and knowledge base content (for account closure requests);",
        "Dashboard access records and usage logs linked to your account.",
      ],
      footer:
        "Deletion from active systems is completed within 30 days. Residual copies in encrypted backup systems are purged within 90 days of the deletion request as part of our scheduled backup rotation.",
    },
    {
      title: "4. What Cannot Be Deleted",
      content:
        "Certain data may be retained beyond your deletion request due to legal or operational requirements:",
      items: [
        "Legal Obligations: Data we are required by Kenyan law to retain, such as financial records (retained for up to 7 years under Kenyan tax law) or data subject to an active legal dispute or court order;",
        "Anonymized & Aggregated Data: Statistical or analytical data that has been fully anonymized and cannot be re-linked to your identity;",
        "Backup Copies: Encrypted backup copies will be deleted during the next scheduled rotation cycle within 90 days;",
        "Fraud Prevention Records: Minimal records retained to prevent abuse or re-registration fraud, held in a restricted access system.",
      ],
      footer:
        "In all cases, retained data is held securely with strict access controls and is not used for any commercial purpose.",
    },
    {
      title: "5. How to Submit a Deletion Request",
      subsections: [
        {
          subtitle: "Method 1: Email (Recommended)",
          content:
            "Send an email to helpdesk@kipmay.org with the subject line \u201cData Deletion Request.\u201d Include the following information:",
          items: [
            "Your full name;",
            "The WhatsApp phone number used to interact with the bot (for End Users);",
            "Your registered account email (for Business Clients);",
            "The name of the business whose bot you interacted with (if known, for End Users);",
            "Approximate period of interaction (if known);",
            "A clear statement: \u201cI request deletion of all personal data associated with my account/number.\u201d",
          ],
        },
        {
          subtitle: "Method 2: Dashboard (Business Clients)",
          content:
            "Business clients can initiate account and data deletion directly from the BotServe Dashboard under Settings \u2192 Account \u2192 Delete Account. This will trigger an automated deletion workflow and send a confirmation email when complete.",
        },
      ],
    },
    {
      title: "6. Email Template",
      template: true,
    },
    {
      title: "7. Deletion Timeline",
      timeline: true,
    },
    {
      title: "8. Identity Verification",
      content:
        "To protect your privacy and prevent unauthorized deletions, we may ask you to verify your identity before processing your request. Verification may involve:",
      items: [
        "Confirming the phone number or email address associated with your data;",
        "Answering a security question related to your account or interactions;",
        "Providing a copy of a valid government-issued ID (only for in-person or sensitive requests).",
      ],
      footer:
        "We will never ask for your password or payment details during identity verification. If a request cannot be verified, we will notify you of the reason and the steps needed to proceed.",
    },
    {
      title: "9. After Your Data Is Deleted",
      content: "Once deletion is confirmed:",
      items: [
        "All conversation history with any BotServe-powered bot will be permanently removed;",
        "If you interact with a BotServe bot again, you will be treated as a new user with no prior history;",
        "Business clients whose accounts are deleted will lose access to their Dashboard, bot configurations, and conversation archives;",
        "You will receive a written confirmation email from helpdesk@kipmay.org once deletion is complete.",
      ],
      footer:
        "Deletion is irreversible. We strongly recommend that business clients export any conversation data they wish to retain before submitting a deletion request.",
    },
    {
      title: "10. Complaints & Appeals",
      content:
        "If you are unsatisfied with how we handle your deletion request, you have the following options:",
      items: [
        "Contact us directly at helpdesk@kipmay.org with the subject line \u201cDeletion Appeal\u201d \u2014 we will review your case within 5 business days;",
        "Lodge a formal complaint with the Office of the Data Protection Commissioner of Kenya (ODPC) at www.odpc.go.ke;",
        "Seek legal remedy through the courts of Kenya.",
      ],
    },
    {
      title: "11. Contact",
      content: "To submit a deletion request or ask questions about your data:",
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
      {s.template && (
        <div className="mt-3 rounded-lg border border-border bg-muted/30 p-5 text-sm text-muted-foreground space-y-2 font-mono leading-relaxed">
          <p><span className="font-semibold not-italic text-foreground">To:</span> helpdesk@kipmay.org</p>
          <p><span className="font-semibold not-italic text-foreground">Subject:</span> Data Deletion Request</p>
          <div className="border-t border-border/50 pt-3 space-y-2">
            <p>Dear Kipmay Technologies Data Protection Team,</p>
            <p>
              I hereby request the permanent deletion of all personal data associated
              with my use of a BotServe-powered WhatsApp bot / my BotServe account.
            </p>
            <p className="font-semibold not-italic text-foreground">My Details:</p>
            <p>Full Name: [Your Full Name]</p>
            <p>WhatsApp Number / Account Email: [Your Number or Email]</p>
            <p>Business Bot Interacted With: [Business Name, if known]</p>
            <p>Approximate Interaction Period: [e.g., January \u2013 March 2026]</p>
            <p>
              I confirm that I request deletion of all my personal data, including
              conversation history, profile information, and any associated records.
            </p>
            <p>
              Kind regards,<br />
              [Your Full Name]
            </p>
          </div>
        </div>
      )}
      {s.timeline && (
        <div className="mt-3 space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="flex-1 pb-3 border-b border-border/40 last:border-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-foreground font-semibold text-sm">{t.step}</span>
                  <span className="text-xs text-blue-500 font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">
                    {t.day}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {s.contact && (
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4 space-y-1 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Company:</span>{" "}
            Kipmay Technologies (BotServe)
          </p>
          <p>
            <span className="font-semibold text-foreground">Email:</span>{" "}
            <a href="mailto:helpdesk@kipmay.org" className="text-blue-500 hover:underline">
              helpdesk@kipmay.org
            </a>
          </p>
          <p>
            <span className="font-semibold text-foreground">Subject Line:</span>{" "}
            &ldquo;Data Deletion Request&rdquo;
          </p>
          <p>
            <span className="font-semibold text-foreground">Response Time:</span>{" "}
            Within 2 business days of receipt; deletion completed within 30 days
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
              Data Deletion
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-foreground mb-1 text-sm">
              Last updated: March 9, 2026
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-12 text-sm">
              Effective date: March 9, 2026
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card p-8 sm:p-12 space-y-10">
              <p className="text-muted-foreground leading-relaxed border-l-2 border-blue-500 pl-4 italic">
                Kipmay Technologies respects your right to control your personal data.
                This page explains how to request deletion of any data we hold about you
                and what to expect when you do. All valid requests are processed within
                30 days.
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
                <p>BotServe is a product of Kipmay Technologies, operating under the laws of Kenya.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataDeletion;
