import React from "react";
import ChatBox from "./_components/ChatBox";

function CreateNewTrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div>
        <ChatBox />
      </div>
      <div>Map and trip Plan to Display</div>
    </div>
  );
}

export default CreateNewTrip;
