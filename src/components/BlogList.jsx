import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get('https://www.ripgerber.com/wp-json/wp/v2/posts?per_page=5');
        const data = await response.data;
        setPosts(data);

      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();

  }, []);

  if(loading) return <div className="text-center text-2xl">Loading...</div>;
  if(error) return <div className="text-3xl font-bold text-center text-red-600">{error.message}</div>;
  return(
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl text-gray-900 font-bold mb-6 text-center">Latest Blog Posts</h1>
        {posts.map((post) => (
          <article key={post.id} className="mb-10 border-b pb-6">
            <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-500">
              {post.title.rendered}
            </h2>

            <div className="text-gray-950 mt-3" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
            <Link
              to={`/blog/${post.slug}`}
              className="text-lg text-blue-500 mt-3 inline-block hover:text-blue-800"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

export default BlogList