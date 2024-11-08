import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[500px] flex-col justify-center p-8">
        <Image
          className="mb-8"
          src="/logo.svg"
          height={39}
          width={173}
          alt="Logo Finance"
        />
        <h1 className="mb-3 text-3xl">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8 text-justify">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer Login ou Criar Conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/dashboard.png"
          alt="image dashboard"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
