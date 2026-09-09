import { useState } from "react";
import { ImagePlus, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateEvents = () => {
  const [banner, setBanner] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setBanner(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    sessionStorage.setItem(
      "createEvent",
      JSON.stringify({
        eventName: formData.get("eventName"),
        shortDescription: formData.get("shortDescription"),
        aboutEvent: formData.get("aboutEvent"),
        location: formData.get("location"),
        tags: formData.get("tags"),
        industry: formData.get("industry"),
      }),
    );

    navigate("/create-events/schedule");
  };

  return (
    <main className="min-h-screen bg-[#050014] px-6 py-12 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Progress */}
        <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
          <div>
            <p className="mb-2 text-center text-xs text-white md:text-sm">
              Details
            </p>

            <div className="h-[7px] overflow-hidden rounded-full bg-[#25004D]">
              <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
            </div>
          </div>

          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Ticketing
            </p>

            <div className="h-[7px] rounded-full bg-[#25004D]" />
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
            {/* Left side */}
            <div className="space-y-5">
              {/* Event name */}
              <div>
                <label
                  htmlFor="eventName"
                  className="mb-2 block text-xs text-white"
                >
                  Event Name<span className="text-[#FF00DD]">*</span>
                </label>

                <input
                  id="eventName"
                  name="eventName"
                  type="text"
                  placeholder="What is the name of this event"
                  className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  required
                />
              </div>

              {/* Short description */}
              <div>
                <label
                  htmlFor="shortDescription"
                  className="mb-2 block text-xs text-white"
                >
                  Short Description<span className="text-[#FF00DD]">*</span>
                </label>

                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  placeholder="Write a short description about this event"
                  className="h-[58px] w-full resize-none rounded-[5px] border border-[#514B60] bg-transparent p-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  required
                />
              </div>

              {/* About event */}
              <div>
                <label
                  htmlFor="aboutEvent"
                  className="mb-2 block text-xs text-white"
                >
                  About Event<span className="text-[#FF00DD]">*</span>
                </label>

                <textarea
                  id="aboutEvent"
                  name="aboutEvent"
                  placeholder="Write about the event"
                  className="h-[118px] w-full resize-none rounded-[5px] border border-[#514B60] bg-transparent p-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-xs text-white"
                >
                  Location<span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="location"
                    name="location"
                    defaultValue=""
                    className="h-10 w-full appearance-none rounded-[5px] border border-[#514B60] bg-[#050014] px-3 pr-10 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                    required
                  >
                    <option value="" disabled>
                      Where is this event being held
                    </option>
                    <option value="physical">Physical location</option>
                    <option value="virtual">Virtual</option>
                    <option value="hybrid">Hybrid</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>

                <label className="mt-2 flex items-center gap-1.5 text-[9px] text-[#858196]">
                  <input
                    type="checkbox"
                    className="h-2.5 w-2.5 accent-[#AE5BFD]"
                  />
                  Integrate map
                </label>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="mb-2 block text-xs text-white">
                  Tags<span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="tags"
                    name="tags"
                    defaultValue=""
                    className="h-10 w-full appearance-none rounded-[5px] border border-[#514B60] bg-[#050014] px-3 pr-10 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                    required
                  >
                    <option value="" disabled>
                      Add up to 3 keywords
                    </option>
                    <option value="web3">Web3</option>
                    <option value="technology">Technology</option>
                    <option value="community">Community</option>
                    <option value="business">Business</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="mb-2 block text-xs text-white"
                >
                  Industry<span className="text-[#FF00DD]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    defaultValue=""
                    className="h-10 w-full appearance-none rounded-[5px] border border-[#514B60] bg-[#050014] px-3 pr-10 text-xs text-[#858196] outline-none focus:border-[#AE5BFD]"
                    required
                  >
                    <option value="" disabled>
                      Add at least 2 industries
                    </option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Continue */}
              <button
                type="submit"
                className="h-10 w-full rounded-[6px] bg-[#6630C2] text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Continue
              </button>
            </div>

            {/* Banner upload */}
            <div>
              <label
                htmlFor="banner"
                className="flex h-[235px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-[#514B60] bg-transparent text-center transition-colors hover:border-[#AE5BFD]"
              >
                <input
                  id="banner"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleBannerChange}
                />

                {banner ? (
                  <>
                    <img
                      src={URL.createObjectURL(banner)}
                      alt="Event banner preview"
                      className="h-full w-full rounded-[12px] object-cover"
                    />
                  </>
                ) : (
                  <>
                    <ImagePlus className="mb-2 h-5 w-5 text-[#858196]" />

                    <p className="text-xs text-white">
                      Upload your banner image here.
                    </p>

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

export default CreateEvents;
