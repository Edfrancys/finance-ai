"use client";

import { useState } from "react";

import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import UpsertTransaction from "@/app/_components/upsert-transaction";
import { Transaction } from "@prisma/client";

interface ButtonEditTransactionProps {
  transaction: Transaction;
}

const ButtonEditTransaction = ({ transaction }: ButtonEditTransactionProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setDialogIsOpen(true)}>
        <PencilIcon />
      </Button>
      <UpsertTransaction
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        transactionId={transaction.id}
      />
    </>
  );
};

export default ButtonEditTransaction;
