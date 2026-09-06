import { useState } from "react";
import {
  UserRound,
  UserRoundPlus,
  Mail,
  Phone,
  LockKeyhole,
  Gift,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const firstName = (
      form.elements.namedItem("firstName") as HTMLInputElement
    ).value.trim();

    const lastName = (
      form.elements.namedItem("lastName") as HTMLInputElement
    ).value.trim();

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value.trim();

    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    ).value;

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };

    if (!firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid Email Address";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    // No backend yet — this is where the API request will eventually go.
    console.log("Form is valid");
  };

  return (
    <main className="font-display min-h-screen bg-[#050014] text-white">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
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

        {/* Signup content */}
        <div className="relative z-10 w-full max-w-[542px]">
          {/* Card */}
          <div className="w-full rounded-[16px] border border-[#AE5BFD] bg-[#03010D]/85 px-6 py-6 shadow-[0_0_40px_rgba(137,0,255,0.08)] sm:px-10 sm:py-7 md:px-[40px]">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#AE5BFD]">
                <UserRoundPlus
                  className="h-6 w-6 text-[#AE5BFD]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mt-3 text-center">
              <h1 className="text-[25px] font-medium leading-tight sm:text-[28px]">
                Create Account
              </h1>

              <p className="mt-1 text-[11px] text-[#858196]">
                Join BridgeFi to start listing events.
              </p>
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-3">
                {/* First name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-[11px] text-white"
                  >
                    First Name <span>*</span>
                  </label>

                  <div className="relative">
                    <UserRound className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                    <input
                      id="firstName"
                      type="text"
                      placeholder="Paul"
                      className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-2 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                    />
                  </div>
                </div>

                {/* Last name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-[11px] text-white"
                  >
                    Last Name <span>*</span>
                  </label>

                  <div className="relative">
                    <UserRound className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Mann"
                      className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-2 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[11px] text-white"
                >
                  Email Address <span>*</span>
                </label>

                <div className="relative">
                  <Mail className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                  <input
                    id="email"
                    type="email"
                    placeholder="paulman@gmail.com"
                    className={`h-8 w-full rounded-[5px] border bg-transparent pl-8 pr-2 text-[11px] text-white outline-none placeholder:text-[#55515E] ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#514B60] focus:border-[#AE5BFD]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[9px] text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mt-3">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-[11px] text-white"
                >
                  Phone number <span>*</span>
                </label>

                <div className="relative">
                  <Phone className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-2 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-[11px] text-white"
                >
                  Password <span>*</span>
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-9 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#666276] hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-3.5 w-3.5" />
                    ) : (
                      <Eye className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div className="mt-3">
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-[11px] text-white"
                >
                  Confirm Password <span>*</span>
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="******"
                    className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-9 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#666276] hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-3.5 w-3.5" />
                    ) : (
                      <Eye className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Referral code */}
              <div className="mt-3">
                <label
                  htmlFor="referral"
                  className="mb-1.5 block text-[11px] text-white"
                >
                  Referral Code (optional)
                </label>

                <div className="relative">
                  <Gift className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#666276]" />

                  <input
                    id="referral"
                    type="text"
                    placeholder="Got a code? Paste it here"
                    className="h-8 w-full rounded-[5px] border border-[#514B60] bg-transparent pl-8 pr-2 text-[11px] text-white outline-none placeholder:text-[#55515E] focus:border-[#AE5BFD]"
                  />
                </div>
              </div>

              {/* Create account */}
              <button
                type="submit"
                className="mt-4 flex h-8 w-full items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-[#A43BFF] to-[#4F16D7] text-[11px] font-medium text-white transition-opacity hover:opacity-90"
              >
                <UserRoundPlus className="h-3.5 w-3.5" />
                Create Account
              </button>

              {/* Login link */}
              <p className="mt-3 text-center text-[10px] text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-[#AE5BFD] hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
