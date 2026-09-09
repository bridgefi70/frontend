import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventLaunched = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050014] px-6">
      <div className="w-full max-w-[650px] rounded-[10px] bg-[#17001F] px-6 py-12 text-center md:px-12 md:py-14">
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#AE5BFD] bg-[#120020]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#8900FF] to-[#FF00DD]">
            <Check className="h-10 w-10 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-3xl font-medium text-white md:text-4xl">
          Event Launched
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[500px] text-xs leading-5 text-[#858196] md:text-sm">
          Your event has been launched successfully and will be live and ready
          for your attendees in 24hrs.
        </p>

        {/* Back Home */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-9 h-11 w-full rounded-[6px] bg-[#6630C2] text-xs font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to home
        </button>
      </div>
    </main>
  );
};

export default EventLaunched;
