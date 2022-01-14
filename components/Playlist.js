export async function getServerSideProps() {
    const res = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwCrHbuxXyZKy1sftOtQjaA8&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
    );
  
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  }
  


export default function PlaylistComponent({data}) {
  return (
    <div className="space-x-4 carousel carousel-center bg-neutral">
      {data.items.map(({ id, snippet = {} }) => {
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return (
          <div key={id} className="m-4 carousel-item">
            <a
              href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              target="_blank"
              rel="noreferrer"
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
              <h3
                className="mt-2 text-base-content text-opacity-70 group-hover:text-opacity-100 font-semibold text-md"
                style={{ width: "300px" }}
              >
                {title}
              </h3>

              <h1></h1>
            </a>
          </div>
        );
      })}
    </div>
  );
}
