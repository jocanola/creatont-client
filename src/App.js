import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/Card/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { SearchBar } from "./components/Search/SearchBar";

import { ContentSkeleton } from "./components/Card/CardSkeleton";

function App() {
  const [content, setContent] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [topContent, setTopContent] = useState(false);

  const onFetchContent = () => {
    console.log(process.env.REACT_APP_BASE_URL);
    axios.get(`${process.env.REACT_APP_BASE_URL}/content`).then((response) => {
      console.log(response?.data?.data);
      setContent(response?.data?.data);
    });
  };
  useEffect(() => {
    onFetchContent();
  }, []);

  useEffect(() => {
    const getTopContent = content.sort(function (a, b) {
      return b.review.length - a.review.length;
    });
    if (topContent) {
      setContent(getTopContent);
    }
  }, [topContent, content]);

  console.log(content);

  const filterdContent = content.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
      item.tags
        .join(",")
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase())
    );
  });

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="App">
      <Header setTopContent={setTopContent} />
      <SearchBar
        onSearchChange={onSearchChange}
        setTopContent={setTopContent}
      />
      {filterdContent?.map((item, id) => {
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
            item={item}
          />
        );
      })}

      {content.length < 1
        ? Array(10)
            .fill()
            .map((_, i) => <ContentSkeleton />)
        : null}
      <Footer />
    </div>
  );
}

export default App;
