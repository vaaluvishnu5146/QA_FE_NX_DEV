import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Result() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="mb-3">
        <Image src="/trophyicon.png" width={150} height={150} alt="Trophy" />
      </div>
      <h1 className="text-2xl font-black mb-1">Hurrah!!</h1>
      <p className="mb-5">Congratulations you made it to the trophy</p>
      <div className="flex flex-col">
        <Button className="mb-2" variant={"outline"}>
          Verify response
        </Button>
        <Button className="" variant={"default"}>
          Retry
        </Button>
      </div>
    </div>
  );
}
