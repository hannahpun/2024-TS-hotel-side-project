import { UseFormSignup, Path, FieldValues, FieldErrors } from "react-hook-form";

interface IInput<T extends FieldValues> {
  name: Path<T>;
  placeholder: string;
  displayName?: string;
  errors: FieldErrors<T>;
  register: UseFormSignup<T>;
  rules: object;
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
      className={`form-control ${errors[name] && "is-invalid"}`}
      id={name}
    />
    <div className="invalid-feedback">{errors[name]?.message as string}</div>
  </div>
);

export default Input;
