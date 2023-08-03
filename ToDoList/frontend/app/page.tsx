import { Cardfrom } from "@/components/Cardform";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-5 xl:p-10 xl:items-center">
      <Cardfrom />
    </main>
  );
}
