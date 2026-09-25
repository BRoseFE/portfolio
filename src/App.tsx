import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";

function App() {
	return (
		<>
			<Header />
			<body>
				<main id="main-content">
					<Hero />
					<Projects />
					<About />
					<Skills />
				</main>
			</body>
		</>
	);
}

export default App;
