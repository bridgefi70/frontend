const TESTIMONIALS = [
  {
    text: "BridgeFi connected me to my co-founder within 2 weeks of joining. The match score was 91% and it was accurate. We are now building together",
    name: "Ayo Okafor",
    role: "Founder",
    initials: "AO",
  },
  {
    text: "I completed the Web3 product design track, earned my credential and had 3 startups matches lined up before I even finished the last module",
    name: "Zara Mensah",
    role: "Product Designer",
    initials: "ZM",
  },
  {
    text: "The pitch night at convergence 2024 led directly to our pre-seed round. The investor we met through the platform became our lead",
    name: "Bashir Ndiaye",
    role: "CEO",
    initials: "BN",
  },
  {
    text: "BridgeFi connected me to my co-founder within 2 weeks of joining. The match score was 91% and it was accurate. We are now building together",
    name: "Ayo Okafor",
    role: "Founder",
    initials: "AO",
  },
  {
    text: "BridgeFi connected me to my co-founder within 2 weeks of joining. The match score was 91% and it was accurate. We are now building together",
    name: "Ayo Okafor",
    role: "Founder",
    initials: "AO",
  },
  {
    text: "BridgeFi connected me to my co-founder within 2 weeks of joining. The match score was 91% and it was accurate. We are now building together",
    name: "Ayo Okafor",
    role: "Founder",
    initials: "AO",
  },
];

const CommunityVoices = () => {
  return (
    <section className="bg-[#050014] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm text-cyan-400">Community voices</p>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Builders who found
            <br />
            their Bridge
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <article key={index} className="rounded-xl bg-[#15152B] p-5">
              <p className="text-sm leading-5 text-white">{testimonial.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-xs text-white">{testimonial.name}</p>

                  <p className="text-[10px] text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityVoices;
