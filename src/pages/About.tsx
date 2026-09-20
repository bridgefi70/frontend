import {
  ArrowRight,
  Compass,
  GraduationCap,
  Ticket,
  Users,
  Target,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: Compass,
    title: "Event Discovery",
    description:
      "Explore exciting events, discover new communities, and find experiences that connect with your interests.",
  },
  {
    icon: Ticket,
    title: "Ticketing and Access",
    description:
      "Enjoy a seamless way to access events, manage tickets, and participate in experiences across the ecosystem.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Connect with like-minded people, build meaningful relationships, and grow alongside a thriving community.",
  },
  {
    icon: GraduationCap,
    title: "Education and Onboarding",
    description:
      "Access learning opportunities and resources that make it easier to understand Web3 and take your first steps.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#050014] text-white">
      {/* Intro */}
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#AE5BFD]/30 bg-[#AE5BFD]/10 px-4 py-2 text-xs font-medium tracking-wide text-[#C99AFF]">
            ABOUT BRIDGEFI
          </span>

          <h1 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Connecting the people
            <br className="hidden sm:block" /> building the future of{" "}
            <span className="bg-gradient-to-r from-[#AE5BFD] to-[#FF4FD8] bg-clip-text text-transparent">
              Web3
            </span>
          </h1>

          <div className="mx-auto mt-7 max-w-3xl space-y-4 text-sm leading-7 text-[#B5AEC9] sm:text-base sm:leading-8">
            <p>
              BRIDGEFI is a comprehensive Web3 event platform designed to bring
              together the people, ideas, and opportunities driving the
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
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 md:gap-6">
          <article className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#17082F] to-[#10051F] p-6 transition-colors duration-300 hover:border-[#AE5BFD]/40 sm:p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#AE5BFD]/25 bg-[#AE5BFD]/10 text-[#C99AFF]">
              <Target size={23} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight">
              Our Mission
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B5AEC9] sm:text-base sm:leading-8">
              To lower the barriers to entry into Web3 by creating an inclusive
              ecosystem where everyone can learn, connect, collaborate, and
              grow. We aim to empower participants through accessible
              opportunities, meaningful connections, and practical insights into
              the emerging decentralized world.
            </p>
          </article>

          <article className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#17082F] to-[#10051F] p-6 transition-colors duration-300 hover:border-[#AE5BFD]/40 sm:p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#AE5BFD]/25 bg-[#AE5BFD]/10 text-[#C99AFF]">
              <Eye size={23} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight">
              Our Vision
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#B5AEC9] sm:text-base sm:leading-8">
              To become the leading ecosystem platform where innovation, talent,
              and opportunity converge to accelerate the future of Web3. We
              envision a connected community where people can discover
              opportunities, develop their skills, and contribute to a more open
              and collaborative digital economy.
            </p>
          </article>
        </div>
      </section>

      {/* Why BridgeFi */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AE5BFD]">
            Why BridgeFi
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Why <span className="text-[#C99AFF]">BRIDGEFI?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#B5AEC9] sm:text-base sm:leading-8">
            The Web3 ecosystem is full of possibilities, but finding the right
            people, events, and learning opportunities can be challenging.
            BRIDGEFI brings these experiences together in one place, helping
            people discover what matters, build meaningful connections, and
            participate in the growth of the ecosystem.
          </p>
        </div>
      </section>

      {/* Platform Features */}
      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AE5BFD]">
              What We Offer
            </span>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              One Platform for{" "}
              <span className="bg-gradient-to-r from-[#AE5BFD] to-[#FF4FD8] bg-clip-text text-transparent">
                Every Experience
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B5AEC9] sm:text-base sm:leading-8">
              Everything you need to discover events, access opportunities, and
              become part of the Web3 community.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10051F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#AE5BFD]/40 hover:bg-[#160829] sm:p-8"
                >
                  <span className="absolute right-5 top-4 text-5xl font-semibold text-white/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8900FF]/20 to-[#FF00DD]/10 text-[#C99AFF] ring-1 ring-[#AE5BFD]/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#B5AEC9] sm:text-base">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-24 pt-4 lg:px-12 lg:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#AE5BFD]/20 bg-gradient-to-br from-[#1A0734] via-[#11051F] to-[#090019] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#8900FF]/15 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C99AFF]">
              Your Web3 Journey Starts Here
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              One platform. One ecosystem.
              <br className="hidden sm:block" />
              Endless opportunities to build,
              <br className="hidden sm:block" />
              connect, and grow.
            </h2>

            <p className="mt-5 text-lg font-medium text-[#C99AFF] sm:text-xl">
              Welcome to BRIDGEFI.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/events"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8900FF] to-[#FF00DD] px-7 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              >
                Explore Events
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/create-events"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#AE5BFD]/50 px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#AE5BFD]/10"
              >
                Create an Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
