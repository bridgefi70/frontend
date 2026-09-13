const features = [
  {
    title: "Event Discovery",
    description:
      "Curating global summits, hackathons, and immersive workshops for both physical and digital convergence.",
  },
  {
    title: "Ticketing and Access",
    description:
      "Secure decentralized event infrastructure ensuring transparent access.",
  },
  {
    title: "Community Driven",
    description:
      "Bridging contributors with opportunities through intelligent matching algorithms.",
  },
  {
    title: "Education and Onboarding",
    description:
      "Transforming passive observers into builders through comprehensive Web3 curriculums and mentorships.",
  },
];

const About = () => {
  return (
    <div className="font-display bg-navy-900">
      {/* Intro */}
      <section className="px-6 py-16 text-center md:px-10 md:py-20 lg:px-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-light mb-6">
          Connecting the people building the future of Web3
        </h1>
        <p className="max-w-3xl mx-auto text-mist-200">
          BRIDGEFI is a comprehensive Web3 ecosystem platform designed to bring
          together the people, ideas, and opportunities driving the
          decentralized economy. We connect founders, developers, designers,
          investors, creators, and communities through a shared space built for
          collaboration, learning, and growth. Whether you're attending an
          industry conference, hosting a community meetup, discovering your next
          startup opportunity, or expanding your network, BRIDGEFI provides the
          tools to make meaningful connections happen.
        </p>
        <p className="max-w-3xl mx-auto text-mist-200 mt-4">
          Our platform combines event management, intelligent networking,
          educational resources, and startup collaboration into one seamless
          experience, making it easier to discover opportunities, build
          partnerships, and contribute to the growth of the global Web3
          ecosystem.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-10 lg:px-16 lg:pb-20">
        {" "}
        <div className="rounded-xl border border-navy-700 bg-navy-700/30 p-8">
          <h3 className="font-display text-xl font-bold text-ink-light mb-3">
            Our Mission
          </h3>
          <p className="text-mist-200">
            To lower the barriers to entry into Web3 by creating an inclusive
            ecosystem where anyone can learn, connect, collaborate, and grow
            through meaningful opportunities. Participants will gain practical
            insights into leveraging AI tools for content creation, design,
            business operations, marketing, and problem-solving while
            maintaining the human ingenuity that drives meaningful innovation.
          </p>
        </div>
        <div className="rounded-xl border border-navy-700 bg-navy-700/30 p-8">
          <h3 className="font-display text-xl font-bold text-ink-light mb-3">
            Our Vision
          </h3>
          <p className="text-mist-200">
            To become the leading ecosystem platform where innovation, talent,
            and capital converge for the future of decentralized economy.
            Participants will gain practical insights into leveraging AI tools
            for content design, business operations, marketing, and
            problem-solving while maintaining the human ingenuity that drives
            meaningful innovation.
          </p>
        </div>
      </section>

      {/* Why Bridge-Fi */}
      <section className="px-30 pb-20 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-light mb-4">
          WHY BRIDGE-FI
        </h2>
        <p className="max-w-3xl mx-auto text-mist-200">
          We believe the future of Web3 depends on collaboration, not isolation.
          By bringing together education, networking, and innovation in one
          platform, BRIDGEFI transforms fragmented opportunities into a
          connected ecosystem where ideas become partnerships, connection
          becomes movement, and innovation becomes impact.
        </p>
      </section>

      {/* Platform features */}
      <section className="px-30 pb-20">
        <p className="text-signal-400 text-sm font-medium mb-2">
          What we Offer
        </p>
        <h2 className="font-display text-3xl font-bold text-ink-light mb-10">
          One Platform for{" "}
          <span className="bg-gradient-to-r from-[#8900FF] to-[#FF00DD] bg-clip-text text-transparent">
            Every Experience
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-navy-700 bg-navy-700/30 p-8"
            >
              <h3 className="font-display text-lg font-bold text-ink-light mb-2">
                {feature.title}
              </h3>
              <p className="text-mist-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-30 pb-24 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-light mb-2">
          One platform. One ecosystem.
          <br />
          Endless opportunities build, connect, and grow.
        </h2>
        <p className="mt-4 bg-gradient-to-r from-[#8900FF] to-[#FF00DD] bg-clip-text text-transparent text-xl font-semibold">
          Welcome to BRIDGEFI.
        </p>
      </section>
    </div>
  );
};

export default About;
