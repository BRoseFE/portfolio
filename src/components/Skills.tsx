function Skills() {
	return (
		<section
			id="skills"
			className="section skills-section"
			aria-labelledby="skills-heading"
		>
			<div className="container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">Technical Skills</p>

						<h2 id="skills-heading">Tools I use to build</h2>
					</div>

					<p>
						My development stack focuses on building maintainable
						applications, managing complex application state,
						integrating APIs, and delivering responsive, accessible
						user experiences.
					</p>
				</div>

				<div className="skills-grid">
					<article className="skill-card">
						<span className="skill-number">01</span>

						<h3>Frontend Development</h3>

						<p>
							Building responsive, component-driven interfaces
							with modern JavaScript frameworks and reusable UI
							patterns.
						</p>

						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>JavaScript ES6+</li>
							<li>React Router</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>CSS Modules</li>
							<li>Chakra UI</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">02</span>

						<h3>State & Data Management</h3>

						<p>
							Managing application state and asynchronous data
							through structured state management, caching, and
							reusable data-fetching patterns.
						</p>

						<ul>
							<li>React Context</li>
							<li>Reducers & useReducer</li>
							<li>Zustand</li>
							<li>TanStack React Query</li>
							<li>Query Caching & Synchronization</li>
							<li>Custom Query Hooks</li>
							<li>Mutations & Data Updates</li>
							<li>Pagination & Infinite Queries</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">03</span>

						<h3>Backend & API Development</h3>

						<p>
							Developing API-driven applications with structured
							backend services, data persistence, and secure API
							integrations.
						</p>

						<ul>
							<li>Python</li>
							<li>Django</li>
							<li>Django REST Framework</li>
							<li>REST API Integration</li>
							<li>Axios</li>
							<li>CRUD Operations</li>
							<li>Authentication & Authorization</li>
							<li>Serverless Functions</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">04</span>

						<h3>Databases & Development Tools</h3>

						<p>
							Working with relational databases, source control,
							build tools, and modern deployment workflows.
						</p>

						<ul>
							<li>PostgreSQL</li>
							<li>MySQL</li>
							<li>SQLite</li>
							<li>Git & GitHub</li>
							<li>Vite</li>
							<li>VS Code</li>
							<li>Vercel</li>
							<li>Netlify</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">05</span>

						<h3>Accessibility & UI/UX</h3>

						<p>
							Creating intuitive interfaces with accessibility,
							responsive behaviour, usability, and performance in
							mind.
						</p>

						<ul>
							<li>Semantic HTML</li>
							<li>ARIA</li>
							<li>Keyboard Navigation</li>
							<li>Accessible Forms</li>
							<li>Responsive Design</li>
							<li>Component Reusability</li>
							<li>Loading & Error States</li>
							<li>Performance Optimization</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Skills;
