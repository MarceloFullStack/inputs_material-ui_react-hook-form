import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FormInputProps } from "./FormInputProps";
import { FormControl, FormControlLabel, FormLabel, Switch } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';

export const FormInputSingleSwitch = ({ name, control, label }: FormInputProps) => {
  return (
    <FormGroup row>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}
          <Controller
            control={control}
            name='muiSwitch'
            defaultValue={false}
            render={({ field }) => (
              <>
                <Switch {...field} />
              </>
            )} />
        </FormLabel>
      </FormControl>
    </FormGroup>
  );
};
