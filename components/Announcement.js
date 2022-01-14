export default function AnnouncementBar(props) {
  return (
    <div className="mb-4">
      {props.visible ? (
        <span className="my-auto flex justify-center h-8 bg-white rounded-b-md">
          {props.text ? (
            <div className="text-primary my-auto font-semibold italic">
              {props.text}
            </div>
          ) : (
            <a href="https://youtube.com/stoneworks" target="_blank" rel="noreferrer" className="my-auto hover:text-primary-focus text-primary">
              <button className="font-semibold italic">
                www.youtube.com/stoneworks
              </button>
            </a>
          )}

          <button className="text-indigo-800 font-semibold ml-4 hover:underline hover:text-opacity-80">
            {props.button}
          </button>
        </span>
      ) : null}
    </div>
  );
}
