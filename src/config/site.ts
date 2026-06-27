export const site = {
  name: "Chris Pipitone",
  handle: "chris.pipitone",
  tagline: "Software Engineer",
  bio: "I'm just a jabroni who codes. I write software by trade but enjoy firmware and hardware projects as hobbies. No teaching here, its just a place for me to collectively talk about my projects. Probably will look different everytime you look here, or exactly the same, depends how lazy I am.  ",
  url: "https://chrispipitone.com",
  resume: null as string | null, // set to "/resume.pdf" once you add a PDF to public/
  skills: [
    "C++", "TypeScript", "JavaScript",
    "Python", "C", "React", "Embedded Systems",
  ],
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  socials: {
    github: "https://github.com/chrispipitone",
    linkedin: "https://www.linkedin.com/in/chris-pipitone/",
  },
};
