import { useState } from "react";
import { CalendarDays, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateEventsSchedule = () => {
  const navigate = useNavigate();

  const [banner, setBanner] = useState<File | null>(null);

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setBanner(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const existingData = JSON.parse(
      sessionStorage.getItem("createEvent") || "{}",
    );

    const updatedData = {
      ...existingData,
      eventDate: formData.get("eventDate"),
      startTime: formData.get("startTime"),
      duration: formData.get("duration"),
      endTime: formData.get("endTime"),
      registrationDeadline: formData.get("registrationDeadline"),
      participantDetails: formData.get("participantDetails"),
      speakers: formData.get("speakers"),
    };

    sessionStorage.setItem("createEvent", JSON.stringify(updatedData));

    navigate("/create-event/ticketing");
  };

  return (
    <main className="min-h-screen bg-[#050014] px-6 py-12 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Progress */}
        <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Details
            </p>

            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
          </div>

          <div>
            <p className="mb-2 text-center text-xs text-white md:text-sm">
              Ticketing
            </p>

            <div className="h-[7px] overflow-hidden rounded-full bg-[#25004D]">
              <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
            </div>
          </div>

          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Review and Launch
            </p>

            <div className="h-[7px] rounded-full bg-[#25004D]" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-medium md:text-[32px]">
            Create An Event
          </h1>

          <p className="mt-1 text-xs text-[#858196]">
            Fill in the details properly to create an event
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
            {/* LEFT */}
            <div className="space-y-5">
              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="mb-2 block text-xs">
                  Event Date<span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <input
                    id="eventDate"
                    type="date"
                    required
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 pr-10 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                  />

                  <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Start time + Duration */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="startTime" className="mb-2 block text-xs">
                    Event start time
                    <span className="text-[#FF00DD]">*</span>
                  </label>

                  <input
                    id="startTime"
                    type="time"
                    required
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="mb-2 block text-xs">
                    Time Duration
                    <span className="text-[#FF00DD]">*</span>
                  </label>

                  <input
                    id="duration"
                    type="text"
                    placeholder="How long will this event be"
                    required
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />
                </div>
              </div>

              {/* End Time */}
              <div>
                <label htmlFor="endTime" className="mb-2 block text-xs">
                  Event End Time
                  <span className="text-[#FF00DD]">*</span>
                </label>

                <input
                  id="endTime"
                  type="time"
                  required
                  className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                />
              </div>

              {/* Registration Deadline */}
              <div>
                <label
                  htmlFor="registrationDeadline"
                  className="mb-2 block text-xs"
                >
                  Registration Deadline
                  <span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <input
                    id="registrationDeadline"
                    type="date"
                    required
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 pr-10 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                  />

                  <Plus className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Participant details */}
              <div>
                <label
                  htmlFor="participantDetails"
                  className="mb-2 block text-xs"
                >
                  Participant details
                  <span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <input
                    id="participantDetails"
                    type="text"
                    placeholder="What details are needed from the registered participants"
                    required
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 pr-10 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />

                  <Plus className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Speakers */}
              <div>
                <label htmlFor="speakers" className="mb-2 block text-xs">
                  Speakers <span className="text-[#858196]">(optional)</span>
                </label>

                <div className="relative">
                  <input
                    id="speakers"
                    type="text"
                    placeholder="Add Speaker"
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 pr-10 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />

                  <Plus className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Set Up Ticket */}
              <button
                type="submit"
                className="h-10 w-full rounded-[6px] bg-[#6630C2] text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Set up Ticket
              </button>
            </div>

            {/* BANNER */}
            <div>
              <label
                htmlFor="scheduleBanner"
                className="flex h-[235px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[12px] border border-[#514B60] text-center hover:border-[#AE5BFD]"
              >
                <input
                  id="scheduleBanner"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleBannerChange}
                />

                {banner ? (
                  <img
                    src={URL.createObjectURL(banner)}
                    alt="Event banner"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <CalendarDays className="mb-2 h-5 w-5 text-[#858196]" />

                    <p className="text-xs">Upload your banner image here.</p>

                    <p className="mt-1 text-[10px] text-[#AE5BFD]">
                      Browse photo library
                    </p>

                    <p className="mt-1 text-[8px] text-[#858196]">
                      Photo Format: jpeg, png
                    </p>
                  </>
                )}
              </label>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateEventsSchedule;
