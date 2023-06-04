import "./Bookmark.css";

// eslint-disable-next-line react/prop-types
const Bookmark = ({ bookmark }) => {
  return (
    <div className="single-bookmark">
      {/* eslint-disable-next-line react/prop-types */}
      <p>{bookmark.title}</p>
    </div>
  );
};

export default Bookmark;
