import classNames from "classnames";

type Props = {
  label: string;
  href: string;
  title?: string;
  className?: string;
  variant?: "button" | "text";
};

const Link = ({
  label,
  href,
  className = "",
  title = label,
  variant = "text",
}: Props): JSX.Element => {
  const classes = classNames(
    className,
    "text-xs md:text-sm text-white transition-colors",
    {
      "hover:underline": variant === "text",
      "bg-gray-800 rounded-md px-8 py-4 text-xs md:text-sm select-none":
        variant === "button",
      "hover:bg-gray-700": variant === "button",
      "focus:ring-8 focus:ring-opacity-30 focus:ring-gray-700 focus:outline-none":
        variant === "button",
    }
  );

  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
      className={classes}
    >
      {label}
    </a>
  );
};

export default Link;
