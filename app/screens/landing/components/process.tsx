import React from "react";

const Process = () => {
  return (
    <div className="p-8 text-black bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Our Proven SAP Cloud Strategy
      </h2>

      <div className="flex items-center">
        <section className="flex items-center bg-white p-6 shadow-lg rounded-lg w-1/4 h-[200px]">
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 18.5c-3.514 0-6.374-1.64-8-4.19C7.326 10.043 12 4.5 12 4.5s4.674 5.543 8 9.81c-1.626 2.55-4.486 4.19-8 4.19z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Plan Your Cloud Strategy
            </h3>
            <p>
              From business case creation to proof of concept and everything in
              between, we lay the foundation for success on your terms with an
              airtight plan.
            </p>
          </div>
        </section>

        <section className="flex items-center bg-white p-6 shadow-lg rounded-lg w-1/4">
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h11M9 21V3M19 10h2M15 6h6m-6 8h6m-6 4h6"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Migrate SAP to the Cloud
            </h3>
            <p>
              With our outcome-focused methodology and experience in
              successfully migrating over 8000 enterprise SAP systems, you can
              migrate with confidence.
            </p>
          </div>
        </section>

        <section className="flex items-center bg-white p-6 shadow-lg rounded-lg w-1/4">
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-3-9v18m7-2a9 9 0 10-14 0"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Manage SAP Operations
            </h3>
            <p>
              Post-migration, we ensure the optimal performance of your SAP
              systems while keeping costs low with proactive support and
              automated solutions.
            </p>
          </div>
        </section>

        <section className="flex items-center bg-white p-6 shadow-lg rounded-lg w-1/4">
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              Innovate with SAP on the Cloud
            </h3>
            <p>
              Hyperscale cloud providers continue to innovate rapidly. We help
              you leverage these innovations to implement new capabilities and
              maintain a competitive edge.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
