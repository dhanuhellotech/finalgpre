import React from 'react';

const RecentPosts = ({ posts }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Adjust the color stops as needed
    padding: '20px', // Add padding for better visibility
    borderRadius: '8px', // Add border-radius for rounded corners
color:'black'

  };

  return (
    <div className="recent-posts" style={gradientStyle}>
      <h3 style={{ color: 'white' }}>Recent Posts</h3>

      {posts.map((post) => (
        <div key={post.id}  style={{ color: 'white' }} className="recent-post-item">
          <p>{post.title}</p>
          {post.date && <p>  <i className="fas fa-calendar-alt" style={{ marginRight: '5px' }}></i>{post.date.split('T')[0]}</p>}
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
