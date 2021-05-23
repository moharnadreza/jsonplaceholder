import { FC } from "react";
import classNames from "classnames";

interface Props {
  label: string;
  href: string;
  rel?: string;
  target?: string;
  title?: string;
  className?: string;
  variant?: "button" | "text";
}

const Link: FC<Props> = ({
  label,
  href,
  className = "",
  title = "",
  rel = "noreferrer",
  target = "_blank",
  variant = "text",
}): JSX.Element => {
  const classes = classNames(className, {
    "text-xs md:text-sm text-white transition-colors": true,
    "hover:underline": variant === "text",
    "bg-gray-800 rounded-md px-8 py-4 text-xs md:text-sm select-none":
      variant === "button",
    "hover:bg-gray-700": variant === "button",
    "focus:ring-8 focus:ring-opacity-30 focus:ring-gray-700 focus:outline-none":
      variant === "button",
  });

  return (
    <a href={href} rel={rel} target={target} title={title} className={classes}>
      {label}
    </a>
  );
};

export default Link;
