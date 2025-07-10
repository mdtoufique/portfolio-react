import React from "react";

const projects = [
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "Built a full-stack multi-vendor e-commerce site with role-based dashboards and secure JWT auth. Integrated real-time chat using Socket.IO and implemented admin approval for sellers. Applied CORS, rate limiting, and bcrypt for API security and data protection.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.IO"],
    link: "https://github.com/mdtoufique/multi-vendor-ecommerce-website",
    image: null,
  },
  {
    title: "Real-Time Multiplayer Tic-Tac-Toe",
    description:
      "Developed a real-time multiplayer game with matchmaking and AI bot integration. Used Socket.IO for event-driven communication between players.",
    techStack: ["JavaScript", "Node.js", "Express.js", "Socket.IO"],
    link: "https://github.com/mdtoufique/tic-tac-toe-multiplayer",
    image: null,
  },
  {
    title: "Movie Sentiment Analysis",
    description:
      "Built a sentiment classifier for IMDB reviews using Naive Bayes and KNN. Performed NLP preprocessing with NLTK (tokenization, stop-word removal).",
    techStack: ["Python", "Pandas", "Scikit-learn", "NLTK", "NumPy"],
    link: "https://github.com/mdtoufique/Sentiment_analysis_ML",
    image: null,
  },
  {
    title: "Web Messaging System",
    description:
      "Developed a PHP-based messaging system with user login and session auth. Handled message storage and retrieval via MySQL.",
    techStack: ["PHP", "HTML", "CSS", "MySQL"],
    link: "https://github.com/mdtoufique/web_message",
    image: null,
  },
  
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2"
        >
          Here are some of my projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:border-[var(--orange)] transition-all duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--black)" }}
              >
                {project.title}
              </h3>
              <p className="text-[rgba(0,0,0,0.75)] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[var(--orange)]/20 text-[var(--orange)] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--orange)] underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
