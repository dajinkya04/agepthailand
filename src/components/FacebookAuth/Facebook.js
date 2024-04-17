import React, { useEffect, useState } from 'react';

const FacebookPosts = ({accessToken} ) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://graph.facebook.com/me/posts?access_token=${accessToken}`);
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (accessToken) {
      fetchPosts();
    }
  }, [accessToken]);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacebookPosts;
