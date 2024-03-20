import { IconPinnedFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import gradientDarkBackground from "../public/dark.jpg";
import gradientLightBackground from "../public/light.jpg";

const Pinned = () => {
  return (
    <div className="relative mt-8 mb-12 w-[1100px]  md:w-[400px] overflow-hidden rounded-lg border px-4 py-6">
      <Image
        src={gradientLightBackground}
        alt="Gradient light background"
        className="absolute inset-0 -z-10 rounded-lg opacity-20 dark:hidden"
      />
      <Image
        src={gradientDarkBackground}
        alt="Gradient dark background"
        className="absolute inset-0 -z-10 hidden rounded-lg opacity-60 dark:block"
      />
      <div className="mb-3 flex items-center gap-2">
        <IconPinnedFilled className="rotate-45" />
        Pinned
      </div>
      <div>
      Mastering these questions are well-selected DSA problems provides a strong foundation
       for efficient and scalable code development.
      </div>
    </div>
  );
};

export default Pinned;