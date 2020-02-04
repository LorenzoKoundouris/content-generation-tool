import React from "react";
import Select from "react-select";
import IReactSelectItem from "../../interfaces/i-react-select-item";

interface IGenericSelectorProps {
  value: IReactSelectItem | null;
  handleChange: (option: IReactSelectItem) => void;
  options: IReactSelectItem[];
}

function GenericSelector({
  value,
  handleChange,
  options
}: IGenericSelectorProps) {
  return (
    <Select
      value={value}
      // https://github.com/JedWatson/react-select/issues/2902
      onChange={handleChange as any}
      options={options}
    />
  );
}

export default GenericSelector;
