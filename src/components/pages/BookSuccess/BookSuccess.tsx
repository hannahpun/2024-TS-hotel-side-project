import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Maybe } from "@/types/helpers";
import fakeOrderId from "@/data/fakeData/orderId";
import Loading from "@components/atoms/Loading";

export default function () {
  const { orderId } = useParams();
  // order data
  const [orderData, setOrderIdData] =
    useState<Maybe<(typeof fakeOrderId)["result"]>>(null);
  // Loading
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 取得 order 資料
        const orderRes = await fetch(
          `https://freyja-uj95.onrender.com/api/v1/orders/${orderId}`,
          {
            headers: new Headers({
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }),
          }
        );
        const orderIdData = await orderRes.json();
        setOrderIdData(orderIdData.result);
        setSpinner(false);
      } catch (err) {
        console.log(err); // TypeError: failed to fetch
      }
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className="pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="d-md-flex">
              <div className="pt-5 me-10">
                <div style={{ width: "40px", height: "40px" }}>
                  <i className="bi bi-check-lg py-1 px-2 fs-1 text-white bg-success rounded-circle"></i>
                </div>
              </div>
              <h1 className="text-white fs-2">
                恭喜，{orderData?.userInfo.name}
                <br />
                預定成功
              </h1>
            </div>
            <p className="text-white mt-10">
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </p>
            <hr className="border-primary mt-20" />
            <p className="text-white mt-20 fs-5">立即查看你的訂單紀錄</p>
            <Link
              to={`/user`}
              className="btn btn-primary text-white mt-10 fs-6 px-15 py-4"
            >
              前往我的訂單
            </Link>
            <hr className="border-primary mt-20" />
            <h4 className="text-white mt-20">訂房人資訊</h4>
            <div className="mt-10">
              <label className="text-white">姓名</label>
              <p className="text-white">{orderData?.userInfo.name}</p>
              <label className="text-white mt-6">手機號碼</label>
              <p className="text-white">{orderData?.userInfo.phone} </p>
              <label className="text-white mt-6">電子信箱</label>
              <p className="text-white">{orderData?.userInfo.email}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="rounded bg-white p-10">
              {spinner ? (
                <Loading />
              ) : (
                <>
                  <div>預定參考編號: {orderData?.orderUserId}</div>
                  <h5 className="mt-2 fw-bold">即將到來行程</h5>
                  <img
                    className="d-block w-100 rounded mt-10"
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/089c08805225f9e5861d199b084cba8a05bdaa40/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png"
                    alt=""
                  />
                  <div className="mt-10 fw-bold">
                    <div className="d-flex">
                      <h6>尊爵雙人房，1 晚</h6>
                      <div className="border-start border-3 ms-4 me-4"></div>
                      <h6>住宿人數：{orderData?.peopleNum}位</h6>
                    </div>

                    <div className="mt-6">
                      <div className="border-start border-primary border-3 ps-3">
                        入住：
                        {new Date(orderData?.checkInDate as string).getMonth() +
                          1}{" "}
                        月{" "}
                        {new Date(orderData?.checkInDate as string).getDate()}{" "}
                        日星期
                        {
                          ["日", "一", "二", "三", "四", "五", "六"][
                            new Date(orderData?.checkInDate as string).getDay()
                          ]
                        }
                        ，15:00 可入住
                      </div>

                      <div className="border-start border-3 ps-3 mt-2">
                        退房：
                        {new Date(
                          orderData?.checkOutDate as string
                        ).getMonth() + 1}{" "}
                        月{" "}
                        {new Date(orderData?.checkOutDate as string).getDate()}{" "}
                        日星期
                        {
                          ["日", "一", "二", "三", "四", "五", "六"][
                            new Date(orderData?.checkOutDate as string).getDay()
                          ]
                        }
                        ，12:00 前退房
                      </div>
                    </div>

                    <div className="mt-6">NT$ {orderData?.roomId.price}</div>
                  </div>

                  <hr className="border-primary mt-10" />

                  <div className="border-start border-primary border-3 mt-10 ps-3 fw-bold">
                    房內設備
                  </div>

                  <div className="border rounded mt-6 p-6">
                    <div className="row">
                      {orderData?.roomId?.facilityInfo.map((item, index) => (
                        <div className="col-6 col-md-4 d-flex" key={index}>
                          <i
                            className="bi bi-check-lg text-primary"
                            style={{ width: "24px", height: "24px" }}
                          />
                          <p className="text-neutral-80">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-start border-primary border-3 mt-10 ps-3 fw-bold">
                    備品提供
                  </div>

                  <div className="border rounded ws-blod mt-6 p-6">
                    <div className="row">
                      <div className="col-6 col-md-4 d-flex">
                        <i
                          className="bi bi-check-lg text-primary"
                          style={{ width: "24px", height: "24px" }}
                        />
                        <p className="text-neutral-80">衛生紙</p>
                      </div>
                      {orderData?.roomId?.amenityInfo.map((item, index) => (
                        <div className="col-6 col-md-4 d-flex" key={index}>
                          <i
                            className="bi bi-check-lg text-primary"
                            style={{ width: "24px", height: "24px" }}
                          />
                          <p className="text-neutral-80">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
