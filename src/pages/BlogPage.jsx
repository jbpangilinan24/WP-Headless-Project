import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || null);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const postsPerPage = 5;
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const category = searchParams.get("category");
    const page = Number(searchParams.get("page")) || 1;

    setSelectedCategory(category || null);
    setCurrentPage(page);
  }, [searchParams]);


  // Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);

        let categoryParam = selectedCategory; // may be slug
        let categoryId = null;

        // 🔹 If selectedCategory is a slug, convert it to ID
        if (categoryParam && isNaN(categoryParam)) {
          const catResponse = await axios.get(
            `https://www.ripgerber.com/wp-json/wp/v2/categories?slug=${categoryParam}`
          );
          if (catResponse.data.length > 0) {
            categoryId = catResponse.data[0].id;
          }
        } else if (categoryParam) {
          categoryId = categoryParam; // already an ID
        }

        let url = `https://www.ripgerber.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${currentPage}`;
        if (categoryId) url += `&categories=${categoryId}`;

        const response = await axios.get(url);
        setPosts(response.data);
        const total = response.headers["x-wp-totalpages"];
        setTotalPages(Number(total));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();

    // ✅ Update the URL query param to use slug
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory, page: currentPage });
    } else if (currentPage > 1) {
      setSearchParams({ page: currentPage });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, currentPage]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://www.ripgerber.com/wp-json/wp/v2/categories"
        );
        setCategories(response.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (loading)
    return (
      <div className="text-center text-2xl mt-20 font-sans text-gray-700">
        Loading blog posts...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-2xl mt-20 text-red-600 font-bold font-sans">
        {error.message}
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <h1 className="text-4xl text-gray-900 font-bold mb-8">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-3 space-y-10">
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <article key={post.id} className="border-b pb-6">
                  <Link to={`/blog/${post.slug}`}>
                    <h2
                      className="text-2xl font-semibold text-gray-900 hover:text-blue-500 transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>
                  <div
                    className="text-gray-950 mt-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-lg text-blue-500 mt-3 inline-block hover:text-blue-800"
                >
                  Read more →
                </Link>
                </article>
              ))}

              {/* Pagination */}
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  className={`px-4 py-2 rounded transition 
                    ${(currentPage === 1) ? "bg-gray-100 text-neutral-400 cursor-not-allowed hover:bg-gray-100" : "bg-gray-200 cursor-pointer hover:bg-gray-300"}`}
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {/* Page Numbers */}
                {/* Array.from({ length: totalPages }, (_, i) => i + 1)
                  → creates an array like [1, 2, 3, ... totalPages]. */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded transition ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}            
                <button
                  className={`px-4 py-2 rounded transition 
                    ${(currentPage >= totalPages) ? "bg-gray-100 text-neutral-400 cursor-not-allowed hover:bg-gray-100" : "bg-gray-200 cursor-pointer hover:bg-gray-300"}`}
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}>
                  Next
                </button>
              </div>
            
            </>
          ) : (
            <p className="text-gray-600 mt-6 text-lg">No posts found.</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search Box */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Search</h3>
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-gray-700">
              <li
                className={`cursor-pointer hover:text-blue-500 transition ${
                  !selectedCategory ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => handleCategoryClick(null)}
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className={`cursor-pointer hover:text-blue-500 transition ${
                    selectedCategory === cat.slug ? "font-bold text-blue-600" : ""
                  }`}
                  onClick={() => handleCategoryClick(cat.slug)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-2 text-gray-700">
              {posts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-500 transition">
                    {post.title.rendered}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogPage;
