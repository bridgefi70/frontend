import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  Users,
  Handshake,
  Rocket,
  GraduationCap,
  Coins,
} from "lucide-react";

const SPEAKERS = [
  {
    name: "Dario White",
    role: "Dreamax Founder, Web3 Brand Designer",
    image: "/img/speaker1.jpg",
  },
  {
    name: "Benjamin Amadun",
    role: "AI creator, AI Designer, AI Director",
    image: "/img/speaker2.jpg",
  },
  {
    name: "Benjamin Amadun",
    role: "AI creator, AI Designer, AI Director",
    image: "/img/speaker3.jpg",
  },
  {
    name: "Benjamin Amadun",
    role: "AI creator, AI Designer, AI Director",
    image: "/img/speaker4.jpg",
  },
];

const PARTICIPANTS = [
  "/img/i1.png",
  "/img/i2.png",
  "/img/i3.png",
  "/img/i4.png",
  "/img/i5.png",
  "/img/i6.png",
  "/img/i7.png",
  "/img/i8.jpg",
  "/img/i9.png",
  "/img/i10.png",
  "/img/i1.png",
  "/img/i2.png",
  "/img/i3.png",
  "/img/i4.png",
  "/img/i5.png",
  "/img/i6.png",
  "/img/i7.png",
  "/img/i8.jpg",
  "/img/i9.png",
  "/img/i10.png",
  "/img/i1.png",
  "/img/i2.png",
  "/img/i3.png",
  "/img/i4.png",
  "/img/i5.png",
  "/img/i6.png",
  "/img/i7.png",
  "/img/i8.jpg",
  "/img/i9.png",
  "/img/i10.png",
  "/img/i1.png",
  "/img/i2.png",
  "/img/i3.png",
  "/img/i4.png",
  "/img/i5.png",
];

const GAINS = [
  {
    title: "Access Capital",
    description: "Meet investors and connect with funding opportunities.",
    icon: Coins,
  },
  {
    title: "Build Partnership",
    description: "Connect with builders and businesses to create partnerships.",
    icon: Handshake,
  },
  {
    title: "Launch Faster",
    description:
      "Find the resources and connections needed to accelerate your growth.",
    icon: Rocket,
  },
  {
    title: "Learn From Experts",
    description:
      "Gain practical knowledge directly from experienced Web3 experts.",
    icon: GraduationCap,
  },
];

const EventsDetails = () => {
  return (
    <main className="font-display min-h-screen bg-[#050014] text-white">
      {/* EVENT HERO */}
      <section className="px-6 pb-10 pt-10 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="overflow-hidden rounded-[5px]">
            <img
              src="/img/e7.jpg"
              alt="Creativity Powered With AI Automation"
              className="h-[230px] w-full object-cover sm:h-[320px] lg:h-[390px]"
            />
          </div>

          {/* EVENT INTRO */}
          <div className="mt-5">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[800px]">
                <h1 className="text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
                  Creativity Powered With AI Automation
                </h1>

                <p className="mt-3 max-w-[800px] text-[10px] leading-[1.7] text-[#858196] sm:text-xs">
                  Teaching how to turn complex workflows into seamless AI
                  powered systems that save time, boost productivity, and help
                  your team focus on what matters most.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] text-[#858196] sm:text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={12} className="text-[#AE5BFD]" />
                    May 27th, 2026
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={12} className="text-[#AE5BFD]" />
                    10:00AM - 3:00PM
                  </span>
                </div>
              </div>

              <Link
                to="/events/creativity-powered-by-ai/register"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#6630C2] px-7 text-[10px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Get Ticket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS + ABOUT */}
      <section className="px-6 pb-16 lg:px-12 lg:pb-20">
        <div className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* EVENT DETAILS */}
          <div className="rounded-[4px] bg-[#0D0324] p-6 sm:p-7">
            <h2 className="text-lg font-medium">Event Details</h2>

            <div className="mt-5 space-y-3 text-[9px] text-[#858196] sm:text-[10px]">
              <p className="flex items-start gap-2">
                <CalendarDays
                  size={13}
                  className="mt-0.5 shrink-0 text-[#AE5BFD]"
                />
                <span>
                  <strong className="font-normal text-white">Date:</strong> 16
                  June 2026
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Clock3 size={13} className="mt-0.5 shrink-0 text-[#AE5BFD]" />
                <span>
                  <strong className="font-normal text-white">Time:</strong>{" "}
                  9:00AM - 5:00PM
                </span>
              </p>

              <p className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#AE5BFD]" />
                <span>
                  <strong className="font-normal text-white">Location:</strong>{" "}
                  Paintsville Hotel, Kings Assembly off Rumola link RD, Rumola,
                  Port Harcourt, Rivers State. 500001
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Ticket size={13} className="mt-0.5 shrink-0 text-[#AE5BFD]" />
                <span>
                  <strong className="font-normal text-white">Ticket:</strong>{" "}
                  Free
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Users size={13} className="mt-0.5 shrink-0 text-[#AE5BFD]" />
                <span>
                  <strong className="font-normal text-white">Capacity:</strong>{" "}
                  500 persons
                </span>
              </p>
            </div>

            {/* COUNTDOWN */}
            <div className="mt-7">
              <p className="mb-3 text-[9px] text-[#858196]">Starts in</p>

              <div className="grid grid-cols-4 gap-2">
                <CountdownBox value="2" label="Days" />
                <CountdownBox value="10" label="Hours" />
                <CountdownBox value="60" label="Minutes" />
                <CountdownBox value="200" label="Seconds" />
              </div>
            </div>
          </div>

          {/* ABOUT EVENT */}
          <div className="rounded-[4px] bg-[#0D0324] p-6 sm:p-7">
            <h2 className="text-lg font-medium">About Event</h2>

            <p className="mt-5 text-[9px] leading-[1.75] text-[#858196] sm:text-[10px]">
              Creativity Powered by AI Automation is an engaging event designed
              to explore the intersection of human creativity and artificial
              intelligence. As AI continues to transform industries, this event
              brings together innovators, creatives, entrepreneurs, designers,
              marketers, and technology enthusiasts to discover how AI-powered
              automation can enhance productivity, streamline workflows, and
              unlock new possibilities for creative expression.
            </p>

            <p className="mt-4 text-[9px] leading-[1.75] text-[#858196] sm:text-[10px]">
              Participants will gain practical insights into leveraging AI tools
              for content creation, design, business operations, marketing, and
              problem-solving while maintaining the human ingenuity that drives
              meaningful innovation. Through expert talks, live demonstrations,
              panel discussions, and interactive sessions, attendees will learn
              how to harness AI as a creative partner rather than a replacement.
            </p>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Meet Our Speakers
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {SPEAKERS.map((speaker) => (
              <article key={`${speaker.name}-${speaker.role}`}>
                <div className="aspect-[0.82] overflow-hidden rounded-[2px] bg-[#0D0324]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-3 text-[10px] font-medium sm:text-xs">
                  {speaker.name}
                </h3>

                <p className="mt-1 text-[8px] leading-4 text-[#858196] sm:text-[9px]">
                  {speaker.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTERED PARTICIPANTS */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
            Registered Participants
          </h2>

          {/* Participant collage */}
          <div className="relative mx-auto mt-1 h-[330px] max-w-[650px] sm:h-[360px]">
            {PARTICIPANTS.map((image, index) => {
              const positions = [
                "left-[6%] top-0",
                "left-[25%] top-[3%]",
                "left-[42%] top-0",
                "left-[58%] top-[3%]",
                "left-[77%] top-0",

                "left-[14%] top-[18%]",
                "left-[31%] top-[22%]",
                "left-[49%] top-[17%]",
                "left-[67%] top-[22%]",
                "left-[84%] top-[18%]",

                "left-[5%] top-[36%]",
                "left-[22%] top-[40%]",
                "left-[39%] top-[34%]",
                "left-[57%] top-[40%]",
                "left-[76%] top-[34%]",

                "left-[12%] top-[53%]",
                "left-[30%] top-[57%]",
                "left-[48%] top-[52%]",
                "left-[67%] top-[57%]",
                "left-[84%] top-[52%]",

                "left-[4%] top-[70%]",
                "left-[21%] top-[74%]",
                "left-[39%] top-[68%]",
                "left-[57%] top-[75%]",
                "left-[75%] top-[68%]",

                "left-[15%] top-[87%]",
                "left-[34%] top-[91%]",
                "left-[54%] top-[86%]",
                "left-[76%] top-[91%]",
              ];

              return (
                <div
                  key={`${image}-${index}`}
                  className={`absolute ${positions[index]} h-11 w-11 overflow-hidden rounded-[8px] sm:h-12 sm:w-12`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="mx-auto mt-10 grid max-w-[650px] grid-cols-3 text-center">
            <div>
              <p className="text-3xl font-medium sm:text-4xl">200</p>

              <p className="mt-1 text-[8px] text-[#858196] sm:text-[9px]">
                participants registered
              </p>
            </div>

            <div>
              <p className="text-3xl font-medium sm:text-4xl">10</p>

              <p className="mt-1 text-[8px] text-[#858196] sm:text-[9px]">
                startups hiring
              </p>
            </div>

            <div>
              <p className="text-3xl font-medium sm:text-4xl">5</p>

              <p className="mt-1 text-[8px] text-[#858196] sm:text-[9px]">
                investors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL GAIN */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-center text-3xl font-medium sm:text-4xl">
            What You Will Gain
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 sm:gap-y-14">
            {GAINS.map((gain) => {
              const Icon = gain.icon;

              return (
                <div
                  key={gain.title}
                  className="flex min-h-[75px] items-center justify-between gap-5"
                >
                  <div className="max-w-[170px]">
                    <h3 className="text-[10px] font-medium sm:text-[11px]">
                      {gain.title}
                    </h3>

                    <p className="mt-2 text-[8px] leading-[1.6] text-[#858196] sm:text-[9px]">
                      {gain.description}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center text-[#7C3AED] sm:h-16 sm:w-16">
                    <Icon size={42} strokeWidth={1.4} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-2xl font-medium sm:text-3xl">
            Ready to be impacted
          </h2>

          <Link
            to="/events/creativity-powered-by-ai/ticket"
            className="mx-auto mt-5 flex h-9 w-full max-w-[270px] items-center justify-center rounded-full bg-[#6630C2] text-[9px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Get A Ticket
          </Link>
        </div>
      </section>
    </main>
  );
};

const CountdownBox = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex h-[55px] flex-col items-center justify-center rounded-[3px] bg-[#8B7EB7] text-white">
      <span className="text-sm font-medium">{value}</span>
      <span className="mt-0.5 text-[8px]">{label}</span>
    </div>
  );
};

export default EventsDetails;
