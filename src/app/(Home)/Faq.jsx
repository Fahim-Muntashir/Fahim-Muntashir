import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 my-40 dark:text-gray-100 lg:px-16">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I place an order?
            </summary>
            <div className="px-4 pb-4">
              <p>
                To place an order, you can reach out to us through the contact
                section. Simply email us, and we will promptly respond.
                Alternatively, you can find my social media links on the first
                page and contact me through those platforms. We look forward to
                assisting you with your order!
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What technologies do you specialize in?
            </summary>
            <div className="px-4 pb-4">
              <p>
                We specialize in a comprehensive range of cutting-edge
                technologies to deliver top-notch web development solutions. Our
                expertise includes HTML, CSS, JavaScript, Node.js, Express.js,
                MongoDB, Next.js, Tailwind CSS, Figma, Framer Motion, Bootstrap,
                JavaScript, TypeScript, React, and Redux. Our versatile tech
                stack is meticulously curated to address the unique requirements
                of each project, ensuring a robust and tailored solution.{" "}
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Do you provide ongoing website maintenance?{" "}
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Absolutely. We offer ongoing maintenance services to ensure your
                website stays up-to-date with the latest technologies and
                remains secure and functional.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What services do you offer as a web developer?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                We provide a range of web development services, including but
                not limited to website design, development, maintenance, and
                optimization.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How long does it take to build a website?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The timeline for website development varies based on the
                complexity and requirements of the project. We'll provide you
                with a detailed estimate after assessing your needs.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Do you only provide web development services, or do you offer
              other services such as video editing and digital marketing?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                While my primary focus is on web development services, I also
                have a talented team that provides a range of additional
                services, including video editing and digital marketing.
                Depending on the project requirements, we may also collaborate
                with external experts for specialized tasks.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can I inquire about services beyond web development?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                If you're interested in services beyond web development, feel
                free to reach out to us with your specific requirements. We'll
                assess your needs and, if necessary, involve the relevant team
                members or specialists to ensure your project's success.{" "}
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
