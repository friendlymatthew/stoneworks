import Link from "next/link";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/Announcement";

export default function AboutPage() {
  return (
    <div>
      <header className="sticky z-50 top-0">
        <NavBar />
      </header>

      <main className="relative h-screen">
        <AnnouncementBar 
          visible={true}
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-12">
          <div
            id="aboutStoneworks"
            className="bg-base-300 p-4 rounded-lg hover:border-white border-base-300 transition ease-in duration-300 border"
          >
            <div className="grid grid-cols-1">
              <div className="text-center text-3xl font-semibold mt-8">
                About Stoneworks
              </div>
              <div className="flex justify-around">
                <button className="hover:underline hover:text-accent-focus text-md text-accent">
                  Watch Videos
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. Hendrerit dolor magna eget est lorem. Risus quis varius
              quam quisque. Sed vulputate odio ut enim blandit. Vivamus arcu
              felis bibendum ut tristique et. Non diam phasellus vestibulum
              lorem sed. In eu mi bibendum neque egestas congue quisque egestas.
              Magna fermentum iaculis eu non diam phasellus vestibulum. Leo in
              vitae turpis massa sed elementum tempus. Eget arcu dictum varius
              duis at consectetur lorem. Morbi blandit cursus risus at ultrices.
            </div>
          </div>

          <div id="aboutJack" className="bg-base-300 p-4 rounded-lg hover:border-white border-base-300 transition ease-in duration-300 border">
            <div className="grid grid-cols-1 ">
              <div className="text-center text-3xl font-semibold mt-8">
                About Jack Stoneworks
              </div>
              <div className="flex justify-around">
                <button className="hover:underline hover:text-accent-focus text-md text-accent">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. Hendrerit dolor magna eget est lorem. Risus quis varius
              quam quisque. Sed vulputate odio ut enim blandit. Vivamus arcu
              felis bibendum ut tristique et. Non diam phasellus vestibulum
              lorem sed. In eu mi bibendum neque egestas congue quisque egestas.
              Magna fermentum iaculis eu non diam phasellus vestibulum. Leo in
              vitae turpis massa sed elementum tempus. Eget arcu dictum varius
              duis at consectetur lorem. Morbi blandit cursus risus at ultrices.
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
