import Image from "next/image";
import { Button } from "../_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/login");

  return (
    <div className="flex h-full">
      <div className="grid h-12 w-full grid-cols-3 items-center bg-zinc-900 px-20">
        <Image alt="Logo" src="/logo.svg" width={174} height={40} />
        <div className="flex gap-4">
          <Button variant="outline">Home</Button>
          <Button variant="outline">Transações</Button>
          <Button variant="outline">Históricos</Button>
        </div>
        <div className="text-right">
          <UserButton showName />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
