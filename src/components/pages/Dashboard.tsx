import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import news1 from "@assets/images/pc/news1.png";
import news2 from "@assets/images/pc/news2.png";
import news3 from "@assets/images/pc/news3.png";
import room1 from "@assets/images/pc/room1.png";
import food1 from "@assets/images/pc/food1.png";
import food2 from "@assets/images/pc/food2.png";
import food3 from "@assets/images/pc/food3.png";
import food4 from "@assets/images/pc/food4.png";
import map from "@assets/images/pc/map.png";

function Dashboard() {
  const foods = [food1, food2, food3, food4];
  return (
    <>
      {/* Start of Banner*/}
      <div className=""></div>
      {/* End of Banner*/}

      {/* Start of 最新消息 */}
      <div className="news-card">
        <div className="container pt-30 pb-30 d-lg-flex flex-sm-row">
          <div>
            <h2 className="fs-1 text-primary wc-35">
              最新
              <br />
              消息
            </h2>
          </div>
          <ul className="ms-lg-20">
            <li className="d-lg-flex flex-row mb-10">
              <img
                src={news1}
                className="rounded"
                alt="秋季旅遊，豪華享受方案"
              />
              <div className="mt-4 ms-lg-6 d-flex flex-column align-self-center">
                <h3 className="fs-lg-3 fwv-700 text-dark mb-2 mb-lg-6">
                  秋季旅遊，豪華享受方案
                </h3>
                <p className="fs-lg-7 fwv-500 lh-base text-dark">
                  秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                </p>
              </div>
            </li>
            <li className="d-lg-flex flex-row mb-10">
              <img src={news2} className="rounded" alt="輕鬆住房專案" />
              <div className="mt-4 ms-lg-6 d-flex flex-column align-self-center">
                <h3 className="fs-lg-3 fwv-700 text-dark mb-2 mb-lg-6">
                  輕鬆住房專案
                </h3>
                <p className="fs-lg-7 fwv-500 lh-base text-dark">
                  我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                </p>
              </div>
            </li>
            <li className="d-lg-flex flex-row mb-10">
              <img src={news3} className="rounded" alt="耶誕快樂，住房送禮" />
              <div className="mt-4 ms-lg-6 d-flex flex-column align-self-center">
                <h3 className="fs-lg-3 fwv-700 text-dark mb-2 mb-lg-6">
                  耶誕快樂，住房送禮
                </h3>
                <p className="fs-lg-7 fwv-500 lh-base text-dark">
                  聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* END of 最新消息 */}

      {/* Start of 關於我們 */}
      <div className="about-card">
        <div className="container pt-lg-30 pb-lg-30">
          <div className="">
            <h2 className="fs-1 text-primary">
              關於
              <br />
              我們
            </h2>
          </div>
        </div>
      </div>
      {/* End of 關於我們 */}

      {/* Start of 尊貴雙人房 */}
      <div className="room-card">
        <div className="pt-lg-40 pb-lg-40 d-lg-flex flex-row">
          <img src={room1} style={{ width: "900px" }} />
          <div className="pt-150 ms-20">
            <h3 className="fs-1 mb-4">尊爵雙人房</h3>
            <p className="mb-10">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
            <p className="fs-3">NT$ 10,000</p>
            <a href="#" className="btn btn-lg btn-light">
              查看更多
            </a>
          </div>
        </div>
      </div>
      {/* End of 尊貴雙人房 */}

      {/* Start of 佳餚美饌 */}
      <div className="food">
        <div className="container pt-30 pb-30">
          <div className="">
            {/* 線條紋路*/}

            {/* 圖片輪播*/}
            <div className="">
              <h2 className="fs-1 text-primary">
                佳餚
                <br />
                美饌
              </h2>

              {/* Slider main container */}
              <div className="foodSwiper">
                {/* Slides */}
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {foods.map((food, i) => (
                    <SwiperSlide>
                      <div className="swiper-slide">
                        {/* 這邊是放要輪播的內容 */}
                        <div className="card">
                          <img
                            src={food}
                            alt={`pic${i}`}
                            className="img-fluid"
                          />
                          {i}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of 佳餚美饌 */}

      {/* Start of 交通方式 */}
      <div className="transportation-card">
        <div className="container pt-lg-30 pb-lg-30">
          <div className="">
            <h2 className="fs-1 text-primary">
              交通
              <br />
              方式
            </h2>
            <p className="fs-7 fwv-700 mt-40 mb-4">
              台灣高雄市新興區六角路123號
            </p>
            <img src={map} style={{ width: "100%" }} alt="圖片1" className="" />
            <div className="row mt-sm-10">
              <div className="col-16 col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <g clipPath="url(#clip0_31_1989)">
                    <path
                      d="M63.0665 20.0327C62.3999 18.066 60.5332 16.666 58.3332 16.666H21.6665C19.4665 16.666 17.6332 18.066 16.9332 20.0327L9.99988 39.9993V66.666C9.99988 68.4993 11.4999 69.9993 13.3332 69.9993H16.6665C18.4999 69.9993 19.9999 68.4993 19.9999 66.666V63.3327H59.9999V66.666C59.9999 68.4993 61.4999 69.9993 63.3332 69.9993H66.6665C68.4999 69.9993 69.9999 68.4993 69.9999 66.666V39.9993L63.0665 20.0327ZM21.6665 53.3327C18.8999 53.3327 16.6665 51.0993 16.6665 48.3327C16.6665 45.566 18.8999 43.3327 21.6665 43.3327C24.4332 43.3327 26.6665 45.566 26.6665 48.3327C26.6665 51.0993 24.4332 53.3327 21.6665 53.3327ZM58.3332 53.3327C55.5665 53.3327 53.3332 51.0993 53.3332 48.3327C53.3332 45.566 55.5665 43.3327 58.3332 43.3327C61.0999 43.3327 63.3332 45.566 63.3332 48.3327C63.3332 51.0993 61.0999 53.3327 58.3332 53.3327ZM16.6665 36.666L21.6665 21.666H58.3332L63.3332 36.666H16.6665Z"
                      fill="#BF9D7D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_1989">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="fs-7 fs-lg-5 fwv-700 mt-4 mb-2">自行開車</h3>
                <p className="fs-8 fs-lg-7 fwv-500 lh-base">
                  如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                </p>
              </div>
              <div className="col-16 col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <g clipPath="url(#clip0_31_1994)">
                    <path
                      d="M40 6.6665C26.6667 6.6665 13.3334 8.33317 13.3334 19.9998V51.6665C13.3334 58.0998 18.5667 63.3332 25 63.3332L20 68.3332V69.9998H27.4334L34.1 63.3332H46.6667L53.3334 69.9998H60V68.3332L55 63.3332C61.4334 63.3332 66.6667 58.0998 66.6667 51.6665V19.9998C66.6667 8.33317 54.7334 6.6665 40 6.6665ZM25 56.6665C22.2334 56.6665 20 54.4332 20 51.6665C20 48.8998 22.2334 46.6665 25 46.6665C27.7667 46.6665 30 48.8998 30 51.6665C30 54.4332 27.7667 56.6665 25 56.6665ZM36.6667 33.3332H20V19.9998H36.6667V33.3332ZM43.3334 33.3332V19.9998H60V33.3332H43.3334ZM55 56.6665C52.2334 56.6665 50 54.4332 50 51.6665C50 48.8998 52.2334 46.6665 55 46.6665C57.7667 46.6665 60 48.8998 60 51.6665C60 54.4332 57.7667 56.6665 55 56.6665Z"
                      fill="#BF9D7D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_1994">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="fs-7 fs-lg-5 fwv-700 mt-4 mb-2">高鐵/火車</h3>
                <p className="fs-8 fs-lg-7 fwv-500 lh-base">
                  如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                </p>
              </div>
              <div className="col-16 col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M53.3332 20L63.3332 33.3333H69.9999C73.6999 33.3333 76.6666 36.3 76.6666 40V50H69.9999C69.9999 52.6522 68.9463 55.1957 67.071 57.0711C65.1956 58.9464 62.6521 60 59.9999 60C57.3477 60 54.8042 58.9464 52.9288 57.0711C51.0535 55.1957 49.9999 52.6522 49.9999 50H29.9999C29.9999 52.6522 28.9463 55.1957 27.071 57.0711C25.1956 58.9464 22.6521 60 19.9999 60C17.3478 60 14.8042 58.9464 12.9289 57.0711C11.0535 55.1957 9.99992 52.6522 9.99992 50H3.33325V40C3.33325 36.3 6.29992 33.3333 9.99992 33.3333L19.9999 20H53.3332ZM34.9999 25H22.4999L16.1999 33.3333H34.9999V25ZM39.9999 25V33.3333H57.1332L50.8332 25H39.9999ZM19.9999 45C18.6738 45 17.4021 45.5268 16.4644 46.4645C15.5267 47.4021 14.9999 48.6739 14.9999 50C14.9999 51.3261 15.5267 52.5978 16.4644 53.5355C17.4021 54.4732 18.6738 55 19.9999 55C21.326 55 22.5978 54.4732 23.5355 53.5355C24.4731 52.5978 24.9999 51.3261 24.9999 50C24.9999 48.6739 24.4731 47.4021 23.5355 46.4645C22.5978 45.5268 21.326 45 19.9999 45ZM59.9999 45C58.6738 45 57.4021 45.5268 56.4644 46.4645C55.5267 47.4021 54.9999 48.6739 54.9999 50C54.9999 51.3261 55.5267 52.5978 56.4644 53.5355C57.4021 54.4732 58.6738 55 59.9999 55C61.326 55 62.5978 54.4732 63.5354 53.5355C64.4731 52.5978 64.9999 51.3261 64.9999 50C64.9999 48.6739 64.4731 47.4021 63.5354 46.4645C62.5978 45.5268 61.326 45 59.9999 45Z"
                    fill="#BF9D7D"
                  />
                </svg>
                <h3 className="fs-7 fs-lg-5 fwv-700 mt-4 mb-2">禮賓車服務</h3>
                <p className="fs-8 fs-lg-7 fwv-500 lh-base">
                  承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img src="../assets/images/pc/line3.png" /> */}
      </div>
      {/* End of 交通方式  */}
    </>
  );
}

export default Dashboard;
