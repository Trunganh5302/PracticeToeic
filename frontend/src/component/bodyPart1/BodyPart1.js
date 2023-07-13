import React from "react";
import '../bodyPart1/BodyPart.css'

export default function BodyPart1() {
    return (
        <article className="Wrapper_test">
            <div className="LeftBody">
                <div className="WrapperImageTest">
                    <img className="imageTest" src={require("/CODE/Linh tinh/Toeic/frontend/src/public/image/new-image.jpg")}></img>
                </div>
                <div className="audioTest"> 
                    <audio controls>
                        <source src={require("/CODE/Linh tinh/Toeic/frontend/src/public/raw/test.mp3")} type="audio/mpeg"></source>
                    </audio>
                </div>
            </div>
            <div className="RightBody">
                <ul className="answer">
                    <li>A:</li>
                    <li>B:</li>
                    <li>C:</li>
                    <li>D:</li>
                </ul>
            </div>
        </article>
    )
}