import resume from "@/assets/resume/Branson_Rose_Front_End_Developer.pdf";
import headshot from "@/assets/headshot.jpg";
import underline from "@/assets/underline.png";

const About = () => {
	return (
		<section
			id="about"
			className="section about-section"
			aria-labelledby="about-heading"
		>
			<div className="container about-layout">
				<div className="about-image-column">
					<div className="about-image-frame">
						<img
							src={headshot}
							alt="Branson Rose, front-end developer"
							loading="lazy"
							width="700"
							height="700"
						/>
					</div>

					<img
						className="about-underline"
						src={underline}
						alt=""
						loading="lazy"
						aria-hidden="true"
					/>
				</div>

				<div className="about-content">
					<p className="eyebrow">About Me</p>
					<h2 id="about-heading">
						Practical development with thoughtful details
					</h2>

					<p>
						I'm a front-end developer focused on building responsive
						and accessible web applications with React and
						TypeScript. I am also familiar with Django, API
						development, and Python for backend development.
					</p>

					<p>
						Accessibility and semantic structure are part of my
						development process from the beginning. I aim to create
						interfaces that work well across devices, input methods,
						and assistive technologies.
					</p>

					<p>
						Outside of development, I enjoy photography, drawing,
						wildlife, and spending time outdoors. Those interests
						influence the calm, nature-inspired style of this
						portfolio.
					</p>

					<div className="about-actions">
						<a
							className="button button-primary"
							href={resume}
							target="_blank"
							rel="noopener"
						>
							View Resume
						</a>

						<a
							className="text-link"
							href="https://github.com/BRoseFE"
							target="_blank"
							rel="noopener noreferrer"
						>
							Explore My GitHub
							<span aria-hidden="true">↗</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
