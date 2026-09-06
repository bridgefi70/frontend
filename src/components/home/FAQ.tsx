import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What is BridgeFi?",
    answer:
      "BridgeFi is a platform that connects people with events, communities, and opportunities while making it easier to discover and participate in experiences.",
  },
  {
    question: "How do I book an event?",
    answer:
      "Find an event you are interested in, select your preferred ticket option, and complete the booking process securely.",
  },
  {
    question: "Can I create my own event?",
    answer:
      "Yes. BridgeFi allows organizers and communities to create, manage, and promote their own events.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. BridgeFi is designed to provide a secure experience for purchasing tickets and participating in events.",
  },
  {
    question: "Can I get a refund for my ticket?",
    answer:
      "Refund availability depends on the specific event and its cancellation or refund policy.",
  },
  {
    question: "How can I become part of the community?",
    answer:
      "You can explore available events, connect with other members, and participate in communities through the BridgeFi ecosystem.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-display bg-[#050014] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-[#06B6D4]">
            ✦ Frequently asked questions
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Everything you need to <span className="text-[#AE5BFD]">know</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#858196] md:text-base">
            Find answers to the most common questions about BridgeFi, events,
            tickets, and the ecosystem.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#08051A]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#AE5BFD] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 md:px-6">
                    <p className="max-w-3xl text-sm leading-6 text-[#858196]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
