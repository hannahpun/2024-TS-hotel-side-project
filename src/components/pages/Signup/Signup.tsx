import { useState } from "react";
import UserDetail from "./UserDetail";
import PersonalDetail from "./PersonalDetail";
import { Link } from "react-router-dom";
import { SignupFromData } from "@/types/form";

function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SignupFromData>();

  const signupComponent = () => {
    switch (step) {
      case 1:
        return (
          <UserDetail
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return <PersonalDetail formData={formData} />;
      default:
        return <>Opps</>;
    }
  };
  return (
    <div className="login-bg">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="col-12 col-md-4 offset-md-7">
            <div className="mb-4">
              <p className="h6 text-primary">享樂酒店，誠摯歡迎</p>
              <h1>立即註冊</h1>
            </div>
            {/* step */}
            <div className="d-flex justify-content-between mb-15">
              <div className="step-item">
                <button
                  className="step-button btn-primary"
                  onClick={() => setStep(1)}
                  type="button"
                >
                  1
                </button>
                <div className="step-title">輸入信箱及密碼</div>
              </div>
              <div className="step-item">
                <button
                  className={`step-button ${
                    step === 1 ? "btn-outline-secondary" : "btn-primary"
                  }`}
                  type="button"
                  onClick={() => setStep(2)}
                >
                  2
                </button>
                <div className="step-title">填寫基本資料</div>
              </div>
            </div>

            {signupComponent()}
            <div className="col">
              <p>
                已經有會員了嗎？
                <Link className="nav-link text-primary d-inline" to="/login">
                  立即登入
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
