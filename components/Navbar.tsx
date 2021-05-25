import { FC } from "react";
import Image from "next/image";

import { Link } from "components";

const Navbar: FC = (): JSX.Element => {
  return (
    <div className="bg-gray-800 py-6 md:py-8 px-8 md:px-12 my-10 rounded-lg flex items-center">
      <div className="flex-1 flex items-center">
        <Image
          src="/logo.png"
          alt="jsonplaceholder logo"
          width={36}
          height={36}
        />
        <span className="text-xs ml-4 md:text-sm md:flex">jsonPlaceholder</span>
      </div>
      <Link
        label="GitHub"
        href="https://github.com/moharnadreza/jsonPlaceholder"
        title="Repo on GitHub"
      />
    </div>
  );
};

export default Navbar;
