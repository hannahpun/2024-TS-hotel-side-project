interface IButton extends React.ComponentProps<"button"> {}

const Button = ({ children, ...restProps }: IButton) => (
  <div className="d-grid mt-10 mb-4">
    <button {...restProps} className="btn btn-primary">
      {children}
    </button>
  </div>
);

export default Button;
