import { useRef } from "react";
import {
	FaPhoneAlt,
	FaMapMarkerAlt,
	FaEnvelope,
	FaGlobe,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_bnra2z6", // Replace with EmailJS service ID
				"template_r4byuwp", // Replace with template ID
				formRef.current,
				"cpN3La6LLj09_lb-8" // Replace with public key
			)
			.then(() => {
				toast.success("Message sent successfully!");
				formRef.current.reset();
			})
			.catch(() => {
				toast.error("Failed to send message. Try again later.");
			});
	};

	return (
		<section
			id="contact"
			className="min-h-screen bg-[var(--dim-white)] dark:bg-zinc-900 px-6 py-16 text-black dark:text-white"
		>
			<div className="max-w-6xl mx-auto">
				{/* Info Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-18">
					{[
						{
							icon: <FaPhoneAlt />,
							label: "Call",
							value: "+880 1521 102885",
						},
						{
							icon: <FaMapMarkerAlt />,
							label: "Home",
							value: "Dhaka, Bangladesh",
						},
						{
							icon: <FaEnvelope />,
							label: "Email",
							value: "mdrehmant@gmail.com",
						},
					].map(({ icon, label, value }, i) => (
						<div
							key={i}
							className="bg-white dark:bg-zinc-800 shadow-md border border-[rgba(237,91,45,0.2)] 
                        rounded-xl py-6 px-4 hover:shadow-lg transition 
                        w-full sm:w-64 min-h-[80px] flex flex-col items-center justify-center mx-auto"
						>
							<div className="text-[var(--orange)] text-2xl mb-3">
								{icon}
							</div>
							<h4 className="font-semibold text-lg mb-1">
								{label}
							</h4>
							<p className="text-gray-700 dark:text-gray-300 text-sm">
								{value}
							</p>
						</div>
					))}
				</div>

				{/* Message Box */}
				<div className="text-center mb-10">
					<h3 className="text-2xl font-semibold mb-1">
						Send a Message
					</h3>
					<p className="text-gray-600 dark:text-gray-400">
						I'm always open to discussing new ideas or
						opportunities.
					</p>
				</div>

				{/* Form */}
				<form
					ref={formRef}
					onSubmit={sendEmail}
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="md:col-span-2 p-3 rounded-md bg-gray-200 dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
						required
					/>
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						className="md:col-span-2 p-3 rounded-md bg-gray-200 dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
						required
					/>
					<textarea
						name="message"
						rows="5"
						placeholder="Your Message"
						className="md:col-span-2 p-3 rounded-md bg-gray-200 dark:bg-zinc-800 text-black dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
						required
					></textarea>
					<div className="md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="px-6 py-3 bg-[var(--orange)] text-white rounded-md font-medium hover:bg-[rgba(21,24,70,0.88)] transition"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
