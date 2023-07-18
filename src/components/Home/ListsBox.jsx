import React from "react";
import SingleList from "./SingleList";

const ListsBox = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mx-auto">
      <div className="w-1/2 space-y-5 text-center">
        <SingleList title="Quick tools" />
        <SingleList title="physiological features" />
        <SingleList title="preoperative" />
        <SingleList title="emergency" />
        <SingleList title="intraoperatively" />

        <button className="yellow_button">Add element</button>
      </div>
    </div>
  );
};

export default ListsBox;
