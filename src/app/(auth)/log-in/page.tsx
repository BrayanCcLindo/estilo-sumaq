"use client";
import { signIn, signInWithGoogle } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  //   const handleGoogleSignIn = async () => {
  //     const { data, error } = await supabase.auth.signInWithOAuth({
  //       provider: "google",
  //       options: {
  //         queryParams: {
  //           access_type: "offline",
  //           prompt: "consent",
  //         },
  //         redirectTo: `${window.location.origin}/auth/callback`,
  //       },
  //     });

  //     if (error) {
  //       setError(error.message);
  //     } else if (data.url) {
  //       // Abrir una ventana emergente
  //       const width = 500;
  //       const height = 600;
  //       const left = (window.innerWidth - width) / 2;
  //       const top = (window.innerHeight - height) / 2;
  //       const popup = window.open(
  //         data.url,
  //         "googleSignIn",
  //         `width=${width},height=${height},left=${left},top=${top}`,
  //       );

  //       if (popup) {
  //         const checkPopup = setInterval(() => {
  //           if (popup.closed) {
  //             clearInterval(checkPopup);
  //             router.refresh();
  //           }
  //         }, 1000);
  //       } else {
  //         setError("Popup blocked. Please allow popups for this site.");
  //       }
  //     }
  //   };

  //   const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const email = formData.get("email") as string;
  //     const password = formData.get("password") as string;

  //     const { error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });

  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       router.refresh();
  //     }
  //   };
  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result.error) {
      setError(result.error);
    } else if (result.url) {
      window.location.href = result.url;
    }
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await signIn(formData);
    if (result.error) {
      setError(result.error);
    } else {
      // Redirigir o actualizar el estado de la aplicación
    }
  };

  return (
    <Card className="mx-4 w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold">
          Iniciar Sesión
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" className="w-full" />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Button className="w-full">Ingresar</Button>
          {error && <p className="text-red-500">{error}</p>}
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="text-muted-foreground relative z-10 bg-background px-2">
              O continuar con
            </span>
          </div>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Iniciar sesión con Google
          </Button>
          <p className="text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
              Regístrate
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
