import Link from "next/link";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div id="aboutStoneworks">
            <div className="text-center text-3xl font-semibold mt-8">
              About Stoneworks
            </div>
            <div className="mt-6 text-lg">
              Videos on many many things- science, culture, history, geography,
              writing, gaming, and my nuts. If you want to learn something
              extremely niche and interesting, or something about a whole world
              wide topic- Stoneworks is the place to go on Youtube. I focus on
              World Building, a hobby where people make up fantasy worlds for
              their own writing, RPGs, video games, or imaginative enjoyment.
              This hobby is an artistic reflection of the real world, one's
              values, their interests, and consumed media. My job is to visually
              bring all of these together so that people have a comprehensive
              archive for all their world building needs. Would you like to join
              me in this public library?
            </div>
          </div>
          <div id="aboutJack">
              <div className="text-center text-3xl font-semibold mt-8">
                  About Jack Stoneworks
              </div>
              <div>
                  hi
              </div>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
