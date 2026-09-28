import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "creativity-powered-by-ai",
    image: "/img/e5.jpg",
    date: "May 27th, 2026",
    time: "10:00AM - 11:00AM",
    location: "Paintsville Hotel, Kings Assembly",
    title: "Creativity Powered By AI Automation",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
  },
  {
    id: "communication-is-first-step",
    image: "/img/e1.jpg",
    date: "June 15th, 2026",
    time: "10:30AM - 11:30AM",
    location: "Kigali Hotel, Nations Assembly",
    title: "Communication Is The First Step To Success",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
  },
  {
    id: "creativity-powered-by-ai-2",
    image: "/img/e5.jpg",
    date: "May 27th, 2026",
    time: "10:00AM - 11:00AM",
    location: "Paintsville Hotel, Kings Assembly",
    title: "Creativity Powered By AI Automation",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
  },
  {
    id: "communication-is-first-step-2",
    image: "/img/e1.jpg",
    date: "June 15th, 2026",
    time: "10:30AM - 11:30AM",
    location: "Kigali Hotel, Nations Assembly",
    title: "Communication Is The First Step To Success",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
  },
];

const Events = () => {
  return (
    <main className="font-display min-h-screen bg-[#050014] text-white">
      {/* HERO */}
      <section className="px-6 pt-12 lg:px-12 lg:pt-14">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[5px] sm:h-[270px] lg:h-[310px]">
            <img
              src="/img/e8.jpg"
              alt="BridgeFi events"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 text-center">
              <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl">
                Events
              </h1>

              <p className="mt-2 text-xs text-white/80 sm:text-sm">
                Explore all upcoming events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1100px] space-y-4">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="overflow-hidden rounded-[5px] border border-white/[0.12] bg-[#080019] p-3 sm:p-4"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                {/* IMAGE */}
                <div className="h-[190px] w-full shrink-0 overflow-hidden rounded-[4px] sm:h-[145px] sm:w-[190px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-center py-1 sm:pr-3">
                  {/* META */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] text-[#858196] sm:text-[9px]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={11} className="text-[#AE5BFD]" />
                      {event.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={11} className="text-[#AE5BFD]" />
                      {event.time}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-[#AE5BFD]" />
                      {event.location}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="mt-3 text-base font-medium sm:text-lg">
                    {event.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="mt-2 max-w-[680px] text-[9px] leading-[1.6] text-[#858196] sm:text-[10px]">
                    {event.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex h-8 items-center justify-center rounded-full bg-[#6630C2] px-4 text-[9px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                      View Event
                    </Link>

                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex h-8 items-center justify-center rounded-full border border-[#AE5BFD] px-4 text-[9px] font-medium text-white transition-colors hover:bg-[#AE5BFD]/10"
                    >
                      Get A Ticket
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Events;
