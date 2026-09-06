import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email address is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Invalid Email Address");
      return;
    }

    setError("");

    // API request will be connected here later.
    console.log("Password reset requested for:", trimmedEmail);
  };

  return (
    <main className="font-display min-h-screen bg-[#050014] text-white">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 8% 38%, rgba(137, 0, 255, 0.40) 0%, rgba(137, 0, 255, 0.12) 10%, transparent 25%),
              radial-gradient(circle at 84% 78%, rgba(174, 91, 253, 0.30) 0%, rgba(137, 0, 255, 0.10) 12%, transparent 28%),
              radial-gradient(circle at 50% 20%, rgba(137, 0, 255, 0.14) 0%, transparent 30%)
            `,
          }}
        />

        {/* Decorative rings */}
        <div className="pointer-events-none absolute -left-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-[#7C3AED]/30" />
        <div className="pointer-events-none absolute -left-56 top-1/2 h-[610px] w-[610px] -translate-y-1/2 rounded-full border border-[#7C3AED]/25" />
        <div className="pointer-events-none absolute -left-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#7C3AED]/20" />

        <div className="pointer-events-none absolute -right-64 top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full border border-[#7C3AED]/25" />
        <div className="pointer-events-none absolute -right-52 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#7C3AED]/20" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#7C3AED]/15" />

        {/* Stars */}
        <span className="pointer-events-none absolute left-[17%] top-[18%] text-lg text-[#AE5BFD]">
          ✦
        </span>

        <span className="pointer-events-none absolute left-[20%] bottom-[12%] text-sm text-[#AE5BFD]">
          ✦
        </span>

        <span className="pointer-events-none absolute right-[21%] top-[28%] text-lg text-[#AE5BFD]">
          ✦
        </span>

        <span className="pointer-events-none absolute right-[28%] bottom-[16%] text-sm text-[#AE5BFD]">
          ✦
        </span>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[602px]">
          {/* Card */}
          <div className="w-full rounded-[16px] border border-[#AE5BFD] bg-[#03010D]/85 px-8 py-10 shadow-[0_0_40px_rgba(137,0,255,0.08)] sm:px-12 md:px-[68px] md:py-10">
            {/* Question mark */}
            <div className="flex justify-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#AE5BFD]">
                <span className="text-[40px] font-light leading-none text-[#AE5BFD]">
                  ?
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-5 text-center">
              <h1 className="text-[30px] font-medium leading-tight md:text-[32px]">
                Forgot Password?
              </h1>

              <p className="mx-auto mt-2 max-w-[430px] text-sm leading-5 text-[#858196]">
                No worries we will help you reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${
                    error ? "text-red-500" : "text-[#666276]"
                  }`}
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="paulmann@gmail.com"
                  className={`h-12 w-full rounded-[8px] border bg-transparent pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#55515E] ${
                    error
                      ? "border-red-500"
                      : "border-[#514B60] focus:border-[#AE5BFD]"
                  }`}
                />
              </div>

              {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}

              {/* Reset button */}
              <button
                type="submit"
                className="mt-8 h-12 w-full rounded-[8px] bg-gradient-to-r from-[#A43BFF] to-[#4F16D7] text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Reset Password
              </button>
            </form>

            {/* Back to login */}
            <div className="mt-7 flex justify-center">
              <Link
                to="/login"
                className="flex items-center gap-1.5 text-sm text-[#AE5BFD] transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>

            {/* Resend */}
            <p className="mt-14 text-center text-sm text-white">
              Didn't receive the mail?{" "}
              <button type="button" className="text-[#AE5BFD] hover:underline">
                Resend mail
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
