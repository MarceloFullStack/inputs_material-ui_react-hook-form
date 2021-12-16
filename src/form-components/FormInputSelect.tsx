import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FormInputProps } from "./FormInputProps";
import Autocomplete from '@material-ui/lab/Autocomplete';

export const FormInputSelect = ({ name, control, label }: FormInputProps) => {
  const {formState: { errors }
  } = useForm();
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          onChange={(event: any, item: any) => {
            onChange(item);
          }}
          value={value}
          options={selectOptions}
          getOptionLabel={(option: any) => option.name}
          getOptionSelected={(option: any, value: any) =>
            value === undefined || value === "" || option.id === value.id
          }
          renderInput={(params: any) => (
            <TextField
              {...params}
              label={label}
              defaultValue={''}
              error={!!errors?.item}
              helperText={errors?.item && "item required"}
              value={value}
              // required
              style={{ width: "100%" }}
            />
          )}
        />
      )}
    />)
}

const selectOptions = [
  { name: 'funcionario-1', id: 1 },
  { name: 'funcionario-2', id: 2 },
  { name: 'funcionario-3', id: 3 },
  { name: 'funcionario-4', id: 4 },
  { name: 'funcionario-5', id: 5 },
  { name: "funcionario-6", id: 6 },
  { name: "funcionario-7", id: 7 },
  { name: "funcionario-8", id: 8 },

];