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

      <main className="relative">
        <AnnouncementBar visible={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-12">
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

            <div className="text-start mt-8">
              Stoneworks is a youtube channel and Minecraft server which seeks
              to educate, entertain, and create healthy communities. The youtube
              channel focuses on scientific, historical, and cultural education
              for the purposes of World Building- where people make up their own
              constructed worlds for fun or to inform their writing, role
              playing games, or video game design. The youtube also features the
              world building works and analysis of its creator, Jack.
            </div>
          </div>

          <div
            id="aboutJack"
            className="bg-base-300 p-4 rounded-lg hover:border-white border-base-300 transition ease-in duration-300 border"
          >
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
              Jack Stoneworks, as he is known, is the creator of Stoneworks. He
              has been world building to some degree for over 15 years, and is
              driven to help others in their world building endeavors out of the
              lack of content to inform necessary components of the hobby. Jack
              has always been curious about many things in our own world, and
              his world building is first and foremost a reflection of that.
              Jack got his start on youtube after receiving a 20$ microphone for
              Christmas, and realizing that there was no youtube tutorial to
              help him in his mapmaking for his own world building projects.
              Since then, Jack has grown his channel by making edutainment
              videos, and has since started a bustling minecraft server with his
              creative audience.
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
