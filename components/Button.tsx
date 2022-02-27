import classNames from "classnames";
import type { ReactChild } from "react";

type Props = {
  onClick: () => void;
  className?: string;
  title?: string;
  children: ReactChild;
  size?: "medium" | "small";
  variant?: "primary" | "secondary" | "text";
};

const Button = ({
  children,
  onClick,
  className = "",
  title = "",
  size = "medium",
  variant = "primary",
}: Props): JSX.Element => {
  const classes = classNames(
    className,
    "focus:outline-none text-white transition-colors rounded-md",
    {
      "bg-gray-800 hover:bg-gray-700 focus:ring-gray-700":
        variant === "primary",
      "bg-gray-700 hover:bg-gray-600 focus:ring-gray-600":
        variant === "secondary",
      "bg-transparent": variant === "text",
      "px-8 py-4 text-xs md:text-sm focus:ring-8 focus:ring-opacity-30":
        size === "medium" && variant !== "text",
      "px-4 py-2 text-xs focus:ring-4 focus:ring-opacity-30":
        size === "small" && variant !== "text",
    }
  );

  return (
    <button type="button" title={title} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
