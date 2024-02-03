export function RoomCarousel({
  index,
  images,
}: {
  index: number;
  images: string[];
}) {
  const carouselId = `roomCarousel${index}`;
  const imgs = images.map((img, i) => {
    let className = "carousel-item w-100 ";
    className = className + (i == 0 ? "active" : "");
    return (
      <div className={className} key={i}>
        <img src={img} className="rounded-start img-fluid" alt="" />
      </div>
    );
  });
  const indicators = images.map((img, i) => {
    const className = i == 0 ? "active" : "";
    return (
      <button
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide-to={i}
        data-img={img}
        className={className}
        key={i}
      ></button>
    );
  });
  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">{indicators}</div>
      <div className="carousel-inner">{imgs}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
