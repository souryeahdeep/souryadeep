export interface Project {
  slug: string; // used in the URL: /projects/{slug}
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  status: string;
  image?: string; // e.g. "/projects/my-app.png" (file in /public)
  imageAlt?: string;
  github?: string;
  live?: string;
  stack: string[];
  overview: string[]; // one string per paragraph
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "apisentry",
    title: "ApiSentry",
    tagline: "CI/CD Developer tool",
    category: "CI/CD Developer tool",
    image: "/APISEN.png",
    year: "2026",
    role: "Backend Dev",
    status: "Completed",
    github: "https://github.com/souryeahdeep/apisentry-action",
    live: "{{live url}}",
    stack: ["Java", "Spring Framework","Shell"],
    overview: [
      "Catches breaking API changes in Spring Boot projects before they ship — and tells you exactly which frontend files will break.",
      "ApiSentry is a GitHub Action that runs on every pull request. It builds your Spring Boot app, generates its OpenAPI spec, compares it against the last stable version, and — if anything breaking is found — posts a PR comment with the exact details and fails the check. If you give it your frontend source directories, it also scans them for real HTTP calls to the endpoints that changed, so you know precisely which files need a fix, not just that \"something might be affected.\"",
    ],
    features: [
      "Endpoints removed or renamed",
      "Required fields added to a request",
      "Response fields removed or type-changed",
      "Optional parameters made required",
      "Any other breaking change oasdiff can detect (300+ rules)"
    ],
  },
  {
    slug: "bridgeops",
    title: "BridegOps",
    image: "/BRIDGEOPS.png",
    tagline: "Collaborative Tools Workspace.",
    category: "Full stack",
    year: "2k26",
    role: "Full Stack Dev",
    status: "Completed",
    github: "https://youtu.be/zgbUp22Kb1Q",
    stack: ["NextJS", "TailwindCSS","Python","Gemini"],
    overview: ["Build, organize and manage your development team without the usual overhead. You can add team members and define their roles, such as Frontend Developer, Backend Developer, DevOps Engineer or Designer, and link each person’s GitHub account to their profile. Role based access and task visibility mean everyone sees what is relevant to them. Clear structure, zero confusion.", "Get the right tasks to the right people at the right time. Create tasks with descriptions and deadlines, and the platform suggests assignments based on each team member’s role. You can then assign a task to a specific person and track its status and progress from start to finish. Right task, right person, right time.","Understand complex codebases and bring new team members up to speed faster. The platform automatically generates UML diagrams, so you can see how the codebase is structured and how its parts relate to each other. AI powered architectural insights and simpler explanations of complex modules make it easier to learn the system. You can understand it in minutes, not days.","Manage repository activity without constantly switching between tools. You can create issues and push them to specific repositories, with descriptions generated automatically. You can also commit your current changes and push updates directly to your repositories, all through secure authentication for GitHub operations. No context switching, no friction."],
    features: ["Centralized collaboration: Organize your team and development activities in one place.", "AI-powered productivity: Streamline workflows with intelligent assistance."," Faster onboarding: Make codebases easier to understand through UML diagrams and architectural insights."],
  },
  {
    slug: "campusos",
    title: "CampusOS",
    tagline: "Makes your college life smoother",
    category: "System",
    year: "{{Year}}",
    image:"/CampusOS.png",
    role: "Full Stack Dev",
    status: "On-going",
    stack: ["SpringBoot","ReactJS","TailwindCSS","Openfeign","JWT","Spring Security","DataJPA"],
    overview: ["This is my first Major project. It sounds a typical college managemnt app, but developing the whole system end to end gave me the oppurtunity to explore microservices, spring framework, security, QR based generation, automated time-table resolver. It doesn't sound fancy like other project but sure is the one I like the most. ","Well, I am from a college where the applications, doesn't work properly and students and teachers need to hastle to handle the websites. Websites were slow, not effcient to handle large users, and hence I wanted to make something efficient inspired by the failure of the scene. ", "CampusOS leds handles the entire life cycle of a student in his college years while maintaining the security which is most important. QR-based attendance saver, Timetable generator are the peak of the product which I missed in my college. This product has lot of aspects to increase like Payment Method, Library, Exam services."],
    features: ["{{Feature one}}"],
  },
   {
    slug: "wing-checker",
    title: "Wing Checker",
    tagline: "A Quiz App to know your stand in politics",
    category: "Quiz App",
    year: "2k26",
    image:"/WINGCHECKER.png",
    live:"https://wing-checker.vercel.app/",
    role: "Full Stack Dev",
    status: "Completed",
    stack: ["NextJS","TailwindCSS"],
    overview: ["This is a fun site that I got idea from reels. You know during the CJP protest, there was so many issues from both the right and left wing spaces were coming up. Many people don't even know the meaning of being right and left. Being left doesn't make one better person, it just the issues that both person solve.", "Wing Checker is an interactive political personality game that challenges you to discover where your beliefs truly stand. Through 20 thought-provoking questions covering politics, economics, society, personal freedoms, authority, and global outlook, the game maps your responses across multiple ideological dimensions to reveal your unique Political DNA. Whether you lean left, right, progressive, conservative, libertarian, or somewhere in between, Wing Checker goes beyond traditional political labels to uncover the nuances and contradictions in what you believe. After all, politics isn't always black and white. Everyone has a side. What's yours?"],
    features: ["Goes beyond the traditional Left vs Right classification.",
      "20 carefully designed questions that present real-world political and social dilemmas.",
      "Generates a unique political identity based on the user's answers, revealing ideological leanings, strongest beliefs, and unexpected contradictions in their political outlook."
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    next: projects[(i + 1) % projects.length],
  };
}