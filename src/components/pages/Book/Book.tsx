import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useLocation, Link } from "react-router-dom";
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
    const response = await fetch("/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(postOrderBody),
    });
    const jsonData = await response.json();
    if (!jsonData.status) {
      setResErrorMsg(jsonData.message);
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
    }: { result: User; status: boolean; message: string } =
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
                <h5>訂房資訊</h5>
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
                    className="link-dark"
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
                    className="link-dark"
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
                    className="link-dark"
                  >
                    編輯
                  </a>
                </div>
              </div>
              <div className="bg-dark mt-10 mb-10" style={{ height: 1 }} />
              <div className="row g-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>訂房人資訊</h5>
                  <a
                    href="javascript:void(0)"
                    onClick={applyUserInfo}
                    className="link-primary"
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
                <h5>房間資訊</h5>
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
                <h2 className="h6 text-neutral-80 mt-10">價格詳情</h2>
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
