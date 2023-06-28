import Header from "../../component/Header/header"
import '../detailPracticeLR/detailPracticeLR.css'
import Footer from "../../component/Footer/footer"

function PracticeLR() {
    return(
        <>
            <Header />
            <div className="wrapperPractices">
                <div className="LR">
                <h2 className="PracticeTitle">Practice Listening and Reading</h2>
                <p className="PracticeContent">Để đạt điểm cao trong kỳ thi TOEIC, không có cách nào hiệu quả hơn việc luyện thi TOEIC online hàng ngày. Việc làm các bài luyện tập theo từng phần sẽ giúp bạn biết rõ cấu trúc của từng phần cũng như trình độ hiện tại của mình. Sau đó bạn có thể xây dựng một lộ trình học tập phù hợp.</p>
                <i className="PracticeNote">Các khóa bài tập có thể chưa hoàn thiện thì chúng tôi đang cố gắng hoàn thiện sớm nhất.</i>
                </div>

 
                <div className="Litening">
                <br/> 
                    <h3 className="LiteningTitle">1. Listening</h3>
                    <p>Phần Listening (Nghe hiểu): gồm 4 phần (từ Part 1 đến Part 4) với 100 câu làm trong thời gian là 45 phút. Thí sinh lần lượt nghe từ Part 1 đến Part 4. Khi kết thúc phần Listening bạn sẽ được thông báo. <br/> <br/>Khác với nhiều kỳ thi khác, giọng đọc trong bài thi TOEIC là của nhiều nước nói tiếng Anh, trải đều từ Mỹ, Canada, Anh đến cả Úc và New Zealand. Do đó mà để làm tốt phần Listening, trong quá trình luyện nghe TOEIC, bạn phải chịu khó luyện nghe thêm cả giọng Anh và Úc thì mới tự tin làm bài được</p>
                </div>

                <div className="PartLesson">
                    <div className="Part">
                        <h2>Part 1</h2>
                        <h4>Mô tả tranh</h4>
                        <p>Thí sinh sẽ nghe 1 lần duy nhất 4 câu mô tả về một bức tranh. Sau đó chọn 1 đáp án mô tả đúng nhất bức tranh đó.</p>
                    </div>

                    <div className="Part">
                        <h2>Part 2</h2>
                        <h4>Hỏi - Đáp</h4>
                        <p>Thí sinh sẽ nghe 1 lần duy nhất 3 câu hồi đáp cho 1 câu hỏi hoặc 1 câu nói. Sau đó chọn câu hồi đáp phù hợp nhất.</p>
                    </div>

                    <div className="Part">
                        <h2>Part 3</h2>
                        <h4>Đoạn hội thoại</h4>
                        <p>Thí sinh sẽ nghe 1 lần duy nhất các đoạn hội thoại giữa 2 hoặc 3 người. Mỗi đoạn hội thoại sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
                    </div>

                    <div className="Part">
                        <h2>Part 4</h2>
                        <h4>Bài  nói ngắn</h4>
                        <p>Thí sinh sẽ nghe 1 lần duy nhất các bài nói ngắn. Mỗi bài sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
                    </div>
                </div>


                <div className="Reading">
                <br/> 
                    <h3 className="ReadingTitle">2. Reading</h3>
                    <p>Phần Reading (Đọc hiểu): gồm 3 phần (từ Part 5 đến Part 7) với 100 câu làm trong thời gian là 75 phút. Dù đề thi TOEIC trình bày các câu hỏi theo thứ tự từ Part 5 đến Part 7, nhưng trong phần Reading này thí sinh được phép làm bất cứ câu nào trước cũng được</p>
                </div>

                <div className="PartLesson">
                    <div className="Part">
                        <h2>Part 5</h2>
                        <h4>Hoàn thành câu</h4>
                        <p>Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu</p>
                    </div>

                    <div className="Part">
                        <h2>Part 6</h2>
                        <h4>Hoàn thành đoạn văn</h4>
                        <p>Chọn đáp án đúng nhất trong 4 đáp án (Từ, cụm từ hoặc câu). Để hoàn thành đoạn văn. Mỗi đoạn văn sẽ có 4 câu hỏi.</p>
                    </div>

                    <div className="Part">
                        <h2>Part 7</h2>
                        <h4>Đọc - Hiểu</h4>
                        <p>Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 2 - 5 câu hỏi.</p>
                    </div>
                </div>

                <p>Để đạt điểm cao trong kỳ thi TOEIC, không có cách nào hiệu quả hơn việc luyện thi TOEIC online hàng ngày. Việc làm các bài luyện tập theo từng phần sẽ giúp bạn biết rõ cấu trúc của từng phần cũng như trình độ hiện tại của mình. Sau đó bạn có thể xây dựng một lộ trình học tập phù hợp.</p>
            </div>
            <Footer />
        </>
    )
}

export default PracticeLR