import { CalendarDays, Clock3, MapPin, Ticket, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
                to="/events/creativity-powered-by-ai/ticket"
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
