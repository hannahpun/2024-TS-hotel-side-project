import { UseFormSignup, Path, FieldValues, FieldErrors } from "react-hook-form";

interface IInputSelect<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormSignup<T>;
  rules?: object;
  defaultName?: string;
  render: any;
}
const InputSelect = <T extends FieldValues>({
  name,
  errors,
  register,
  rules,
  defaultName = "",
  render,
}: IInputSelect<T>) => {
  return (
    <>
      <select
        id={name}
        className={`form-select ${errors[name] && "is-invalid"}`}
        {...register(name, rules)}
      >
        {defaultName && <option value="">{defaultName}</option>}
        {render}
      </select>

      <div className="invalid-feedback">{errors[name]?.message as string}</div>
    </>
  );
};

export default InputSelect;
