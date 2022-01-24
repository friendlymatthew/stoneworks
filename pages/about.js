import Link from "next/link";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/Announcement";

const aboutdb = [
  {
    key: 1,
    title: "Stoneworks",
    action: "Watch Videos",
    actionPath: "/videos",
    desc: "Stoneworks is a youtube channel and Minecraft server which seeks to educate, entertain, and create healthy communities. The youtube channel focuses on scientific, historical, and cultural education for the purposes of World Building- where people make up their own constructed worlds for fun or to inform their writing, role playing games, or video game design. The youtube also features the world building works and analysis of its creator, Jack.",
  },
  {
    key: 2,
    title: "Jack Stoneworks",
    action: "Get in touch",
    actionPath: "/contact",
    desc: "Jack Stoneworks, as he is known, is the creator of Stoneworks. He has been world building to some degree for over 15 years, and is driven to help others in their world building endeavors out of the lack of content to inform necessary components of the hobby. Jack has always been curious about many things in our own world, and his world building is first and foremost a reflection of that. Jack got his start on youtube after receiving a $20 microphone for Christmas, and realizing that there was no youtube tutorial to help him in his mapmaking for his own world building projects. Since then, Jack has grown his channel by making edutainment videos, and has since started a bustling minecraft server with his creative audience.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <header className="sticky z-50 top-0">
        <AnnouncementBar visible={true} />
      </header>

      <main className="relative" style={{ fontFamily: "Cabin" }}>
        <div className="grid grid-cols-1 place-items-center mt-12">
          {aboutdb.map((about) => {
            return (
              <section
                key={about.key}
                id={about.tite}
                className="mb-16 px-4 py-3  w-8/12 "
              >
                <div
                  className="text-5xl  w-8/12 text-white"
                  style={{ fontFamily: "Roboto" }}
                >
                  {about.title}
                </div>
                <div className="mb-2 mt-2 text-white text-opacity-80 text-lg">{about.desc}</div>

                <Link href={about.actionPath}>
                  <a className="text-orange-600 text-lg md:hover:text-orange-400 md:ease-in md:transition md:duration-100 md:hover:underline ">
                    {about.action}
                  </a>
                </Link>
              </section>
            );
          })}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
