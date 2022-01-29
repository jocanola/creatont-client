import "./Content.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const ContentSkeleton = () => {
  //save post to locatStorage

  return (
    <>
      <div className="content">
        <div>
          <span id="timeago">
            <Skeleton />
          </span>

          <p className="content__title">
            <Skeleton />
          </p>

          <p className="content__desc">
            <Skeleton />
          </p>
          <div className="content__tag">
            
            <Skeleton />
          </div>
        </div>
        {/* {imageId ? (
          <img
            src={`${process.env.REACT_APP_BASE_URL}/content/image/${imageId}`}
            alt="contentImage"
          />
        ) : null} */}

        <Skeleton />

        <Skeleton />
      </div>
    </>
  );
};
