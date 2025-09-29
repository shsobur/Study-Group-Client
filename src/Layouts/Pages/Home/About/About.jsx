import { VscChecklist } from "react-icons/vsc";
import { FaMagic, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#191121] to-[#100a16] py-20 sm:py-24 md:py-28 lg:py-32">
          {/* Grid Background */}
          <div
            className="absolute inset-0 bg-[size:64px_64px]"
            style={{
              backgroundImage: `linear-gradient(rgba(102,20,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(102,20,184,0.1) 1px, transparent 1px)`,
            }}
          ></div>

          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,20,184,0.3)_0%,rgba(102,20,184,0)_60%)]"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10">
            {/* Logo and Title */}
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8 md:mb-10">
              <div className="text-[#6614b8] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                TaskMaster
              </h1>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Elevate Your Productivity
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-purple-200/80 leading-relaxed">
              TaskMaster is your all-in-one solution for managing assignments,
              tracking progress, and achieving your academic goals with ease and
              elegance.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#100a16] to-[#191121]">
          {/* Grid Background - Same as hero section */}
          <div
            className="absolute inset-0 bg-[size:64px_64px]"
            style={{
              backgroundImage: `linear-gradient(rgba(102,20,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(102,20,184,0.1) 1px, transparent 1px)`,
            }}
          ></div>

          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,20,184,0.3)_0%,rgba(102,20,184,0)_60%)]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12">
              {/* Feature Card 1 */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] p-4 sm:p-5 md:p-6 bg-[#191121]/60 backdrop-blur-sm rounded-xl border border-[#6614b8]/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#6614b8]/40 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex flex-col">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#6614b8]/20 text-[#6614b8]">
                  <VscChecklist className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-white text-center lg:text-left">
                  Intuitive Organization
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-400 text-center lg:text-left leading-relaxed flex-grow">
                  Effortlessly manage tasks and deadlines with our clean and
                  simple interface.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] p-4 sm:p-5 md:p-6 bg-[#191121]/60 backdrop-blur-sm rounded-xl border border-[#6614b8]/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#6614b8]/40 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex flex-col">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#6614b8]/20 text-[#6614b8]">
                  <FaMagic className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-white text-center lg:text-left">
                  Smart Tracking
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-400 text-center lg:text-left leading-relaxed flex-grow">
                  Visualize your progress at a glance with intelligent analytics
                  and insights.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] p-4 sm:p-5 md:p-6 bg-[#191121]/60 backdrop-blur-sm rounded-xl border border-[#6614b8]/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#6614b8]/40 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex flex-col">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#6614b8]/20 text-[#6614b8]">
                  <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-white text-center lg:text-left">
                  Seamless Collaboration
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-400 text-center lg:text-left leading-relaxed flex-grow">
                  Work together with your team effectively in real-time with
                  shared workspaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;