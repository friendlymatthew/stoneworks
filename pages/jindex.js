import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import ReactPlayer from "react-player";
import ProgressBar from "../components/Progress";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <html data-theme="dracula">
      


      <Grid container spacing={0}>
        <Grid item xs={12}>
          <section id="navbar">
            <NavBar />
          </section>
        </Grid>

        <Grid item xs={12}>
          <section id="announcement">
            <AnnouncementBar
              visible={true}
              text="New Video Uploaded!"
              button="See More"
            />
          </section>
        </Grid>

        <Grid item xs={12}>
          <section id="newest" className="mt-12">
            <div className="text-center text-3xl font-semibold mb-6">
              Most Recent Video
            </div>
            <div className="flex justify-around">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-4CKuwiEv-I"
                playing
                controls
              />
            </div>
          </section>
        </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={10} align="center">
          <section id="upcoming" className="mt-12">
            <div className="text-center text-3xl font-semibold mb-6">
              Upcoming
            </div>

            <ProgressBar title="Video #83" />
            <ProgressBar title="Video #84" />
          </section>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={12} align="center">
          <section id="contact" className="mt-12">
            <div className="text-center text-3xl font-semibold mb-6">
              Contact
            </div>
            <a href="https://www.patreon.com/stoneworks" target="_blank" rel="noreferrer">
              <button className="btn">
                Join Patreon For Early Access To Future Videos
              </button>
            </a>
          </section>
        </Grid>
      </Grid>
    </html>
  );
}
