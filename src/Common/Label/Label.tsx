import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label = (props: LabelProps) => {
  const { htmlFor, text } = props;
  return <label htmlFor={htmlFor}>{text}</label>;
};

export default Label;
