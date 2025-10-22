import Image from 'next/image';
import { skills } from '../Date';

const Skill = () => {
  return (
    <>
      <div className="rounded-none md:rounded-lg lg:rounded-2xl xl:rounded-[10%] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] bg-black/5 py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12" id='skills'>
        <div className="project-title-text-section  ">
          <div className="project-title text-center font-swear-display text-3xl mb-6 md:text-5xl lg:text-6xl px-4 md:px-12 lg:px-20">
            Skills
          </div>
        </div>
        <div className="skill-Section">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {skills.map((category) => (
                <div key={category.skillTitle} className="category-section">
                  <h3 className="text-2xl font-swear-text font-semibold text-gray-700 mb-6 text-center">
                    {category.skillTitle}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4  px-2">
                    {category.skills.map(([name, icon, link]) => (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={name}
                        className="skill-card p-4 border rounded-2xl border-gray-200 
             shadow-md hover:shadow-xl hover:-translate-y-1 
             bg-white transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <Image
                              src={icon.src}
                              alt={`${name} icon`}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <h4 className="font-retail text-gray-800 text-sm leading-tight">
                            {name}
                          </h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
