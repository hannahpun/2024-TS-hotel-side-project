import { useEffect, useState } from "react";
import { Maybe } from "@/types/helpers";
import Loading from "@components/atoms/Loading";
import { RoomCard } from "./RoomCard";
import { RoomModel } from "./RoomModel";

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
  );
}
