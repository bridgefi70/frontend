import { CalendarDays, Clock3, MapPin, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const events = [
  {
    date: "May 27th, 2026",
    time: "10:00AM - 11:00AM",
    location: "Plantsville Hotel, Kings Assembly",
    title: "Creativity Powered By AI Automation",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
    image: "/img/e5.jpg",
  },
  {
    date: "June 15th, 2026",
    time: "10:30AM - 11:30AM",
    location: "Kigali Hotel, Nations Assembly",
    title: "Communication Is The First Step To Success",
    description:
      "Teaching how to turn complex workflows into seamless AI powered systems that save time, boost productivity, and help your team focus on what matters most.",
    image: "/img/e1.jpg",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="font-display bg-[#050216] px-6 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* HEADER */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-[#06B6D4] sm:text-sm">
              Event Schedule - Take A Look Into The Future
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Upcoming Events
            </h2>
          </div>

          <button
            type="button"
            className="hidden items-center gap-2 text-sm text-[#06B6D4] sm:flex"
          >
            View All
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* EVENT LIST */}
        <div className="space-y-4">
          {events.map((event) => (
            <article
              key={event.title}
              className="grid gap-5 rounded-lg border border-[#29243A] p-4 md:grid-cols-[150px_1fr] md:p-5"
            >
              {/* IMAGE */}
              <img
                src={event.image}
                alt={event.title}
                className="h-[190px] w-full rounded-md object-cover md:h-[170px]"
              />

              {/* CONTENT */}
              <div>
                {/* DATE / TIME / LOCATION */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#D6D1E0] sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-[#AE5BFD]" />
                    {event.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-[#AE5BFD]" />
                    {event.time}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#AE5BFD]" />
                    {event.location}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-medium text-white md:text-2xl">
                  {event.title}
                </h3>

                <p className="mt-3 max-w-[850px] text-xs leading-5 text-[#858196] sm:text-sm sm:leading-6">
                  {event.description}
                </p>

                {/* BUTTONS */}
                <div className="mt-5 flex gap-3">
                  <Button text="View Event" width="95px" height="38px" />

                  <Button
                    text="Get A Ticket"
                    width="105px"
                    height="38px"
                    outline
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE VIEW ALL */}
        <button
          type="button"
          className="mt-5 flex items-center gap-2 text-sm text-[#06B6D4] sm:hidden"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
