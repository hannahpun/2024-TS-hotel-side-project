import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Maybe } from "@/types/helpers";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import { useState } from "react";

type ResetPWFormValues = {
  email: string;
  newPassword: string;
};

function ResetPW() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPWFormValues>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
  });

  const navigate = useNavigate();
  const [resErrorMsg, setResErrorMsg] = useState<Maybe<string>>(null);
  const [hasSubmit, setHasSubmit] = useState(false);

  const onSubmit = async (data: ResetPWFormValues) => {
    setHasSubmit(true);
    const response = await fetch("/api/v1/user/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, code: "0Zvjde" }),
    });
    const jsonData = await response.json();
    // if error happen
    if (!jsonData.status) {
      setResErrorMsg(jsonData.message);
      setHasSubmit(false);
    }
    // success
    // localStorage.setItem("token", jsonData.token);
    // navigate("/user");
  };

  return (
    <div className="login-bg">
      <div className="container">
        <div className="d-flex  align-items-center">
          <div className="col-12 col-md-4 offset-md-7">
            <div className="mb-4">
              <p className="h6 text-primary">享樂酒店，誠摯歡迎</p>
              <h1>忘記密碼</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <Input
                name="email"
                displayName="電子信箱"
                placeholder="請輸入信箱"
                errors={errors}
                register={register}
                rules={{
                  required: "必填欄位",
                  pattern: { value: /^\S+@\S+$/i, message: "格式不對" },
                }}
                type="text"
              />
              <Input
                name="newPassword"
                placeholder="請輸入新密碼"
                displayName="新密碼"
                errors={errors}
                register={register}
                rules={{ required: "必填欄位" }}
                type="password"
              />

              {resErrorMsg && <p className="text-danger">{resErrorMsg}</p>}
              <Button type="submit">
                {!hasSubmit ? (
                  `會員登入`
                ) : (
                  <div className="spinner-border" role="status"></div>
                )}
              </Button>
            </form>
            <div className="col">
              <p>
                <Link className="nav-link text-primary d-inline" to="/login">
                  前往登入
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPW;
