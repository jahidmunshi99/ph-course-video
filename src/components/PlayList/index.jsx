const PlayList = ({ OnPlayVideo, videos }) => {
  console.log(videos)
  return (
    <ul className="space-y-2 text-sm">
      {videos.map((item) => (
        <li
          key={item.id}
          className="bg-gray-700 px-3 py-2 rounded cursor-pointer"
          onClick={() => {
            OnPlayVideo(item);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default PlayList;
