const Projects = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const data = await res.json();

  console.log(data);

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Some Of My Favourite Project</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            I think this Awesome Project are build my Skill Harder
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((project, index) => (
            <article className="flex flex-col dark:bg-gray-900" key={index}>
              <a
                href={project["Live Link"]}
                className="group relative block bg-black"
              >
                <img
                  alt="Developer"
                  src={project.Photo}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                    {project.Name}
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {project.Name}
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {project.Description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
