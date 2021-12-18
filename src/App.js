import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/Card/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  const [content, setContent] = useState([]);
  const onFetchContent = () => {
    axios.get("http://localhost:5000/api/v1/content").then((response) => {
      console.log(response?.data?.data);
      setContent(response?.data?.data);
    });
  };
  useEffect(() => {
    onFetchContent();
  }, []);
  return (
    <div className="App">
      <Header />
      {content.map((item, id) => {
        const {
          _id,
          title,
          link,
          tags,
          userName,
          createdAt,
          review,
          desc,
          userRating,
          imageId,
        } = item;
        return (
          <Content
            key={_id}
            id={_id}
            title={title}
            link={link}
            tags={tags}
            userName={userName}
            createdAt={createdAt}
            review={review}
            desc={desc}
            userRating={userRating}
            imageId={imageId}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
