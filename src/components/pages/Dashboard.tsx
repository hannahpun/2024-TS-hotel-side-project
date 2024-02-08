import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import fakeNews from "@/data/fakeData/news";
import fakeFood from "@/data/fakeData/culinary";
import Loading from "@components/atoms/Loading";
import "swiper/css";
import { Link } from "react-router-dom";
import { Maybe } from "@/types/helpers";
import room1 from "@assets/images/pc/room1.png";
import map from "@assets/images/pc/map.png";
import banner from "@assets/images/pc/banner.png";
import about from "@assets/images/pc/about.png";
function Dashboard() {
  // data
  const [newsData, setNewsData] =
    useState<Maybe<(typeof fakeNews)["result"]>>(null);
  // const [roomsData, setRoomsData] =
  //   useState<Maybe<(typeof fakeRooms)["result"]>>(null);
  const [foodData, setFoodData] =
    useState<Maybe<(typeof fakeFood)["result"]>>(null);

  // Loading
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // 取得 news 資料
      const newsRes = await fetch(
        `https://freyja-uj95.onrender.com/api/v1/home/news`
      );
      const newsData: typeof fakeNews = await newsRes.json();
      setNewsData(newsData.result);

      // 取得 rooms 資料
      // const roomsRes = await fetch(`https://freyja-uj95.onrender.com/api/v1/rooms`);
      // const roomsData: typeof fakeRooms = await roomsRes.json();
      // setRoomsData(roomsData.result);

      // 取得 food 資料
      const foodRes = await fetch(
        `https://freyja-uj95.onrender.com/api/v1/home/culinary`
      );
      const foodData: typeof fakeFood = await foodRes.json();
      setFoodData(foodData.result);

      setSpinner(false);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Start of Banner*/}
      <div className="banner-card">
        {/* <div className="shadowlayer"></div> */}
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
            <div className="carousel-item active" style={{ height: "100vh" }}>
              {/* start of 行動載具用 */}
              <div className="d-md-none">
                {/* <h1 className="text-primary">行動載具用</h1> */}
                <div
                  className=""
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    marginTop: "112px",
                    marginBottom: "166px",
                  }}
                >
                  <div className="">
                    <div
                      className="text-center"
                      style={{ width: "400px", marginBottom: "40px" }}
                    >
                      <h2 className="text-primary" style={{ fontSize: "28px" }}>
                        享樂酒店
                      </h2>
                      <h4 className="text-primary" style={{ fontSize: "16px" }}>
                        Enjoyment Luxury Hotel
                      </h4>
                      <svg
                        width="3"
                        height="83"
                        viewBox="0 0 3 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="1.5"
                          y1="1"
                          x2="1.5"
                          y2="82"
                          stroke="url(#paint0_linear_35_4784)"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_35_4784"
                            x1="0.5"
                            y1="0"
                            x2="0.499996"
                            y2="83"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BE9C7C" />
                            <stop offset="1" stop-color="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="" style={{}}>
                      <div
                        className="overlay_sm"
                        style={{
                          position: "absolute",
                          marginLeft: "64px",
                          marginBottom: "20px",
                        }}
                      ></div>
                      <div
                        className="text-white "
                        style={{
                          position: "absolute",
                          width: "309px",
                          marginLeft: "26px",
                        }}
                      >
                        <h2 className="" style={{ fontSize: "48px" }}>
                          高雄 <br />
                          豪華住宿之選
                        </h2>
                        <h3 className="" style={{ fontSize: "24px" }}>
                          我們致力於為您提供無與倫比的奢華體驗與優質服務
                        </h3>
                        <Link
                          to="/room"
                          style={{
                            height: "65px",
                            width: "90%",
                          }}
                          className="w-60 mt-10 bg-white text-primary rounded d-flex justify-content-end align-items-center"
                        >
                          <h5 className="me-2 text-dark">立即訂房</h5>
                          <div
                            className="border"
                            style={{ width: "150px" }}
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of 行動載具用 */}

              {/* start of 一般裝置用*/}
              <div className="d-none d-md-block">
                <div
                  className=""
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    marginLeft: "80px",
                    marginTop: "236px",
                    marginBottom: "166px",
                  }}
                >
                  {/* <h1 className="text-primary">一般裝置用</h1> */}
                  <div className="d-flex">
                    <div className="" style={{ width: "636px" }}>
                      <h2 className="text-primary">享樂酒店</h2>
                      <h4 className="text-primary pb-8">
                        Enjoyment Luxury Hotel
                      </h4>
                      <svg
                        width="636"
                        height="3"
                        viewBox="0 0 636 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="1"
                          y1="1.5"
                          x2="635"
                          y2="1.5"
                          stroke="url(#paint0_linear_488_4554)"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_488_4554"
                            x1="0"
                            y1="2.5"
                            x2="636"
                            y2="2.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BE9C7C" />
                            <stop offset="1" stop-color="white" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className=""
                      style={{ marginLeft: "200px", width: "678px" }}
                    >
                      <div
                        className="overlay_lg"
                        style={{ position: "absolute" }}
                      ></div>
                      <div
                        className="text-white"
                        style={{ position: "absolute", marginLeft: "-85px" }}
                      >
                        <h2 className="pb-5" style={{ fontSize: "100px" }}>
                          高雄 <br />
                          豪華住宿之選
                        </h2>
                        <h3 className="" style={{ fontSize: "32px" }}>
                          我們致力於為您提供無與倫比的奢華體驗與優質服務
                        </h3>
                        <Link
                          to="/room"
                          style={{
                            height: "65px",
                            width: "90%",
                          }}
                          className="w-60 mt-10 bg-white text-primary rounded d-flex justify-content-end align-items-center"
                        >
                          <h5 className="me-2 text-dark">立即訂房</h5>
                          <div
                            className="border"
                            style={{ width: "150px" }}
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of 一般裝置用*/}

              <img src={banner} height="100vh" alt="banner" />
            </div>
            {/* <div className="carousel-item">
              <img src={banner} width="100%" height="100%" alt="banner" />
            </div> */}
            {/* <div className="carousel-item">
              <img src={banner} width="100%" height="100%" alt="banner" />
            </div> */}
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      {/* End of Banner*/}
      {spinner ? (
        <div className="news-card py-10">
          <Loading />
        </div>
      ) : (
        <>
          {/* Start of 最新消息 */}
          <div className="news-card">
            <div className="container py-20 d-lg-flex flex-sm-row">
              <div className="row">
                <div className="col-md-2 col-12">
                  <h2 className="text-primary pb-10">
                    最新
                    <br />
                    消息
                  </h2>
                </div>
                <ul
                  className="col-md-10 col-12"
                  style={{ listStyleType: "none" }}
                >
                  {newsData?.slice(0, 3).map((news) => (
                    <li className="row mb-10">
                      <div className="col-12 col-md-5">
                        <img
                          src={news.image}
                          className="rounded"
                          alt="秋季旅遊，豪華享受方案"
                        />
                      </div>

                      <div className="col-12 col-md-7 d-flex flex-column align-self-center">
                        <h3 className="pt-lg-0 pt-5 fs-lg-3 fwv-700 text-dark mb-2 mb-lg-6">
                          {news.title}
                        </h3>
                        <p className="fs-lg-7 fwv-500 lh-base text-dark">
                          {news.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* END of 最新消息 */}

          {/* Start of 關於我們 */}
          <div className="mt-20 w-100 bg-black">
            <div
              className="w-100"
              style={{
                height: "672px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${about})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-10 offset-md-2 h-100">
                    <div style={{ position: "relative", height: "550px" }}>
                      <div
                        className="border mt-5 p-10"
                        style={{
                          borderRadius: "55px 55px 0 55px",
                          backgroundImage:
                            "linear-gradient(to bottom, #140F0A, #BE9C7C)",
                          position: "absolute",
                          bottom: "-50px",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <h2 className="me-5 text-white">
                            關於
                            <br />
                            我們
                          </h2>
                          <div className="border w-25"></div>
                        </div>

                        <div className="mt-4 text-white">
                          <div>
                            <p>
                              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                              <br />
                              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                            </p>
                          </div>
                          <div className="mt-5">
                            <p>
                              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。{" "}
                              <br />
                              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                            </p>
                          </div>
                          <div className="mt-5">
                            <p>
                              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
                            </p>
                          </div>
                          <div className="mt-5">
                            <p>
                              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of 關於我們 */}

          {/* Start of 尊貴雙人房 */}
          <div
            style={{
              position: "relative",
              marginLeft: "15px",
              marginRight: "15px",
            }}
            className="bg-black "
          >
            <div
              className="row"
              style={{
                zIndex: 10,
                position: "relative",
                paddingTop: "120px",
                paddingBottom: "120px",
              }}
            >
              <div className="col-12 col-md-5">
                <div
                  className="carousel slide"
                  id="carouselAbout"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselAbout"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselAbout"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={room1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={room1} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column justify-content-around h-100">
                  <div className="col-xs-12 h-100 pt-5">
                    <img
                      className="d-block w-100"
                      style={{ height: "178px" }}
                      src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/master/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png"
                      alt=""
                    />
                  </div>
                  <div className="w-75 ps-10">
                    <div className="text-white">
                      <h4>尊爵雙人房</h4>
                      <p>
                        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                      </p>
                      <h4 className="mt-5">NT$ 10,000</h4>
                      <div
                        style={{ height: "65px" }}
                        className="mt-3 fs-4 bg-white text-dark rounded d-flex justify-content-end align-items-center"
                      >
                        <Link to="/room" className="me-2 text-dark">
                          查看更多
                        </Link>
                        <div
                          className="border"
                          style={{ width: "150px" }}
                        ></div>
                      </div>
                      <div className="mt-3 d-flex justify-content-end">
                        <a href="#" className="text-white">
                          <i className="bi bi-arrow-left"></i>
                        </a>
                        <a href="#" className="text-white">
                          <i
                            className="bi bi-arrow-right ms-3"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              style={{ position: "absolute", bottom: "0" }}
              className="d-block w-100"
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/master/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/bg.png"
              alt=""
            /> */}
          </div>

          {/* End of 尊貴雙人房 */}

          {/* Start of 佳餚美饌 */}
          <div className="food">
            <div className="container py-20">
              <div className="">
                {/* 線條紋路*/}

                {/* 圖片輪播*/}
                <div className="">
                  <h2 className="mb-10 text-primary">
                    佳餚
                    <br />
                    美饌
                  </h2>

                  {/* Slider main container */}
                  <div className="foodSwiper">
                    {/* Slides */}
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        480: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                      }}
                    >
                      {foodData?.map((food) => (
                        <SwiperSlide>
                          <div className="swiper-slide">
                            {/* 這邊是放要輪播的內容 */}
                            <div className="card">
                              <div className="d-flex " style={{ gap: "24px" }}>
                                <div
                                  className="d-flex align-items-end"
                                  style={{
                                    width: "100%",
                                    height: "600px",
                                    borderRadius: "15px",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(${food.image})`,
                                  }}
                                >
                                  <div
                                    className="p-5"
                                    style={{
                                      width: "100%",
                                      color: "#fff",
                                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    }}
                                  >
                                    <div className="mb-5 d-flex align-items-center justify-content-between">
                                      <h4>{food.title}</h4>
                                      <div
                                        className="d-flex justify-content-between"
                                        style={{ width: "200px" }}
                                      >
                                        <div>SUN-MON</div>
                                        <div>11:00 - 20:30</div>
                                      </div>
                                    </div>
                                    <p>{food.description}</p>
                                  </div>
                                </div>
                              </div>
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
            <div className="container py-20">
              <h2 className="text-primary">
                交通
                <br />
                方式
              </h2>
              <p className="fs-7 fwv-700 text-custom-neutral-0 mt-5 mb-4">
                台灣高雄市新興區六角路123號
              </p>
              <img
                src={map}
                style={{ width: "100%" }}
                alt="圖片1"
                className=""
              />
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
                  <h3 className="fs-7 fs-lg-5 fwv-700 text-custom-neutral-0 mt-4 mb-2">
                    自行開車
                  </h3>
                  <p className="fs-8 fs-lg-7 fwv-500 text-custom-neutral-0 lh-base">
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
                  <h3 className="fs-7 fs-lg-5 fwv-700 text-custom-neutral-0 mt-4 mb-2">
                    高鐵/火車
                  </h3>
                  <p className="fs-8 fs-lg-7 fwv-500 text-custom-neutral-0 lh-base">
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
                  <h3 className="fs-7 fs-lg-5 fwv-700 text-custom-neutral-0 mt-4 mb-2">
                    禮賓車服務
                  </h3>
                  <p className="fs-8 fs-lg-7 fwv-500 text-custom-neutral-0 lh-base">
                    承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black">
              <img
                className="d-block w-100"
                src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/master/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png"
                alt=""
              />
            </div>
          </div>
          {/* End of 交通方式  */}
        </>
      )}
    </>
  );
}

export default Dashboard;
