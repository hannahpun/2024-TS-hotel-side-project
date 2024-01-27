import {
  UseFormRegister,
  Path,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

interface IInput<T extends FieldValues> extends React.ComponentProps<"input"> {
  name: Path<T>;
  placeholder?: string;
  displayName?: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  rules?: object;
  type?: string;
}
const Input = <T extends FieldValues>({
  name,
  placeholder,
  displayName,
  errors,
  register,
  rules,
  type = "text",
  ...props
}: IInput<T>) => (
  <div>
    {displayName && (
      <label htmlFor={name} className="form-label">
        {displayName}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, rules)}
      className={`form-control ${props?.className} ${
        errors[name] && "is-invalid"
      }`}
      id={name}
      {...props}
    />
    <div className="invalid-feedback">{errors[name]?.message as string}</div>
  </div>
);

export default Input;
