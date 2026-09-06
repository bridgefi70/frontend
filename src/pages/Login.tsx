import { useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();

    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const newErrors = {
      email: "",
      password: "",
    };

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid Email Address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    console.log("Login form is valid");
  };

  return (
    <main className="min-h-screen bg-[#050014] text-white font-display">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 42%, rgba(137, 0, 255, 0.38) 0%, rgba(137, 0, 255, 0.12) 10%, transparent 24%),
              radial-gradient(circle at 78% 78%, rgba(174, 91, 253, 0.30) 0%, rgba(137, 0, 255, 0.10) 12%, transparent 28%),
              radial-gradient(circle at 50% 20%, rgba(137, 0, 255, 0.16) 0%, transparent 28%)
            `,
          }}
        />

        {/* Decorative rings */}
        <div className="pointer-events-none absolute -left-56 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#7C3AED]/30" />
        <div className="pointer-events-none absolute -left-48 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#7C3AED]/25" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#7C3AED]/20" />

        <div className="pointer-events-none absolute -right-64 top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full border border-[#7C3AED]/25" />
        <div className="pointer-events-none absolute -right-52 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#7C3AED]/20" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#7C3AED]/15" />

        {/* Stars */}
        <div className="pointer-events-none absolute left-[18%] top-[18%] text-xl text-[#AE5BFD]">
          ✦
        </div>

        <div className="pointer-events-none absolute left-[22%] top-[75%] text-sm text-[#AE5BFD]">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[22%] top-[28%] text-xl text-[#AE5BFD]">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[28%] bottom-[15%] text-sm text-[#AE5BFD]">
          ✦
        </div>

        {/* Login area */}
        <div className="relative z-10 flex w-full max-w-[542px] flex-col items-center">
          {/* Card */}
          <div className="w-full rounded-[16px] border border-[#AE5BFD] bg-[#03010D]/80 px-8 py-8 shadow-[0_0_40px_rgba(137,0,255,0.08)] sm:px-14 sm:py-8 md:px-[60px]">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#AE5BFD]">
                <img
                  src="/img/logo.png"
                  alt="BridgeFi"
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mt-4 text-center">
              <h1 className="text-[28px] font-medium leading-tight sm:text-[30px]">
                Welcome Back
              </h1>

              <p className="mt-1 text-sm text-[#858196]">
                Login to access your dashboard
              </p>
            </div>

            {/* Form */}
            <form className="mt-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white"
                >
                  Email Address <span>*</span>
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#666276]" />

                  <input
                    id="email"
                    type="email"
                    placeholder="paulman@gmail.com"
                    className={`h-11 w-full rounded-[8px] border bg-transparent pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#55515E] ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#514B60] focus:border-[#AE5BFD]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm text-white"
                >
                  Password <span>*</span>
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#666276]" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    className={`h-11 w-full rounded-[8px] border bg-transparent pl-10 pr-11 text-sm text-white outline-none placeholder:text-[#55515E] ${
                      errors.password
                        ? "border-red-500"
                        : "border-[#514B60] focus:border-[#AE5BFD]"
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666276] transition-colors hover:text-white"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="mt-3 flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#AE5BFD] transition-colors hover:text-[#C98BFF]"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="mt-7 h-11 w-full rounded-[8px] bg-gradient-to-r from-[#A43BFF] to-[#4F16D7] text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Login
              </button>

              {/* Register */}
              <p className="mt-4 text-center text-sm text-white">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#AE5BFD] hover:underline">
                  Register here
                </Link>
              </p>
            </form>

            {/* Security */}
            <div className="mt-9 flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#AE5BFD]" />

              <span className="text-xs text-[#858196]">
                Your data is protected and highly secured
              </span>
            </div>
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="mt-7 flex items-center gap-1.5 text-sm text-[#AE5BFD] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
