import { useState } from "react";
import { Dropdown } from "reactjs-dropdown-component";

const Experiance = () => {
  const [qualification, setqualification] = useState("");
  const onChangehandler = () => {
    console.log();
  };

  const Exp = [
    {
      label: "0-1(Year)",
      value: "0-1(Year)",
    },
    {
      label: "1-3(Year)",
      value: "1-3(Year)",
    },
    {
      label: "3-5(Year)",
      value: " 3-5(Year)",
    },

    {
      label: "5-8(Year)",
      value: "5-8(Year)",
    },
    {
      label: "8-10(Year)",
      value: " 8-10(Year)",
    },
    {
      label: "10 and Above",
      value: " 10 and Above",
    },
  ];

  return (
    <>
      <Dropdown
        name="Choose in Year"
        title="Choose in Year"
        list={Exp}
        onChange={onChangehandler}
      />
    </>
  );
};
export default Experiance;
