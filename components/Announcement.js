export default function AnnouncementBar(props) {
  return (
    <div>
      {props.visible ? (
        <span className="flex justify-center h-8 bg-accent">
          <div className="text-black my-auto font-semibold italic">
            {props.text}
          </div>

          <button className="text-indigo-800 font-semibold ml-4 hover:underline hover:text-opacity-80">
            {props.button}
          </button>
        </span>
      ) : null}
    </div>
  );
}
