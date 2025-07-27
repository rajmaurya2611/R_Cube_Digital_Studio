import Header from "./components/Header";
import RCubeHero from "./components/RCubeHero";
import RCubeCards from "./components/RCubeCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <RCubeHero />
        <RCubeCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
