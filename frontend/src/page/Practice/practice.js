import Header from "../../component/Header/header";
import "../Practice/practice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";

function Practice() {
  return (
    <>
      <Header />
      <div className="infor">
        <h1 className="titleInfor">Lộ trình học</h1>
        <p className="contentInfor">
          Lộ trình học nghe và đọc có thể được tùy chỉnh tùy theo mục tiêu cá
          nhân của bạn và cấp độ hiện tại. Tuy nhiên, dưới đây là một lộ trình
          cơ bản mà bạn có thể áp dụng để nâng cao kỹ năng nghe và đọc của mình
        </p>
      </div>

      <div className="wrapperPractice">
        <div className="practiceLR">
          <div className="practiceInfor">
            <div className="practiceInfor_tittle">
              <h4>Pratice Listening, Reading</h4>
              <p>
                Thực hành nghe và đọc hàng ngày, sử dụng đa dạng tài liệu, tập
                trung vào hiểu nghĩa tổng thể, ghi chú và tái hiện lại để tăng
                kỹ năng tiếng Anh.
              </p>
            </div>
            <div className="praticeInfor_Image">
              <FontAwesomeIcon icon={faRadio} style={{ color: "#e74023" }} />
            </div>
          </div>
          <div className="practiceLessson">
            <button className="practiceLessson_btn">Part 1</button>
            <button className="practiceLessson_btn">Part 2</button>
            <button className="practiceLessson_btn">Part 3</button>
            <button className="practiceLessson_btn">Part 4</button>
            <button className="practiceLessson_btn">Part 5</button>
            <button className="practiceLessson_btn">Part 6</button>
            <button className="practiceLessson_btn">Part 7</button>
          </div>
          <div className="practiceDetail">
            <button className="practiceLessson_btn">More detail </button>
          </div>
        </div>
        <div className="practiceWS">
        <div className="practiceInfor">
            <div className="practiceInfor_tittle">
              <h4>Pratice Listening, Reading</h4>
              <p>
                Thực hành nghe và đọc hàng ngày, sử dụng đa dạng tài liệu, tập
                trung vào hiểu nghĩa tổng thể, ghi chú và tái hiện lại để tăng
                kỹ năng tiếng Anh.
              </p>
            </div>
            <div className="praticeInfor_Image">
              <FontAwesomeIcon icon={faRadio} style={{ color: "#e74023" }} />
            </div>
          </div>
          <div className="practiceLessson">
            <button className="practiceLessson_btnWS">Question 1-2</button>
            <button className="practiceLessson_btnWS">Question 3-4</button>
            <button className="practiceLessson_btnWS">Question 5-7</button>
            <button className="practiceLessson_btnWS">Question 8-10</button>
            <button className="practiceLessson_btnWS">Question 11</button>
            <button className="practiceLessson_btnWS">Question 1-5</button>
            <button className="practiceLessson_btnWS">Question 6-7</button>
            <button className="practiceLessson_btnWS">Question 8</button>
          </div>
          <div className="practiceDetail">
            <button className="practiceLessson_btn">More detail </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;
