import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Maybe } from "@/types/helpers";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import { useState } from "react";

type ResetPWFormValues = {
  email: string;
  code: string;
  newPassword: string;
};

function ResetPW() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<ResetPWFormValues>();

  const [resErrorMsg, setResErrorMsg] = useState<Maybe<string>>(null);
  const [resCodeErrorMsg, setResCodeErrorMsg] = useState<Maybe<string>>(null);
  const [hasSubmit, setHasSubmit] = useState(false);

  const onHandleSubmitCode = async (data: ResetPWFormValues["email"]) => {
    const response = await fetch(
      "https://freyja-uj95.onrender.com/api/v1/verify/generateEmailCode",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data }),
      }
    );
    const jsonData = await response.json();
    // if error happen
    if (!jsonData.status) {
      setResCodeErrorMsg(jsonData.message);
    }
  };
  const onSubmit = async (data: ResetPWFormValues) => {
    setHasSubmit(true);
    const response = await fetch(
      "https://freyja-uj95.onrender.com/api/v1/user/forgot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
    const jsonData = await response.json();
    // if error happen
    if (!jsonData.status) {
      setResErrorMsg(jsonData.message);
      setHasSubmit(false);
    }

    setHasSubmit(false);
  };

  return (
    <div className="login-bg">
      <div className="container">
        <div className="d-flex  align-items-center set-height">
          <div className="col-12 col-md-4 offset-md-7">
            <div className="mb-4">
              <h1>忘記密碼</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <Input
                name="email"
                displayName="電子信箱"
                placeholder="請輸入信箱"
                errors={errors}
                onChange={() => {
                  setResCodeErrorMsg("");
                }}
                register={register}
                rules={{
                  required: "必填欄位",
                  pattern: { value: /^\S+@\S+$/i, message: "格式不對" },
                }}
                type="text"
              />
              <a
                href="javascript:void(0)"
                onClick={() => {
                  onHandleSubmitCode(getValues("email"));
                }}
                className="text-decoration-underline"
              >
                發送驗證碼
              </a>
              {resCodeErrorMsg && (
                <p className="text-danger">{resCodeErrorMsg}</p>
              )}
              <Input
                name="code"
                placeholder="請輸入驗證碼"
                displayName="驗證碼"
                errors={errors}
                register={register}
                rules={{ required: "必填欄位" }}
                type="password"
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
              <Button type="submit" disabled={!isDirty || !isValid}>
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
