import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main className={`h-screen`}>
      <div className="flex h-full">
        <p>Vanakkam da mapla</p>
      </div>
    </main>
  );
}
