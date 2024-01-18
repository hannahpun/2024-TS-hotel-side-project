import { RoomModel } from "./RoomModel";

export function RoomCardInfo({ room }: { room: RoomModel }) {
    return (<>
        <h3 className="card-title text-black">{room.name}</h3>
        <p className="card-text text-black mt-2">{room.description}</p>
        <div className="text-black d-flex gap-3" style={{ marginTop: '40px' }}>
            <div className="border rounded p-2" style={{ width: '97px', height: '97px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zm14.78.47a.75.75 0 0 0-.53-.22h-2.5a.75.75 0 0 0 0 1.5h.69l-1.72 1.719a.75.75 0 1 0 1.06 1.06L15.5 9.56v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.22-.53M7.75 17h2.501a.75.75 0 0 0 0-1.5h-.69l1.72-1.72a.75.75 0 0 0-1.061-1.06L8.5 14.438v-.69a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 .75.75" /></svg>
                <p className="fw-bolder fs-6 mt-3">{room.areaInfo}</p>
            </div>
            <div className="border rounded p-2" style={{ width: '97px', height: '97px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z" /></svg>
                <p className="fw-bolder fs-6 mt-3"><small>{room.bedInfo}</small></p>
            </div>
            <div className="border rounded p-2" style={{ width: '97px', height: '97px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" /></svg>
                <p className="fw-bolder fs-6 mt-3">1-{room.maxPeople}人</p>
            </div>
        </div>

        <div className="border border-primary w-100" style={{ marginTop: '40px' }}></div>

        <div className="py-5 d-flex justify-content-between" style={{ marginTop: '40px' }}>
            <h5 className="text-primary">
                NT$ {room.price}
            </h5>
            <div>
                <i className="bi bi-arrow-right fs-5 text-primary"></i>
            </div>
        </div>
    </>);
} 