import { RoomCardInfo } from "./RoomCardInfo";
import { RoomCarousel } from "./RoomCarousel";
import { RoomModel } from "./RoomModel";

export function RoomCard({ index, room }: { index: number, room: RoomModel }) {
    return (
        <div className="card bg-white rounded">
            <div className="row g-0 h-100">
                <div className="col-md-8">
                    <RoomCarousel index={index} images={room.imageUrlList} />
                </div>
                <div className="col-md-4">
                    <div className="card-body" style={{ padding: '40px' }}>
                        <RoomCardInfo room={room} />
                    </div>
                </div>
            </div>
        </div>
    );
}