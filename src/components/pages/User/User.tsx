import CityCountyData from "@/data/cityCountyData.json";
import hero from "@assets/images/pc/hero.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserOrder from "./UserOrder";
import UserProfile from "./UserProfile";

export type User = {
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
    zipcode: number;
    detail: string;
  };
};

function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

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
        setUser({
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

  if (!user) return null;

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
          <div className="h1">Hello，{user?.name}</div>
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
        {selectedTabIndex === 0 && (
          <UserProfile user={user} setUser={setUser} />
        )}
        {selectedTabIndex === 1 && <UserOrder />}
      </div>
    </div>
  );
}

export default User;
