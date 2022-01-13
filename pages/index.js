import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import ReactPlayer from "react-player";
import ProgressBar from "../components/Progress";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import react, { useEffect } from "react"
import Link from "next/link"

export default function Home() {

  useEffect(() => {
    
  })

  return (
    <html data-theme="dark">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="relative">
      <div className="grid grid-cols-1 ">
        <AnnouncementBar visible={true} text="sample announcement" />

        <div className="grid grid-cols-1 place-items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-8 mb-8 gap-0">
            <section
              id="newest"
              className="grid grid-cols-1 sm:place-items-center md:place-items-center lg:place-items-end"
            >
              <div className="">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=-4CKuwiEv-I"
                  width={720}
                  height={405}
                  playing
                />

                <div className="bg-primary lg:rounded-bl-lg pb-2">
                  <span className="px-6 mt-6 mb-6 inline-block align-text-bottom">
                    <div className="font-bold text-3xl align-text-bottom">
                      Channel Content
                    </div>
                    <button className="text-accent hover:text-accent-focus hover:underline text-md ">
                      Learn More
                    </button>
                  </span>

                  <div
                    className="grid grid-cols-3 mb-6 gap-2"
                    style={{ width: 720 }}
                  >
                    <div className="group hover:scale-105 px-6 transition duration-300 ease-in">
                      <div className=" text-primary-content text-lg font-semibold">
                        Education
                      </div>
                      <div className="text-sm text-primary-content text-opacity-70">
                        helps with world building, is focused on studying real
                        life science, culture, history, as well as storytelling
                        in order to benefit people’s world building
                      </div>
                      <button className="text-accent py-2 hover:underline hover:text-accent-focus rounded-lg">
                        See More
                      </button>
                    </div>

                    <div className="group hover:scale-105 px-6 transition duration-300 ease-in">
                      <div className="text-primary-content text-lg font-semibold">
                        Minecraft
                      </div>
                      <div className="text-sm text-primary-content text-opacity-70">
                        story telling from the stoneworks Minecraft server,
                        which shows player’s history of nations, cultures, and
                        religions
                      </div>
                      <button className=" text-accent py-2 hover:underline hover:text-accent-focus rounded-lg">
                        See More
                      </button>
                    </div>

                    <div className="group hover:scale-105 px-6 transition duration-300 ease-in">
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

            <section
              id="progress"
              className="bg-base-200 lg:rounded-r-lg sm:place-items-center md:place-items-center lg:place-items-end p-6"
              style={{ width: "" }}
            >
              <div className="">
                <div className="font-bold text-3xl text-primary-content mb-1">
                  Upcoming Videos
                </div>
                <Link href="/videos">
                  <button className="text-accent hover:text-accent-focus hover:underline text-md mb-6">
                    All Videos
                  </button>
                </Link>

                <ProgressBar
                  title="Video #84"
                  one={true}
                  two={true}
                  three={true}
                  visible
                  tag="minecraftworldbuilding"
                  theme="step-accent"
                />
                <ProgressBar
                  title="Video #85"
                  one={true}
                  two={true}
                  three={true}
                  four={true}
                  theme="step-primary"
                />
              </div>
            </section>
          </div>
        </div>

        <section id="join" className="bg-base-200 m-4 p-3">
          <div className="text-center text-base-content text-3xl font-semibold">
            Join Stoneworks
          </div>
          <div className="text-center text-base-content text-opacity-70 text-2xl font-medium">
            View our different platforms or someshit
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="bg-base-100 p-4 rounded-lg flex justify-between">
              <div className="text-center font-semibold text-lg">Minecraft</div>
              <div className="text-center font-semibold text-lg">Youtube</div>
              <div className="text-center font-semibold text-lg">Patreon</div>
            </div>
          </div>
        </section>

        
      </div>
      </main>
      <section id="footer">
          <Footer />
        </section>
      
    </html>
  );
}
