import Image from "next/image";
import { Button } from "../_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./transacoes/_columns";

const DashboardPage = async () => {
  const { userId } = auth();

  const transactions = await db.transaction.findMany({});
  console.log(transactions);

  if (!userId) redirect("/login");

  return (
    <div className="flex h-full flex-col">
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
      <div className="flex flex-col space-y-6 px-20 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <Button>
            Adicionar Transações
            <ArrowDownUpIcon className="mr-1" />
          </Button>
        </div>

        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default DashboardPage;
