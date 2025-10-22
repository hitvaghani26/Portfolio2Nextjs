
const Gsap = () => {
  return (
    <>
      <div className="rounded-none md:rounded-lg lg:rounded-2xl xl:rounded-[10%] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] bg-black/5 py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12" id="showcase">
        <div className="w-full min-h-screen flex flex-col items-center justify-center ">
          {/* Title */}
          <div className="project-title-text-section my-2 md:my-4">
            <div className="project-title font-swear-display text-3xl md:text-5xl lg:text-6xl text-center px-4 md:px-12 lg:px-20">
              GSAP Showcase
            </div>
          </div>

          {/* Video Wrapper */}
          <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/PkkDVHJpzlA?si=Nfh13jWR4KMa_ZM4"
                title="GSAP Showcase Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
