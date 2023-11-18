import React, { MouseEvent } from "react";

import classNames from "classnames";
import Image from "next/image";

interface ButtonProps {
  CTA: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "lg" | "reg";
  style?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  svg?: string;
  svgWidth?: number;
  svgHeight?: number;
}

const Button: React.FC<ButtonProps> = ({
  CTA,
  type = "button",
  onClick,
  size = "reg",
  style = "primary",
  disabled = false,
  svg,
  svgHeight,
  svgWidth,
}) => {
  const styleMap: { [key: string]: string } = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    btnDisabled: "btn-disabled",
    tertiary: "btn-tertiary btn-primary",
  };
  const sizeMap: { [key: string]: string } = {
    sm: "btn-sm",
    lg: "btn-lg",
    reg: "btn-reg",
  };

  const styleClasses = classNames(
    sizeMap[size],
    styleMap[style],
    "position-relative cursor-pointer width-100"
  );

  return (
    <button
      className={styleClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {svg && (
        <Image
          src={svg}
          width={svgWidth}
          height={svgHeight}
          alt={CTA}
          className={`d-block btn-svg-${size}`}
        />
      )}
      {CTA}
    </button>
  );
};

export default Button;
