import React, { useEffect, useState } from "react";

import sanityClient from "../client.js";
function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="project"]{
      title,date,place,Description,link,tags, mainImage{
        asset->{
          _id,url
        },
        alt
      }
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl mb-2 flex justify-center cursive">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to projects page
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 relative"
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="w-full h-full rounded-r object-cover relative"
                    />
                  </a>
                </h3>

                <div className="text-gray-500 text-xs space-x-4">
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.Description}
                  </p>
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <div
                        className="inline-flex rounded overflow-hidden mr-2 mb-2 relative"
                        key={index}
                      >
                        <span className="px-2 leading-loose bg-nivea text-white">
                          {tag}
                        </span>
                      </div>
                    ))}

                  <div>
                    <a
                      href={project.link}
                      rel="noopene noreferer"
                      target="_blank"
                      className="text-blue-500 font-bold hover:underline hover:text-green-400 text-xl"
                    >
                      View the Project{" "}
                      <span role="img" aria-label="right pointer">
                        >>
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
