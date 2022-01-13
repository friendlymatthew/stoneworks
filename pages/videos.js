import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwCrHbuxXyZKy1sftOtQjaA8&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const resTwo = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwASInSxDDvvf68LHlONn1YK&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const resThree = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwAFqNYPUYsc0bC79oYMQ6NR&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  
  )

  const data = await res.json();
  const dataTwo = await resTwo.json();
  const dataThree = await resThree.json();

  return {
    props: {
      data,
      dataTwo,
      dataThree,
    },
  };
}

export default function Home({ data, dataTwo, dataThree }) {
  return (
    <div>
      <NavBar />

      <main>
        <section className="text-3xl font-bold text-accent">
          <div>Stoneworks' Videos</div>
        </section>

        <div className="grid grid-cols-1 place-items-center gap-4 mt-12">
          <section id="minecraft" className="w-4/5 bg-base-200 py-4 px-3">
            <div className="text-3xl font-semibold ml-8 pt-3">
              Minecraft
            </div>

            <div className="space-x-4 carousel carousel-center bg-base-200">
              {data.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                  <Carousel
                    id={id}
                    resourceId={resourceId}
                    medium={medium}
                    title={title}
                  />
                );
              })}
            </div>
          </section>

          <section id="worldbuilding" className="w-4/5 bg-base-200 py-4 px-3">
            <div className="text-3xl font-semibold ml-8 pt-3 mb-3">
              World Building
            </div>

            <div className="space-x-4 carousel carousel-center bg-base-200">
              {dataTwo.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                  <Carousel
                    id={id}
                    resourceId={resourceId}
                    medium={medium}
                    title={title}
                  />
                );
              })}
            </div>
          </section>

          <section id="sources" className="w-4/5 bg-base-200 py-4 px-3">
            <div className="text-3xl font-semibold ml-8 pt-3 mb-3">
              Civilizations
            </div>

            <div className="space-x-4 carousel carousel-center bg-base-200">
              {dataThree.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                  <Carousel
                    id={id}
                    resourceId={resourceId}
                    medium={medium}
                    title={title}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
