import { useEffect, useState } from 'react'
import draftyScreenshot from './assets/drafty_screenshot.jpg'
import draftyLandingScreenshot from './assets/drafty_landing_screenshot.png'
import kixoScreenshot from './assets/KIXO_screenshot.png'
import readykitScreenshot from './assets/readykit_screenshot.png'

const socials = [
  { label: 'GitHub', href: 'https://github.com/DevDomingoJohn', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:domingojohnled@gmail.com', icon: 'email' },
]

const projects = [
  {
    title: 'Drafty',
    category: 'android',
    image: draftyScreenshot,
    source: 'closed',
    description: 'An overlay for ranked ML drafts that recommends hero picks by weighing pick, win, and ban rates alongside team synergy and counter matchups, helping players make more informed choices during the draft.',
    year: 2026,
    techStack: ['Kotlin', 'Jetpack Compose', 'OkHttp', 'Media Projection API'],
  },
  {
    title: 'KIXO',
    category: 'web',
    image: kixoScreenshot,
    source: 'open',
    repository: 'https://github.com/DevDomingoJohn/KIXO',
    description: 'A shoe-shopping website inspired by online marketplaces like Lazada, where customers can explore shoe listings and shop for styles in one place.',
    year: 2026,
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'ReadyKit',
    category: 'android',
    image: readykitScreenshot,
    source: 'open',
    repository: 'https://github.com/DevDomingoJohn/ReadyKit',
    description: 'An offline emergency-preparedness app for organizing goods, medication, and other essential supplies. Track quantities and expiry dates, check what is ready when it matters, and keep important emergency numbers close at hand.',
    year: 2025,
    techStack: ['Kotlin', 'Jetpack Compose', 'Room'],
  },
  {
    title: 'Drafty Landing Page',
    category: 'web',
    image: draftyLandingScreenshot,
    source: 'closed',
    description: 'The companion website for Drafty, introducing the app, explaining how to use it, and providing a place to download the latest version.',
    year: 2026,
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const skillGroups = [
  { label: 'Android', skills: ['Kotlin', 'Jetpack Compose', 'Java', 'XML'] },
  { label: 'Web', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
  { label: 'Scripting', skills: ['Lua', 'Python'] },
  { label: 'Interests', skills: ['AI Development', 'Kotlin Multiplatform', 'Game Development', 'Networking', 'Software Development'] },
]

const resumeEntries = {
  education: [
    {
      title: 'Bachelor of Science in Information Technology',
      place: 'Cavite State University – Tanza',
      period: '2023 – 2028 (Expected)',
      detail: 'Third-year student focused on software development, AI, and web technologies. Coursework in data structures, algorithms, databases, networking and application development.',
    },
  ],
  experience: [
    {
      title: 'Independent Developer',
      place: 'Personal Projects',
      period: '2023 - Present',
      detail: 'Designing and shipping Android, Web and AI applications end-to-end, from prototyping to deployment, with a focus on product design and user experience.',
    },
    {
      title: 'Open Source Contributor',
      place: 'Vencord',
      period: '2025 - Present',
      detail: 'Built an AI style translation plugin using LLMs to translate text into user-chosen styles and different languages. Contributed TypeScript/React fixes and features via pull requests and code review.',
    },
    {
      title: 'Creator & Developer',
      place: 'Pleiadex Project / Hub',
      period: '2025 - Present',
      detail: 'Built and maintained a scripting platform serving nearly 1,000 users, including account systems, script distribution, versioning, and community moderation.',
    },
  ],
}

function Icon({ name, className = '' }) {
  if (name === 'github') return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
  if (name === 'linkedin') return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}

function smoothScrollTo(href, onComplete) {
  const target = document.querySelector(href)
  if (!target) return
  const startY = window.scrollY
  const distance = target.getBoundingClientRect().top + startY - 80 - startY
  const duration = Math.min(Math.max(Math.abs(distance) / 2.5, 300), 900)
  const startTime = performance.now()
  const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo({ top: startY + distance * ease(progress), behavior: 'auto' })
    if (progress < 1) requestAnimationFrame(step)
    else onComplete?.()
  }
  requestAnimationFrame(step)
}

function SocialLinks() {
  return <ul className="social-links">{socials.map((social) => <li key={social.label}><a href={social.href} aria-label={social.label} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}><Icon name={social.icon} /></a></li>)}</ul>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      let current = 'home'
      let currentTop = Number.NEGATIVE_INFINITY
      for (const { href } of navLinks) {
        const section = document.getElementById(href.slice(1))
        const top = section?.getBoundingClientRect().top
        if (top !== undefined && top <= 128 && top > currentTop) {
          current = href.slice(1)
          currentTop = top
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = 'contact'
      setActive(`#${current}`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const followLink = (href) => (event) => {
    event.preventDefault()
    setOpen(false)
    smoothScrollTo(href, () => setActive(href))
  }

  return <header className="site-header"><nav className="top-nav" aria-label="Main navigation">
    <span className="nav-spacer" />
    <ul className="desktop-nav">{navLinks.map((link) => <li key={link.href}><a href={link.href} onClick={followLink(link.href)} className={active === link.href ? 'active' : ''}>{link.label}</a></li>)}</ul>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
    </button>
  </nav>
    {open && <div className="mobile-menu" id="mobile-menu"><ul>{navLinks.map((link) => <li key={link.href}><a href={link.href} onClick={followLink(link.href)}>{link.label}</a></li>)}</ul></div>}
  </header>
}

function Hero() {
  return <section id="home" className="hero-section page-width" aria-label="Intro">
    <div className="hero-grid">
      <div className="hero-copy">
        <h1><span>John Lery Domingo</span></h1>
        <p className="hero-role">Android Developer · Web Developer</p>
        <p className="hero-description">I combine my knowledge of Android development and web technologies to deliver high-quality and user-friendly mobile and web applications.</p>
        <p className="hero-description hero-invite">Interested in collaborating on projects or have an idea in mind? Let&apos;s talk.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects" onClick={(event) => { event.preventDefault(); smoothScrollTo('#projects') }}>View my work</a><a className="button button-outline" href="/resume.pdf" download>Download resume</a></div>
        <SocialLinks />
      </div>
      <div className="code-window-wrap" aria-hidden="true">
        <div className="code-window">
          <div className="window-bar"><i /><i /><i /><span>Developer.kt</span></div>
          <pre><code><span className="syntax-purple">class</span> <span className="syntax-blue">Developer</span> {'{'}{'\n'}    <span className="syntax-purple">val</span> name = <span className="syntax-green">&quot;John Lery&quot;</span>{'\n'}    <span className="syntax-purple">val</span> stack = <span className="syntax-green">&quot;Android · Web&quot;</span>{'\n\n'}    <span className="syntax-purple">fun</span> <span className="syntax-blue">buildSomething</span>() {'{'}{'\n'}        return <span className="syntax-green">&quot;Let&apos;s talk 👋&quot;</span>{'\n'}    {'}'}{'\n'}{'}'}</code></pre>
        </div>
      </div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about section" onClick={(event) => { event.preventDefault(); smoothScrollTo('#about') }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></a>
  </section>
}

function Tech({ name }) {
  const colors = {
    Java: 'amber', XML: 'orange', Kotlin: 'purple', 'Jetpack Compose': 'sky',
    HTML: 'orange', CSS: 'sky', JavaScript: 'yellow', React: 'cyan',
    'Next.js': 'white', TypeScript: 'blue', 'Tailwind CSS': 'cyan',
    'Node.js': 'green', 'Kotlin Multiplatform': 'purple',
    'AI Development': 'cyan', 'Game Development': 'green',
    Networking: 'blue', 'Software Development': 'amber',
    Android: 'purple', Web: 'sky', 'Mobile experiences': 'cyan',
    'Useful web apps': 'blue', 'Learning new tools': 'green',
  }
  return <code className={`tech-tag ${colors[name] || 'sky'}`}>{name}</code>
}

function About() {
  return <section id="about" aria-label="About me" className="content-section">
    <p className="eyebrow">About me</p><h2>A bit about who I am</h2>
    <div className="about-grid"><div className="about-copy">
      <p>I&apos;m an IT student and a passionate developer who&apos;s spent most time with Android development, building apps with <Tech name="Java" />, <Tech name="XML" />, <Tech name="Kotlin" /> and <Tech name="Jetpack Compose" />. I also have experience with web development using <Tech name="HTML" />, <Tech name="CSS" />, <Tech name="JavaScript" />, <Tech name="React" />, <Tech name="Next.js" />, <Tech name="TypeScript" />, <Tech name="Tailwind CSS" /> and <Tech name="Node.js" />.</p>
      <p>Currently, I&apos;m focused on building my portfolio, working on personal projects and exploring other technologies like <Tech name="Kotlin Multiplatform" />. I&apos;m always open to learning and collaborating on exciting projects.</p>
    </div><dl className="about-facts"><div><dt>Focus</dt><dd>Android · Web · Scripting</dd></div><div><dt>Currently</dt><dd>Locked in on my personal projects, and still open to opportunities</dd></div><div><dt>Interests</dt><dd>Mobile experiences · AI Development · Learning new tools · Software Development</dd></div></dl></div>
  </section>
}

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const Card = project.repository ? 'a' : 'article'
  return <li className="project-card"><Card className="project-card-content" {...(project.repository ? { href: project.repository, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `View ${project.title} repository on GitHub` } : {})}>
    <div className={`project-cover${project.image ? ' project-cover-screenshot' : ''}`}>{project.image && !imageFailed ? <img src={project.image} alt={`${project.title} screenshot`} onError={() => setImageFailed(true)} /> : <span aria-hidden="true">{project.category === 'android' ? '🤖' : '🌐'}</span>}</div>
    <div className="project-info"><div className="project-meta"><div className="project-tags"><span className="category-pill">{project.category === 'android' ? 'Android' : 'Web'}</span><span className={`source-pill ${project.source}`}>{project.source === 'open' ? 'Open source' : 'Close source'}</span></div><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><ul className="tech-list">{project.techStack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
  </Card></li>
}

function Projects() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? projects : projects.filter((project) => project.category === active)
  return <section id="projects" aria-label="Projects" className="content-section projects-section">
    <p className="eyebrow">Projects</p><h2>Selected work</h2><p className="section-intro">A selection of things I&apos;ve built across Android and the web.</p>
    <div className="filters" role="group" aria-label="Filter projects by platform">{[['all', 'All'], ['android', 'Android'], ['web', 'Web']].map(([value, label]) => <button type="button" key={value} aria-pressed={active === value} className={active === value ? 'selected' : ''} onClick={() => setActive(value)}>{label}</button>)}</div>
    {visible.length ? <ul className="project-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</ul> : <p className="empty-projects">No projects here yet.</p>}
  </section>
}

function ResumeEntry({ entry }) {
  return <li className="resume-entry">
    <div className="resume-entry-heading"><h4>{entry.title}</h4><span>{entry.period}</span></div>
    <p className="resume-place">{entry.place}</p>
    <p>{entry.detail}</p>
  </li>
}

function Resume() {
  return <section id="resume" aria-label="Resume and skills" className="content-section resume-section">
    <p className="eyebrow">Resume</p><h2>Education, experience &amp; skills</h2>
    <p className="section-intro">A quick overview of my background.</p>
    <div className="resume-grid">
      <div className="resume-column">
        <h3>Education</h3>
        <ul className="resume-list">{resumeEntries.education.map((entry) => <ResumeEntry key={entry.title} entry={entry} />)}</ul>
        <h3 className="resume-subheading">Experience</h3>
        <ul className="resume-list">{resumeEntries.experience.map((entry) => <ResumeEntry key={entry.title} entry={entry} />)}</ul>
      </div>
      <div className="resume-column skills-column">
        <h3>Skills &amp; interests</h3>
        {skillGroups.map((group) => <div className="skill-group" key={group.label}>
          <h4>{group.label}</h4>
          <ul className="skill-tags">{group.skills.map((skill) => <li key={skill}><Tech name={skill} /></li>)}</ul>
        </div>)}
        <a className="button button-outline resume-download" href="/resume.pdf" download>Download resume</a>
      </div>
    </div>
  </section>
}

function Footer() {
  return <footer id="contact" className="site-footer"><div className="footer-inner page-width">
    <div className="footer-brand"><p className="brand-name">Johnlery<span>.</span></p><p>Open to collaboration and interesting projects? Let&apos;s talk.</p><a href="#home" className="back-top" onClick={(event) => { event.preventDefault(); smoothScrollTo('#home') }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>Back to top</a></div>
    <div className="footer-social"><p>Get in touch</p><SocialLinks /></div>
  </div></footer>
}

export default function App() {
  useEffect(() => {
    document.title = 'Johnlery — Portfolio'
  }, [])

  return <><Navbar /><main><Hero /><div className="page-width"><About /><Resume /><Projects /></div></main><Footer /></>
}
