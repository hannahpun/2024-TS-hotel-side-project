import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { Maybe } from "@/types/helpers";

// components
import Input from "@components/atoms/Input";
import InputSelect from "@components/atoms/InputSelect";
import Loading from "@components/atoms/Loading";

// static data
import CityCountyData from "@/data/cityCountyData.json";
import { RoomModel } from "@components/pages/Room/RoomModel";
import room from "@assets/images/pc/room2-1.png";
import type { User } from "@components/pages/User/User";

type AreaList = (typeof CityCountyData)[0]["AreaList"];

interface BasicOrderInfo {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
}

interface PostOrderBody extends BasicOrderInfo {
  userInfo: {
    address: {
      zipcode: number;
      detail: string;
    };
    name: string;
    phone: string;
    email: string;
  };
}

interface BookFormValues extends BasicOrderInfo {
  name: string;
  phone: string;
  email: string;
  addressCity: string;
  addressZipcode: number;
  addressDetail: string;
}

interface UserInfo extends User {
  address: {
    city?: string;
    zipcode: number;
    county?: string;
    detail: string;
  };
}
export default function Book() {
  const { id } = useParams();
  let { state } = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookFormValues>({
    defaultValues: {
      peopleNum: state.people,
      roomId: id,
      checkInDate: state.checkinDate,
      checkOutDate: state.checkoutDate,
    },
  });

  const navigate = useNavigate();

  const [editRoomInfo, setEditRoomInfo] = useState({
    editedRoomType: false,
    editedDate: false,
    editedPeople: false,
  });
  // 房間資訊
  const [roomData, setRoomData] = useState<Maybe<RoomModel>>(null);
  const [roomsType, setRoomType] = useState<{ name: string; id: string }[]>([]);
  const [totalDays, setTotalDays] = useState(0);

  // 地址設定
  const [areaList, setAreaList] = useState<AreaList>([]);
  const watchCity = watch("addressCity");

  // Loading
  const [spinner, setSpinner] = useState(true);

  const [resErrorMsg, setResErrorMsg] = useState<Maybe<string>>(null);

  const onSubmit = async (data: BookFormValues) => {
    const postOrderBody: PostOrderBody = {
      roomId: data.roomId,
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      peopleNum: data.peopleNum,
      userInfo: {
        address: {
          zipcode: data.addressZipcode,
          detail: data.addressDetail,
        },
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
    };
    try {
      const response = await fetch("/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(postOrderBody),
      });
      const jsonData = await response.json();
      const {
        result: { _id },
      } = jsonData;

      if (!jsonData.status) {
        setResErrorMsg(jsonData.message);
        return;
      }
      navigate(`/${_id}/BookSuccess`);
    } catch (err) {
      console.log(err); // TypeError: failed to fetch
    }
  };
  const applyUserInfo = async () => {
    const response = await fetch("/api/v1/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const {
      result,
      ...jsonData
    }: { result: UserInfo; status: boolean; message: string } =
      await response.json();
    setValue("name", result.name);
    setValue("email", result.email);
    setValue("phone", result.phone);
    setValue("addressCity", result.address.county || "臺北市");
    setValue("addressZipcode", result.address.zipcode);
    setValue("addressDetail", result.address.detail);

    if (!jsonData.status) {
      setResErrorMsg(jsonData?.message);
    }
  };
  const inputCommonProp = { errors, register };

  // calculate Date
  useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(watch("checkInDate")).getTime();
    const secondDate = new Date(watch("checkOutDate")).getTime();

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    setTotalDays(diffDays);
  }, [watch("checkInDate"), watch("checkOutDate")]);

  useEffect(() => {
    // set City data
    if (watchCity) {
      const currentAreaList = CityCountyData?.find(
        (city) => city.CityName === watchCity
      )?.AreaList as AreaList;
      setAreaList(currentAreaList);
    }
  }, [watchCity]);

  useEffect(() => {
    const fetchData = async () => {
      // 取得 room 資料
      const roomRes = await fetch(`/api/v1/rooms/${id}`);
      const roomData = await roomRes.json();
      setRoomData(roomData.result);

      // 取得 room type
      const roomsRes = await fetch(`/api/v1/rooms/`);
      const roomsData = await roomsRes.json();
      setRoomType(
        roomsData.result.map((item: RoomModel) => ({
          name: item.name,
          id: item._id,
        }))
      );

      setSpinner(false);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <div className="bg-primary-10" data-bs-theme="light">
      <div className="container pt-10 pb-10">
        {spinner ? (
          <Loading />
        ) : (
          <div className="row gx-20 gy-6 mt-10">
            <div className="col-12 col-md-7">
              <h3 className="mb-10">
                <Link
                  className="link-dark"
                  to={`/room/${id}`}
                >{`< 確認訂房資訊`}</Link>
              </h3>
              <div className="row g-1">
                <h4>訂房資訊</h4>
                <div className="mt-7 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{ width: 4, height: 24 }}
                        className="bg-primary rounded-3"
                      />
                      <p>選擇房型</p>
                    </div>
                    <div className="pt-2">
                      <InputSelect
                        defaultName={roomData?.name}
                        name="roomId"
                        disabled={!editRoomInfo.editedRoomType}
                        className={`${
                          editRoomInfo.editedRoomType == false
                            ? "input-hidden"
                            : "form-select"
                        }`}
                        {...inputCommonProp}
                        render={roomsType.map((room, i) => (
                          <option key={i} value={room.id}>
                            {room.name}
                          </option>
                        ))}
                      />
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setEditRoomInfo({
                        ...editRoomInfo,
                        editedRoomType: true,
                      });
                    }}
                    className="link-dark text-decoration-underline"
                  >
                    編輯
                  </a>
                </div>
                <div className="mt-7 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{ width: 4, height: 24 }}
                        className="bg-primary rounded-3"
                      />
                      <p>訂房日期</p>
                    </div>
                    <div className="pt-2">
                      <Input
                        displayName="入住："
                        name="checkInDate"
                        className={`${
                          editRoomInfo.editedDate == false
                            ? "input-hidden"
                            : "form-control"
                        }`}
                        {...inputCommonProp}
                        type="date"
                        disabled={!editRoomInfo.editedDate}
                        rules={{ required: "必填欄位" }}
                      />
                      <Input
                        displayName="退房："
                        name="checkOutDate"
                        className={`${
                          editRoomInfo.editedDate == false
                            ? "input-hidden"
                            : "form-control"
                        }`}
                        placeholder="選擇房型"
                        disabled={!editRoomInfo.editedDate}
                        {...inputCommonProp}
                        type="date"
                        rules={{ required: "必填欄位" }}
                      />
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setEditRoomInfo({
                        ...editRoomInfo,
                        editedDate: true,
                      });
                    }}
                    className="link-dark text-decoration-underline"
                  >
                    編輯
                  </a>
                </div>
                <div className="mt-7 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{ width: 4, height: 24 }}
                        className="bg-primary rounded-3"
                      />
                      <p>房客人數</p>
                    </div>

                    <div className="pt-2">
                      <Input
                        className={`${
                          editRoomInfo.editedPeople == false
                            ? "input-hidden"
                            : "form-control"
                        }`}
                        min="1"
                        name="peopleNum"
                        placeholder="房客人數"
                        {...inputCommonProp}
                        type="number"
                        disabled={!editRoomInfo.editedPeople}
                      />
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setEditRoomInfo({
                        ...editRoomInfo,
                        editedPeople: true,
                      });
                    }}
                    className="link-dark text-decoration-underline"
                  >
                    編輯
                  </a>
                </div>
              </div>
              <div className="bg-dark mt-10 mb-10" style={{ height: 1 }} />
              <div className="row g-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>訂房人資訊</h4>
                  <a
                    href="javascript:void(0)"
                    onClick={applyUserInfo}
                    className="link-primary text-decoration-underline"
                  >
                    套用會員資料
                  </a>
                </div>

                <form className="row g-3">
                  <Input
                    name="name"
                    placeholder="請輸入姓名"
                    displayName="姓名"
                    {...inputCommonProp}
                    rules={{ required: "必填欄位" }}
                  />
                  <Input
                    name="phone"
                    placeholder="請輸入手機號碼"
                    displayName="手機號碼"
                    {...inputCommonProp}
                    rules={{ required: "必填欄位" }}
                    type="number"
                  />
                  <Input
                    name="email"
                    placeholder="hello@example.com"
                    displayName="電子信箱"
                    errors={errors}
                    register={register}
                    rules={{
                      required: "必填欄位",
                    }}
                  />
                  {/* Address */}
                  <div className="col-6">
                    <label htmlFor="addressCity" className="form-label">
                      地址
                    </label>
                    <InputSelect
                      name="addressCity"
                      {...inputCommonProp}
                      defaultName="縣市..."
                      rules={{ required: "必填欄位" }}
                      render={CityCountyData.map((city, i) => (
                        <option key={i} value={city.CityName}>
                          {city.CityName}
                        </option>
                      ))}
                    />
                  </div>
                  <div className="col-6  align-self-end">
                    <InputSelect
                      name="addressZipcode"
                      value={watch("addressZipcode")}
                      {...inputCommonProp}
                      render={areaList.map((area, i) => (
                        <option key={i} value={area.ZipCode}>
                          {area?.AreaName}
                        </option>
                      ))}
                    />
                  </div>
                  <Input
                    name="addressDetail"
                    placeholder="請輸入詳細地址"
                    {...inputCommonProp}
                    rules={{ required: "必填欄位" }}
                  />
                </form>
              </div>
              <div className="bg-dark mt-10 mb-10" style={{ height: 1 }} />
              <div className="">
                <h4>房間資訊</h4>
                <div className="d-flex align-items-center gap-3 mt-10">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-black">房間格局</p>
                </div>
                <div className="mt-6 row row-cols-2 row-cols-lg-5 g-0">
                  <div className="col-3 col-lg-2 bg-custom-neutral-0 px-4 py-4 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M2 7.25C2 6.52065 2.28973 5.82118 2.80546 5.30546C3.32118 4.78973 4.02065 4.5 4.75 4.5H19.25C19.9793 4.5 20.6788 4.78973 21.1945 5.30546C21.7103 5.82118 22 6.52065 22 7.25V17.75C22 18.1111 21.9289 18.4687 21.7907 18.8024C21.6525 19.136 21.4499 19.4392 21.1945 19.6945C20.9392 19.9499 20.636 20.1525 20.3024 20.2907C19.9687 20.4289 19.6111 20.5 19.25 20.5H4.75C4.38886 20.5 4.03127 20.4289 3.69762 20.2907C3.36398 20.1525 3.06082 19.9499 2.80546 19.6945C2.5501 19.4392 2.34753 19.136 2.20933 18.8024C2.07113 18.4687 2 18.1111 2 17.75V7.25ZM16.78 7.72C16.6395 7.57931 16.4488 7.50017 16.25 7.5H13.75C13.5511 7.5 13.3603 7.57902 13.2197 7.71967C13.079 7.86032 13 8.05109 13 8.25C13 8.44891 13.079 8.63968 13.2197 8.78033C13.3603 8.92098 13.5511 9 13.75 9H14.44L12.72 10.719C12.6463 10.7877 12.5872 10.8705 12.5462 10.9625C12.5052 11.0545 12.4832 11.1538 12.4814 11.2545C12.4796 11.3552 12.4982 11.4552 12.5359 11.5486C12.5736 11.642 12.6297 11.7268 12.701 11.798C12.7722 11.8693 12.857 11.9254 12.9504 11.9631C13.0438 12.0008 13.1438 12.0194 13.2445 12.0176C13.3452 12.0158 13.4445 11.9938 13.5365 11.9528C13.6285 11.9118 13.7113 11.8527 13.78 11.779L15.5 10.06V10.75C15.5 10.9489 15.579 11.1397 15.7197 11.2803C15.8603 11.421 16.0511 11.5 16.25 11.5C16.4489 11.5 16.6397 11.421 16.7803 11.2803C16.921 11.1397 17 10.9489 17 10.75V8.25C16.9998 8.05115 16.9207 7.86052 16.78 7.72ZM7.75 17.5H10.251C10.4499 17.5 10.6407 17.421 10.7813 17.2803C10.922 17.1397 11.001 16.9489 11.001 16.75C11.001 16.5511 10.922 16.3603 10.7813 16.2197C10.6407 16.079 10.4499 16 10.251 16H9.561L11.281 14.28C11.4176 14.1385 11.4931 13.949 11.4913 13.7523C11.4895 13.5557 11.4105 13.3676 11.2714 13.2286C11.1322 13.0896 10.9441 13.0109 10.7475 13.0092C10.5508 13.0076 10.3614 13.0833 10.22 13.22L8.5 14.938V14.248C8.5 14.0491 8.42098 13.8583 8.28033 13.7177C8.13968 13.577 7.94891 13.498 7.75 13.498C7.55109 13.498 7.36032 13.577 7.21967 13.7177C7.07902 13.8583 7 14.0491 7 14.248V16.748C7 16.9469 7.07902 17.1377 7.21967 17.2783C7.36032 17.419 7.55109 17.498 7.75 17.498V17.5Z"
                        fill="#BF9D7D"
                      />
                    </svg>
                    <br />
                    <span className="fs-7 font-noto-tc-serif text-custom-neutral-100 ms-2">
                      {roomData?.areaInfo}
                    </span>
                  </div>
                  <div className="col-3 col-lg-2 bg-custom-neutral-0  px-4 py-4 rounded ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                    >
                      <path
                        d="M18 5.5V2.5C18 1.4 17.1 0.5 16 0.5H4C2.9 0.5 2 1.4 2 2.5V5.5C0.9 5.5 0 6.4 0 7.5V12.5H1.33L2 14.5H3L3.67 12.5H16.34L17 14.5H18L18.67 12.5H20V7.5C20 6.4 19.1 5.5 18 5.5ZM9 5.5H4V2.5H9V5.5ZM16 5.5H11V2.5H16V5.5Z"
                        fill="#BF9D7D"
                      />
                    </svg>{" "}
                    <br />
                    <span className="fs-7 font-noto-tc-serif text-custom-neutral-100 ms-2">
                      {roomData?.bedInfo}
                    </span>
                  </div>
                  <div className="col-3 col-lg-2 bg-custom-neutral-0 px-4 py-4 rounded ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_40_7566)">
                        <path
                          d="M12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20.5H20V18.5C20 15.84 14.67 14.5 12 14.5Z"
                          fill="#BF9D7D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_40_7566">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <br />
                    <span className="fs-7 font-noto-tc-serif text-custom-neutral-100 ms-2">
                      {roomData?.maxPeople} 人
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-10">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-black">房內設備</p>
                </div>
                <div className="mt-6 p-6 bg-white rounded-2 row row-cols-2 row-cols-lg-5 g-0">
                  {roomData?.facilityInfo.map((item, index) => (
                    <div className="d-flex gap-2" key={index}>
                      <i className="bi bi-check2 text-primary" />
                      <p className="text-neutral-80">{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="d-flex align-items-center gap-3 mt-10">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-black">備品提供</p>
                </div>
                <div className="mt-6 p-6 bg-white rounded-2 row row-cols-2 row-cols-lg-5 g-0">
                  {roomData?.amenityInfo.map((item, index) => (
                    <div className="d-flex gap-2" key={index}>
                      <i className="bi bi-check2 text-primary" />
                      <p className="text-neutral-80">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 價格 */}
            <div className="col-12 col-md-5 mt-10">
              <div className="bg-white flex-fill p-10 rounded-4">
                <img
                  src={room}
                  height="240"
                  width="100%"
                  style={{ objectFit: "cover" }}
                  className="rounded-4 "
                />
                <h4 className="text-neutral-80 mt-10">價格詳情</h4>
                <div className="d-flex align-items-center gap-3 mt-6 justify-content-between">
                  <p className="text-neutral-80">
                    NT$ {roomData?.price} x {totalDays} 晚
                  </p>
                  <p>NT$ {(roomData?.price as number) * totalDays}</p>
                </div>
                <div
                  className="bg-neutral-40 mt-6 mb-6"
                  style={{ height: 1 }}
                />
                <div className="d-flex align-items-center gap-3 mt-2 justify-content-between">
                  <p className="text-neutral-80">總價</p>
                  <p>NT$ {(roomData?.price as number) * totalDays}</p>
                </div>

                <div className="mt-10 d-flex gap-4">
                  {resErrorMsg && <p className="text-danger">{resErrorMsg}</p>}
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className="flex-grow-1 px-8 py-4 bg-primary text-white rounded-2 border border-primary"
                  >
                    確認訂房
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
