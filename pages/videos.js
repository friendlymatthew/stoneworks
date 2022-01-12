import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwCrHbuxXyZKy1sftOtQjaA8&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const resTwo = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwASInSxDDvvf68LHlONn1YK&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  )

  const data = await res.json();
  const dataTwo = await resTwo.json();

  return {
    props: {
      data,
      dataTwo,
    },
  };
}



export default function Home({ data, dataTwo }) {
  return (
    <div>
      <NavBar />

      <main>
        <section className="text-3xl font-bold text-accent">
          <div>
            Stoneworks' Videos
          </div>
        </section>

       
        <div className="text-3xl font-semibold px-6 pt-3 bg-neutral">
          Minecraft Histories
        </div>
        <div className="space-x-4 carousel carousel-center bg-neutral">
          {data.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
            return (
              <div key={id} className="m-4 carousel-item">
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  target="_blank"
                  className="bg-neutral group hover:bg-base-100 p-2 transition duration-300 ease-in rounded-md"
                >
                  <p>
                    <img
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h3 className="mt-2 text-base-content text-opacity-70 group-hover:text-opacity-100 font-semibold text-md" style={{ width: "300px"}}>{title}</h3>

                  <h1></h1>
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
