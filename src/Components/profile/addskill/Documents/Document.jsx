import React from "react";
import "../../PostNewJobs.css";
import styled from "styled-components";

import Select from "react-dropdown-select";
import { DocumentNames } from "./options";

export default class Document extends React.Component {
  state = {
    Document: [],
  };

  options = () =>
    DocumentNames.map((data) => ({
      label: data.DocumentName,
      value: data.name,
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
          placeholder="Select Document"
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
  padding: 0px;
  color: #555;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;

  :hover {
    background: #f2f2f2;
  }
`;
