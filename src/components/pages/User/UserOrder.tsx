import room from "@assets/images/pc/room2-1.png";
import roomDetail from "@assets/images/pc/room_detail3.png";

function UserOrder() {
  return (
    <div className="row gx-10 gy-6 mt-10">
      <div className="col-12 col-md-7">
        <div className="bg-white flex-fill p-10 rounded-4">
          <p className="text-neutral-80">預訂參考編號： HH2302183151222</p>
          <h2 className="h5 text-black mt-2">即將來的行程</h2>
          <img
            src={room}
            height="240"
            width="100%"
            style={{ objectFit: "cover" }}
            className="rounded-4 mt-10"
          />
          <div className="d-flex align-items-center gap-4 mt-10">
            <h3 className="h6 text-neutral-80">尊爵雙人房，1 晚</h3>
            <div style={{ width: 1, height: 18 }} className="bg-black" />
            <h3 className="h6 text-neutral-80">住宿人數：2 位</h3>
          </div>
          <div className="d-flex align-items-center gap-3 mt-6">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-neutral-80">
              入住：6 月 10 日星期二，15:00 可入住
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 mt-2">
            <div
              style={{ width: 4, height: 24 }}
              className="bg-primary rounded-3"
            />
            <p className="text-neutral-80">
              退房：6 月 11 日星期三，12:00 前退房
            </p>
          </div>
          <p className="text-neutral-80 mt-8">NT$ 10,000</p>
          <div className="bg-neutral-40 mt-10" style={{ height: 1 }} />
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
          <div className="mt-10 d-flex gap-4">
            <button className="flex-grow-1 px-8 py-4 bg-white text-primary rounded-2 border border-primary">
              取消預訂
            </button>
            <button className="flex-grow-1 px-8 py-4 bg-primary text-white rounded-2 border border-primary">
              查看詳情
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="bg-white flex-fill p-10 rounded-4">
          <h1 className="h5 text-black">歷史訂單</h1>
          {[...Array(3)].map((_, index) => (
            <div
              className={`d-flex flex-column flex-lg-row py-6 py-lg-10 gap-6${
                index > 0 ? " border-top border-neutra-40" : ""
              }`}
            >
              <img
                src={roomDetail}
                width="120"
                height="80"
                className="rounded-2"
              />
              <div>
                <p className="text-neutral-80">
                  預訂參考編號： HH2302183151222
                </p>
                <h3 className="h6 text-neutral-80 mt-4">尊爵雙人房</h3>
                <p className="text-neutral-80 mt-4">住宿天數： 1 晚</p>
                <p className="text-neutral-80 mt-2">住宿人數：2 位</p>
                <div className="d-flex align-items-center gap-3 mt-6">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-neutral-80">入住：6 月 10 日星期二</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-neutral-80">退房：6 月 11 日星期三</p>
                </div>
                <p className="text-neutral-80 mt-4">NT$ 10,000</p>
              </div>
            </div>
          ))}
          <button className="w-100 px-8 py-4 bg-white text-primary rounded-2 border border-primary">
            查看更多
            <i className="bi bi-chevron-down ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
