import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import ReactPlayer from "react-player";
import ProgressBar from "../components/Progress";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <html data-theme="dark">
      <div className="grid grid-cols-1 ">
        <NavBar />

        <AnnouncementBar visible={true} text="sample announcement" />

        <div className="grid grid-cols-1 place-items-center mt-8">
          <section id="newest" className="grid grid-cols-1">
            <div className="">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-4CKuwiEv-I"
                width={720}
                height={405}
                playing
              />

              <div className="bg-primary rounded-b-xl">
                <span className="px-6 mt-6 mb-6 inline-block align-text-bottom">
                  <div className="font-bold text-3xl align-text-bottom">
                    Channel Content
                  </div>
                  <button className="text-accent hover:text-accent-focus hover:underline text-md ">
                    Learn More
                  </button>
                </span>

                <div
                  className="grid grid-cols-3 mb-4 gap-2"
                  style={{ width: 720 }}
                >
                  <div className="px-6">
                    <div className="text-primary-content text-lg font-semibold">
                      Education
                    </div>
                    <div className="text-sm text-primary-content text-opacity-70">
                      helps with world building, is focused on studying real
                      life science, culture, history, as well as storytelling in
                      order to benefit people’s world building
                    </div>
                    <button className="text-accent py-2 hover:underline hover:text-accent-focus rounded-lg">
                      See More
                    </button>
                  </div>

                  <div className="px-6">
                    <div className="text-primary-content text-lg font-semibold">
                      Minecraft
                    </div>
                    <div className="text-sm text-primary-content text-opacity-70">
                      story telling from the stoneworks Minecraft server, which
                      shows player’s history of nations, cultures, and religions
                    </div>
                    <button className=" text-accent py-2 hover:underline hover:text-accent-focus rounded-lg">
                      See More
                    </button>
                  </div>

                  <div className="px-6">
                    <div className="text-primary-content text-lg font-semibold">
                      Personal Projects
                    </div>
                    <div className="text-sm text-primary-content text-opacity-70">
                      my goofing around and being creative with no rhyme or
                      reason, other than to just have fun
                    </div>
                    <button className="text-accent py-2 hover:underline hover:text-accent-focus rounded-lg">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="progress" className="grid grid-cols-1 place-items-center">
          <div className="border border-white bg-base-200 rounded-xl">
            <div className="font-bold text-3xl text-primary-content">
              Upcoming Videos
            </div>
            <ProgressBar title="Video #84" />
          </div>
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </html>
  );
}
