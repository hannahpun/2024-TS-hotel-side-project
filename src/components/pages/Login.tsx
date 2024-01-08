import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "@/types/FormValue";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";

function Login() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      pw: "",
      rememberMe: true,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="mb-4">
        <p className="h6 text-primary">享樂酒店，誠摯歡迎</p>
        <h1>立即開始旅程</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          displayName="電子信箱"
          errors={errors}
          register={register}
          rules={{
            required: "必填欄位",
            pattern: { value: /^\S+@\S+$/i, message: "格式不對" },
          }}
          type="text"
        />
        <Input
          name="pw"
          displayName="密碼"
          errors={errors}
          register={register}
          rules={{ required: "必填欄位" }}
          type="password"
        />
        <div className="d-flex justify-content-between">
          <div className="form-check ">
            <label className="form-check-label" htmlFor="RememberMe">
              記住帳號
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="RememberMe"
              value="true"
              {...register("rememberMe")}
            />
          </div>
          <p className="text-primary  text-end">忘記密碼</p>
        </div>

        <Button displayName="會員登入" type="submit" />
      </form>
      <div className="col">
        <p>
          沒有會員嗎？ <a className="text-primary">前往註冊</a>
        </p>
      </div>
    </>
  );
}

export default Login;
