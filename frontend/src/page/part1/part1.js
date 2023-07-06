import Sidebar from "../../component/Sidebar/sideBar";
import Header from "../../component/Header/header";
import "../part1/part1.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

function Part1() {
  // const [tests, setTest] = useState([])

  // const getdataTest = () => {
  //   axios.get('http://localhost:8080/api/test')
  //   .then((response) =>{
  //       console.log("Gọi dữ liệu test ");
  //       setTest(response.data);
  //   })
  // }

  // window.addEventListener('load', function () {
  //   getdataTest()
  // })

    function getPageTest() {
      window.location.href = '/practice/part1/test1'
    }


  return (
    <>
      <div className="bodys">
        <Sidebar />
        <article className="WrapperTest">
          <h2 className="namePart">Part 1 : Mô tả tranh</h2>
          <div className="itemsTest">
            {/* <div className="test"></div> */}
            {/* {tests.map((test) => (
              <div onClick={getPageTest} key={test.id} className="test">{test.NameTest}</div>
            ))} */}
            <div className="card" onClick={getPageTest}>
              <div className="card-image"></div>
              <div className="category"> Test 1 </div>
              <div className="heading">
                {" "}
                You must answer all question
                <div className="author">
                  <FontAwesomeIcon className="iconEye" icon={faEye} style={{color: "#8d929a",}} />
                  <span className="numPerson">123,154</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Test 2 </div>
              <div className="heading">
                {" "}
                You must answer all question
                <div className="author">
                  <FontAwesomeIcon className="iconEye" icon={faEye} style={{color: "#8d929a",}} />
                  <span className="numPerson">123,154</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Test 3 </div>
              <div className="heading">
                {" "}  
                You must answer all question
                <div className="author">
                  <FontAwesomeIcon className="iconEye" icon={faEye} style={{color: "#8d929a",}} />
                  <span className="numPerson">123,154</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Test 4 </div>
              <div className="heading">
                {" "}
                You must answer all question
                <div className="author">
                  <FontAwesomeIcon className="iconEye" icon={faEye} style={{color: "#8d929a",}} />
                  <span className="numPerson">123,154</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Test 5 </div>
              <div className="heading">
                {" "}
                You must answer all question
                <div className="author">
                  <FontAwesomeIcon className="iconEye" icon={faEye} style={{color: "#8d929a",}} />
                  <span className="numPerson">123,154</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Part1;
