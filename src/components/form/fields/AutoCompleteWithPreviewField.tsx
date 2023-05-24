import { FormHelperText, Stack } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

import AutoCompleteWithPreviewInput from "../inputs/AutoCompleteWithPreviewInput";

type Props = {
  name: string;
  label?: string;
  options?: any;
};

const AutoCompleteWithPreviewField = ({ name, label, options = [] }: Props) => {
  // hooks
  const {
    control,
    formState: { errors }
  } = useFormContext();

  console.log(errors);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { value, onChange } }: any): any => (
        <Stack>
          <AutoCompleteWithPreviewInput
            value={value}
            onChange={onChange}
            options={options}
            label={label}
          />
          {errors[name] && (
            <FormHelperText error>
              {(errors as any)[name].message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default AutoCompleteWithPreviewField;
