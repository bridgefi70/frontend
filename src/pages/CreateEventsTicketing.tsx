import { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateEventsTicketing = () => {
  const navigate = useNavigate();

  const [ticketType, setTicketType] = useState<"free" | "paid">("free");

  const [ticketTier, setTicketTier] = useState("General Admission");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (ticketType === "paid") {
      if (!ticketTier || !price || !quantity) {
        setError("Please fill in all the details to continue.");
        return;
      }
    }

    const formData = new FormData(e.currentTarget);

    const existingData = JSON.parse(
      sessionStorage.getItem("createEvent") || "{}",
    );

    const updatedData = {
      ...existingData,
      ticketType,
      ticketTier: formData.get("ticketTier"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };

    sessionStorage.setItem("createEvent", JSON.stringify(updatedData));

    navigate("/create-events/review");
  };

  return (
    <main className="min-h-screen bg-[#050014] px-6 py-12 text-white md:px-10 lg:px-16">
      {error && (
        <div className="mx-auto mb-5 w-fit bg-[#FFCACA] px-5 py-2 text-xs text-[#FF3B3B]">
          {error}
        </div>
      )}

      <div className="mx-auto max-w-[1200px]">
        {/* Progress */}
        <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
          <div>
            <p className="mb-2 text-center text-xs text-[#858196] md:text-sm">
              Details
            </p>
            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
          </div>

          <div>
            <p className="mb-2 text-center text-xs text-white md:text-sm">
              Ticketing
            </p>
            <div className="h-[7px] rounded-full bg-gradient-to-r from-[#A900FF] to-[#FF00DD]" />
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
          <h1 className="text-3xl font-medium md:text-[32px]">Ticketing</h1>

          <p className="mt-1 text-xs text-[#858196]">
            Define ticket type and tiers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[700px]">
          {/* Ticket type */}
          <div>
            <p className="mb-3 text-xs text-white">
              Choose ticket type<span className="text-[#FF00DD]">*</span>
            </p>

            <div className="flex gap-8">
              {/* Free */}
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input
                  type="radio"
                  name="ticketType"
                  value="free"
                  checked={ticketType === "free"}
                  onChange={() => setTicketType("free")}
                  className="h-3.5 w-3.5 accent-[#AE5BFD]"
                />

                <span
                  className={
                    ticketType === "free" ? "text-[#AE5BFD]" : "text-[#858196]"
                  }
                >
                  Free Ticket
                </span>
              </label>

              {/* Paid */}
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input
                  type="radio"
                  name="ticketType"
                  value="paid"
                  checked={ticketType === "paid"}
                  onChange={() => setTicketType("paid")}
                  className="h-3.5 w-3.5 accent-[#AE5BFD]"
                />

                <span
                  className={
                    ticketType === "paid" ? "text-[#AE5BFD]" : "text-[#858196]"
                  }
                >
                  Paid Ticket
                </span>
              </label>
            </div>
          </div>

          {/* Paid ticket fields */}
          {ticketType === "paid" && (
            <div className="mt-7 space-y-5">
              {/* Ticket tier */}
              <div>
                <label
                  htmlFor="ticketTier"
                  className="mb-2 block text-xs text-white"
                >
                  Add Ticket tier
                </label>

                <div className="relative">
                  <input
                    id="ticketTier"
                    type="text"
                    value={ticketTier}
                    onChange={(e) => setTicketTier(e.target.value)}
                    className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 pr-10 text-xs text-white outline-none focus:border-[#AE5BFD]"
                  />

                  <Plus className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858196]" />
                </div>
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-xs text-white"
                >
                  Price
                </label>

                <input
                  id="price"
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. $50"
                  className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                />
              </div>

              {/* Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-xs text-white"
                >
                  Quantity Available
                </label>

                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="How many tickets are available"
                  className="h-10 w-full rounded-[5px] border border-[#514B60] bg-transparent px-3 text-xs text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                />
              </div>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-8 h-10 w-full rounded-[6px] bg-[#6630C2] text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            Review and Complete
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateEventsTicketing;
