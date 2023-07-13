import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <Header />
      <Hero />
      <Grid />
      <Footer />
    </div>
  );
}
