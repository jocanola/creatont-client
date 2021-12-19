const ReviewList = ({ name, text }) => {
  return (
    <div>
      <p>
        <span style={{ fontStyle: "italic" }}>{name}</span>: {text}
      </p>
    </div>
  );
};

export default ReviewList;
