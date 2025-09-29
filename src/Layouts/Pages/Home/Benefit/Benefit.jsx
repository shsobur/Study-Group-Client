const Benefit = () => {
  return (
    <div className="pt-20 relative flex h-auto min-h-screen w-full flex-col items-center justify-center bg-[#191121] font-display text-gray-200">
      <div className="layout-container flex h-full w-full grow flex-col justify-center">
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Section */}
            <div className="py-8 sm:py-10 md:py-12 lg:py-16">
              <div className="flex justify-center items-center mb-6 sm:mb-8">
                <div className="size-10 sm:size-12 text-primary">
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
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Streamline Your Workflow, Amplify Your Focus.
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                TaskMaster is built on the philosophy that true productivity
                comes not from doing more, but from achieving more with clarity
                and purpose. We help you cut through the noise, prioritize what
                matters, and dedicate your energy to tasks that drive meaningful
                progress.
              </p>
            </div>

            {/* Features Grid Section */}
            <div className="py-8 sm:py-10 md:py-12 lg:py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Feature 1 */}
                <div className="flex flex-col items-center p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4 text-center">
                    Effortless Organization
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center leading-relaxed">
                    Bring all your tasks, projects, and deadlines into one
                    cohesive space. Our intuitive interface ensures that
                    managing your work feels natural, not like another chore.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4 text-center">
                    Intelligent Prioritization
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center leading-relaxed">
                    Leverage smart tools to identify and focus on high-impact
                    tasks. Our system helps you distinguish the urgent from the
                    important, guiding you towards your most significant goals.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4 text-center">
                    Seamless Collaboration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center leading-relaxed">
                    Work in sync with your team. Share progress, delegate
                    responsibilities, and maintain a clear overview of
                    collective efforts, all within a single, unified platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Benefit;