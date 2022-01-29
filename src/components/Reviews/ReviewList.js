// import { useEffect, useState } from "react";

const ReviewList = ({ text, name, content }) => {
  // const [userReview, setUserReview] = useState([]);
  // localStorage.setItem("content", JSON.stringify(data));
  // const content = JSON.parse(localStorage.getItem("content"));
  // useEffect(() => {
  //   setUserReview(JSON.parse(localStorage.getItem("content")));
  // }, []);

  console.table(content);
  return (
    <div>
      {content?.map((item, i) => (
        <>
          <hr />
          <p>
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {item?.username}
            </span>
          </p>
          <p>{item?.message}</p>
        </>
      ))}
    </div>
  );
};

export default ReviewList;
