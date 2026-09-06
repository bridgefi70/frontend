import { Ticket, Coins, ChartNoAxesColumn, Network } from "lucide-react";

import Button from "@/components/ui/Button";

const FEATURES = [
  {
    title: "Ticketing",
    icon: Ticket,
  },
  {
    title: "Funding",
    icon: Coins,
  },
  {
    title: "Analytics",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Networking",
    icon: Network,
  },
];

const LaunchVision = () => {
  return (
    <section className="font-display bg-[#050014] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left side */}
        <div className="w-full md:max-w-[470px]">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Launch Your Vision
          </h2>

          <p className="mt-3 max-w-[480px] text-sm leading-5 text-[#A1A1AA] md:text-base">
            Empower your community by creating, managing and scrolling your own
            Web3events, hackathons and meetups directly on BridgeFi. Our
            infrastructure handle the complexity so you can focus on the impact.
          </p>

          <div className="mt-7 hidden md:block">
            <Button
              text="Create Event"
              className="w-full px-8 py-3 md:w-[195px]"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="grid w-full grid-cols-2 gap-4 md:max-w-[500px]">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex h-[100px] flex-col items-center justify-center rounded-md bg-black text-center"
              >
                <Icon className="mb-2 h-5 w-5 text-white" strokeWidth={1.5} />

                <span className="text-sm text-white">{feature.title}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-7 md:hidden ">
          <Button
            text="Create Event"
            className="w-full px-8 py-3 md:w-[195px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchVision;
