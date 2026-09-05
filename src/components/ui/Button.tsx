// import React from "react";

// interface ButtonProps {
//   text: string;
//   width?: string;
//   radius?: string;
//   gradient?: boolean;
//   textGradient?: boolean;
//   textColor?: string;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
//   onClick?: () => void;
//   className?: string;
// }

// const Button: React.FC<ButtonProps> = ({
//   text,
//   width = "auto",
//   radius = "8px",
//   gradient = false,
//   textGradient = false,
//   textColor = "#FFFFFF",
//   type = "button",
//   disabled = false,
//   onClick,
//   className = "",
// }) => {
//   const background = gradient
//     ? "linear-gradient(95.08deg, #8900FF 2.95%, #FF00DD 97.57%)"
//     : "#4F2598";

//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       onClick={onClick}
//       className={`font-medium transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
//       style={{
//         width,
//         borderRadius: radius,
//         background,
//         color: textGradient ? "transparent" : textColor,
//         backgroundImage: textGradient
//           ? "linear-gradient(95.08deg, #8900FF 2.95%, #FF00DD 97.57%)"
//           : background,
//         backgroundClip: textGradient ? "text" : "border-box",
//         WebkitBackgroundClip: textGradient ? "text" : "border-box",
//         WebkitTextFillColor: textGradient ? "transparent" : undefined,
//       }}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;

import React from "react";

interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  radius?: string;
  gradient?: boolean;
  outline?: boolean;
  textGradient?: boolean;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width = "auto",
  height = "40px",
  radius = "999px",
  gradient = false,
  outline = false,
  textGradient = false,
  textColor = "#FFFFFF",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  const solidBackground = "#6630C2";

  const gradientBackground =
    "linear-gradient(95.08deg, #8900FF 2.95%, #FF00DD 97.57%)";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${
        outline ? "border border-[#AE5BFD]" : ""
      } ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,

        background: outline
          ? "transparent"
          : gradient
            ? gradientBackground
            : solidBackground,

        color: textGradient ? "transparent" : textColor,

        backgroundImage: textGradient ? gradientBackground : "none",

        backgroundClip: textGradient ? "text" : "border-box",

        WebkitBackgroundClip: textGradient ? "text" : "border-box",

        WebkitTextFillColor: textGradient ? "transparent" : undefined,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
