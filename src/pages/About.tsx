import { CalendarDays, GraduationCap, Ticket, Users } from "lucide-react";

const FEATURES = [
  {
    title: "Event Discovery",
    description:
      "Discover exciting events, workshops and immersive experiences to help you explore the Web3 ecosystem.",
    icon: CalendarDays,
  },
  {
    title: "Ticketing and Access",
    description:
      "Secure and decentralized event ticketing with simple and transparent access.",
    icon: Ticket,
  },
  {
    title: "Community Driven",
    description:
      "Connect with like-minded people through our vibrant and growing community.",
    icon: Users,
  },
  {
    title: "Education and Onboarding",
    description:
      "Transformative education and onboarding through comprehensive Web3 resources and learning.",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#050014] text-white">
      {/* INTRO */}
      <section className="px-6 pb-16 pt-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[850px] text-center">
          <h1 className="text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            Connecting the people
            <br />
            building the future of Web3
          </h1>

          <div className="mx-auto mt-5 max-w-[720px] space-y-4 text-[11px] leading-[1.65] text-[#858196] sm:text-xs">
            <p>
              BRIDGEFI is a comprehensive Web3 event platform designed to
              connect the people, ideas, and opportunities driving the
              decentralized economy. We connect builders, developers, designers,
              investors, and communities through a shared space for
              collaboration, learning, and growth.
            </p>

            <p>
              Whether you are exploring Web3 for the first time or already
              building within the ecosystem, BRIDGEFI provides a place to
              discover events, connect with people, and take part in shaping
              what comes next.
            </p>

            <p>
              Our platform combines event management, intelligent networking,
              educational resources, and startup collaboration into one seamless
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-[850px] gap-4 md:grid-cols-2">
          <div className="rounded-[4px] bg-[#0D0324] p-6">
            <h2 className="text-base font-medium text-white">Our Mission</h2>

            <p className="mt-4 text-[10px] leading-[1.7] text-[#858196] sm:text-[11px]">
              To lower the barriers to entry into Web3 by creating an inclusive
              ecosystem where anyone can learn, connect, collaborate, and grow.
              Our platform supports participants through accessible
              opportunities, meaningful connections, and practical insights into
              the emerging decentralized world.
            </p>
          </div>

          <div className="rounded-[4px] bg-[#0D0324] p-6">
            <h2 className="text-base font-medium text-white">Our Vision</h2>

            <p className="mt-4 text-[10px] leading-[1.7] text-[#858196] sm:text-[11px]">
              To become the leading ecosystem platform where innovation, talent,
              and opportunity converge to accelerate the future of Web3. We
              envision a connected community where people can discover
              opportunities, develop their skills, and contribute to an open and
              collaborative digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* WHY BRIDGEFI */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            WHY BRIDGE-FI
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[10px] leading-[1.7] text-[#858196] sm:text-[11px]">
            The Web3 ecosystem is full of possibilities, but finding the right
            people, events, and learning opportunities can be challenging.
            BRIDGEFI brings these experiences together in one place, helping
            people discover what matters, build meaningful connections, and
            participate in the growth of the ecosystem.
          </p>

          <p className="mt-4 text-[10px] font-medium text-[#AE5BFD]">
            Web3 for Everyone
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[850px]">
          <p className="text-[9px] font-medium text-[#06B6D4]">What We Offer</p>

          <h2 className="mt-2 text-3xl font-medium leading-tight sm:text-4xl">
            One Platform for{" "}
            <span className="bg-gradient-to-r from-[#AE5BFD] to-[#FF00DD] bg-clip-text text-transparent">
              Every Experience
            </span>
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="relative min-h-[155px] overflow-hidden rounded-[3px] bg-[#0D0324] p-6"
                >
                  <Icon
                    className="absolute right-4 top-4 text-[#8900FF]/30"
                    size={55}
                    strokeWidth={1.2}
                  />

                  <h3 className="relative z-10 text-xs font-medium text-white sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="relative z-10 mt-3 max-w-[280px] text-[9px] leading-[1.65] text-[#858196] sm:text-[10px]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="px-6 pb-20 pt-4 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-3xl font-medium leading-[1.2] sm:text-4xl md:text-5xl">
            One platform. One ecosystem.
            <br />
            Endless opportunities build,
            <br />
            connect, and grow.
          </h2>

          <p className="mt-3 text-2xl font-medium text-[#AE5BFD] sm:text-3xl">
            Welcome to BRIDGEFI.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
