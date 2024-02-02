

export default function () {
    return <div className="pt-30 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="d-md-flex">
                        <div className="pt-5 me-10">
                            <div style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-check-lg py-1 px-2 fs-1 text-white bg-success rounded-circle"></i>
                            </div>
                        </div>
                        <h1 className="text-white fs-2">
                            恭喜，Jessica！<br />
                            預定成功
                        </h1>
                    </div>
                    <p className="text-white mt-10">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
                    <hr className="border-primary mt-20" />
                    <p className="text-white mt-20 fs-5">立即查看你的訂單紀錄</p>
                    <a href="" className="btn btn-primary text-white mt-10 fs-6 px-15 py-4">前往我的訂單</a>
                    <hr className="border-primary mt-20" />
                    <h4 className="text-white mt-20">訂房人資訊</h4>
                    <div className="mt-10">
                        <label className="text-white">姓名</label>
                        <p className="text-white">Jessica Wang</p>
                        <label className="text-white mt-6">手機號碼</label>
                        <p className="text-white">+886 912 345 678 </p>
                        <label className="text-white mt-6">電子信箱</label>
                        <p className="text-white">jessica@example.com </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="rounded bg-white p-10">
                        <div>預定參考編號: HH2302183151222</div>
                        <h5 className="mt-2 fw-bold">即將到來行程</h5>
                        <img className="d-block w-100 rounded mt-10" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/089c08805225f9e5861d199b084cba8a05bdaa40/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png" alt="" />
                        <div className="mt-10 fw-bold">
                            <div className="d-flex">
                                <h6>尊爵雙人房，1 晚</h6>
                                <div className="border-start border-3 ms-4 me-4"></div>
                                <h6>住宿人數：2 位</h6>
                            </div>

                            <div className="mt-6">
                                <div className="border-start border-primary border-3 ps-3">
                                    入住：6 月 10 日星期二，15:00 可入住
                                </div>

                                <div className="border-start border-3 ps-3 mt-2">
                                    退房：6 月 11 日星期三，12:00 前退房
                                </div>
                            </div>

                            <div className="mt-6">
                                NT$ 10,000
                            </div>
                        </div>


                        <hr className="border-primary mt-10" />

                        <div className="border-start border-primary border-3 mt-10 ps-3 fw-bold">
                            房內設備
                        </div>

                        <div className="border rounded mt-6 p-6">
                            <div className="row">
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">電視</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">冰箱</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">衣櫃</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">浴缸</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">吹風機</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">熱水壺</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">除濕機</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">書桌</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">檯燈</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">音響</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-start border-primary border-3 mt-10 ps-3 fw-bold">
                            備品提供
                        </div>

                        <div className="border rounded ws-blod mt-6 p-6">
                            <div className="row">
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">衛生紙</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">沐浴用具</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">吊衣架</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">刷牙用具</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">拖鞋</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">清潔用具</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">浴巾</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">罐裝水</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">刮鬍刀</p>
                                </div>
                                <div className="col-6 col-md-4 d-flex">
                                    <i className="bi bi-check-lg text-primary" style={{ width: '24px', height: '24px' }} />
                                    <p className="text-neutral-80">梳子</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}