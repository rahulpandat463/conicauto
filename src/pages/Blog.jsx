import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'The Latest Trends in Gasket',
      excerpt: 'Conic Auto is a leading name in gasket manufacturing for over 27 years. Conic Auto has witnessed—and driven—remarkable changes in the industry. Today, the...',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Exploring the Technical Differentiation',
      excerpt: 'In the world of engineering and manufacturing, where precision and reliability reign supreme, even the tiniest components play a pivotal role in...',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'A Deep Dive into Gasket Manufacturing',
      excerpt: 'Introduction Gaskets might seem like simple components, but they play a crucial role in maintaining the integrity of machinery and systems...',
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const events = [
    {
      id: 1,
      name: 'Frankfurt Show',
      title: 'International Show',
      image: 'https://images.unsplash.com/photo-1504384308090-c89eac20385f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Write a description for this tab and include information that will interest site visitors. For example, if you are using tabs to show different services, write about what makes each service unique. If you are using tabs to display restaurant items, write about what makes a specific dish particularly worthwhile or delicious.'
    },
    {
      id: 2,
      name: 'Event 2',
      title: 'Global Tech Summit',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      name: 'Event 3',
      title: 'Innovation Expo',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      name: 'Event 4',
      title: 'Manufacturing Conference',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-2xl md:text-4xl font-black text-black tracking-tight">
          News & Blog
        </h1>
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search the blog"
            className="w-full pl-6 pr-12 py-3 border-2 border-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all font-medium text-gray-700 placeholder-yellow-500/70"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h2 className="text-xl text-black mb-4 tracking-tight group-hover:text-yellow-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          International Events
        </h2>

        <div className="flex items-start gap-10">

          {/* LEFT LABEL COLUMN */}
          <div className="w-44 relative pt-6">

            {/* vertical line */}
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-black/30"></div>

            <div className="flex flex-col gap-14 pl-6">
              {events.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setActiveEventIndex(index)}
                  className={`text-left text-[22px] leading-snug ${activeEventIndex === index
                      ? "text-black font-medium"
                      : "text-gray-400"
                    }`}
                >
                  {event.name}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 max-w-4xl">

            {/* Image */}
            <img
              src={events[activeEventIndex].image}
              alt=""
              className="w-full h-[460px] object-cover mb-8"
            />

            {/* Text */}
            <h3 className="text-xl font-semibold mb-3">
              {events[activeEventIndex].title}
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mb-6">
              {events[activeEventIndex].description}
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold">
              Contact Now
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;

