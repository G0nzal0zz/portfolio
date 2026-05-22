import { useState } from 'react'
import {
  FaBook,
  FaDatabase,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaLinkedin,
  FaPython,
  FaReact,
  FaTools,
} from 'react-icons/fa'
import { SiHaskell, SiLangchain, SiLlvm, SiPytorch } from 'react-icons/si'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import { FaCss } from 'react-icons/fa6'

const base = import.meta.env.BASE_URL

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="global-margin py-16 md:py-20">
      <div className={subtitle ? 'mb-4' : 'mb-10'}>
        <h2>{title}</h2>
      </div>

      {subtitle && (
        <p className="text-slate-500 text-sm mb-8 max-w-lg">{subtitle}</p>
      )}

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
      className={`p-6 border border-slate-200 rounded-xl card-hover bg-white flex flex-col ${className}`}
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
  description: ReactNode
  tags: Array<{ icon: ReactNode; label: string }>
  links?: Array<ProjectLink>
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
      {media && <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">{media}</div>}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-1.5 text-slate-600 text-sm leading-relaxed grow">
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

type TechGroup = {
  label: string
  items: Array<string>
}

type TechCardProps = {
  icon: ReactNode
  title: string
  items: Array<string>
  groups?: Array<TechGroup>
}

function TechCard({ icon, title, items, groups }: TechCardProps) {
  const [expanded, setExpanded] = useState(false)
  const hasGroups = groups && groups.length > 0

  return (
    <Card className={hasGroups ? 'cursor-pointer select-none' : ''}>
      <div className="flex items-center gap-2 font-medium text-slate-900 text-sm">
        <span className="text-slate-600">{icon}</span>
        {title}
      </div>
      {!expanded ? (
        <p className="mt-2 text-slate-500 text-sm">{items.join(', ')}</p>
      ) : (
        <div className="mt-3 space-y-2">
          {groups!.map((group, i) => (
            <div key={i}>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {group.label}
              </span>
              <p className="text-slate-500 text-sm">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
      {hasGroups && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs text-blue-600 hover:text-blue-700 transition-colors"
        >
          {expanded ? 'Show less' : 'Show details'}
        </button>
      )}
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
            items={[
              'Python',
              'TypeScript',
              'JavaScript',
              'Java',
              'Haskell',
              'Go',
            ]}
            groups={[
              { label: 'Functional', items: ['Haskell'] },
              { label: 'Object-Oriented', items: ['Java', 'Python'] },
              {
                label: 'Multi-Paradigm',
                items: ['Python', 'TypeScript', 'JavaScript', 'Go'],
              },
            ]}
          />
          <TechCard
            icon={<FaReact />}
            title="Web"
            items={['React', 'Node.js', 'HTML', 'CSS']}
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
          <TechCard
            icon={
              <img src={`${base}rocq.svg`} className="w-4 h-4" alt="Rocq" />
            }
            title="Verification"
            items={['Rocq']}
          />
        </div>
      </Section>

      {/* Projects */}
      <div className="bg-slate-50">
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">

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
              description={
                <>
                  <strong>Programming language</strong> created in Haskell that
                  combines the speed of C with modern language features.
                </>
              }
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
                  src={`${base}system.png`}
                  alt="System"
                  className="w-full aspect-[4/3] object-contain bg-slate-100"
                />
              }
              title="Educational Agents"
              description={
                <>
                  Educational <strong>spoken dialogue system</strong> with AI
                  teacher and student agents that help a human learner.
                </>
              }
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
                <img
                  src={`${base}hide_and_peek.webp`}
                  alt="System"
                  className="w-full aspect-[4/3] object-cover bg-slate-100"
                />
              }
              title="Hide and Peek Strategy Verification"
              description={
                <>
                  Formally proving the <strong>optimal strategy</strong> for
                  Hide and Peek (Wii Party) in Rocq.{' '}
                </>
              }
              tags={[
                {
                  icon: (
                    <img
                      src={`${base}rocq.svg`}
                      className="w-3.5 h-3.5"
                      alt="Rocq"
                    />
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
            <ProjectCard
              media={
                <img
                  src={`${base}gym.png`}
                  alt="Gym website"
                  className="w-full aspect-[4/3] object-cover bg-slate-100"
                />
              }
              title="Gym Website"
              description={
                <>
                  Designed, created and deployed a <strong>responsive website</strong> for a gym.
                </>
              }
              tags={[
                { icon: <FaHtml5 />, label: 'HTML' },
                { icon: <FaCss />, label: 'CSS' },
              ]}
              links={[
                {
                  href: 'https://dysbajocinca.com',
                  icon: <FaGlobe />,
                  label: 'Website',
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
                    <span className="mt-0.5 text-slate-900 text-lg leading-none shrink-0">
                      &bull;
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        MSc Artificial Intelligence
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Heriot-Watt University &middot; 2025–2026
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Specialising in machine learning, NLP, and multi-agent
                          systems
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-slate-400 text-lg leading-none shrink-0">
                      &bull;
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        BSc Software Engineering
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Epitech &middot; 2022–2025
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
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
                    <span className="mt-0.5 text-slate-900 text-lg leading-none shrink-0">
                      &bull;
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Freelancing
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Sep 2025 – Present
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Building custom websites and AI solutions for clients.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-slate-400 text-lg leading-none shrink-0">
                      &bull;
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Junior Software Engineer &middot; Smadex
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Oct 2024 – Sep 2025 &middot; Barcelona, Spain
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Maintained Angular frontend and Node.js backend.
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Built AI agentic solutions and secure auth workflows
                          (OAuth).
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Worked with monolithic and microservices
                          architectures.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-slate-400 text-lg leading-none shrink-0">
                      &bull;
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Intern Software Developer &middot; Avvena
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Jul 2023 – Dec 2023 &middot; Barcelona, Spain
                      </p>
                      <ul className="mt-3 space-y-1">
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300 ">-</span>
                          Built a landing page with Next.js and maintained
                          Java/Spring Boot backend.
                        </li>
                        <li className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-slate-300">-</span>
                          Collaborated with non-technical teams to align product
                          solutions.
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
        <Section
          id="contact"
          title="Contact"
          subtitle="Feel free to reach out!"
        >
          <div className="flex gap-3">
            <a
              href="mailto:larroyagonzalo@gmail.com"
              className="h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-blue-700 transition-colors duration-200"
            >
              <div className="flex gap-3 justify-center items-center px-3">
                <FaEnvelope />
                Email
              </div>
            </a>
            <a
              href="https://github.com/G0nzal0zz"
              target="_blank"
              className="h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-slate-700 transition-colors duration-200"
            >
              <div className="flex gap-3 justify-center items-center px-3">
                <FaGithub />
                Github
              </div>
            </a>
            <a
              href="https://linkedin.com/in/gonzalo-larroya"
              target="_blank"
              className="h-11 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 hover:text-slate-700 transition-colors duration-200"
            >
              <div className="flex gap-3 justify-center items-center px-3">
                <FaLinkedin />
                LinkedIn
              </div>
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
