import { useState } from "react";

const steps = ["Details", "Ticketing", "Review and Lauch"];

const CreateEvents = () => {
  const currentStep = 0;

  return (
    <div className="font-display px-30 py-12">
      {/* Stepper */}
      <div className="flex justify-between mb-12">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 mx-2 text-center">
            <p
              className={`mb-2 text-sm ${index === currentStep ? "text-ink-light" : "text-mist-200"}`}
            >
              {step}
            </p>
            <div className="h-1 rounded-full bg-navy-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8900FF] to-[#FF00DD]"
                style={{
                  width:
                    index === currentStep
                      ? "40%"
                      : index < currentStep
                        ? "100%"
                        : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <h1 className="font-display text-3xl font-bold text-ink-light mb-1">
        Create An Event
      </h1>
      <p className="text-mist-200 mb-10">
        Fill in the details properly to create an event
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-ink-light mb-2">
              Event Name<span className="text-[#FF00DD]">*</span>
            </label>
            <input
              type="text"
              placeholder="What is the name of this event"
              className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-ink-light placeholder:text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400"
            />
          </div>

          <div>
            <label className="block text-ink-light mb-2">
              Short Description<span className="text-[#FF00DD]">*</span>
            </label>
            <textarea
              placeholder="Write a short description about this event"
              rows={3}
              className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-ink-light placeholder:text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400"
            />
          </div>

          <div>
            <label className="block text-ink-light mb-2">
              About Event<span className="text-[#FF00DD]">*</span>
            </label>
            <textarea
              placeholder="Write about the event"
              rows={6}
              className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-ink-light placeholder:text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400"
            />
          </div>

          <div>
            <label className="block text-ink-light mb-2">
              Location<span className="text-[#FF00DD]">*</span>
            </label>
            <select className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400">
              <option value="">Where is this event being held</option>
            </select>
            <label className="mt-2 flex items-center gap-2 text-sm text-mist-200">
              <input type="checkbox" className="accent-signal-400" />
              Integrate map
            </label>
          </div>

          <div>
            <label className="block text-ink-light mb-2">
              Tags<span className="text-[#FF00DD]">*</span>
            </label>
            <input
              type="text"
              placeholder="Add up to 3 keywords"
              className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-ink-light placeholder:text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400"
            />
          </div>

          <div>
            <label className="block text-ink-light mb-2">
              Industry<span className="text-[#FF00DD]">*</span>
            </label>
            <input
              type="text"
              placeholder="Add at least 2 industries"
              className="w-full rounded-md border border-navy-700 bg-transparent px-4 py-3 text-ink-light placeholder:text-mist-200 focus:outline-none focus:ring-2 focus:ring-signal-400"
            />
          </div>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-dashed border-navy-700 min-h-[400px] text-center p-6">
          <div>
            <p className="text-mist-200">Upload your banner image here.</p>
            <button className="text-signal-400 hover:underline">
              Browse photo library
            </button>
            <p className="mt-2 text-xs text-mist-200">
              Photo Format: jpeg, png
            </p>
          </div>
        </div>
      </div>

      <button className="mt-10 w-full rounded-md bg-[#4F2598] py-4 font-medium text-white hover:opacity-90 transition-opacity">
        Continue
      </button>
    </div>
  );
};

export default CreateEvents;
