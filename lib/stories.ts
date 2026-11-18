export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "code"; code: string; label?: string };

export interface Story {
  id: number;
  slug: string; // used in the URL: /stories/{slug}
  title: string;
  excerpt: string;
  date: string; // ISO format: "2026-07-24"
  tags: string[];
  content: Block[];
}

export const stories: Story[] = [
  {
    id: 1,
    slug: "story-one",
    title: "My Starting",
    excerpt: "I wasted few months changing tracks but it was good to explore.",
    date: "2026-07-24",
    tags: ["Backend", "Spring Framework"],
    content: [
      {
        type: "p",
        text: "In 2024, just after college started. I delved myself deep into choosing what to do. I was focussed to go with Web Development as it is hyped and easy. But then I was choosing What Techs to learn?",
      },
      {
        type: "p",
        text: "Didn't gave much thought and just jumped to learn ReactJS. AND then jumped into NodeJS, the minimalist, popular ecosystem. And I kinda liked it. Even made a note app with postgresql db. Then I had know Idea what to do. So, I started to changing now.",
      },
      {
        type: "p",
        text: "One fine day, an idea arose in my head, don't know where from. \"Let's Learn Python and its framework\". And Hence I embarked on the journey of 2.5 months of that. As I was coming from Java Background, it was a cup of tea to understand Python. Then I thought of Learning flask, \"Why flask in BIG 2k25?\". Don't know probably because extensively used in building models. But that wasn't for long.",
      },
      {
        type: "p",
        text: "In next few days, I jumped to Django. But that was not for long either. I copied blindly from what the course seller was teaching and grabbed it but now I know nothing about that.",
      },
      {
        type: "p",
        text: "But then comes that time when someone re-entered my life. Mr Java. I had left practising java after school and probably then saw a post or video on how java is f better than all. (which is not true probably). So I again went to master advanced java and did pretty well there. Though at that point, I was just doing Java for mastering DSA and stuff but then something happened.",
      },
      {
        type: "p",
        text: "I came across the video of CodeHead on, \"Why You SHOULD learn Spring Boot?\". And after I completed it I was like, \"Let's go man.. It's time to settle with the loml\". And hence went deep into spring boot and even tried it's fraweworks like JPA, Security, Eureka. And till now I don't regret wasting my time with Django, Flask, NodeJS. Because if they were not there, I would not been introduced to this hell of a giant named Spring Ecosystem. Now all the frameworks are great and applicable in different scenerios and in current market, ofc it is not about the code but the idea and design that will make us go far. But still Even if All the frameworks are greatest, Spring is a little better. (copied from yk).",
      },
      {
        type: "p",
        text: "(Now I am not telling why is it better, you can just watch the video I mentioned or chatgpt it.)",
      },

      { type: "p", text: "Just thought of sharing my story." },
    ],
  },
];

/* ---------- helpers ---------- */

// Newest first
export const sortedStories = [...stories].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date),
);

export function getStory(slug: string) {
  return sortedStories.find((s) => s.slug === slug);
}

export function getNeighbours(slug: string) {
  const i = sortedStories.findIndex((s) => s.slug === slug);
  return {
    newer: i > 0 ? sortedStories[i - 1] : undefined,
    older: i < sortedStories.length - 1 ? sortedStories[i + 1] : undefined,
  };
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function readingTime(story: Story) {
  const words = story.content
    .map((b) =>
      b.type === "list" ? b.items.join(" ") : b.type === "code" ? "" : b.text,
    )
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
