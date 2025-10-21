import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function BlogSinglePage() {
  const { slug } = useParams(); // Get the slug from the route (e.g. /blog/:slug)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://vercel-serverless-repo.vercel.app/api/posts?slug=${slug}`
        );
        if (response.data.length === 0) {
          throw new Error("Post not found");
        }
        setPost(response.data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading)
    return <div className="text-center text-2xl mt-20">Loading post...</div>;

  if (error)
    return (
      <div className="text-center text-red-600 text-xl font-semibold mt-20">
        {error.message}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <Link
        to="/blog"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to all posts
      </Link>

      <article>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title.rendered}
        </h1>

        {post.date && (
          <p className="text-gray-500 text-sm mb-6">
            Published on {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}

        {post.featured_media && (
          <FeaturedImage id={post.featured_media} alt={post.title.rendered} />
        )}

        <div
          className="mt-6 text-gray-900 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}

// Helper component to load featured image
function FeaturedImage({ id, alt }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(
          `https://vercel-serverless-repo.vercel.app/api/media${id}`
        );
        setImageUrl(response.data.source_url);
      } catch {
        setImageUrl(null);
      }
    }
    if (id) fetchImage();
  }, [id]);

  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt={alt}
      className="w-full rounded-xl shadow-md mb-8"
    />
  );
}
