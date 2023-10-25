import PageLayout from "@/components/pageComponents/PageLayout";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageLayout>
      <div className=" py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to My Next.js App Directory Boilerplate
          </h1>
          <p className="text-lg mb-8">
            Here are some of the features of this boilerplate:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-l-g-b dark:bg-d-g-b bg-opacity-20 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Dark/Light Modes</h2>
              <p>Switch between dark and light themes effortlessly.</p>
            </div>
            <div className="p-4 bg-l-g-b dark:bg-d-g-b bg-opacity-20 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Next Js Middleware
              </h2>
              <p> Middleware for protected routes</p>
            </div>
            <div className="p-4 bg-l-g-b dark:bg-d-g-b bg-opacity-20 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Proper File and Folder Structure
              </h2>
              <p>Organize your project with a clean and efficient structure.</p>
            </div>
          </div>
          <div className="mt-10 text-lg text-center">
            <p className="text-gray-500">👤 About the Developer</p>
            <Link
              href="https://bilalhassan.netlify.app/"
              className="text-blue-600 hover:underline text-2xl font-bold"
            >
              Discover Bilal's Universe
            </Link>
          </div>

          <div className="mt-8 gap-4 flex flex-wrap justify-center text-center">
            <Link
              target="_blank"
              href="https://github.com/Bilalshah110/nextjs-boilerplate"
              className="text-blue-300 hover:underline mb-2 md:mb-0 md:mr-4"
            >
              GitHub
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/bilalshah110"
              className="text-blue-300 hover:underline mb-2 md:mb-0 md:mr-4"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/bilal_shah_photography/"
              className="text-blue-300 hover:underline mb-2 md:mb-0 md:mr-4"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
