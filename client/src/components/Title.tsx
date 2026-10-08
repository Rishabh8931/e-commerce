import React from "react";

export type Props = {
  text1: string;
  text2: string;
};

const Title = ({ text1, text2 }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-2">
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium "> {text2}</span>
      </p>

      <p className="w-8 h-[1px] sm:w-12 sh:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
