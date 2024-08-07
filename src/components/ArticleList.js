import React from 'react';
import Article from './Article'; // Assuming you have an Article component

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} date= {post.date} title={post.title} preview= {post.preview}/>
      ))}
    </main>
  );
};

export default ArticleList;