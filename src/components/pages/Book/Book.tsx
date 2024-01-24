import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/atoms/Input";
import InputSelect from "@components/atoms/InputSelect";
import Button from "@components/atoms/Button";
import CityCountyData from "@/data/cityCountyData.json";
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

  // 地址設定
  const [areaList, setAreaList] = useState<AreaList>([]);
  const watchCity = watch("addressCity");

  const inputCommonProp = { errors, register };

  const onSubmit = async (data: BookFormValues) => {};
  return (
    <div className="bg-primary-10">
      <div className="container pt-30 pb-30 ">
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

            <Button type="submit">會員登入</Button>
          </form>
        </div>
        <div className="bg-neutral-40 mt-10" style={{ height: 1 }} />
        <div className="">
          <h5>房間資訊</h5>
          <div className="d-flex align-items-center gap-3 mt-10">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-black">房內設備</p>
          </div>
          <div className="mt-6 p-6 border border-neutral-40 rounded-2 row row-cols-2 row-cols-lg-5 g-0">
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
          <div className="mt-6 p-6 border border-neutral-40 rounded-2 row row-cols-2 row-cols-lg-5 g-0">
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
    </div>
  );
}
