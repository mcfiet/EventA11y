import React from "react";
import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  multiline?: boolean;
  minRows?: number;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default function InputField<T extends FieldValues>({
  name,
  label,
  register,
  error,
  type = "text",
  multiline = false,
  minRows,
  placeholder,
  required = false,
  autoComplete,
}: InputFieldProps<T>) {
  return (
    <FormControl fullWidth error={!!error} required={required} margin="normal">
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
        id={name}
        {...register(name, {
          valueAsNumber: type === "number",
        })}
        type={type}
        multiline={multiline}
        minRows={minRows}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputProps={multiline ? { style: { resize: "vertical" } } : undefined}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
