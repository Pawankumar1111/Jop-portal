import React from "react";

import styled from "styled-components";

import Select from "react-dropdown-select";
import { Skill } from "./options";

export default class Skills extends React.Component {
  state = {
    Skill: [],
  };

  options = () =>
    Skill.map((skill) => ({
      label: skill.Skillname,
      value: skill.name,
    }));

  customItemRenderer = ({ item, itemIndex, props, state, methods }) => (
    <StyledItem>
      <div onClick={() => methods.addItem(item)}>
        <input type="checkbox" checked={methods.isSelected(item)} />{" "}
        {item.label}
      </div>
    </StyledItem>
  );

  render() {
    return (
      <div>
        <Select
          placeholder="Add Skills"
          multi
          itemRenderer={this.customItemRenderer}
          onChange={() => undefined}
          values={[]}
          options={this.options()}
        />
      </div>
    );
  }
}

const StyledItem = styled.div`
  padding: 10px;
  color: #555;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;

  :hover {
    background: #f2f2f2;
  }
`;
