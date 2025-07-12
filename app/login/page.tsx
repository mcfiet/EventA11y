"use client";

import InputField from "@/components/forms/InputField";
import { LoginFormValues, loginSchema } from "@/lib/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";
import { visuallyHidden } from "@base-ui-components/react/utils";
import InputFieldPassword from "@/components/forms/InputFieldPassword";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
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
      login({ username: user.username, email: "" });
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
    <>
      <Typography component="h1" sx={visuallyHidden}>
        Account erstellen
      </Typography>
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
          <InputField<LoginFormValues>
            name="username"
            label="Benutzername"
            register={register}
            error={errors.username?.message}
            placeholder="Dein Benutzername"
            required
          />

          <InputFieldPassword
            name="password"
            label="Passwort"
            register={register}
            error={errors.password?.message}
            placeholder="Dein super sicheres Passwort"
            required
          />

          <Link href="/registration">Kein Account? Jetzt registrieren.</Link>

          <Button type="submit" disabled={isSubmitting} sx={{ ml: "auto" }}>
            Einloggen
          </Button>
        </Box>
      </Box>
    </>
  );
}
