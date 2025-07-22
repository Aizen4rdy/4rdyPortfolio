import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 mt-20 pt-16 pb-16 bg-slate-950 rounded-4xl max-w-7xl mx-auto px-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        PROJECTS
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-transform hover:scale-[1.02] bg-slate-900"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x300?text=No+Image";
              }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.url).map(([key, value]) => {
                    const isLiveLink = key === "live";
                    const isActive = project.live;
                    const href = isLiveLink
                      ? isActive
                        ? value.startsWith("http")
                          ? value
                          : `https://${value}`
                        : undefined
                      : value.startsWith("http")
                      ? value
                      : `https://${value}`;

                    let classes = "px-3 py-1 rounded text-xs uppercase ";

                    if (isLiveLink) {
                      classes += isActive
                        ? "bg-red-500 text-white hover:bg-red-600 "
                        : "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none ";
                    } else if (key === "github") {
                      classes += "bg-gray-800 text-white hover:bg-gray-900 ";
                    } else {
                      classes += "bg-gray-300 text-gray-800 hover:bg-gray-400 ";
                    }

                    const label = isLiveLink && !isActive ? "On-Going" : key;

                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-amber-300 text-black text-xs font-medium px-2 py-1 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


