import Sidebar from "../../component/Sidebar/sideBar";
import Header from "../../component/Header/header";
import "../part1/part1.css";
import { useState } from "react";
import axios from "axios";

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

  // function getPageTest() {
  //   window.location.href = '/practice/part1/test1'
  // }

  return (
    <>
      <div className="bodys">
        <Sidebar />
        <article className="WrapperTest">
          <h2>Part 1 : Mô tả tranh</h2>
          <div className="itemsTest">
            {/* <div className="test"></div> */}
            {/* {tests.map((test) => (
              <div onClick={getPageTest} key={test.id} className="test">{test.NameTest}</div>
            ))} */}
            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Illustration </div>
              <div className="heading">
                {" "}
                A heading that must span over two lines
                <div className="author">
                  {" "}
                  By <span className="name">Abi</span> 4 days ago
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Illustration </div>
              <div className="heading">
                {" "}
                A heading that must span over two lines
                <div className="author">
                  {" "}
                  By <span className="name">Abi</span> 4 days ago
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Illustration </div>
              <div className="heading">
                {" "}
                A heading that must span over two lines
                <div className="author">
                  {" "}
                  By <span className="name">Abi</span> 4 days ago
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image"></div>
              <div className="category"> Illustration </div>
              <div className="heading">
                {" "}
                A heading that must span over two lines
                <div className="author">
                  {" "}
                  By <span className="name">Abi</span> 4 days ago
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
