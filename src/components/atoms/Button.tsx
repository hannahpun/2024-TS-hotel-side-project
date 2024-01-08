interface IButton extends React.ComponentProps<"button"> {
  displayName: string;
}

const Button = ({ displayName, ...restProps }: IButton) => (
  <div className="d-grid mt-4 mb-4">
    <button {...restProps} className="btn btn-primary">
      {displayName}
    </button>
  </div>
);

export default Button;
