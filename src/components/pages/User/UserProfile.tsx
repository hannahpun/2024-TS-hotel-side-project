import CityCountyData from "@/data/cityCountyData.json";
import { useState } from "react";
import { User } from "./User";

function UserProfile({
  user,
  setUser,
}: {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}) {
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const submitPasswordForm = async () => {
    await fetch("https://freyja-uj95.onrender.com/api/v1/user", {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        userId: user.userId,
        oldPassword,
        newPassword,
      }),
    });
  };
  const submitProfileForm = async () => {
    await fetch("https://freyja-uj95.onrender.com/api/v1/user", {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        userId: user.userId,
        name: user.name,
        phone: user.phone,
        birthday: `${user.birthdayY}/${user.birthdayM}/${user.birthdayD}`,
        address: {
          zipcode: Number(
            CityCountyData.find(
              (City) => City.CityName === user.address.city
            )?.AreaList.find((Area) => Area.AreaName === user.address.county)
              ?.ZipCode
          ),
          detail: user.address.detail,
        },
      }),
    });
  };

  const renderPasswordForm = () => {
    if (isEditingAccount) {
      const isButtonDisabled =
        !oldPassword ||
        !newPassword ||
        !confirmNewPassword ||
        newPassword !== confirmNewPassword;
      return (
        <>
          <p className="mt-6 text-black">舊密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入舊密碼"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <p className="mt-6 text-black">新密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入新密碼"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <p className="mt-6 text-black">確認新密碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請再輸入一次新密碼"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
          <button
            className={`px-8 py-4 ${
              isButtonDisabled ? "text-black-50" : "text-white bg-primary"
            } border-0 mt-10 rounded-2 align-self-md-start`}
            disabled={isButtonDisabled}
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
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
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
      const isButtonDisabled =
        !user.name || !user.phone || !user.address.detail;
      return (
        <>
          <p className="text-black">姓名</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入姓名"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <p className="mt-6 text-black">手機號碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入手機號碼"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
          <p className="mt-6 text-black">生日</p>
          <div className="d-flex gap-2 mt-2">
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={user.birthdayY}
              onChange={(e) =>
                setUser({
                  ...user,
                  birthdayY: Number(e.target.value),
                })
              }
            >
              {[...Array(100)].map((_, index) => (
                <option key={index} value={new Date().getFullYear() - index}>
                  {new Date().getFullYear() - index} 年
                </option>
              ))}
            </select>
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={user.birthdayM}
              onChange={(e) =>
                setUser({
                  ...user,
                  birthdayM: Number(e.target.value),
                })
              }
            >
              {[...Array(12)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} 月
                </option>
              ))}
            </select>
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={user.birthdayD}
              onChange={(e) =>
                setUser({
                  ...user,
                  birthdayD: Number(e.target.value),
                })
              }
            >
              {[...Array(31)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} 日
                </option>
              ))}
            </select>
          </div>
          <p className="mt-6 text-black">地址</p>
          <div className="d-flex gap-2 mt-2">
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={user.address.city}
              onChange={(e) => {
                setUser({
                  ...user,
                  address: {
                    ...user.address,
                    city: e.target.value,
                    county: CityCountyData.find(
                      (City) => City.CityName === e.target.value
                    )?.AreaList[0].AreaName,
                  },
                });
              }}
            >
              {CityCountyData.map((city, index) => (
                <option key={index} value={city.CityName}>
                  {city.CityName}
                </option>
              ))}
            </select>
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={user.address.county}
              onChange={(e) => {
                setUser({
                  ...user,
                  address: {
                    ...user.address,
                    county: e.target.value,
                  },
                });
              }}
            >
              {CityCountyData.find(
                (City) => City.CityName === user.address.city
              )?.AreaList.map((area, index) => (
                <option key={index} value={area.AreaName}>
                  {area.AreaName}
                </option>
              ))}
            </select>
          </div>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入詳細地址"
            value={user.address.detail}
            onChange={(e) => {
              setUser({
                ...user,
                address: {
                  ...user.address,
                  detail: e.target.value,
                },
              });
            }}
            required
          />
          <button
            className={`px-8 py-4 ${
              isButtonDisabled ? "text-black-50" : "text-white bg-primary"
            } border-0 mt-10 rounded-2 align-self-md-start`}
            disabled={isButtonDisabled}
          >
            儲存設定
          </button>
        </>
      );
    }
    return (
      <>
        <p className="text-black">姓名</p>
        <div className="text-black mt-2 fw-bold">{user.name}</div>
        <p className="mt-6 text-black">手機號碼</p>
        <div className="text-black mt-2 fw-bold">{user.phone}</div>
        <p className="mt-6 text-black">生日</p>
        <div className="text-black mt-2 fw-bold">
          {user.birthdayY}/{user.birthdayM}/{user.birthdayD}
        </div>
        <p className="mt-6 text-black">地址</p>
        <div className="text-black mt-2 fw-bold">
          {user.address.city}
          {user.address.county}
          {user.address.detail}
        </div>
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
    <div className="row gx-10 gy-6 mt-10">
      <div className="col-12 col-md-5">
        <div className="bg-white flex-fill p-10 rounded-4">
          <h2 className="h5 text-black">修改帳號資料</h2>
          <form
            className="d-flex flex-column mt-10 position-relative"
            onSubmit={async (e) => {
              e.preventDefault();
              await submitPasswordForm();
              setIsEditingAccount(false);
            }}
          >
            <p className="text-black">電子信箱</p>
            <div className="mt-2 text-black">{user.email}</div>
            {renderPasswordForm()}
          </form>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="bg-white flex-fill p-10 rounded-4">
          <h2 className="h5 text-black">基本資料</h2>
          <form
            className="d-flex flex-column mt-10"
            onSubmit={async (e) => {
              e.preventDefault();
              await submitProfileForm();
              setIsEditingProfile(false);
            }}
          >
            {renderProfileForm()}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
