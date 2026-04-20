import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section id="home" className="global-margin py-8">
        <div className="big-title">Hi, I'm Gonzalo</div>
        <h4 className="mt-4">
          Junior Developer studying MSc in Artificial Intelligence
        </h4>
      </section>

      {/* About Section */}
      <section id="about" className="global-margin py-8">
        <h2>About</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          I'm a junior developer currently pursuing an MSc in Artificial
          Intelligence. I have experience in web development and a growing
          interest in machine learning and AI applications. I'm passionate about
          building intelligent systems and solving complex problems through
          code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="global-margin py-8">
        <h2>Projects</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg">
            <img
              src="/system.png"
              alt="System"
              className="w-full h-48 object-contain rounded-lg bg-gray-100"
            />
            <h3 className="mt-4">Educational Multiparty Agents</h3>
            <p className="mt-2 text-gray-600">Project description.</p>
            <a
              href="https://github.com/G0nzal0zz/educational-multiparty-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-gray-600 hover:text-blue-500"
            >
              GitHub
            </a>
          </div>
          <div className="p-6 border rounded-lg">
            <h3>Project 2</h3>
            <p className="mt-2 text-gray-600">
              Description of your second project.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3>Project 3</h3>
            <p className="mt-2 text-gray-600">
              Description of your third project.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3>Project 4</h3>
            <p className="mt-2 text-gray-600">
              Description of your fourth project.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="global-margin py-8">
        <h2>Education</h2>
        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <h3>MSc in Artificial Intelligence</h3>
            <p className="text-gray-600">Heriot-Watt University</p>
            <p className="text-gray-500">Edinburgh, UK</p>
            <p className="text-gray-400">2025 - 2026</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-4">
            <h3>Bachelor's Degree in Software Engineering</h3>
            <p className="text-gray-600">
              Epitech European Institute of technology
            </p>
            <p className="text-gray-500">Barcelona, Spain</p>
            <p className="text-gray-400">2022 - 2025</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="global-margin py-8">
        <h2>Experience</h2>
        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <h3>Freelance</h3>
            <p className="text-gray-400">August 2025 - Present</p>
          </div>
        </div>
        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-gray-300 pl-4">
            <h3>Junior Software Developer</h3>
            <p className="text-gray-600">Smadex</p>
            <p className="text-gray-500">Barcelona</p>
            <p className="text-gray-400">October 2024 - September 2025</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-4">
            <h3>Intern Software Developer</h3>
            <p className="text-gray-600">Avvena</p>
            <p className="text-gray-500">Barcelona</p>
            <p className="text-gray-400">July 2023 - December 2023</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="global-margin py-8">
        <h2>Contact</h2>
        <p className="mt-4 text-gray-600">
          Feel free to reach out to me at{' '}
          <a
            href="mailto:larroyagonzalo+contact@gmail.com"
            className="text-blue-500 hover:underline"
          >
            larroyagonzalo@gmail.com
          </a>
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="global-margin py-10 border-t">
        <p className="text-gray-500">© 2024 Gonzalo</p>
      </footer>
    </div>
  )
}
