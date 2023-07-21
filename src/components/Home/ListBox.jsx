import React from "react";
import SingleList from "./SingleList";

const ListBox = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mx-auto">
      <div className="lg:w-1/2 md:w-2/3 w-full md:space-y-5 space-y-4 text-center">
        <SingleList title="resuscitation" />
        <SingleList title="cardiac arrhythmias" />
        <SingleList title="hyperkalemia" />
        <SingleList title="hypoglycemia" />
        <SingleList title="anaphylaxis" />
      </div>
    </div>
  );
};

export default ListBox;
