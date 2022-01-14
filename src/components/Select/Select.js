import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid #4374cb;
  }
`;

const SelectIcon = styled(Icon)`
  top: 10px;
  right: 6px;
  position: absolute;
  display: inline-block;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const DisplayValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 19px;
`;

const Select = styled.select`
  appearance: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MySelect = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        {children}
      </Select>
      <SelectIcon id="chevron-down" size={24} strokeWidth={1} />
      <DisplayValue>{displayedValue}</DisplayValue>
    </SelectWrapper>
  );
};

export default MySelect;
