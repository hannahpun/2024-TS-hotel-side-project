import logo from "@assets/images/pc/logo.png";
import line from "@assets/images/bi_line.png";
import Group from "@assets/images/Group.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container pt-20 pb-20 pt-lg-40 pb-lg-40">
        {/*Start of Top Block*/}
        <div className="d-lg-flex flex-row justify-content-between mb-20">
          {/*Start of LOGO Block*/}
          <div className="">
            <div className="d-flex flex-column mb-10">
              <img
                src={logo}
                style={{ width: "196px" }}
                alt="圖片1"
                className=""
              />
              {/*<img src="../assets/images/Enjoyment Luxury Hotel.png" alt="圖片1" className=""> */}
            </div>
            <ul className="list-unstyled d-flex mb-10">
              <li className="">
                <a href="#">
                  <img
                    src={line}
                    className="rounded-circle border border-1 border-white p-2"
                    alt="line"
                  />
                </a>
              </li>
              <li className="ms-4">
                <a href="#">
                  <img
                    src={Group}
                    className="rounded-circle border border-1 border-white p-2"
                    alt="group"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/*End of LOGO Block*/}

          {/*Start of Contact Block*/}
          <div className="d-lg-flex flex-row">
            <div className="mb-4 me-lg-20">
              <p className="fs-6 mb-2">TEL</p>
              <p className="fs-6 mb-4 mb-lg-10">
                <a href="tel:+886-7-1234567" className="text-light">
                  +886-7-1234567
                </a>
              </p>
              <p className="fs-6 mb-lg-2">FAX</p>
              <p className="fs-6">
                <a href="tel:+886-7-1234567" className="text-light">
                  +886-7-1234567
                </a>
              </p>
            </div>
            <div className="">
              <p className="fs-6 mb-2">MAIL</p>
              <p className="fs-6 mb-4 mb-lg-10">
                <a href="mailto:elh@hexschool.com" className="text-light">
                  elh@hexschool.com
                </a>
              </p>
              <p className="fs-6 mb-2">WEB</p>
              <p className="fs-6">
                <a
                  href="https://www.elhhexschool.com.tw"
                  className="text-light"
                >
                  www.elhhexschool.com.tw
                </a>
              </p>
            </div>
          </div>
          {/*End of Contact Block*/}
        </div>
        {/*End of Top Block*/}

        {/*Start of Bottom Block*/}
        <div className="d-lg-flex flex-row justify-content-between">
          <p className="fs-8 fs-lg-7 fwv-400 fwv-lg-500 lh-base mb-4 mb-lg-0">
            806023 台灣高雄市新興區六角路123號{" "}
          </p>
          <p className="fs-8 fs-lg-7 fwv-400 fwv-lg-500 lh-base">
            © 享樂酒店 2023 All Rights Reserved.
          </p>
        </div>
        {/*End of Bottom Block*/}
      </div>
    </footer>
  );
}

export default Footer;
