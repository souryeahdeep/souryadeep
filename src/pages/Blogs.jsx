import NavbarDemo from "@/components/resizable-navbar-demo";
import { useState } from "react";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return selectedBlog ? (
    <ArticlePage blog={selectedBlog} onBack={handleBack} />
  ) : (
    <BlogList onSelect={handleSelectBlog} />
  );
}

const BLOGS = [
  {
    id: 1,
    title: "i wasted few months changing tracks.",
    date: "11 Jan, 2026",
    tag: "Systems",
    excerpt:
      "In this blog, I shared my experience of constantly changing my language and tech stack preferences, and how it affected my learning journey. I discussed the importance of consistency and focus in mastering a technology, and how I eventually found my passion for systems programming.",
    readTime: "8 min read",
    content: [
      { type: "p", text: "In 2024, just after college started. I delved myself deep into choosing what to do. I was focussed to go with Web Development as it is hyped and easy. But then I was choosing What Techs to learn? " },
      { type : "p", text :"Didn't gave much thought and just jumped to learn ReactJS. AND then jumped into NodeJS, the minimalist, popular ecosystem. And I kinda liked it. Even made a note app with postgresql db. Then I had know Idea what to do. So, I started to changing now."},
      {type : "p", text :"One fine day, an idea arose in my head, don't know where from. \"Let's Learn Python and its framework\". And Hence I embarked on the journey of 2.5 months of that. As I was coming from Java Background, it was a cup of tea to understand Python. Then I thought of Learning flask, \"Why flask in BIG 2k25?\". Don't know probably because extensively used in building models. But that wasn't for long."},
      {type : "p", text :"In next few days, I jumped to Django. But that was not for long either. I copied blindly from what the course seller was teaching and grabbed it but now I know nothing about that."},
      {type : "p", text :"But then comes that time when someone re-entered my life. Mr Java. I had left practising java after school and probably then saw a post or video on how java is f better than all. (which is not true probably). So I again went to master advanced java and did pretty well there. Though at that point, I was just doing Java for mastering DSA and stuff but then something happened."},
      {type : "p", text :"I came across the video of CodeHead on, \"Why You SHOULD learn Spring Boot?\". And after I completed it I was like, \"Let's go man.. It's time to settle with the loml\". And hence went deep into spring boot and even tried it's fraweworks like JPA, Security, Eureka. And till now I don't regret wasting my time with Django, Flask, NodeJS. Because if they were not there, I would not been introduced to this hell of a giant named Spring Ecosystem. Now all the frameworks are great and applicable in different scenerios and in current market, ofc it is not about the code but the idea and design that will make us go far. But still Even if All the frameworks are greatest, Spring is a little better. (copied from yk)."},
      {type : "p", text :"(Now I am not telling why is it better, you can just watch the video I mentioned or chatgpt it.)"},
      {type : "p", text :"Just thought of sharing my story."}
    ],
  },
];

/* ─── Blog List ───────────────────────────────────────────────────────── */
export function BlogList({ onSelect }) {
  return (
    <div className="min-h-screen font-archivo bg-black px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <NavbarDemo/>  
      <div className="max-w-4xl mt-10 mx-auto">
       
        {/* Header */}
        <div className="mb-12 animate-fade-in animation-delay-100">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in animation-delay-200">
            Blogs
          </h1>
          <p className="text-lg text-slate-300 animate-fade-in animation-delay-300">
            I write sometimes without thinking and call it a blog.
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {BLOGS.map((blog, idx) => (
            <div
              key={blog.id}
              className="group cursor-pointer bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-green-500/30 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 animate-fade-in hover:translate-x-2"
              onClick={() => onSelect(blog)}
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
             

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-300 leading-relaxed mb-4">
                {blog.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Article Content Renderer ───────────────────────────────────────── */
function renderBlock(block, i) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="text-slate-300 leading-relaxed text-lg mb-6">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-3xl font-bold text-white mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "callout":
      return (
        <div
          key={i}
          className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded px-6 py-4 my-6 text-slate-200 italic text-lg"
        >
          {block.text}
        </div>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc list-inside space-y-3 mb-6 text-slate-300">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}


/* ─── Article Page ────────────────────────────────────────────────────── */
function ArticlePage({ blog, onBack }) {
  return (
    <div className="min-h-screen font-archivo bg-black px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <NavbarDemo />
      <div className="max-w-3xl mx-auto mt-10">
        {/* Back Button */}
        <button
          className="mb-8 flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium text-sm animate-fade-in animation-delay-100 hover:translate-x-2 transform"
          onClick={onBack}
        >
          ← Back to Blogs
        </button>

        

        {/* Article Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-200">
          {blog.title}
        </h1>

       

        {/* Article Body */}
        <div className="prose prose-invert max-w-none animate-fade-in animation-delay-300">
          {blog.content.map(renderBlock)}
        </div>
      </div>
    </div>
  );
}

