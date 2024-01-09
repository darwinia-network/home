interface Section {
  icon: string;
  items?: (string | { label: string; path: string; isExternal?: boolean })[][];
  description?: string;
  content?: { link: { label: string; path: string; isExternal?: boolean }; text?: string }[];
  sub?: ({ h2: string } & Section)[];
}

interface GetInvolvedData {
  title: string;
  summary: string;
  sections: ({
    h1: string;
  } & Section)[];
}

export default function useGetInvolvedData(): GetInvolvedData {
  return {
    title: "Get involved",
    summary:
      "The Darwinia community includes people of many different backgrounds and skillsets. Whether you're a developer, a UI designer, or a researcher, there are ways to get involved. Here's a list of suggestions that might help you get started.",
    sections: [
      {
        h1: "Developers",
        icon: "🧑‍💻",
        items: [
          [
            "Join the ",
            { label: "Darwinia Technical Discord", path: "https://discord.com/invite/fZDWmJKWCw", isExternal: true },
          ],
          [
            "Learn about and try Darwinia at ",
            { label: "https://docs.darwinia.network/", path: "https://docs.darwinia.network/", isExternal: true },
          ],
          [
            {
              label: "Apply for a Grant Program, tooling",
              path: "https://github.com/darwinia-network/collaboration/blob/master/grant/README.md#darwinia-foundation-grants-program",
              isExternal: true,
            },
            ", and infrastructure areas where the Darwinia Ecosystem is actively seeking grant applications",
          ],
          [
            {
              label: "Run collator node",
              path: "https://docs.darwinia.network/how-to-become-a-collator-af6bce360d5b49ddacc56e4587510210",
              isExternal: true,
            },
            " in helping to further decentralize Darwinia",
          ],
        ],
      },
      {
        h1: "Non-technical Skillsets",
        icon: "🔊",
        description:
          "If you're not a developer, it can be hard to know where to start in Darwinia. Here are a few suggestions, along with resources for specific professional backgrounds.",
        sub: [
          {
            h2: "Content Creator",
            icon: "⌨️",
            description:
              "Educate the community and the broader public about Darwinia through writing informative and insightful content in videos, blogs, graphic designs, podcasts, or any other artistic production form.",
          },
          {
            h2: "Meetup Organizer",
            icon: "🤝",
            description:
              "Host online or offline Darwinia meetups/ technical workshops/hackathons, connect with local blockchain enthusiasts to educate them on what Darwina is, and discover the potential users/partners through discussion and communication.",
          },
          {
            h2: "Translator",
            icon: "🌎",
            description:
              "Translate and share Darwinia-related content in different languages and expand Darwinia's ecological application to non-English speaking communities.",
          },
          {
            h2: "Stake your RING",
            icon: "🧑‍💼",
            description: "By staking your RING you can earn rewards whilst helping to secure the Darwinia.",
            content: [
              {
                link: { label: "Staking Discord", path: "https://discord.gg/hp9fzFNap8", isExternal: true },
                text: "welcome to all interested in staking on Darwinia",
              },
              {
                link: {
                  label: "Staking guide",
                  path: "https://docs.darwinia.network/staking-guide-d7387bfc4d3f4604860651f268ed00ba",
                  isExternal: true,
                },
              },
            ],
          },
        ],
      },
      {
        h1: "Join A DAO",
        icon: "🗳️",
        description:
          "These DAOs offer opportunities for you to find groups that you identify with, find collaborators, and grow your impact on the Darwinia community.",
        content: [
          {
            link: { label: "DCDAO", path: "https://twitter.com/Official_DCDAO", isExternal: true },
            text: "community self-organized workgroup that aims to contribute to the growth and development of the Darwinia community",
          },
          {
            link: { label: "SubAPI DAO", path: "https://github.com/subapidao", isExternal: true },
            text: "targeting to be a SubDAO of Darwinia, working on Oracle and API integration",
          },
        ],
      },
    ],
  };
}
