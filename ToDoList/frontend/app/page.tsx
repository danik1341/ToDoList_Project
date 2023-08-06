"use client";

import { Cardfrom } from "@/components/Cardform";
import { useUserContext } from "@/lib/Context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { username } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (username) {
      router.push(`/todolist/${username}`);
    }
  }, [username, router]);

  return (
    <main className="flex flex-col h-screen p-5 xl:p-10 xl:items-center">
      <Cardfrom />
    </main>
  );
}
