import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CreateEventsReview = () => {
  const [eventData, setEventData] = useState<any>({});
  useEffect(() => {
    const savedData = sessionStorage.getItem("createEvent");
    if (savedData) {
      setEventData(JSON.parse(savedData));
    }
  }, []);

  const navigate = useNavigate();

  const handleLaunch = () => {
    navigate("/create-events/launched");
  };

  return (
    <main className="min-h-screen bg-[#050014] px-6 py-12 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Progress */}
        <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
          {/* Details */}
          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Details
            </p>

            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
          </div>

          {/* Ticketing */}
          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Ticketing
            </p>

            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
          </div>

          {/* Review */}
          <div>
            <p className="mb-2 text-center text-xs text-white md:text-sm">
              Review and Launch
            </p>

            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-medium md:text-[32px]">
            Review & Launch
          </h1>

          <p className="mt-1 text-xs text-[#858196]">
            Verify your event details launching your events
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* LEFT */}
          <div>
            {/* Event Summary */}
            <div className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium">Event Summary</h2>

                <button
                  type="button"
                  className="text-xs text-[#AE5BFD] hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="rounded-[6px] bg-[#12052D] px-4 py-4">
                <div className="space-y-2 text-xs text-[#858196]">
                  <p>
                    <span className="text-white">Event Name:</span>{" "}
                    {eventData.eventName || "Event name"}
                  </p>

                  <p>
                    <span className="text-white">Event Date:</span>{" "}
                    {eventData.eventDate || "Event date"}
                  </p>

                  <p>
                    <span className="text-white">Event Time:</span>{" "}
                    {eventData.startTime || "Event time"} -{" "}
                    {eventData.endTime || "End time"}
                  </p>

                  <p>
                    <span className="text-white">Location:</span>{" "}
                    {eventData.location || "Event location"}
                  </p>
                </div>
              </div>
            </div>

            {/* Ticket Tiers */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium">Ticket Tiers</h2>

                <button
                  type="button"
                  className="text-xs text-[#AE5BFD] hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="rounded-[6px] bg-[#12052D] px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white">
                      {eventData.ticketTier || "General Admission"}
                    </p>

                    <p className="mt-1 text-[10px] text-[#858196]">
                      {eventData.ticketType === "free"
                        ? "Unlimited Tickets"
                        : `${eventData.quantity || 0} Tickets`}
                    </p>
                  </div>

                  <span className="text-xs text-white">
                    {eventData.ticketType === "free"
                      ? "Free"
                      : `$${eventData.price || "0"}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 flex items-start gap-2 text-[10px] text-[#06B6D4]">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />

              <p>
                Upon launching, a contact containing your fees will be sent to
                your email address
              </p>
            </div>

            {/* Launch */}
            <button
              type="button"
              onClick={handleLaunch}
              className="mt-5 h-11 w-full rounded-[6px] bg-[#6630C2] text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              Launch Event
            </button>
          </div>

          {/* RIGHT - Cover Image */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium">Cover Image</h2>

              <button
                type="button"
                className="text-xs text-[#AE5BFD] hover:underline"
              >
                Edit
              </button>
            </div>

            <div className="overflow-hidden rounded-[10px] border border-[#2C2340]">
              <img
                src="/img/e7.jpg"
                alt="Event cover"
                className="h-[300px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateEventsReview;
