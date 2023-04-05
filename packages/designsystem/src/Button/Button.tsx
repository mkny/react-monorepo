type Props = {
  label: string;
};

/**
 *
 */
function Button(props: Props) {
  const { label } = props;
  return <div>{label}</div>;
}

export default Button;
export { Button };
