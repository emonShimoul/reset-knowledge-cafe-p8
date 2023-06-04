import { useEffect, useState } from "react";
import "./Main.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleMarkAsRead = (blog, toast) => {
    let newBookmark = [];
    const exists = bookmarks.find((bookmark) => bookmark.id === blog.id);
    if (!exists) {
      newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    } else {
      toast("Already added in the bookmark!!");
    }
  };

  const handleTimeOnRead = (readingTime) => {
    setReadingTime((prev) => prev + readingTime);
  };

  return (
    <div className="main">
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleMarkAsRead={handleMarkAsRead}
            handleTimeOnRead={handleTimeOnRead}
          ></Blog>
        ))}
      </div>
      <div className="bookmark-container">
        <div className="spent-time-container">
          <h3>Spent time on read: {readingTime} min</h3> <br />
        </div>
        <div className="bookmark-blog">
          <h3>Bookmarked Blogs: {bookmarks.length}</h3> <br />
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
