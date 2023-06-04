import "./Blog.css";

import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleMarkAsRead, handleTimeOnRead }) => {
  // eslint-disable-next-line react/prop-types
  const { coverImg, authorImg, title, authorName, publishedDate, readingTime } =
    blog;

  return (
    <div className="blog">
      <div className="cover-image">
        <img src={coverImg} alt="" />
      </div>
      <div className="blog-author">
        <div className="author-details">
          <img src={authorImg} alt="" />
          <div>
            <h4>{authorName}</h4>
            <p>{publishedDate}</p>
          </div>
        </div>
        <div className="read-time">
          <span>{readingTime}</span> min read
          <i
            onClick={() => handleMarkAsRead(blog, toast)}
            className="fa-regular fa-bookmark"
          ></i>
          <ToastContainer />
        </div>
      </div>
      <div className="blog-content">
        <h2>{title}</h2>
        <a onClick={() => handleTimeOnRead(readingTime)}>Mark as read</a>
      </div>
    </div>
  );
};

export default Blog;
