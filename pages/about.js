import Link from "next/link";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <header className="sticky z-50 top-0">
        <NavBar />
      </header>

      <main className="relative h-screen">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
          <div id="aboutStoneworks" className="bg-base-300 p-4">
            <div className="text-center text-3xl font-semibold mt-8">
              About Stoneworks
            </div>
            
          </div>

          <div id="aboutJack" className="bg-base-300 p-4">
            <div className="text-center text-3xl font-semibold mt-8">
              About Jack Stoneworks
            </div>
            <div>hi</div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
