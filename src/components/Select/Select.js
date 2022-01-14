import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  top: 10px;
  right: 6px;
  position: absolute;
  display: inline-block;
  color: ${COLORS.gray700};
`;

const Select = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 19px;

  &:focus {
    border: 2px solid #4374cb;
    border-radius: 3px;
  }
`;

const MySelect = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        {children}
      </Select>
      <SelectIcon id="chevron-down" />
    </SelectWrapper>
  );
};

export default MySelect;
