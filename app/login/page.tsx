"use client";

import InputField from "@/components/InputFieldLogin";
import { LoginFormValues, loginSchema } from "@/lib/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data: LoginFormValues) => {
    if (typeof window === "undefined") return;

    const storedUsers = JSON.parse(
      localStorage.getItem("users") || "[]",
    ) as Array<{ username: string; password: string }>;
    const user = storedUsers.find(
      (u) => u.username === data.username && u.password === data.password,
    );

    if (user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ username: user.username }),
      );
      enqueueSnackbar("Erfolgreich eingeloggt", { variant: "success" });
      router.push("/");
    } else {
      setError("password", {
        type: "manual",
        message: "Ungültige Zugangsdaten",
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component="h2" variant="h2">
        Login
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          width: { xs: "100%", md: "70%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 4,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "16px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06)",
        }}
      >
        <InputField
          name="username"
          label="Benutzername*"
          register={register}
          error={errors.username?.message}
          placeholder="Dein Benutzername"
        />

        <InputField
          name="password"
          label="Passwort*"
          register={register}
          error={errors.password?.message}
          type="password"
        />

        <Link href="/registration">Kein Account? Jetzt registrieren.</Link>

        <Button type="submit" disabled={isSubmitting} sx={{ ml: "auto" }}>
          Einloggen
        </Button>
      </Box>
    </Box>
  );
}
