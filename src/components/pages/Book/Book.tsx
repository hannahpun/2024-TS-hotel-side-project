import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Maybe } from "@/types/helpers";

// components
import Input from "@components/atoms/Input";
import InputSelect from "@components/atoms/InputSelect";
import Button from "@components/atoms/Button";

// static data
import CityCountyData from "@/data/cityCountyData.json";
import RoomsId from "@/data/rooms-id";
import room from "@assets/images/pc/room2-1.png";
type AreaList = (typeof CityCountyData)[0]["AreaList"];

type BookFormValues = {
  name: string;
  phone: number;
  email: string;
  addressCity: string;
  addressZipcode: string;
  addressDetail: string;
};

export default function Book() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookFormValues>();

  // 房間資訊
  const [roomData, setRoomData] = useState<Maybe<typeof RoomsId>>(null);
  // 地址設定
  const [areaList, setAreaList] = useState<AreaList>([]);
  const watchCity = watch("addressCity");

  const inputCommonProp = { errors, register };

  const onSubmit = async (data: BookFormValues) => {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/v1/rooms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();

      console.log("jsonData: ", jsonData);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <div className="bg-primary-10" data-bs-theme="light">
      <div className="container pt-10 pb-10 ">
        <div className="row gx-20 gy-6 mt-10">
          <div className="col-12 col-md-7">
            <h3 className="mb-10"> {`< 確認訂房資訊`}</h3>
            <div className="row g-1">
              <h5>訂房資訊</h5>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{ width: 4, height: 24 }}
                      className="bg-primary rounded-3"
                    />
                    <p>選擇房型</p>
                  </div>
                  <p className="pt-2">尊爵雙人房</p>
                </div>
                <p>編輯</p>
              </div>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{ width: 4, height: 24 }}
                      className="bg-primary rounded-3"
                    />
                    <p>訂房日期</p>
                  </div>
                  <p className="pt-2">入住：6 月 10 日星期二</p>
                  <p className="pt-2">退房：6 月 11 日星期三</p>
                </div>
                <p>編輯</p>
              </div>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{ width: 4, height: 24 }}
                      className="bg-primary rounded-3"
                    />
                    <p>房客人數</p>
                  </div>
                  <p className="pt-2">2 人</p>
                </div>
                <p>編輯</p>
              </div>
            </div>
            <div className="bg-dark mt-10 mb-10" style={{ height: 1 }} />
            <div className="row g-3">
              <h5>訂房人資訊</h5>
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
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
                      <option key={i}>{city.CityName}</option>
                    ))}
                  />
                </div>
                <div className="col-6  align-self-end">
                  <InputSelect
                    name="addressZipcode"
                    defaultName="區域..."
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
                {[
                  "平面電視",
                  "衣櫃",
                  "吹風機",
                  "除濕機",
                  "冰箱",
                  "浴缸",
                  "熱水壺",
                  "書桌",
                  "檯燈",
                  "音響",
                ].map((item, index) => (
                  <div className="d-flex gap-2" key={index}>
                    <i className="bi bi-check2 text-primary" />
                    <p className="text-neutral-80">{item}</p>
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
                {[
                  "衛生紙",
                  "吊衣架",
                  "拖鞋",
                  "浴巾",
                  "沐浴用品",
                  "刷牙用品",
                  "清潔用品",
                  "罐裝水",
                  "刮鬍刀",
                  "梳子",
                ].map((item, index) => (
                  <div className="d-flex gap-2" key={index}>
                    <i className="bi bi-check2 text-primary" />
                    <p className="text-neutral-80">{item}</p>
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
                <p className="text-neutral-80">NT$ 10,000 x 2 晚</p>
                <p>NT$ 20,000</p>
              </div>
              <div className="d-flex align-items-center gap-3 mt-2 justify-content-between">
                <p className="text-neutral-80">住宿折扣</p>
                <p className="text-primary">- NT$ 1,000</p>
              </div>
              <div className="bg-neutral-40 mt-6 mb-6" style={{ height: 1 }} />
              <div className="d-flex align-items-center gap-3 mt-2 justify-content-between">
                <p className="text-neutral-80">總價</p>
                <p>NT$ 19,000</p>
              </div>

              <div className="mt-10 d-flex gap-4">
                <button className="flex-grow-1 px-8 py-4 bg-primary text-white rounded-2 border border-primary">
                  確認訂房
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
