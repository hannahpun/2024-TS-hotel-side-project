
import { mockRoomData } from "./MookData";
import { RoomCard } from "./RoomCard";

export default function Room() {
    const rooms = mockRoomData().map(
        (el, index) => {
            return (<div style={{ marginTop: '80px' }} key={index}>
                <RoomCard index={index} room={el} />
            </div>)
        }
    );
    return <div className="bg-primary-10">
        <div className="container pt-30 pb-30 ">
            <div>
                <p className="text-black">房型選擇</p>
                <h2 className="fs-1 text-primary ">
                    各種房型，任您挑選
                </h2>
            </div>
            {rooms}
        </div>
    </div >
}