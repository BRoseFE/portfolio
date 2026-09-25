import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

function App() {
	return (
		<>
			<Header />
			<main id="main-content">
				<Hero />
				<Projects />
				<About />
				<Skills />
				<Certifications />
				<Contact />
			</main>
		</>
	);
}

export default App;
