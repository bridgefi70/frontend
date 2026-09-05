import Button from "@/components/ui/Button";

const EcosystemCTA = () => {
  return (
    <section className="bg-[#050014] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium text-[#06B6D4]">
          ✦ Join the ecosystem
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          Your next opportunity is already{" "}
          <span className="text-[#AE5BFD]">in the ecosystem</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#858196] md:text-base">
          Thousands of founders, investors, and builders are already connecting
          through BridgeFi. The only question is whether you will be part of it.
        </p>

        <div className="mt-8 flex justify-center gap-4 sm:flex-row">
          <Button
            text="Create Event"
            width="160px"
            height="48px"
            gradient
            radius="8px"
          />

          <Button
            text="Get A Ticket"
            width="160px"
            height="48px"
            outline
            radius="8px"
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemCTA;
