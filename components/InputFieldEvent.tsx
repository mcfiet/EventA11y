import { EventFormValues } from "@/lib/eventValidation";
import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface InputFieldProps {
  name: keyof EventFormValues;
  label: string;
  register: ReturnType<typeof useForm<EventFormValues>>["register"];
  error?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  multiline?: boolean;
  minRows?: number;
  placeholder?: string;
  required?: boolean;
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
  required,
}: InputFieldProps) {
  return (
    <FormControl
      required={required}
      variant="standard"
      error={!!error}
      fullWidth
    >
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
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
