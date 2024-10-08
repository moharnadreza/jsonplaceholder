import Link from "components/Link";
import Image from "next/image";
import logoPic from "../public/logo.png";

const Navbar = (): JSX.Element => {
  return (
    <div className="bg-gray-800 py-6 md:py-8 px-4 sm:px-8 md:px-12 my-10 rounded-lg flex items-center">
      <div className="flex-1 flex items-center">
        <Image
          src={logoPic}
          width={32}
          height={32}
          alt="jsonplaceholder logo"
          className="select-none"
        />
        <span className="text-xs ml-4 md:text-sm md:flex">jsonplaceholder</span>
      </div>
      <Link
        label="GitHub"
        href="https://github.com/moharnadreza/jsonplaceholder"
        title="Repo on GitHub"
      />
    </div>
  );
};

export default Navbar;
