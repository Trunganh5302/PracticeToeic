import Header from "../../component/Header/header";
import { useState } from "react";
import "../Practice/practice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Practice() {
  const [partData, setPartData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  

  const GetDataPart = () => {
    axios
      .get("http://localhost:8080/api/part")
      .then((response) => {
        console.log("Gọi dữ liệu part ");
        setPartData(response.data.datas);
        setQuestionData(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  window.addEventListener("load", function () {
    GetDataPart();
  });

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
            {partData.map((part) => (
              <button key={part.id} className="practiceLessson_btn">{part.NamePart}</button>
            ))}
          </div>

          <div className="practiceDetail">
            <a href="/practice/listenRead"  className="practiceLessson_btnMoreLR">More detail </a>
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
            {questionData.map(question => (
              <button key={question.id} className="practiceLessson_btnWS">{question.NameQuestion}</button>
            ))}
          </div>
          <div className="practiceDetail">
            <a className="practiceLessson_btnMore">More detail </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;
