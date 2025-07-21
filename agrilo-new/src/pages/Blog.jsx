import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, User2 } from "lucide-react";
import Footer from '../components/Footer';

const posts = [
  {
    title: "The Rise of Agritech in Nigeria",
    image: "/images/blog1.jpg",
    date: "July 10, 2025",
    author: "Admin",
    comments: 3,
    excerpt: "Discover how technology is transforming Nigeria’s agricultural landscape and empowering farmers with new tools."
  },
  {
    title: "Policy Gaps Affecting Local Farmers",
    image: "/images/blog2.jpg",
    date: "July 5, 2025",
    author: "Nancy Duffour",
    comments: 5,
    excerpt: "Explore the critical policy gaps hindering local food production and what can be done to support grassroots farmers."
  },
  {
    title: "Investment Guide for Agribusiness",
    image: "/images/blog3.jpg",
    date: "June 29, 2025",
    author: "Guest Writer",
    comments: 2,
    excerpt: "Learn the top investment strategies and funding options available for entrepreneurs in agribusiness."
  }
];

function Blog() {
  return (
    <>
      <MainNav />
      <Hero title="Blog" bgImage="/images/hero/blog.jpg" />
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Blog Posts */}
          <div className="md:col-span-2 space-y-10">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow rounded-md overflow-hidden"
              >
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-green-800 hover:underline cursor-pointer">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 gap-6 mt-2">
                    <span className="flex items-center gap-1">
                      <User2 size={14} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} /> {post.comments} Comments
                    </span>
                  </div>
                  <p className="text-gray-700 mt-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-green-700 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div className="bg-white p-6 shadow rounded-md">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="text-gray-700 space-y-2">
                <li><a href="#" className="hover:text-green-700">Agritech</a></li>
                <li><a href="#" className="hover:text-green-700">Policies</a></li>
                <li><a href="#" className="hover:text-green-700">Investment</a></li>
                <li><a href="#" className="hover:text-green-700">Startups</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow rounded-md">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <ul className="text-gray-700 space-y-3">
                {posts.slice(0, 2).map((post, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-green-700">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
