import React from "react";
import styled from "styled-components";

export const StyledText = styled(({ children, ...rest }) => (
  <p {...rest}>{children}</p>
))``;
