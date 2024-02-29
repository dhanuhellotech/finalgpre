import React from 'react';
import './Blog.css'
const BlogPost = ({ post }) => {
    const { title, date, category, author, comments, content, link, image } = post;
  
    return (
      <div className="custom-parent-card mb-3">
        <div className="custom-parent-card-img-wrapper">
        <img
          src={`http://localhost:5678/${post.imageUrl}`}
          className="custom-parent-card-img-top"
          alt={title}
          style={{ width: "100%"}} />
 
      </div>
        <div className="custom-parent-card-body"  style={{ color: 'black' }}>
          <h5 className="custom-parent-card-title">{post.title}</h5>
          <p className="custom-parent-card-text">{post.content}</p>
          <div className="custom-parent-card-meta">
            <p className="custom-parent-card-date">  <i className="fas fa-calendar-alt" style={{ marginRight: '5px' }}></i>{post.date.split('T')[0]}</p>
            <p className="custom-parent-card-category">
              <a href={post.link} title={post.name}>
                {post.name}
              </a>
            </p>
          </div>
          <div className="custom-parent-card-footer">
            <p className="custom-parent-author"> {author}</p>
            <a href="/contact" className="custom-parent-comments-link">
              Leave a comment
            </a>
          </div>
          <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Read More</a>
        </div>
      </div>
    );
  };
  
  export default BlogPost;
  