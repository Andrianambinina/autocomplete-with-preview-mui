import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const options = ["Option 1", "Option 2"];

type Props = {
  value: any;
  label?: string;
  onChange: (value: any) => void;
  options?: any;
};

const AutoCompleteWithPreviewInput = ({
  value,
  onChange,
  label,
  options = []
}: Props) => {
  // const [value, setValue] = React.useState<string | null>(options[0]);
  // const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.id === option.id}
        value={value}
        onChange={(event: any, newValue) => {
          onChange(newValue);
          // console.log("newValue------", newValue.value);
        }}
        // inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option.label || ""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      <div>{`value: ${value !== null ? `'${value.label}'` : "null"}`}</div>
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}
    </div>
  );
};

export default AutoCompleteWithPreviewInput;
