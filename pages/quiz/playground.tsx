import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function Quiz() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center quiz-playground p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-xl">Question actual description goes here</p>
          </CardTitle>
          <CardDescription>
            <p className="font-semibold">1 of 5 Questions</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="mb-4">
              <Button variant={"success"} className="w-full h-12">
                Option 1
              </Button>
            </li>
            <li className="mb-4">
              <Button variant={"destructive"} className="w-full h-12">
                Option 2
              </Button>
            </li>
            <li className="mb-4">
              <Button variant={"outline"} className="w-full h-12">
                Option 3
              </Button>
            </li>
            <li>
              <Button variant={"outline"} className="w-full h-12">
                Option 4
              </Button>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-1/4 me-3 h-12">Prev</Button>
          <Button
            className="w-full h-12"
            onClick={() => router.push("/quiz/result")}
          >
            Save & Go Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
