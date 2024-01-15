import CityCountyData from "@/data/cityCountyData.json";
import hero from "@assets/images/pc/hero.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserProfile = {
  userId: string;
  email: string;
  name: string;
  phone: string;
  birthdayY: number;
  birthdayM: number;
  birthdayD: number;
  address: {
    city?: string;
    county?: string;
    detail: string;
  };
};

function User() {
  const navigate = useNavigate();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await fetch("/api/v1/user", {
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      });
      const jsonData = await response.json();
      if (jsonData.status) {
        const { _id, name, email, phone, birthday, address } = jsonData.result;
        let city;
        let county;
        CityCountyData.forEach((City) => {
          City.AreaList.forEach((Area) => {
            if (Area.ZipCode === String(address.zipcode)) {
              city = City.CityName;
              county = Area.AreaName;
            }
          });
        });
        setUserProfile({
          userId: _id,
          email,
          name,
          phone,
          birthdayY: new Date(birthday).getFullYear(),
          birthdayM: new Date(birthday).getMonth() + 1,
          birthdayD: new Date(birthday).getDate(),
          address: {
            city,
            county,
            detail: address.detail,
          },
        });
      } else {
        navigate("/login");
      }
    };
    getUserProfile();
  }, [navigate]);

  if (!userProfile) return null;

  const submitPasswordForm = async () => {
    await fetch("/api/v1/user", {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      body: JSON.stringify({
        userId: userProfile.userId,
        oldPassword,
        newPassword,
      }),
    });
  };
  const submitProfileForm = async () => {
    await fetch("/api/v1/user", {
      method: "PUT",
      body: JSON.stringify({
        userId: userProfile.userId,
        name: userProfile.name,
        phone: userProfile.phone,
        birthday: `${userProfile.birthdayY}/${userProfile.birthdayM}/${userProfile.birthdayD}`,
        address: {
          zipcode: Number(
            CityCountyData.find(
              (City) => City.CityName === userProfile.address.city
            )?.AreaList.find(
              (Area) => Area.AreaName === userProfile.address.county
            )?.ZipCode
          ),
          detail: userProfile.address.detail,
        },
      }),
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        !userProfile.name || !userProfile.phone || !userProfile.address.detail;
      return (
        <>
          <p className="text-black">姓名</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入姓名"
            value={userProfile.name}
            onChange={(e) =>
              setUserProfile({ ...userProfile, name: e.target.value })
            }
            required
          />
          <p className="mt-6 text-black">手機號碼</p>
          <input
            className="p-4 border border-light-subtle rounded-2 mt-2"
            placeholder="請輸入手機號碼"
            value={userProfile.phone}
            onChange={(e) =>
              setUserProfile({ ...userProfile, phone: e.target.value })
            }
            required
          />
          <p className="mt-6 text-black">生日</p>
          <div className="d-flex gap-2 mt-2">
            <select
              className="p-4 border border-light-subtle rounded-2 flex-grow-1"
              value={userProfile.birthdayY}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
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
              value={userProfile.birthdayM}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
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
              value={userProfile.birthdayD}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
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
              value={userProfile.address.city}
              onChange={(e) => {
                setUserProfile({
                  ...userProfile,
                  address: {
                    ...userProfile.address,
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
              value={userProfile.address.county}
              onChange={(e) => {
                setUserProfile({
                  ...userProfile,
                  address: {
                    ...userProfile.address,
                    county: e.target.value,
                  },
                });
              }}
            >
              {CityCountyData.find(
                (City) => City.CityName === userProfile.address.city
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
            value={userProfile.address.detail}
            onChange={(e) => {
              setUserProfile({
                ...userProfile,
                address: {
                  ...userProfile.address,
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
        <div className="text-black mt-2 fw-bold">{userProfile.name}</div>
        <p className="mt-6 text-black">手機號碼</p>
        <div className="text-black mt-2 fw-bold">{userProfile.phone}</div>
        <p className="mt-6 text-black">生日</p>
        <div className="text-black mt-2 fw-bold">
          {userProfile.birthdayY}/{userProfile.birthdayM}/
          {userProfile.birthdayD}
        </div>
        <p className="mt-6 text-black">地址</p>
        <div className="text-black mt-2 fw-bold">
          {userProfile.address.city}
          {userProfile.address.county}
          {userProfile.address.detail}
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
    <div className="position-relative">
      <img
        src={hero}
        className="position-absolute top-0 start-0 w-100"
        style={{ height: 384, zIndex: -1, objectFit: "cover" }}
      />
      <div className="container">
        <div className="d-flex align-items-center gap-6 py-30">
          <img src="" width="144" height="144" className="rounded-circle" />
          <div className="h1">Hello，{userProfile.name}</div>
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
              <form
                className="d-flex flex-column mt-10 position-relative"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await submitPasswordForm();
                  setIsEditingAccount(false);
                }}
              >
                <p className="text-black">電子信箱</p>
                <div className="mt-2 text-black">{userProfile.email}</div>
                {renderPasswordForm()}
              </form>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="bg-white flex-fill p-10 rounded-4">
              <h1 className="h5 text-black">基本資料</h1>
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
      </div>
    </div>
  );
}

export default User;
