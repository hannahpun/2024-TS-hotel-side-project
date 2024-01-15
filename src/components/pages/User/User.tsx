import hero from "@assets/images/pc/hero.png";
import { useState } from "react";

function User() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const renderPasswordForm = () => {
    if (isEditingAccount) {
      return (
        <>
          <p className="mt-6 text-black">舊密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入舊密碼"
          />
          <p className="mt-6 text-black">新密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入新密碼"
          />
          <p className="mt-6 text-black">確認新密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請再輸入一次新密碼"
          />
          <button
            className="px-8 py-4 text-black-50 border-0 mt-10 rounded-2 align-self-md-start"
            onClick={() => setIsEditingAccount(false)}
          >
            儲存設定
          </button>
        </>
      );
    }
    return (
      <div className="d-flex mt-6 gap-4">
        <div className="flex-grow-1">
          <p className="text-black">密碼</p>
          <div className="mt-2 text-black d-flex gap-2 py-2">
            {Array.from({ length: 8 }).map(() => (
              <div
                style={{ width: 8, height: 8 }}
                className="rounded-circle bg-black"
              />
            ))}
          </div>
        </div>
        <button
          className="text-primary bg-transparent border-0"
          onClick={() => setIsEditingAccount(true)}
          style={{ textDecoration: "underline" }}
        >
          重設
        </button>
      </div>
    );
  };

  const renderProfileForm = () => {
    if (isEditingProfile) {
      return (
        <>
          <p className="text-black">姓名</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入姓名"
          />
          <p className="mt-6 text-black">手機號碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入手機號碼"
          />
          <p className="mt-6 text-black">生日</p>
          <div className="d-flex gap-2 mt-2">
            <select className="p-4 border border-light-subtle rounded-2 flex-grow-1" />
            <select className="p-4 border border-light-subtle rounded-2 flex-grow-1" />
            <select className="p-4 border border-light-subtle rounded-2 flex-grow-1" />
          </div>
          <p className="mt-6 text-black">地址</p>
          <div className="d-flex gap-2 mt-2">
            <select className="p-4 border border-light-subtle rounded-2 flex-grow-1" />
            <select className="p-4 border border-light-subtle rounded-2 flex-grow-1" />
          </div>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入詳細地址"
          />
          <button
            className="px-8 py-4 text-black-50 border-0 mt-10 rounded-2 align-self-md-start"
            onClick={() => setIsEditingProfile(false)}
          >
            儲存設定
          </button>
        </>
      );
    }
    return (
      <>
        <p className="text-black">姓名</p>
        <div className="text-black mt-2 fw-bold">Jessica Ｗang</div>
        <p className="mt-6 text-black">手機號碼</p>
        <div className="text-black mt-2 fw-bold">+886 912 345 678</div>
        <p className="mt-6 text-black">生日</p>
        <div className="text-black mt-2 fw-bold">1990 年 8 月 15 日</div>
        <p className="mt-6 text-black">地址</p>
        <div className="text-black mt-2 fw-bold">高雄市新興區六角路 123 號</div>
        <button
          className="w-auto px-8 py-4 text-primary border border-primary bg-transparent mt-10 rounded-2 align-self-start"
          onClick={() => setIsEditingProfile(true)}
        >
          編輯
        </button>
      </>
    );
  };

  return (
    <div className="position-relative">
      <img
        src={hero}
        className="position-absolute top-0 start-0 w-100"
        style={{ height: 384, zIndex: -1, objectFit: "cover" }}
      />
      <div className="container">
        <div className="d-flex align-items-center gap-6 py-30">
          <img src="" width="144" height="144" className="rounded-circle" />
          <div className="h1">Hello，Jessica</div>
        </div>
        <div className="d-flex mt-10 position-relative">
          {["個人資料", "我的訂單"].map((tab, index) => (
            <button
              key={tab}
              className={`bg-transparent border-0 px-4 py-6 text-${
                selectedTabIndex === index ? "primary" : "white"
              }`}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab}
            </button>
          ))}
          <div
            style={{
              width: 32,
              height: 4,
              left: selectedTabIndex * 96 + 32,
              transition: "left 0.3s",
            }}
            className="position-absolute rounded-pill bg-primary bottom-0"
          />
        </div>
        <div className="row gx-10 gy-6 mt-10">
          <div className="col-12 col-md-5">
            <div className="bg-white flex-fill p-10 rounded-4">
              <h1 className="h5 text-black">修改帳號資料</h1>
              <form className="d-flex flex-column mt-10 position-relative">
                <p className="text-black">電子信箱</p>
                <div className="mt-2 text-black">Jessica@exsample.com</div>
                {renderPasswordForm()}
              </form>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="bg-white flex-fill p-10 rounded-4">
              <h1 className="h5 text-black">基本資料</h1>
              <form className="d-flex flex-column mt-10">
                {renderProfileForm()}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
