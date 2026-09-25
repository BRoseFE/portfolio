import squirrel from "@/assets/gifs/squirrel.gif";
import coding from "@/assets/gifs/coding.gif";
import videoGameScreenshot from "@/assets/screenshots/vg-screenshot.png";

function Projects() {
	return (
		<section
			id="projects"
			className="section projects-section"
			aria-labelledby="projects-heading"
		>
			<div className="container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">Selected Work</p>

						<h2 id="projects-heading">
							Projects built with purpose
						</h2>
					</div>

					<p>
						A selection of responsive applications focused on
						reusable code, accessibility, performance, and clear
						user experiences.
					</p>
				</div>

				<div className="projects-grid">
					{/* Chelsea Rose Portfolio */}
					<article className="project-card project-card-featured">
						<div className="project-visual artwork-visual">
							<div className="browser-frame">
								<div className="browser-toolbar">
									<span></span>
									<span></span>
									<span></span>
									<div className="browser-address">
										https://chelsearose.art
									</div>
								</div>
								<div className="browser-content">
									<img
										src={squirrel}
										alt=""
										loading="lazy"
										aria-hidden="true"
									/>
									<div>
										<span>Artist Portfolio</span>
										<strong>Chelsea Rose</strong>
									</div>
								</div>
							</div>
						</div>

						<div className="project-content">
							<div className="project-title-row">
								<div>
									<p className="project-type">
										Production React Application
									</p>
									<h3>Chelsea Rose Art Portfolio</h3>
								</div>
								<span className="project-status">Live</span>
							</div>

							<p>
								A responsive React portfolio showcasing original
								artwork through reusable components, dynamic
								artwork routes, centralized data, and optimized
								image delivery.
							</p>

							<ul className="project-highlights">
								<li>
									Dynamic artwork pages using slug-based React
									Router routes
								</li>

								<li>
									Centralized artwork metadata and reusable
									image-path utilities
								</li>

								<li>
									Semantic HTML, CSS Modules, and optimized
									WebP artwork
								</li>

								<li>
									Netlify configuration for client-side SPA
									routing
								</li>
							</ul>

							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React</li>
								<li>React Router</li>
								<li>JavaScript</li>
								<li>CSS Modules</li>
								<li>Netlify</li>
							</ul>

							<div className="project-links">
								<a
									className="text-link"
									href="https://chelsearose.art"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Live Website
									<span aria-hidden="true">↗</span>
								</a>

								<a
									className="text-link"
									href="https://github.com/BRoseFE/chelsea-portfolio"
									target="_blank"
									rel="noopener noreferrer"
								>
									View GitHub
									<span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
					</article>

					{/* Video Game Discovery */}
					<article className="project-card">
						<div className="project-visual game-visual">
							<div className="browser-frame">
								<div className="browser-toolbar">
									<span></span>
									<span></span>
									<span></span>
									<div className="browser-address">
										https://video-game-discovery-app-wine.vercel.app/
									</div>
								</div>
								<div>
									<img
										src={videoGameScreenshot}
										alt="Video Game Discovery Screenshot"
										loading="lazy"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>

						<div className="project-content">
							<div className="project-title-row">
								<div>
									<p className="project-type">
										Production React Application
									</p>
									<h3>Video Game Hub</h3>
								</div>
								<span className="project-status">Live</span>
							</div>

							<p>
								A responsive React application for discovering
								and browsing video games through the RAWG API,
								with searchable game data, filtering, sorting,
								and a responsive component-based interface.
							</p>

							<ul className="project-highlights">
								<li>
									Search, genre filtering, platform filtering,
									and multiple sorting options using RAWG game
									data
								</li>
								<li>
									Custom TypeScript hooks for reusable,
									type-safe API data fetching and request
									cancellation
								</li>
								<li>
									Responsive Chakra UI interface with dark
									mode, loading skeletons, platform icons, and
									rating indicators
								</li>
								<li>
									Vercel serverless API layer protecting the
									RAWG API key through server-side environment
									variables
								</li>
							</ul>

							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React</li>
								<li>TypeScript</li>
								<li>Vite</li>
								<li>Chakra UI</li>
								<li>Axios</li>
								<li>Vercel</li>
							</ul>

							<div className="project-links">
								<a
									className="text-link"
									href="https://video-game-discovery-app-wine.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Live Website{" "}
									<span aria-hidden="true">↗</span>
								</a>
								<a
									className="text-link"
									href="https://github.com/BRoseFE/Video-game-hub"
									target="_blank"
									rel="noopener noreferrer"
								>
									View GitHub{" "}
									<span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
					</article>

					{/* Personal Portfolio */}
					<article className="project-card">
						<div className="project-visual personal-visual">
							<img
								src={coding}
								alt=""
								loading="lazy"
								aria-hidden="true"
							/>
							<div className="visual-code-card">
								<span>&lt;developer&gt;</span>
								<strong>Branson Rose</strong>
								<span>&lt;/developer&gt;</span>
							</div>
						</div>

						<div className="project-content">
							<div className="project-title-row">
								<div>
									<p className="project-type">
										Production React Application
									</p>
									<h3>Personal Portfolio</h3>
								</div>
								<span className="project-status">
									This Site
								</span>
							</div>
							<p>
								A responsive React developer portfolio designed
								to present projects, skills, certifications, and
								contact information through a distinctive
								nature-inspired visual identity with some humor.
							</p>
							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React</li>
								<li>TypeScript</li>
								<li>Vite</li>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>Accessibility</li>
							</ul>
							<div className="project-links">
								<a
									className="text-link"
									href="https://github.com/BRoseFE/portfolio"
									target="_blank"
									rel="noopener noreferrer"
								>
									View GitHub
									<span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
					</article>

					{/* Future Project */}
					<article className="project-card future-project">
						<div className="future-project-content">
							<p className="project-type">Currently Building</p>

							<h3>Full-Stack Project Coming Next</h3>

							<p>
								My next project will connect a React interface
								to a Django REST API with authentication,
								database-backed content, image management, and
								complete CRUD functionality.
							</p>

							<div className="future-stack">
								<span>React</span>
								<span>Django REST Framework</span>
								<span>PostgreSQL</span>
								<span>Authentication</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Projects;
