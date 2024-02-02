import { useEffect, useState } from "react";

type Order = {
  roomId: {
    imageUrl: string;
    name: string;
    price: number;
    facilityInfo: {
      title: string;
      isProvide: boolean;
    }[];
    amenityInfo: {
      title: string;
      isProvide: boolean;
    }[];
  };
  peopleNum: number;
  checkInDate: Date;
  checkOutDate: Date;
  _id: string;
  status: number;
};

function UserOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isCancelOrderModalOpen, setIsCancelOrderModalOpen] = useState(false);

  useEffect(() => {
    const getUserOrders = async () => {
      const response = await fetch("/api/v1/orders", {
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      });
      const jsonData = await response.json();
      if (jsonData.status) {
        setOrders(jsonData.result);
      }
    };
    getUserOrders();
  }, []);

  const cancelOrder = async (orderId: string) => {
    const response = await fetch(`/api/v1/orders/${orderId}`, {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      method: "DELETE",
    });
    const jsonData = await response.json();
    if (jsonData.status) {
      setOrders((o) => o.filter((order) => order._id !== orderId));
    }
  };

  const renderIncomingOrder = () => {
    const incomingOrder = orders.find(
      (order) => new Date(order.checkInDate) > new Date() && order.status === 0
    );
    if (!incomingOrder) return null;

    return (
      <div className="col-12 col-md-7">
        <div className="bg-white flex-fill p-10 rounded-4">
          <p className="text-neutral-80">預訂參考編號：{incomingOrder._id}</p>
          <h2 className="h5 text-black mt-2">即將來的行程</h2>
          <img
            src={incomingOrder.roomId.imageUrl}
            height="240"
            width="100%"
            style={{ objectFit: "cover" }}
            className="rounded-4 mt-10"
          />
          <div className="d-flex align-items-center gap-4 mt-10">
            <h3 className="h6 text-neutral-80">
              尊爵雙人房，
              {(+new Date(incomingOrder.checkOutDate) -
                +new Date(incomingOrder.checkInDate)) /
                86400000}{" "}
              晚
            </h3>
            <div style={{ width: 1, height: 18 }} className="bg-black" />
            <h3 className="h6 text-neutral-80">
              住宿人數：{incomingOrder.peopleNum} 位
            </h3>
          </div>
          <div className="d-flex align-items-center gap-3 mt-6">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-neutral-80">
              入住：{new Date(incomingOrder.checkInDate).getMonth() + 1} 月{" "}
              {new Date(incomingOrder.checkInDate).getDate()} 日星期
              {
                ["日", "一", "二", "三", "四", "五", "六"][
                  new Date(incomingOrder.checkInDate).getDay()
                ]
              }
              ，15:00 可入住
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 mt-2">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-neutral-80">
              退房：{new Date(incomingOrder.checkOutDate).getMonth() + 1} 月{" "}
              {new Date(incomingOrder.checkOutDate).getDate()} 日星期
              {
                ["日", "一", "二", "三", "四", "五", "六"][
                  new Date(incomingOrder.checkOutDate).getDay()
                ]
              }
              ，12:00 前退房
            </p>
          </div>
          <p className="text-neutral-80 mt-8">
            NT$ {incomingOrder.roomId.price.toLocaleString()}
          </p>
          <div className="bg-neutral-40 mt-10" style={{ height: 1 }} />
          <div className="d-flex align-items-center gap-3 mt-10">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-black">房內設備</p>
          </div>
          <div className="mt-6 p-6 border border-neutral-40 rounded-2 row row-cols-2 row-cols-lg-5 g-0">
            {incomingOrder.roomId.facilityInfo.map((item, index) => (
              <div className="d-flex gap-2" key={index}>
                <i
                  className={`bi ${
                    item.isProvide ? "bi-check2" : "bi-x-lg"
                  } text-primary`}
                />
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
          <div className="mt-6 p-6 border border-neutral-40 rounded-2 row row-cols-2 row-cols-lg-5 g-0">
            {incomingOrder.roomId.amenityInfo.map((item, index) => (
              <div className="d-flex gap-2" key={index}>
                <i
                  className={`bi ${
                    item.isProvide ? "bi-check2" : "bi-x-lg"
                  } text-primary`}
                />
                <p className="text-neutral-80">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 d-flex gap-4">
            <button
              className="flex-grow-1 px-8 py-4 bg-white text-primary rounded-2 border border-primary"
              onClick={() => setIsCancelOrderModalOpen(true)}
            >
              取消預訂
            </button>
            <button className="flex-grow-1 px-8 py-4 bg-primary text-white rounded-2 border border-primary">
              查看詳情
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPastOrders = () => {
    const postOrders = orders.filter(
      (order) => new Date(order.checkInDate) < new Date()
    );
    if (postOrders.length === 0) return null;

    return (
      <div className="col-12 col-md-5">
        <div className="bg-white flex-fill p-10 rounded-4">
          <h1 className="h5 text-black">歷史訂單</h1>
          {postOrders.map((order, index) => (
            <div
              className={`d-flex flex-column flex-lg-row py-6 py-lg-10 gap-6${
                index > 0 ? " border-top border-neutra-40" : ""
              }`}
            >
              <img
                src={order.roomId.imageUrl}
                width="120"
                height="80"
                className="rounded-2"
              />
              <div>
                <p className="text-neutral-80">預訂參考編號： {order._id}</p>
                <h3 className="h6 text-neutral-80 mt-4">{order.roomId.name}</h3>
                <p className="text-neutral-80 mt-4">
                  住宿天數：
                  {(+new Date(order.checkOutDate) -
                    +new Date(order.checkInDate)) /
                    86400000}{" "}
                  晚
                </p>
                <p className="text-neutral-80 mt-2">
                  住宿人數：{order.peopleNum} 位
                </p>
                <div className="d-flex align-items-center gap-3 mt-6">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-neutral-80">
                    入住：{new Date(order.checkInDate).getMonth() + 1} 月{" "}
                    {new Date(order.checkInDate).getDate()} 日星期
                    {
                      ["日", "一", "二", "三", "四", "五", "六"][
                        new Date(order.checkInDate).getDay()
                      ]
                    }
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-neutral-80">
                    退房：{new Date(order.checkOutDate).getMonth() + 1} 月{" "}
                    {new Date(order.checkOutDate).getDate()} 日星期
                    {
                      ["日", "一", "二", "三", "四", "五", "六"][
                        new Date(order.checkOutDate).getDay()
                      ]
                    }
                  </p>
                </div>
                <p className="text-neutral-80 mt-4">
                  NT$ {order.roomId.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          {/* <button className="w-100 px-8 py-4 bg-white text-primary rounded-2 border border-primary">
            查看更多
            <i className="bi bi-chevron-down ms-2" />
          </button> */}
        </div>
      </div>
    );
  };

  const renderCancelOrderModal = () => {
    const incomingOrder = orders.find(
      (order) => new Date(order.checkInDate) > new Date()
    );

    return (
      isCancelOrderModalOpen && (
        <div
          className="d-flex flex-column align-items-stretch align-items-sm-center justify-content-end justify-content-sm-center position-fixed top-0 start-0 vw-100 vh-100"
          style={{
            background: "rgba(0, 0, 0, 0.4",
            backdropFilter: "blur(10px)",
            zIndex: 4,
          }}
        >
          <div className="rounded-2 bg-white position-relative">
            <div className="d-block d-sm-none px-4 py-4 border-bottom">取消預定</div>
            <div className="px-4 px-sm-20 py-10 py-sm-25 h7 border-bottom">
              確定要取消此房型的預訂嗎？
            </div>
            <div className="d-flex p-3 gap-4">
              <button
                className="bg-transparent border border-primary px-8 py-4 flex-grow-1 rounded-2 text-primary"
                onClick={() => setIsCancelOrderModalOpen(false)}
              >
                關閉視窗
              </button>
              <button
                className="bg-primary border-0 px-8 py-4 flex-grow-1 rounded-2 text-white"
                onClick={() => {
                  setIsCancelOrderModalOpen(false);
                  cancelOrder((incomingOrder as Order)._id);
                }}
              >
                確定取消
              </button>
            </div>
            <i
              className="bi bi-x-lg position-absolute"
              style={{ color: "#4B4B4B", top: 8, right: 8, cursor: "pointer" }}
              onClick={() => setIsCancelOrderModalOpen(false)}
            />
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div className="row gx-10 gy-6 mt-10">
        {renderIncomingOrder()}
        {renderPastOrders()}
      </div>
      {renderCancelOrderModal()}
    </>
  );
}

export default UserOrder;
