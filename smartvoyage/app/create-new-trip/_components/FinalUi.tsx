import { Button } from "@/components/ui/button";
import { Globe2 } from "lucide-react";
import React from "react";

function FinalUi({ viewTrip, disable }: any) {
  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-2xl border">
      <Globe2 className="text-primary text-4xl animate-bounce" />
      <h2 className="mt-3 text-lg font-semibold text-primary">
        ✈️ Planning your dream trip...
      </h2>
      <p>
        Gathering best destinations, activities, and travel details for you.
      </p>
      <Button disabled={disable} onClick={viewTrip} className="mt-2 w-full">
        View Trip
      </Button>
    </div>
  );
}

export default FinalUi;
