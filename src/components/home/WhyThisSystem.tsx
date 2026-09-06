const benefits = [
  {
    title: "Curated Events",
    description: "Handpicked events you'll love and remember.",
  },
  {
    title: "Secure Booking",
    description: "Your data and payments are always protected.",
  },
  {
    title: "Instant Access",
    description: "Get your tickets instantly and skip the lines.",
  },
  {
    title: "Community Driven",
    description: "Join a community of event lovers like you.",
  },
];

const WhyThisSystem = () => {
  return (
    <section className="font-display bg-[#050216] px-6 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* HEADING */}
        <div className="text-center">
          <p className="text-xs font-medium text-[#06B6D4] sm:text-sm">
            ✦ Why Bridge-Fi?
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Why This System
            <br />
            Exists
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="min-h-[120px] rounded-xl border border-[#29243A] p-4 sm:p-5"
            >
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#DDEBFF] text-xs text-[#6630C2]">
                ♥
              </div>

              <h3 className="text-sm font-medium text-white sm:text-base">
                {benefit.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-[#858196] sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisSystem;
