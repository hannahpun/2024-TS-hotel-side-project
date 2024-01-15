
import room21 from "@assets/images/pc/room2-1.png";
import room22 from "@assets/images/pc/room2-2.png";
import room23 from "@assets/images/pc/room2-3.png";
import room24 from "@assets/images/pc/room2-4.png";
import room25 from "@assets/images/pc/room2-5.png";


export default function Room() {
    return <div className="bg-primary-10">
        <div className="container pt-30 pb-30 ">
            <div>
                <p className="text-black">房型選擇</p>
                <h2 className="fs-1 text-primary ">
                    各種房型，任您挑選
                </h2>
            </div>

            <div className="card bg-white rounded" style={{ maxWidth: '100%', marginTop: '80px' }}>
                <div className="row g-0 h-100">
                    <div className="col-md-8">
                        <div id="carouselRoom2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselRoom2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselRoom2" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#carouselRoom2" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#carouselRoom2" data-bs-slide-to="3"></button>
                                <button type="button" data-bs-target="#carouselRoom2" data-bs-slide-to="4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item w-100 active">
                                    <img src={room21} className="rounded-start img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item w-100">
                                    <img src={room22} className="rounded-start img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item w-100">
                                    <img src={room23} className="rounded-start img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item w-100">
                                    <img src={room24} className="rounded-start img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item w-100">
                                    <img src={room25} className="rounded-start img-fluid" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselRoom2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselRoom2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body" style={{padding: '40px'}}>
                            <h3 className="card-title text-black">尊爵雙人房</h3>
                            <p className="card-text text-black mt-2">景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。</p>
                            <div className="text-black d-flex gap-3" style={{marginTop:'40px'}}>
                                <div className="border rounded p-2" style={{width:'97px', height: '97px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zm14.78.47a.75.75 0 0 0-.53-.22h-2.5a.75.75 0 0 0 0 1.5h.69l-1.72 1.719a.75.75 0 1 0 1.06 1.06L15.5 9.56v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.22-.53M7.75 17h2.501a.75.75 0 0 0 0-1.5h-.69l1.72-1.72a.75.75 0 0 0-1.061-1.06L8.5 14.438v-.69a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 .75.75"/></svg>
                                    <p className="fw-bolder fs-6 mt-3">28 坪</p>
                                </div>
                                <div className="border rounded p-2" style={{width:'97px', height: '97px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"/></svg>
                                    <p className="fw-bolder fs-6 mt-3">1張大床</p>
                                </div>
                                <div className="border rounded p-2" style={{width:'97px', height: '97px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf9d7d" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                                    <p className="fw-bolder fs-6 mt-3">2-4人</p>
                                </div>
                            </div>

                            <div className="border border-primary w-100" style={{marginTop:'40px'}}></div>

                            <div className="py-5 d-flex justify-content-between" style={{marginTop:'40px'}}>
                                <h5 className="text-primary">
                                    NT$ 10,000
                                </h5>
                                <div>
                                    <i className="bi bi-arrow-right fs-5 text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div >
}