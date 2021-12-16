import { Button, Paper, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDate } from "./form-components/FormInputDate";
import { FormInputSlider } from "./form-components/FormInputSlider";
import { FormInputRadio } from "./form-components/FormInputRadio";
import { FormInputSingleCheckbox } from "./form-components/FormInputSingleCheckbox";
import { FormInputSelect } from "./form-components/FormInputSelect";
import { FormInputSingleSwitch } from "./form-components/FormInputSingleSwitch";

interface IFormInput {
  textValue: string;
  // radioValue: string;
  // checkboxValue: string[];
  // dateValue: Date;
  // dropdownValue: string;
  // sliderValue: number;
}

const defaultValues = {
  // textValue: "",
  // radioValue: "",
  // checkboxValue: [],
  // dateValue: new Date(),
  // dropdownValue: "",
  // sliderValue: 0,
  // select: {name: 'funcionario-3', id: 3}
};
export const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Demonstração de formulário componentizado</Typography>
      {/* <FormInputSelect name="select" label={"Select pesquisavel"} control={control}/> */}
      {/* <FormInputSingleCheckbox name="single" label="Single checkbox" control={control} setValue={setValue}/> */}
      <FormInputSingleSwitch name="muiSwitch" label="Single Switch" control={control} />
      <FormInputText name="textValue" control={control} label="Text Input" />
        <FormInputRadio
          name={"radioValue"}
          control={control}
          label={"Radio Input"}
        />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <FormInputDate name="dateValue" control={control} label="Date Input" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}
      />
      <FormInputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        label={"Slider Input"}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        enviar{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Resetar{" "}
      </Button>
    </Paper>
  );
};
