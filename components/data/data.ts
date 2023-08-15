export interface Data {
  navigation: Navigation
  home: Home
  projects: Projects
  about: About
  contact: Contact
}

export interface About {
  title: string
  desc: string
  cta: string
  image: string
}

export interface Contact {
  title: string
  cta: string
  inputName: string
  inputEmail: string
  inputMessage: string
}

export interface Home {
  title: string
  heading: string
  subheading: string
  desc: string
  cta1: Cta
  cta2: Cta
}

export interface Cta {
  desc: string
  link: string
}

export interface Navigation {
  headerTitle: string
  footerTitle: string
  linksHeader: LinksHeader[]
  linksFooter: LinksFooter[]
}

export interface LinksFooter {
  label: string
  icon: string
  href: string
}

export interface LinksHeader {
  label: string
  href: string
}

export interface Projects {
  title: string
  cta: string
  projects: Project[]
}

export interface Project {
  id: string
  name: string
  desc: string
  image: string
  odd?: boolean
}
