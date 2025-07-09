import { BookingFormValues } from "@/lib/bookingValidation";
import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface InputFieldBookingProps {
  name: keyof BookingFormValues;
  label: string;
  register: UseFormRegister<BookingFormValues>;
  error?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  multiline?: boolean;
  minRows?: number;
  placeholder?: string;
}

export default function InputFieldBooking({
  name,
  label,
  register,
  error,
  type = "text",
  multiline = false,
  minRows,
  placeholder,
}: InputFieldBookingProps) {
  return (
    <FormControl variant="standard" error={!!error}>
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
