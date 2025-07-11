import { ContactFormValues } from "@/lib/contactValidation";
import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface InputFieldProps {
  name: keyof ContactFormValues;
  label: string;
  register: ReturnType<typeof useForm<ContactFormValues>>["register"];
  error?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  multiline?: boolean;
  minRows?: number;
  placeholder?: string;
  autocomplete?: string;
}

export default function InputField({
  name,
  label,
  register,
  error,
  type = "text",
  multiline = false,
  minRows,
  placeholder,
  autocomplete,
}: InputFieldProps) {
  return (
    <FormControl variant="standard" error={!!error} fullWidth>
      <InputLabel
        shrink
        htmlFor={String(name)}
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
        id={String(name)}
        {...register(name, { valueAsNumber: type === "number" })}
        type={type}
        multiline={multiline}
        minRows={minRows}
        placeholder={placeholder}
        inputProps={multiline ? { style: { resize: "vertical" } } : undefined}
        autoComplete={autocomplete}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
