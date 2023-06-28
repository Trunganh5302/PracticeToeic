import React from "react";
import "../home/home.css";
import Header from "../../component/Header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHandSparkles,
  faFire,
  faClipboardCheck,
  faClock,
  faClockFour
} from "@fortawesome/free-solid-svg-icons";
import image from "../home/image/oke.svg";
import Footer from "../../component/Footer/footer";


function HomePage() {
  return (
    <div>
      <Header />
      <div className="Banner">
        <div className="Left">
          <h1 className="tittleBanner">Luyện thi thử TOEIC online 2023</h1>
          <p className="contentBanner">
            Chào mừng đến với TOEIC Test Pro, trang web/ ứng dụng TOEIC cung cấp
            cho người học các bài luyện tập theo từng part, đề thi thử cũng như
            các bài tập về từ vựng và ngữ pháp. Bắt đầu hành trình chinh phục
            chứng chỉ TOEIC với các bài luyện tập trên trang web/ứng dụng của
            chúng tôi ngay hôm nay!{" "}
          </p>
          <button className="buttonDownload">
            <span className="buttonContent">Download now</span>
          </button>
        </div>
        <div className="Right">
          <img
            className="imageBanner"
            src={require("/CODE/Linh tinh/Toeic/frontend/src/public/image/code.png")}
            alt="ImageBanner"
          />
        </div>
      </div>
      <hr></hr>
      <div className="Reson">
        <h1 className="resonTittle">
          Lý do bạn nên ôn luyện thi Toeic ngay bây giờ
        </h1>
        <div className="wrapperReson">
          <div className="left">
            <div className="reson">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{
                    "--fa-primary-color": "#4fbdc4",
                    "--fa-secondary-color": "#60e2eb",
                  }}
                />
              </div>
              <div className="contentReson">
                <h3 className="titleContent">Cải thiện cơ hội nghề nghiệp</h3>
                <p className="contents">
                  TOEIC là một trong những bài kiểm tra phổ biến nhất để đánh
                  giá trình độ tiếng Anh trong môi trường làm việc. Một số công
                  ty yêu cầu ứng viên có điểm TOEIC nhất định khi tuyển dụng
                  hoặc thăng chức. Vì vậy, việc nắm vững tiếng Anh qua kỳ thi
                  này có thể mở ra nhiều cơ hội nghề nghiệp tốt hơn.
                </p>
              </div>
            </div>

            <div className="reson">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  style={{ color: "#238b24" }}
                />
              </div>
              <div className="contentReson">
                <h3 className="titleContent">Đánh giá trình độ tiếng anh</h3>
                <p className="contents">
                  TOEIC cung cấp một phương tiện đánh giá đáng tin cậy về trình
                  độ tiếng Anh của bạn. Kết quả từ bài kiểm tra này sẽ giúp bạn
                  biết được điểm mạnh và điểm yếu của mình trong việc sử dụng
                  tiếng Anh, từ đó tập trung vào các kỹ năng cần cải thiện.
                </p>
              </div>
            </div>
          </div>
          <div className="center">
            <img
              src="https://moneyveo.vn/images/HowItWorks/HowItWorks2.png"
              alt=""
            ></img>
          </div>
          <div className="right">
            <div className="reson">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faHandSparkles}
                  style={{ color: "#8ab5ff" }}
                />
              </div>
              <div className="contentReson">
                <h3 className="titleContent">Đạt được mục tiêu cá nhân</h3>
                <p className="contents">
                  Một số người học có mục tiêu cá nhân như du học, làm việc ở
                  nước ngoài hoặc giao tiếp tự tin trong môi trường quốc tế. Ôn
                  luyện thi TOEIC giúp bạn đạt được những mục tiêu này và tự tin
                  hơn khi sử dụng tiếng Anh trong các tình huống thực tế.
                </p>
              </div>
            </div>

            <div className="reson">
              <div className="icon">
                <FontAwesomeIcon icon={faFire} style={{ color: "#ff8929" }} />
              </div>
              <div className="contentReson">
                <h3 className="titleContent">Nâng cao khả năng giao tiếp</h3>
                <p className="contents">
                  Thi TOEIC giúp bạn rèn luyện kỹ năng nghe và đọc tiếng Anh,
                  cải thiện khả năng hiểu và sử dụng ngôn ngữ trong giao tiếp
                  hàng ngày. Điều này rất hữu ích trong công việc, học tập và
                  các tình huống giao tiếp khác.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h1 className="tittleService">
          Đáp ứng mọi nhu cầu từ khắp nơi trên thế giới
        </h1>
      <div className="service">
        
        <div className="serviceCard">
          <img src={image} alt=""></img>
          <h3 className="titleCard">Thuận tiện</h3>
          <p className="contentCard">
            Làm bài thi trực tuyến bất cứ nơi đâu, bất kỳ lúc nào - không cần di
            chuyển tới điểm thi hay đợi xếp lịch thi
          </p>
        </div>

        <div className="serviceCard">
          <img src={image} alt=""></img>
          <h3 className="titleCard">Nhanh chóng</h3>
          <p className="contentCard">
            Nhận kết quả trong vòng 2 ngày sau khi thi xong và ngay lập tức chia
            sẻ kết quả với bất cứ ai
          </p>
        </div>

        <div className="serviceCard">
          <img src={image} alt=""></img>
          <h3 className="titleCard">Chi phí phải chăng</h3>
          <p className="contentCard">
            Mức giá thấp hơn hẳn các kỳ thi khác. Thoải mái gửi miễn phí kết quả
            tới bao nhiêu tổ chức tùy thích!
          </p>
        </div>
      </div>

      <div className="Map">
        <div className="leftMap">
          <h2 className="tittleMap">Kết quả chính xác trong giây lát</h2>
          <div className="contentMap">
            <div className="section">
            <FontAwesomeIcon className="iconMap" icon={faClock} style={{color: "#ce3bb3",}} />
              <div className="wrapperSection">
              <h4 className="titleSection">Bài thi linh hoạt</h4>
              <p className="contentSection">Chuỗi các câu hỏi khác nhau để đánh giá kỹ năng tiếng Anh của bạn.</p>
              </div>
            </div>

            <div className="section">
            <FontAwesomeIcon className="iconMap" icon={faClockFour} style={{color: "#ce3bb3",}} />
              <div className="wrapperSection">
              <h4 className="titleSection">Listening sample và Reading sample</h4>
              <p className="contentSection">Những câu hỏi mô phỏng bám sát trong các đề thi được trình bày chi tiết.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightMap">
          <img src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/060e8f82f5cbe6aebee8.svg" alt=""></img>
        </div>
      </div>

      <Footer />  
    </div>
  );
}

export default HomePage;
