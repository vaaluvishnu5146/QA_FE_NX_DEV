import Image from "next/image";
import { Badge } from "./ui/badge";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={`h-screen`}>
        <div className="flex w-full h-full">
          <div className="quiz w-full">
            <div className="py-4 px-3 bg-slate-50 header">
              <div className="flex quizDetails">
                <div className="me-5">
                  <Image
                    src={"/Puzzle.webp"}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="me-5">
                  <p className="text-xs tracking-[.3em]">CHALLENGE</p>
                  <span className="font-semibold">
                    Quiz Application Name goes here
                  </span>
                </div>
                <div className="me-5 hidden sm:hidden md:block lg:block xl:block">
                  <p className="text-xs tracking-[.3em]">MODE</p>
                  <Badge variant="success">Practice</Badge>
                </div>
                <div>
                  <p className="text-xs tracking-[.3em]">TIME</p>
                  <p>00 mins</p>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
