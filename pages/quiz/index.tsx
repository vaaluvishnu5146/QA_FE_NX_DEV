import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <div className="w-full quiz">
      <div className="quizContent px-10 py-10">
        <h1 className="text-3xl mb-3 text-gray-600">Instructions</h1>
        <ol className="mb-5 text-gray-400">
          <li>1. Results will be revealed at the end of the challenge</li>
          <li>
            2. Do not move to the next problem until all approaches and concepts
            are clear.
          </li>
        </ol>
        <Button onClick={() => router.push("/quiz/playground")}>
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
