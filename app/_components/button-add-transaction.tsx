"use client";

import { useState } from "react";
import UpsertTransaction from "./upsert-transaction";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const ButtonAddTransaction = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogIsOpen(true)}>
        Adicionar Transações
        <ArrowDownUpIcon className="mr-1" />
      </Button>
      <UpsertTransaction isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
  );
};

export default ButtonAddTransaction;
