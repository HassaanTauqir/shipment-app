import React, { FunctionComponent, Dispatch, SetStateAction } from "react";

interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}

const SearchBar: FunctionComponent<Props> = ({ setValue, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      placeholder="Enter Search ID"
    />
  );
};

export default SearchBar;
