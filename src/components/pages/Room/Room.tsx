import { useEffect, useState } from "react";
import { Maybe } from "@/types/helpers";
import Loading from "@components/atoms/Loading";
import { RoomCard } from "./RoomCard";
import { RoomModel } from "./RoomModel";
import banner from "assets/images/pc/banner.png";

export default function Room() {
  // 房間資訊
  const [roomsData, setRoomsData] = useState<Maybe<RoomModel[]>>(null);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/v1/rooms/`, {
        method: "GET",
      });
      const jsonData = await response.json();

      setRoomsData(jsonData.result);
      setSpinner(false);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const rooms = roomsData?.map((el, index) => {
    return (
      <div style={{ marginTop: "80px" }} key={index}>
        <RoomCard index={index} room={el} />
      </div>
    );
  });
  return (
    <>
      <div className="banner-card ">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="position-absolute w-100 d-flex align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <div className="w-50 mx-auto">
                  <div className="row">
                    <div className="col-md-6 text-center text-md-start text-primary">
                      <h2>享樂酒店</h2>
                      <h5>Enjoyment Luxury Hotel</h5>
                    </div>
                    <div className="col-md-6">
                      <h1 className="text-white text-center fw-bold mt-10 mt-md-0">
                        客房旅宿
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img src={banner} width="100%" height="100%" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-10">
        <div className="container pt-30 pb-30 ">
          {spinner ? (
            <Loading />
          ) : (
            <>
              <div>
                <p className="text-black">房型選擇</p>
                <h2 className="fs-1 text-primary ">各種房型，任您挑選</h2>
              </div>
              {rooms}
            </>
          )}
        </div>
      </div>
    </>
  );
}
