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
										Client Project · Production React
										Application
									</p>
									<h3>Chelsea Rose Art Portfolio</h3>
								</div>
								<span className="project-status">Live</span>
							</div>

							<p>
								A custom-built artist portfolio designed to
								showcase and organize original artwork through
								an image-focused, responsive experience. Built
								with React and powered by Sanity CMS, the
								application features a dedicated content
								management system, dynamic artwork routes, and
								optimized image delivery. An integrated Sanity
								Studio allows artwork to be created, edited,
								organized, and published without modifying the
								frontend code.
							</p>

							<ul className="project-highlights">
								<li>
									Integrated Sanity CMS backend with a
									dedicated Sanity Studio, allowing artwork
									content, metadata, publication status, and
									display order to be managed independently of
									the frontend application.
								</li>
								<li>
									GROQ queries and the Sanity Client retrieve
									published artwork dynamically, replacing
									hardcoded artwork data with a centralized,
									scalable content management system.
								</li>
								<li>
									Dynamic, slug-based artwork pages using
									React Router, giving individual pieces their
									own dedicated and shareable URLs.
								</li>
								<li>
									Sanity-powered image delivery using the
									Sanity Image URL Builder, supporting dynamic
									resizing, automatic image format selection,
									and adjustable image quality.
								</li>
								<li>
									TanStack React Query manages asynchronous
									artwork requests, caching, loading states,
									and error handling.
								</li>
								<li>
									Reusable React components, CSS Modules, and
									semantic HTML provide a maintainable
									architecture and accessible, responsive
									browsing experience.
								</li>
								<li>
									Vercel deployment with client-side routing
									and production integration with the Sanity
									backend.
								</li>
							</ul>

							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React 19</li>
								<li>Vite</li>
								<li>React Router</li>
								<li>JavaScript</li>
								<li>CSS Modules</li>
								<li>Sanity CMS</li>
								<li>Sanity Studio</li>
								<li>GROQ</li>
								<li>TanStack Query</li>
								<li>Vercel</li>
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
									href="https://github.com/BRoseFE/chelsea-portfolio-dark-gallery"
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
										alt="Video Game Hub application showing its game discovery interface"
										loading="lazy"
									/>
								</div>
							</div>
						</div>

						<div className="project-content">
							<div className="project-title-row">
								<div>
									<p className="project-type">
										Full-Stack Architecture · React
										Application
									</p>
									<h3>Video Game Hub</h3>
								</div>
								<span className="project-status">Live</span>
							</div>

							<p>
								A feature-rich video game discovery platform
								built with React and TypeScript, integrating the
								GameBrain API to deliver searchable game data,
								advanced filtering, sorting, and detailed game
								information. Built with a scalable
								component-based architecture, efficient
								server-state management, and a serverless API
								layer deployed on Vercel.
							</p>

							<ul className="project-highlights">
								<li>
									Infinite scrolling and paginated game
									discovery powered by TanStack React Query,
									with query caching and background data
									management.
								</li>
								<li>
									Centralized filter and search state using
									Zustand, supporting dynamic genre, platform,
									and sorting controls.
								</li>
								<li>
									Reusable TypeScript API client and custom
									React Query hooks for structured, type-safe
									data fetching.
								</li>
								<li>
									Detailed game pages featuring descriptions,
									screenshots, trailers, platform information,
									publishers, ratings, and Metacritic scores.
								</li>
								<li>
									Secure Vercel serverless API layer that
									proxies GameBrain requests, validates
									permitted endpoints, and keeps API
									credentials protected in server-side
									environment variables.
								</li>
								<li>
									Responsive Chakra UI interface with dark
									mode, loading skeletons, reusable
									components, and responsive layouts.
								</li>
							</ul>

							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React 19</li>
								<li>TypeScript</li>
								<li>Vite</li>
								<li>Chakra UI</li>
								<li>TanStack Query</li>
								<li>Zustand</li>
								<li>Axios</li>
								<li>React Router</li>
								<li>Vercel</li>
								<li>GameBrain API</li>
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
										Personal Brand · React Application
									</p>
									<h3>Personal Portfolio</h3>
								</div>
								<span className="project-status">
									This Site
								</span>
							</div>

							<p>
								A custom-designed developer portfolio built to
								showcase projects, technical skills,
								certifications, and professional experience.
								Features a distinctive nature-inspired visual
								identity, combining responsive layouts,
								thoughtful UI/UX design, and accessible frontend
								development to create a cohesive personal brand.
							</p>

							<ul className="project-highlights">
								<li>
									Custom visual identity and styling, with a
									consistent design language, typography, and
									nature-inspired aesthetic.
								</li>
								<li>
									Responsive layouts and navigation designed
									to provide a consistent experience across
									desktop, tablet, and mobile.
								</li>
								<li>
									Component-based React architecture with
									TypeScript, separating content and interface
									elements into maintainable, reusable
									components.
								</li>
								<li>
									Accessibility-focused development using
									semantic HTML, descriptive content, and
									accessible interface patterns.
								</li>
								<li>
									Performance-conscious implementation using
									Vite, optimized assets, and lazy-loaded
									images.
								</li>
								<li>
									Structured project and skills sections that
									present technical experience,
									certifications, and professional information
									in an easy-to-navigate format.
								</li>
							</ul>

							<ul
								className="tech-list"
								aria-label="Technologies used"
							>
								<li>React</li>
								<li>TypeScript</li>
								<li>Vite</li>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>Responsive Design</li>
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

					{/* Current Project */}
					<article className="project-card future-project">
						<div className="future-project-content">
							<p className="project-type">
								Currently Building · Real-World Project
							</p>

							<h3>React Template Marketplace</h3>

							<p>
								Developing a real-world digital product
								marketplace intended to become an independently
								operated business. The platform will allow
								customers to browse, purchase, and securely
								download professionally developed React
								templates. Built with React, TypeScript and
								Vite, with Supabase powering the database,
								authentication and file storage. Stripe will
								handle payment processing, while Supabase Edge
								Functions will manage server-side operations,
								payment verification and secure product
								delivery.
							</p>

							<div className="future-stack">
								<span>React</span>
								<span>TypeScript</span>
								<span>Vite</span>
								<span>Tailwind CSS</span>
								<span>Supabase</span>
								<span>PostgreSQL</span>
								<span>Stripe</span>
								<span>Vercel</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Projects;
