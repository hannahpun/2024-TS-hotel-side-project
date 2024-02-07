import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/atoms/Input";
import InputSelect from "@components/atoms/InputSelect";
import Button from "@components/atoms/Button";
import CityCountyData from "@/data/cityCountyData.json";
import { Maybe } from "@/types/helpers";
import { SignupFromData } from "@/types/form";

type AreaList = (typeof CityCountyData)[0]["AreaList"];
type PersonalDetailFormValues = {
  name: string;
  phone: number;
  birthdayY: number;
  birthdayM: number;
  birthdayD: number;
  addressCity: string;
  addressZipcode: string;
  addressDetail: string;
};
type PersonalDetail = {
  formData?: SignupFromData;
};

function PersonalDetail({ formData }: PersonalDetail) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<PersonalDetailFormValues>();

  // 地址設定
  const [areaList, setAreaList] = useState<AreaList>([]);
  const watchCity = watch("addressCity");

  // 日期設定
  const birthdayYear = new Date().getFullYear() - 60;
  const [resErrorMsg, setResErrorMsg] = useState<Maybe<string>>(null);
  const inputCommonProp = { errors, register };

  useEffect(() => {
    if (watchCity) {
      const currentAreaList = CityCountyData?.find(
        (city) => city.CityName === watchCity
      )?.AreaList as AreaList;
      setAreaList(currentAreaList);
    }
  }, [watchCity]);

  const onSubmit = async (data: PersonalDetailFormValues) => {
    const response = await fetch(
      "https://freyja-uj95.onrender.com/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name: data.name,
          phone: data.phone,
          birthday: `${data.birthdayY}/${data.birthdayM}/${data.birthdayD}`,
          address: {
            zipcode: parseInt(data.addressZipcode),
            detail: data.addressDetail,
          },
        }),
      }
    );
    const jsonData = await response.json();
    if (!jsonData.status) {
      setResErrorMsg(jsonData.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-5">
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

      {/* Birthday */}
      <div className="col-4">
        <label htmlFor="birthdayD" className="form-label">
          生日
        </label>
        <InputSelect
          name="birthdayY"
          {...inputCommonProp}
          defaultName="年..."
          rules={{ required: "必填欄位" }}
          render={[...Array(60)].map((_, i) => (
            <option key={i} value={birthdayYear - i}>
              {birthdayYear - i} 年
            </option>
          ))}
        />
      </div>
      <div className="col-4  align-self-end">
        <InputSelect
          name="birthdayM"
          {...inputCommonProp}
          defaultName="月..."
          rules={{ required: "必填欄位" }}
          render={[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} 月
            </option>
          ))}
        />
      </div>
      <div className="col-4  align-self-end">
        <InputSelect
          name="birthdayD"
          {...inputCommonProp}
          defaultName="日..."
          rules={{ required: "必填欄位" }}
          render={[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} 日
            </option>
          ))}
        />
      </div>

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
      {/* </div> */}

      <div className="d-flex justify-content-between">
        <div className="form-check ">
          <label className="form-check-label" htmlFor="RememberMe">
            我已閱讀並同意本網站個資使用規範
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="RememberMe"
            value="true"
          />
        </div>
      </div>
      {resErrorMsg && <p className="text-danger">{resErrorMsg}</p>}
      <Button type="submit" disabled={!isDirty || !isValid}>
        完成註冊
      </Button>
    </form>
  );
}

export default PersonalDetail;
