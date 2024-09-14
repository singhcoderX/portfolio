import React from "react";
import Image from "next/image";

const WorkInProgress = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <Image
        src={"workInProgress.png"}
        alt=""
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  );
};

export default WorkInProgress;
