import { CalendarDays, Clock3, MapPin } from "lucide-react";

const EventsRegistration = () => {
  return (
    <main className="min-h-screen bg-[#050014] text-white">
      <section className="px-6 pb-20 pt-8 lg:px-12 lg:pb-28 lg:pt-12">
        <div className="mx-auto max-w-[920px]">
          {/* DESKTOP / MOBILE CONTENT */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-12">
            {/* EVENT INFORMATION */}
            <div className="order-1 lg:order-2">
              {/* Event image */}
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src="/img/e7.jpg"
                  alt="Creativity Powered With AI Automation"
                  className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[270px]"
                />
              </div>

              <h1 className="mt-3 text-2xl font-medium leading-tight sm:text-3xl lg:text-[25px]">
                Creativity Powered With AI Automation
              </h1>

              <p className="mt-2 text-[9px] leading-[1.65] text-[#858196] sm:text-[10px]">
                Teaching how to turn complex workflows into seamless AI powered
                systems that save time, boost productivity, and help your team
                focus on what matters most.
              </p>

              {/* Event metadata */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] text-[#858196] sm:text-[9px]">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={11} className="text-[#AE5BFD]" />
                  May 27th, 2026
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 size={11} className="text-[#AE5BFD]" />
                  10:00AM - 3:00PM
                </span>

                <span className="flex items-start gap-1.5">
                  <MapPin
                    size={11}
                    className="mt-0.5 shrink-0 text-[#AE5BFD]"
                  />
                  Paintsville Hotel, Kings Assembly off Rumola link RD, Rumola,
                  Port Harcourt, Rivers State. 500001
                </span>
              </div>
            </div>

            {/* REGISTRATION FORM */}
            <div className="order-2 lg:order-1">
              {/* Breadcrumb */}
              <div className="mb-5 flex flex-wrap items-center gap-1 text-[8px] sm:text-[9px]">
                <span className="text-[#06B6D4]">Events</span>
                <span className="text-[#858196]">»</span>
                <span className="text-[#06B6D4]">
                  Creativity Powered With AI Automation
                </span>
                <span className="text-[#858196]">»</span>
                <span className="text-[#858196]">Register</span>
              </div>

              <h2 className="text-2xl font-medium sm:text-3xl">
                Register for the Event
              </h2>

              <p className="mt-2 text-[9px] text-[#858196] sm:text-[10px]">
                Fill in your details to complete the registration for this event
              </p>

              <form className="mt-6">
                {/* First + Last Name */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-[9px] font-medium text-white"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="h-9 w-full rounded-[3px] bg-[#1B002D] px-3 text-[9px] text-white outline-none placeholder:text-[#756B84] focus:ring-1 focus:ring-[#AE5BFD]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-[9px] font-medium text-white"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="h-9 w-full rounded-[3px] bg-[#1B002D] px-3 text-[9px] text-white outline-none placeholder:text-[#756B84] focus:ring-1 focus:ring-[#AE5BFD]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[9px] font-medium text-white"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="h-9 w-full rounded-[3px] bg-[#1B002D] px-3 text-[9px] text-white outline-none placeholder:text-[#756B84] focus:ring-1 focus:ring-[#AE5BFD]"
                  />
                </div>

                {/* Expectations */}
                <div className="mt-6">
                  <label
                    htmlFor="expectations"
                    className="mb-2 block text-[9px] font-medium text-white"
                  >
                    What are your expectations for this event?
                  </label>

                  <textarea
                    id="expectations"
                    name="expectations"
                    placeholder="Type it here"
                    className="h-[95px] w-full resize-none rounded-[3px] bg-[#1B002D] px-3 py-3 text-[9px] text-white outline-none placeholder:text-[#756B84] focus:ring-1 focus:ring-[#AE5BFD]"
                  />
                </div>

                {/* Get Ticket */}
                <button
                  type="submit"
                  className="mt-7 h-10 w-full rounded-full bg-[#6630C2] text-[9px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  Get Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsRegistration;
