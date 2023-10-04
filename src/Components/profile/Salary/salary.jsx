import { useState } from "react";
import { Dropdown } from "reactjs-dropdown-component";

const Salary = () => {
  const [qualification, setqualification] = useState("");
  const onChangehandler = () => {
    console.log();
  };

  const sal = [
    {
      label: "0-10K Per Month",
      value: "0-10K Per Month",
    },
    {
      label: "10-20K Per Month",
      value: "10-20K Per Month",
    },
    {
      label: "20-30K Per Month",
      value: "20-30K Per Month",
    },

    {
      label: "30-40K Per Month",
      value: "30-40K Per Month",
    },
    {
      label: "40-50K Per Month",
      value: " 40-50K Per Month",
    },
    {
      label: "50K & Above",
      value: "50k & Above",
    },
  ];

  return (
    <>
      <Dropdown
        name="Salary per Month"
        title="Salary per Month"
        list={sal}
        onChange={onChangehandler}
      />
    </>
  );
};
export default Salary;
