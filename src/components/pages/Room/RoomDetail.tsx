import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Maybe } from "@/types/helpers";

import Loading from "@components/atoms/Loading";

// Rooms type
import { RoomModel } from "@components/pages/Room/RoomModel";
export default function RoomDetail() {
  const { id } = useParams();
  // 房間資訊
  const [roomData, setRoomData] = useState<Maybe<RoomModel>>(null);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/v1/rooms/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();

      setRoomData(jsonData.result);
      setSpinner(false);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const [count, setCount] = useState<number>(2);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="bg-primary-10 ">
        {/* start of banner carousel */}
        <div className="d-sm-block d-lg-none">
          <div id="Carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {/*indicators*/}
              <button
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#Carousel"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              {/*imgs*/}
              <div className="carousel-item w-100 active">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
                  className="img-fluid"
                  alt="room"
                />
              </div>

              <div className="carousel-item w-100">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png"
                  className="img-fluid"
                  alt="room"
                />
              </div>

              <div className="carousel-item w-100">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png"
                  className="img-fluid"
                  alt="room"
                />
              </div>

              <div className="carousel-item w-100">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-4.png"
                  className="img-fluid"
                  alt="room"
                />
              </div>

              <div className="carousel-item w-100">
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-5.png"
                  className="img-fluid"
                  alt="room"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#Carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#Carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* end of banner carousel */}

        <div className="container pt-10 pb-10">
          {spinner ? (
            <Loading />
          ) : (
            <div className="row gx-20 gy-6 mt-10">
              {/* start of block banner */}
              <div className="d-none d-lg-block">
                <div className="row g-2">
                  <div className="col-6">
                    <img
                      src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
                      className="img-fluid rounded-1"
                      alt="room"
                    />
                  </div>
                  <div className="col-6">
                    <div className="row g-2">
                      <div className="col-6">
                        <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png"
                          className="img-fluid"
                          alt="room"
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png"
                          className="img-fluid rounded-top"
                          alt="room"
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-4.png"
                          className="img-fluid"
                          alt="room"
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-5.png"
                          className="img-fluid h-100 rounded-bottom"
                          alt="room"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of block banner */}

              {/* 左欄 */}
              <div className="col-12 col-md-7">
                <h3 className="fs-3 fs-lg-1 fw-bold font-noto-tc-serif text-custom-neutral-100 mb-4">
                  {roomData?.name}
                </h3>
                <p className="fs-8 fs-lg-7 font-noto-tc-serif  text-custom-neutral-100 mb-20">
                  {roomData?.description}
                </p>

                <h3
                  className="fs-7 fs-lg-5 fw-bold font-noto-tc-serif text-custom-neutral-100 mb-6"
                  style={{
                    borderLeft: "4px solid #BF9D7D",
                    paddingLeft: "16px",
                  }}
                >
                  房間格局
                </h3>
                <div className="row">
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
                      <g clipPath="url(#clip0_40_7566)">
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
                <div className="d-flex align-items-center gap-3 mt-10">
                  <div
                    style={{ width: 4, height: 24 }}
                    className="bg-primary rounded-3"
                  />
                  <p className="text-black">訂房須知</p>
                </div>

                <ul className="mt-6 list-unstyled fs-8 fs-lg-7 font-noto-tc-serif text-custom-neutral-100">
                  <li> 1. 入住時間為下午3點，退房時間為上午12點。</li>
                  <li>
                    2.
                    如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。
                  </li>
                  <li>
                    3.
                    請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。
                  </li>
                  <li>
                    4. 若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。
                  </li>
                  <li> 5. 請愛惜我們的房間與公共空間，並保持整潔。</li>
                  <li> 6. 如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                  <li>
                    7.
                    我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。
                  </li>
                  <li>
                    8.
                    請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。
                  </li>
                  <li>
                    9.
                    我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。
                  </li>
                  <li>
                    10.
                    為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。
                  </li>
                </ul>
              </div>
              {/* 右欄 */}
              <div className="col-12 col-md-5 mt-10">
                <form action="" className="bg-white flex-fill p-10 rounded-4">
                  <div>
                    <p className="fs-5 fw-bold font-noto-tc-serif text-custom-neutral-100 mb-4">
                      預訂房型
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="398"
                      height="2"
                      viewBox="0 0 398 2"
                      fill="none"
                    >
                      <path d="M0 1H398" stroke="#ECECEC" />
                    </svg>
                    <h3 className="fs-2 fw-bold font-noto-tc-serif text-custom-neutral-100 mt-10 mb-2">
                      {roomData?.name}
                    </h3>
                    <p className="fs-7 fw-bold font-noto-tc-serif text-custom-neutral-100 mb-10">
                      {roomData?.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="w-100"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #000",
                          background: "#FFF",
                          padding: "16px",
                        }}
                      >
                        <label htmlFor="start">
                          <span className="fs-9 font-noto-tc-serif text-custom-neutral-100">
                            入住
                          </span>
                        </label>
                        <br />
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          className="fs-7 w-100 border-0"
                          onChange={(event) =>
                            setCheckInDate(event.target.value)
                          }
                        />
                      </div>
                      <div
                        className="w-100 ms-2"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #000",
                          background: "#FFF",
                          padding: "16px",
                        }}
                      >
                        <label htmlFor="end">
                          <span className="fs-9 font-noto-tc-serif text-custom-neutral-100">
                            退房
                          </span>
                        </label>
                        <br />
                        <input
                          type="date"
                          id="end"
                          name="trip-start"
                          className="fs-7 w-100 border-0"
                          onChange={(event) =>
                            setCheckOutDate(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4 mb-10">
                      <div className="fs-7 fw-bold font-noto-tc-serif text-custom-neutral-100">
                        人數
                      </div>

                      <div className="text-align-center">
                        <button
                          type="button"
                          className=""
                          style={{
                            borderRadius: "100px",
                            border: "1px solid #ECECEC",
                            padding: "16px",
                          }}
                          onClick={handleDecrementClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M19 13H5V11H19V13Z" fill="black" />
                          </svg>
                        </button>

                        <span
                          className="fs-6 fw-bold font-noto-tc-serif text-custom-neutral-100 ms-4 me-4"
                          id=""
                        >
                          {count}
                        </span>

                        <button
                          type="button"
                          className=""
                          style={{
                            borderRadius: "100px",
                            border: "1px solid #ECECEC",
                            padding: "16px",
                          }}
                          onClick={handleIncrementClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="fs-5 fw-bold font-noto-tc-serif text-custom-primary-100 mb-10">
                      NT$ {roomData?.price}
                    </p>
                    <Link
                      className="btn btn-custom-primary-100 w-100 text-custom-neutral-0 fs-7 fw-bold font-noto-tc-serif"
                      to={`/room/${id}/book`}
                      state={{
                        people: count,
                        checkinDate: checkInDate,
                        checkoutDate: checkOutDate,
                      }}
                    >
                      立即預訂
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
