import { useEffect, useState } from 'react'
import './App.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/DevDomingoJohn', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:domingojohnled@gmail.com', icon: 'email' },
]

const projects = [
  {
    slug: 'example-android-app',
    title: 'Example Android App',
    category: 'android',
    description: 'A short description of what this Android app does and why it matters.',
    overview: 'A deeper write-up of the project for the case study page: the problem, the approach, and the result.',
    problem: 'Describe the problem this app exists to solve, who it is for, and why existing solutions fell short.',
    approach: ['How you broke the problem down', 'Key design decisions and the architecture you chose', 'What you tried and learned along the way'],
    outcome: ['Result 1 — a metric, user response, or outcome', "Result 2 — what you'd do differently next time"],
    highlights: ['What problem it solves', 'A notable design or architecture decision', 'Result or metric worth showing'],
    year: 2025,
    techStack: ['Kotlin', 'Jetpack Compose'],
    links: { github: 'https://github.com/DevDomingoJohn/example-android-app' },
  },
  {
    slug: 'example-web-app',
    title: 'Example Web App',
    category: 'web',
    description: 'A short description of what this web project does and why it matters.',
    overview: 'A deeper write-up of the project for the case study page: the problem, the approach, and the result.',
    problem: 'Describe the problem this project set out to solve, who it is for, and why existing solutions fell short.',
    approach: ['How you broke the problem down', 'Key design decisions and the tech choices you made', 'What you tried and learned along the way'],
    outcome: ['Result 1 — a metric, user response, or outcome', "Result 2 — what you'd do differently next time"],
    highlights: ['What problem it solves', 'A notable design or architecture decision', 'Result or metric worth showing'],
    year: 2024,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: { live: 'https://example-web-app.vercel.app', github: 'https://github.com/DevDomingoJohn/example-web-app' },
  },
  {
    slug: 'example-android-utility',
    title: 'Example Android Utility',
    category: 'android',
    description: 'A compact utility Android app solving a specific daily problem.',
    overview: 'A deeper write-up of the project for the case study page: the problem, the approach, and the result.',
    problem: 'Describe the specific daily problem this utility app solves and who it helps.',
    approach: ['How you broke the problem down', 'Key design decisions and the architecture you chose', 'What you tried and learned along the way'],
    outcome: ['Result 1 — a metric, user response, or outcome', "Result 2 — what you'd do differently next time"],
    highlights: ['What problem it solves', 'A notable design or architecture decision', 'Result or metric worth showing'],
    year: 2023,
    techStack: ['Kotlin', 'Room', 'Material 3'],
    links: { github: 'https://github.com/DevDomingoJohn/example-android-utility' },
  },
  {
    slug: 'example-landing-page',
    title: 'Example Landing Page',
    category: 'web',
    description: 'A marketing landing page built for speed and conversion.',
    overview: 'A deeper write-up of the project for the case study page: the problem, the approach, and the result.',
    problem: 'Describe the goal this landing page had to hit and the problem with the previous version.',
    approach: ['How you structured the page and the copy', 'Key design decisions and performance choices', 'What you tested and learned along the way'],
    outcome: ['Result 1 — conversion or performance outcome', "Result 2 — what you'd do differently next time"],
    highlights: ['What problem it solves', 'A notable design or architecture decision', 'Result or metric worth showing'],
    year: 2023,
    techStack: ['React', 'Tailwind CSS'],
    links: { live: 'https://example-landing-page.vercel.app' },
  },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Icon({ name, className = '' }) {
  if (name === 'github') return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
  if (name === 'linkedin') return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}

function smoothScrollTo(href) {
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
      for (const { href } of navLinks) {
        const section = document.getElementById(href.slice(1))
        if (section && section.getBoundingClientRect().top <= 128) current = href.slice(1)
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200) current = 'contact'
      setActive(`#${current}`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const followLink = (href) => (event) => {
    event.preventDefault()
    setOpen(false)
    smoothScrollTo(href)
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
  }
  return <code className={`tech-tag ${colors[name] || 'sky'}`}>{name}</code>
}

function About() {
  return <section id="about" aria-label="About me" className="content-section">
    <p className="eyebrow">About me</p><h2>A bit about who I am</h2>
    <div className="about-grid"><div className="about-copy">
      <p>I&apos;m an IT student and a passionate developer who&apos;s spent most time with Android development, building apps with <Tech name="Java" />, <Tech name="XML" />, <Tech name="Kotlin" /> and <Tech name="Jetpack Compose" />. I also have experience with web development using <Tech name="HTML" />, <Tech name="CSS" />, <Tech name="JavaScript" />, <Tech name="React" />, <Tech name="Next.js" />, <Tech name="TypeScript" />, <Tech name="Tailwind CSS" /> and <Tech name="Node.js" />.</p>
      <p>Currently, I&apos;m focused on building my portfolio, working on personal projects and exploring other technologies like <Tech name="Kotlin Multiplatform" />. I&apos;m always open to learning and collaborating on exciting projects.</p>
    </div><dl className="about-facts"><div><dt>Focus</dt><dd>Android · Web</dd></div><div><dt>Currently</dt><dd>Building my portfolio, open to opportunities</dd></div></dl></div>
  </section>
}

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  return <li className="project-card"><a href={`/projects/${project.slug}`} onClick={(event) => { event.preventDefault(); navigateTo(`/projects/${project.slug}`) }}>
    <div className="project-cover">{!imageFailed ? <img src={`/images/${project.slug}.png`} alt={`${project.title} screenshot`} onError={() => setImageFailed(true)} /> : <span aria-hidden="true">{project.category === 'android' ? '🤖' : '🌐'}</span>}</div>
    <div className="project-info"><div className="project-meta"><span className="category-pill">{project.category === 'android' ? 'Android' : 'Web'}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><ul className="tech-list">{project.techStack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
  </a></li>
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

function Footer() {
  return <footer id="contact" className="site-footer"><div className="footer-inner page-width">
    <div className="footer-brand"><p className="brand-name">Johnlery<span>.</span></p><p>Open to collaboration and interesting projects? Let&apos;s talk.</p><a href="#home" className="back-top" onClick={(event) => { event.preventDefault(); smoothScrollTo('#home') }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>Back to top</a></div>
    <div className="footer-social"><p>Get in touch</p><SocialLinks /></div>
  </div></footer>
}

function CaseStudySection({ heading, body, bullets }) {
  return <section><h2>{heading}</h2>{body && <p>{body}</p>}{bullets && <ul>{bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>
}

function ProjectPage({ project }) {
  const index = projects.indexOf(project)
  const previous = projects[index - 1]
  const next = projects[index + 1]
  const linkButtons = [['live', 'Live site ↗'], ['playStore', 'Play Store ↗'], ['github', 'Source ↗'], ['demo', 'Demo ↗']]
  return <article className="case-study page-width">
    <a className="all-projects" href="/#projects" onClick={(event) => { event.preventDefault(); navigateTo('/'); window.setTimeout(() => smoothScrollTo('#projects'), 50) }}>← All projects</a>
    <header className="case-header"><div className="project-meta"><span className="category-pill">{project.category === 'android' ? 'Android' : 'Web'}</span><span>{project.year}</span></div><h1>{project.title}</h1><p>{project.overview}</p><div className="case-links">{linkButtons.filter(([key]) => project.links[key]).map(([key, label]) => <a key={key} href={project.links[key]} target="_blank" rel="noopener noreferrer">{label}</a>)}</div></header>
    <div className="case-cover"><span aria-hidden="true">{project.category === 'android' ? '🤖' : '🌐'}</span></div>
    <div className="case-sections"><CaseStudySection heading="The problem" body={project.problem} /><CaseStudySection heading="The approach" bullets={project.approach} /><CaseStudySection heading="Highlights" bullets={project.highlights} /><CaseStudySection heading="The outcome" bullets={project.outcome} /></div>
    <section className="case-stack"><h2>Tech stack</h2><ul>{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul></section>
    <nav className="project-pagination" aria-label="More projects">{previous ? <a href={`/projects/${previous.slug}`} onClick={(event) => { event.preventDefault(); navigateTo(`/projects/${previous.slug}`) }}><span>Previous</span>{previous.title}</a> : <span />}{next && <a href={`/projects/${next.slug}`} onClick={(event) => { event.preventDefault(); navigateTo(`/projects/${next.slug}`) }}><span>Next</span>{next.title}</a>}</nav>
  </article>
}

function navigateTo(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])
  const slug = path.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    document.title = project ? `${project.title} — Johnlery` : 'Johnlery — Portfolio'
  }, [project])

  return <><Navbar /><main>{project ? <ProjectPage project={project} /> : <><Hero /><div className="page-width"><About /><Projects /></div></>}</main><Footer /></>
}
