export default function Hero() {
  return (
    <>
      <div className="relative w-full overflow-hidden h-auto pt-5 ">
        <div className="relative w-full overflow-hidden h-auto min-h-[20rem] md:min-h-[35rem]">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover border-0"
            src="https://www.youtube.com/embed/LggkCxxlsKA?autoplay=1&loop=1&controls=0&modestbranding=1&playlist=LggkCxxlsKA"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
