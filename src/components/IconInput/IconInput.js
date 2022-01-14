import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

// width not really working as expected
const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
`;

const Input = styled.input`
  padding: 4px 24px;
  font-family: Roboto;
  font-size: ${14 / 16}rem;
  line-height: 16px;
  appearance: none;
  border: none;
  border-bottom: solid 1px ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

// Sizing needs to be customisable!
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  color: ${COLORS.gray700};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper size={size} width={width}>
      <IconWrapper>
        <Icon id={icon} size={16} strokeWidth={1} />
      </IconWrapper>
      <Input placeholder={placeholder} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
