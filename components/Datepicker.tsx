import { EventFormValues } from "@/lib/eventValidation";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useForm, Controller } from "react-hook-form";

type DateKeys = "startDate" | "endDate";
interface DatePickerFieldProps {
  name: DateKeys;
  label: string;
  control: ReturnType<typeof useForm<EventFormValues>>["control"];
  error?: string;
}

export default function DatePickerField({
  name,
  label,
  control,
  error,
}: DatePickerFieldProps) {
  return (
    <FormControl variant="standard" error={!!error} sx={{ flex: 1 }}>
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
      <Controller<EventFormValues, DateKeys>
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={field.value ? dayjs(field.value as Date) : null}
            onChange={(newVal) => field.onChange(newVal?.toDate() ?? null)}
            slotProps={{
              textField: {
                id: name,
                sx: {
                  width: "100%",
                  ".MuiPickersOutlinedInput-notchedOutline": {
                    borderRadius: "10px",
                    border: (theme) =>
                      `2px solid ${theme.palette.custom.black_54}`,
                    p: 2,
                  },
                },
              },
              openPickerButton: {
                sx: { color: (theme) => theme.palette.primary.main },
              },
            }}
          />
        )}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
