"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { onSubmit } from "@/actions/contactForm";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<contactType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const handleForm = async (data: contactType) => {
    try {
      setIsSubmitting(true);
      const result = await onSubmit(data);
      setShowSuccess(result.success);
      setShowMessage(result.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleForm)}
        method="POST"
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name">Nombre</label>
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: "El nombre es requerido",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              }}
              render={({ field }) => (
                <div>
                  <Input {...field} id="first-name" />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Apellido</label>
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: "El apellido es requerido",
                minLength: {
                  value: 2,
                  message: "El apellido debe tener al menos 2 caracteres",
                },
              }}
              render={({ field }) => (
                <div>
                  <Input {...field} id="last-name" />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Correo</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            }}
            render={({ field }) => (
              <div>
                <Input {...field} id="email" type="email" />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message">Mensaje</label>
          <Controller
            name="message"
            control={control}
            rules={{
              required: "El mensaje es requerido",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            }}
            render={({ field }) => (
              <div>
                <Textarea {...field} id="message" />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
      {showSuccess && showMessage !== "" && (
        <Alert className="flex items-center border-green-500 bg-green-100 text-green-800">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>{showMessage}</AlertDescription>
        </Alert>
      )}
      {!showSuccess && showMessage !== "" && (
        <Alert className="border-red-500 bg-red-100 text-red-800">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{showMessage}</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default ContactForm;
