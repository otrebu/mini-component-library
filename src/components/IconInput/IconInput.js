import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

function getInputSizing(size) {
  switch (size) {
    case "small":
      return css`
        padding: 4px 24px;
        font-family: Roboto;
        font-size: ${14 / 16}rem;
        line-height: 16px;
        border-bottom: solid 1px ${COLORS.black};
      `;
    case "large":
      return css`
        padding: 8px 36px;
        font-family: Roboto;
        font-size: ${18 / 16}rem;
        line-height: 21px;
        border-bottom: solid 2px ${COLORS.black};
      `;
    default:
      throw new Error("No valid size");
  }
}

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width + "px"};
`;

const Input = styled.input`
  width: 100%;
  appearance: none;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  ${(props) => getInputSizing(props.size)}
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:focus {
    outline-offset: 2px;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

function getIconSize(size) {
  switch (size) {
    case "small":
      return 16;
    case "large":
      return 24;
    default:
      throw new Error("No valid size");
  }
}

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: ${COLORS.gray700};
  width: ${(props) => getIconSize(props.size) + "px"};
  height: ${(props) => getIconSize(props.size) + "px"};
  ${Input}:hover + & {
    color: ${COLORS.black};
  }
  pointer-events: none;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper size={size} width={width}>
      <Input placeholder={placeholder} size={size} />
      <IconWrapper size={size}>
        <Icon id={icon} size={getIconSize(size)} strokeWidth={1} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
