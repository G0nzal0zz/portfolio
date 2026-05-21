import type { ReactNode } from 'react'
const base = import.meta.env.BASE_URL
import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaDatabase,
  FaTools,
  FaBook,
  FaFilePdf,
  FaEnvelope,
} from 'react-icons/fa'
import { SiPytorch, SiHaskell, SiLlvm, SiLangchain } from 'react-icons/si'
import Header from '@/components/Header'

function Section({
  id,
  title,
  children,
  className = '',
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`global-margin py-16 md:py-20 ${className}`}>
      <div className="mb-10">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`p-6 border border-slate-200 rounded-xl card-hover bg-white ${className}`}
    >
      {children}
    </div>
  )
}

function Tag({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-100 rounded-md text-slate-600">
      {icon}
      {label}
    </span>
  )
}

type ProjectLink = {
  href: string
  icon: ReactNode
  label: string
}

type ProjectCardProps = {
  media?: ReactNode
  title: string
  description: string
  tags: { icon: ReactNode; label: string }[]
  links?: ProjectLink[]
}

function ProjectCard({
  media,
  title,
  description,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <Card>
      {media && <div className="-mx-6 -mt-6 mb-4">{media}</div>}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <Tag key={i} icon={tag.icon} label={tag.label} />
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-row gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-700 transition-colors duration-200"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      )}
    </Card>
  )
}

type TechCardProps = {
  icon: ReactNode
  title: string
  items: string[]
}

function TechCard({ icon, title, items }: TechCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-2 font-medium text-slate-900 text-sm">
        <span className="text-blue-700">{icon}</span>
        {title}
      </div>
      <p className="mt-2 text-slate-500 text-sm">{items.join(', ')}</p>
    </Card>
  )
}

function App() {
  return (
    <div className="text-slate-800">
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="global-margin pt-24 pb-16 md:pt-32 md:pb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Gonzalo Larroya
        </h1>
        <p className="mt-4 text-slate-500 max-w-xl text-lg">
          Junior Developer &middot; MSc Artificial Intelligence &middot;
          Intelligent systems & formal methods
        </p>
      </section>

      {/* About */}
      <div className="bg-slate-50">
        <Section id="about" title="About">
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            I'm a junior developer pursuing an MSc in Artificial Intelligence. I
            focus on building reliable, scalable systems and have a growing
            interest in machine learning and formal verification.
          </p>
        </Section>
      </div>

      {/* Technologies */}
      <Section id="technologies" title="Technologies">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <TechCard
            icon={<FaPython />}
            title="Languages"
            items={['Python', 'TypeScript', 'JavaScript', 'Java']}
          />
          <TechCard
            icon={<FaReact />}
            title="Web"
            items={['React', 'Vue', 'Node.js', 'HTML', 'CSS']}
          />
          <TechCard
            icon={<FaDatabase />}
            title="Databases"
            items={['PostgreSQL', 'MySQL', 'MongoDB']}
          />
          <TechCard
            icon={<FaTools />}
            title="Tools"
            items={['Git', 'Docker', 'AWS']}
          />
          <TechCard
            icon={<SiPytorch />}
            title="AI / ML"
            items={['PyTorch', 'TensorFlow', 'LangChain']}
          />
        </div>
      </Section>

      {/* Projects */}
      <div className="bg-slate-50">
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              media={
                <img
                  src={`${base}system.png`}
                  alt="System"
                  className="w-full aspect-[4/3] object-cover bg-slate-100"
                />
              }
              title="Educational Multiparty Agents"
              description="Multi-agent educational system exploring collaborative AI interactions."
              tags={[
                { icon: <FaPython />, label: 'Python' },
                { icon: <SiLangchain />, label: 'LangChain' },
              ]}
              links={[
                {
                  href: 'https://github.com/G0nzal0zz/educational-multiparty-agents',
                  icon: <FaGithub />,
                  label: 'Code',
                },
              ]}
            />

            <ProjectCard
              media={
                <div className="w-full aspect-[4/3] bg-slate-100">
                  <iframe
                    src="https://www.youtube.com/embed/UYt2HwnQzyE"
                    title="Frostlang Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              }
              title="Frostlang"
              description="Programming language created in Haskell that combines the speed of C with modern language features."
              tags={[
                { icon: <SiHaskell />, label: 'Haskell' },
                { icon: <SiLlvm />, label: 'LLVM' },
              ]}
              links={[
                {
                  href: 'https://github.com/G0nzal0zz/frostlang',
                  icon: <FaGithub />,
                  label: 'Code',
                },
                {
                  href: 'https://g0nzal0zz.gitbook.io/frost/',
                  icon: <FaBook />,
                  label: 'Docs',
                },
                {
                  href: 'https://g0nzal0zz.github.io/frostlang/',
                  icon: <SiHaskell />,
                  label: 'Haddock',
                },
              ]}
            />

            <ProjectCard
              media={
                <img
                  src={`${base}hide_and_peek.webp`}
                  alt="System"
                  className="w-full aspect-[4/3] object-cover bg-slate-100"
                />
              }
              title="(WII Party) Hide and Peek Strategy Verification"
              description="Verification of a game strategy using Rocq proof assistant."
              tags={[
                {
                  icon: (
                    <img src={`${base}rocq.svg`} className="w-3.5 h-3.5" alt="Rocq" />
                  ),
                  label: 'Rocq',
                },
                { icon: <SiLlvm />, label: 'LLVM' },
              ]}
              links={[
                {
                  href: 'https://github.com/G0nzal0zz/hide_and_peek_verification',
                  icon: <FaGithub />,
                  label: 'Code',
                },
              ]}
            />
          </div>
        </Section>
      </div>

      {/* Education & Experience */}
      <div className="bg-slate-50">
        <div className="global-margin py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <section id="education">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
                Education
              </h2>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        MSc Artificial Intelligence
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Heriot-Watt University &middot; 2025–2026
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Specialising in machine learning, NLP, and multi-agent
                          systems
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        BSc Software Engineering
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Epitech &middot; 2022–2025
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Project-based curriculum covering full-stack
                          development, algorithms, and system design
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section id="work">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
                Experience
              </h2>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Freelance
                      </h3>
                      <p className="text-slate-500 text-sm">2025 – Present</p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Built and deployed full-stack web applications for
                          small businesses
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Developed custom automation scripts and data pipelines
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Junior Software Developer
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Smadex &middot; 2024–2025
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Contributed to the development of a real-time bidding
                          platform
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Built and maintained RESTful APIs and data processing
                          pipelines
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 mt-1.5">-</span>
                          Collaborated in an agile team using CI/CD and code
                          review practices
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CV */}
      <Section id="cv" title="CV">
        <a
          href={`${base}cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
        >
          <FaFilePdf className="text-lg" />
          View CV (PDF)
        </a>
      </Section>

      {/* Contact */}
      <div className="bg-slate-50">
        <Section id="contact" title="Contact" className="pb-8 md:pb-12">
          <p className="text-slate-500 text-sm mb-4 max-w-lg">
            Feel free to reach out!
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:larroyagonzalo@gmail.com"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-blue-700 transition-colors duration-200"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/G0nzal0zz"
              target="_blank"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-slate-700 transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gonzalo-larroya"
              target="_blank"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-slate-700 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </Section>
      </div>

      <footer className="global-margin py-10 border-t border-slate-200 text-sm text-slate-400">
        &copy; 2026 Gonzalo
      </footer>
    </div>
  )
}

export default App
