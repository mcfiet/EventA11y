import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface InputFieldPasswordProps {
  name: string;
  label: string;
  register: ReturnType<
    typeof import("react-hook-form").useForm<any>
  >["register"];
  error?: string;
  placeholder?: string;
}

export default function InputFieldPassword({
  name,
  label,
  register,
  error,
  placeholder,
}: InputFieldPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((show) => !show);

  return (
    <FormControl variant="standard" error={!!error} fullWidth>
      <InputLabel
        shrink
        htmlFor={name}
        sx={{
          fontSize: 16,
          fontWeight: 500,
          transform: "none",
          position: "static",
        }}
      >
        {label}
      </InputLabel>
      <InputBase
        id={name}
        {...register(name)}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "Passwort verbergen" : "Passwort anzeigen"
              }
              onClick={handleToggle}
              onMouseDown={(e) => e.preventDefault()}
              tabIndex={0}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        inputProps={{
          "aria-describedby": `${name}-helper-text`,
          autoComplete: "current-password",
        }}
        fullWidth
      />
      <FormHelperText id={`${name}-helper-text`}>{error}</FormHelperText>
    </FormControl>
  );
}
