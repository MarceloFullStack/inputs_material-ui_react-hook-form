import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale"; 
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
const DATE_FORMAT = "dd-MMMM-yyyy";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <KeyboardDatePicker
            fullWidth
            variant="inline"
            defaultValue={new Date()}
            id={`date-${Math.random()}`}
            placeholder="ex: DD/MM/AAAA"
            label={label}
            rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            autoOk
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            format={DATE_FORMAT}
            {...field}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};
