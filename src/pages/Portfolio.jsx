import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
	{
		title: "Multi-Vendor E-Commerce Platform",
		description:
			"Built a full-stack multi-vendor e-commerce site with role-based dashboards and secure JWT auth. Integrated real-time chat using Socket.IO and implemented admin approval for sellers. Applied CORS, rate limiting, and bcrypt for API security and data protection.",
		techStack: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"JWT",
			"Socket.IO",
		],
		liveDemo: null,
		link: "https://github.com/mdtoufique/multi-vendor-ecommerce-website",
		image: null,
	},
	{
		title: "Full Stack Todo App",
		description:
			"Created a user-specific task manager with JWT authentication and protected API routes. Implemented full CRUD for tasks with real-time UI updates and a spin-to-pick task feature.",
		techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
		liveDemo: "https:https://todoappmern.vercel.app",
		link: "https://github.com/mdtoufique/TODO",
		image: null,
	},
	{
		title: "Courier & Parcel Management System – MERN Stack",
		description:
			"Built a full-featured parcel tracking and delivery platform with role-based access (Admin, Agent, Customer). Implemented JWT authentication, live parcel status updates with Socket.IO, and email alert.",
		techStack: [
			"React.js",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Socket.IO",
			"JWT",
			"Axios",
		],
		link: "https://github.com/mdtoufique/Courier-and-Parcel-Management-System",
		liveDemo:
			"https://courier-and-parcel-management-syste-three.vercel.app",
		image: null,
	},
	{
		title: "Real-Time Multiplayer Tic-Tac-Toe",
		description:
			"Developed a real-time multiplayer game with matchmaking and AI bot integration. Used Socket.IO for event-driven communication between players.",
		techStack: ["JavaScript", "Node.js", "Express.js", "Socket.IO"],
		liveDemo: "https://mdtoufique.github.io/tic-tac-toe-multiplayer",
		link: "https://github.com/mdtoufique/tic-tac-toe-multiplayer",
		image: null,
	},
	{
		title: "Movie Sentiment Analysis",
		description:
			"Built a sentiment classifier for IMDB reviews using Naive Bayes and KNN. Performed NLP preprocessing with NLTK (tokenization, stop-word removal).",
		techStack: ["Python", "Pandas", "Scikit-learn", "NLTK", "NumPy"],
		liveDemo: null,
		link: "https://github.com/mdtoufique/Sentiment_analysis_ML",
		image: null,
	},
	{
		title: "Web Messaging System",
		description:
			"Developed a PHP-based messaging system with user login and session auth. Handled message storage and retrieval via MySQL.",
		techStack: ["PHP", "HTML", "CSS", "MySQL"],
		liveDemo: null,
		link: "https://github.com/mdtoufique/web_message",
		image: null,
	},
];

export default function Portfolio() {
	return (
		<section
			id="portfolio"
			className="min-h-screen px-4 sm:px-6 lg:px-8 py-16"
			style={{
				backgroundColor: "var(--dim-white)",
				color: "var(--black)",
			}}
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
					Here are some of my projects
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 auto-rows-fr">
					{projects.map((project, index) => (
						<div
							key={index}
							className="flex flex-col p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:border-[var(--orange)] transition-all duration-300 h-full"
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

							<div className="mt-auto">
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

								<div className="flex flex-wrap gap-4">
									{project.liveDemo ? (
										<a
											href={project.liveDemo}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-2 text-sm font-medium text-white bg-[var(--orange)] px-2 py-1 rounded-full hover:opacity-70 transition"
										>
											<FaExternalLinkAlt className="text-xs" />
											Live Demo
										</a>
									) : (
										<span className="text-sm font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full cursor-not-allowed">
											Live Demo: N/A
										</span>
									)}

									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-2 text-sm font-medium text-white bg-[var(--orange)] px-2 py-1 rounded-full hover:opacity-70 transition"
									>
										<FaGithub className="text-base" />
										GitHub Repo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
