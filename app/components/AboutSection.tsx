const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-5 font-retail text-xs text-gray-500">A little about me</p>
          <h2 id="about-heading" className="font-swear-display text-4xl leading-tight md:text-5xl">
            I’m Hit,<br />a full-stack engineer.
          </h2>
        </div>
        <div className="space-y-5 font-retail text-base leading-relaxed text-gray-700 md:text-lg lg:col-span-7">
          <p>I’m based in Surat, India, and work at Staycold Solution. I started in frontend development and now work across React and Next.js interfaces, Node.js APIs, and the databases behind them.</p>
          <p>My recent work includes healthcare projects in the OPEN-Healthcare organization: appointment booking, lab tools, PDF results, multilingual pages, and partner integrations. I’ve also worked on database performance and collection-staff apps.</p>
          <p>I still enjoy the visual side of development. You’ll find some of my earlier animation work further down the page.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
