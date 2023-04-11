import { CSSProperties } from "react";
import "./button.css";

export enum Sizes {
  "small" = "small",
  "medium" = "medium",
  "large" = "large",
}

type IProps = {
  primary?: boolean;
  size: Sizes;
  label: string;
  onClick: () => void;
  backgroundColor?: CSSProperties["backgroundColor"];
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: IProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: undefined,
  primary: false,
  size: Sizes.medium,
  onClick: undefined,
};

export default Button;
export { Button };
