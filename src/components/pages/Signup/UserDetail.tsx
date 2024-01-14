import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import { SignupFromData } from "@/types/form";

type UserDetailFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
type UserDetail = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData?: SignupFromData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

function UserDetail({ setStep, formData, setFormData }: UserDetail) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserDetailFormValues>();

  const onSubmit = async (data: UserDetailFormValues) => {
    setStep(2);
    setFormData({ ...formData, email: data.email, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-5">
      <Input
        name="email"
        placeholder="hello@example.com"
        displayName="電子信箱"
        errors={errors}
        register={register}
        rules={{
          required: "必填欄位",
          pattern: { value: /^\S+@\S+$/i, message: "格式不對" },
        }}
      />
      <Input
        name="password"
        placeholder="請輸入密碼"
        displayName="密碼"
        errors={errors}
        register={register}
        rules={{ required: "必填欄位" }}
        type="password"
      />

      <Input
        name="confirmPassword"
        placeholder="請再輸入一次密碼"
        displayName="確認密碼"
        errors={errors}
        register={register}
        rules={{
          required: "必填欄位",
          validate: (val: string) => {
            if (watch("password") != val) {
              return "密碼不符合";
            }
          },
        }}
      />
      <Button displayName="下一步" type="submit" />
    </form>
  );
}

export default UserDetail;
