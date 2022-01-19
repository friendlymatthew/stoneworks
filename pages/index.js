import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import ReactPlayer from "react-player";
import ProgressBar from "../components/Progress";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import react, { useEffect } from "react";
import Link from "next/link";

const channelCategories = [
  {
    key: "Education",
    id: "#education",
    url: "https://www.youtube.com/watch?v=m_LG9xBpTI4&t=1s",
    desc: "Scientific, Historical, Storytelling, and Cultural education to help inform others’ world building projects with real and grounded knowledge on how the world works.",
  },
  {
    key: "Minecraft",
    id: "#minecraft",
    url: "https://www.youtube.com/watch?v=4Zku2h_XHjo",
    desc: "Storytelling and tutorials surrounding the Stoneworks Minecraft Server, which demonstrates the creativity and complexity that our online community has succeeded in developing.",
  },
  {
    key: "Personal Projects",
    id: "#worldbuilding",
    url: "https://www.youtube.com/watch?v=idZmLKInbsg",
    desc: "Jack Stoneworks’s personal world building projects, simply for the sake of having fun and demonstrating one example of how world building can be carried out and achieved.",
  },
];

export default function Home() {
  useEffect(() => {});

  return (
    <html data-theme="dark">
      <header className="sticky top-0 z-50">
        <NavBar />

        <AnnouncementBar visible={true} />
      </header>
      <main className="relative">
        <section
          id="hero"
          className="p-6 w-full grid grid-cols-1 place-items-center "
        >
          <div className="grid grid-cols-1 place-items-center w-11/12">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=x5UIq_nGpQA"
            height={420}
            width={720}
            style={{}}
          />
          </div>
          
          <div className="text-xl md:text-4xl text-white text-center lg:text-start font-semibold pt-12 pb-2">
            Channel Description
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-10/12">
            {channelCategories.map((channel) => {
              return (
                <section
                  key={`${channel.key}`}
                  className="p-2 mb-4 bg-base-100 items-start md:hover:bg-base-200 rounded-xl md:transition md:ease-in md:duration-300"
                  style={{ width: "335px" }}
                >
                  <ReactPlayer
                    url={channel.url}
                    height={220}
                    style={{
                      maxWidth: "318px",
                    }}
                  />

                  <div className="text-2xl text-base-content font-bold mt-2">
                    {channel.key}
                  </div>

                  <div className="text-sm text-base-content text-opacity-80">
                    {channel.desc}
                  </div>
                  <Link href={`/videos/${channel.id}`}>
                    <a>
                      <div className="text-orange-400 font-medium hover:underline">
                        See More
                      </div>
                    </a>
                  </Link>
                </section>
              );
            })}
          </div>
        </section>

        <section id="progress" className="p-2">
          <div className="text-4xl text-white text-center lg:text-start font-semibold py-4">
            Upcoming Videos
          </div>
          <div className="flex flex-wrap justify-center space-x-2">
            <ProgressBar
              title="Video #85"
              one
              two
              three
              theme="step-primary"
              visible
              tag="worldbuilding"
            />
            <ProgressBar
              title="Video #86"
              one
              two
              three
              four
              theme="step-primary"
              visible
              tag="minecraft"
            />
          </div>
        </section>
        <section
          id="minecraft"
          className="bg- border-t-green-600 grid grid-cols-1 place-items-center"
        >
          <div className="grid grid-cols-1 place-items-center">
            <Image src="/minecraft.png" width={400} height={300} />
            <div className="text-center text-4xl font-semibold p-4">
              Join the Stoneworks Minecraft Server
            </div>
          </div>

          <div className="text-center text-2xl p-4">
            Towns, Nations, Culture, Religion, Wars, History. The time is now,
            your creation awaits.
          </div>
          <Link
            href="/minecraft"
            className="grid grid-cols-1 place-items-center pt-2 mb-32"
          >
            <a>
              <div className="text-orange-400 hover:underline rounded-3xl px-2 py-1">
                Learn more
              </div>
            </a>
          </Link>
        </section>
      </main>
      <section id="footer">
        <Footer />
      </section>
    </html>
  );
}
