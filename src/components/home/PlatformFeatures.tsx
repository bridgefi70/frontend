const features = [
  {
    title: "Interactive Schedule",
    description:
      "Easily navigate and plan your day with our interactive schedule.",
  },
  {
    title: "Exclusive Content",
    description:
      "Gain access to exclusive sessions that will elevate your knowledge.",
  },
  {
    title: "Events Update",
    description: "Stay informed with real-time updates and announcements.",
  },
  {
    title: "Live Streaming",
    description:
      "Experience the event from anywhere with seamless live streaming.",
  },
];

const PlatformFeatures = () => {
  return (
    <section className="bg-[#050216] px-6 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <img
            src="/img/e3.jpg"
            alt="Event audience"
            className="aspect-square w-full object-cover"
          />

          <img
            src="/img/e4.jpg"
            alt="Event presentation"
            className="aspect-square w-full object-cover"
          />

          <img
            src="/img/e6.jpg  "
            alt="Live event"
            className="aspect-square w-full object-cover"
          />

          <img
            src="/img/e2.jpg"
            alt="Concert crowd"
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-xs font-medium text-[#06B6D4] sm:text-sm">
            Platform Features
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[48px]">
            One Platform for
            <br />
            <span className="text-[#AE5BFD]">Every Experience</span>
          </h2>

          <p className="mt-5 max-w-[600px] text-sm leading-5 text-[#858196] sm:text-base sm:leading-6">
            Discover events effortlessly, book tickets in seconds, and stay
            connected with communities — all through a seamless digital
            experience.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-sm font-medium text-[#06B6D4] sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#858196] sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
