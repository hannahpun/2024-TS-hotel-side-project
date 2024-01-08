import { UseFormRegister, FieldErrors } from "react-hook-form";
import { LoginFormValues } from "@/types/FormValue";

interface IInput {
  name: keyof LoginFormValues;
  displayName: string;
  errors: FieldErrors<LoginFormValues>;
  register: UseFormRegister<LoginFormValues>;
  rules: object;
  type: string;
}

const Input = ({
  name,
  displayName,
  errors,
  register,
  rules,
  type,
}: IInput) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {displayName}
    </label>
    <input
      type={type}
      {...register(`${name}`, rules)}
      className={`form-control ${errors[name] && "is-invalid"}`}
      id={name}
    />
    <div className="invalid-feedback">{errors[name]?.message}</div>
  </div>
);

export default Input;
