interface Section {
  title: string;
  contents?: string[];
  list?: string[];
  sub?: { title: string; contents: string[] }[];
}

interface Contributor {
  avatar: string;
}

interface AboutData {
  title: string;
  lastUpdate: string;
  sections: Section[];
  contributors: Contributor[];
  github: string;
}

export function useAboutData(): AboutData {
  return {
    title: "About darwinia.network",
    lastUpdate: "December 7, 2023",
    sections: [
      {
        title: "Introduction",
        contents: [
          "darwinia.network is a public, independent open-source resource for the Darwinia community that anyone can contribute to. We have a small core team, primarily composed of members from Itering and DCDAO, dedicated to maintaining and developing the site, with contributions from community members across the globe. All regular activity is organized through the public pull request process, ensuring that every voice can be heard and every contribution valued.",
        ],
      },
      {
        title: "darwinia.network's Mission",
        contents: [
          "darwinia.network's mission is to be the best portal for Darwinia's growing community.",
          "We strive to build an easy-to-understand educational resource for Darwinia community, designed to help users become familiar with Darwinia and its key concepts. The goals include:",
        ],
        list: [
          "Explain Darwinia to anyone new to the technology.",
          "Help new users get started with RING and Darwinia.",
          "Help new developers to start building.",
          "Cover updates in the Darwinia world.",
          "Showcase resources created by the community.",
        ],
      },
      {
        title: "darwinia.network's Core Principles",
        sub: [
          {
            title: "Open and Inclusive",
            contents: [
              "darwinia.network is your gateway to Darwinia, providing a welcoming space where everyone can access resources and engage in discussions. Functioning as an “entryway hub,” it not only complements the rich array of existing community resources but also actively integrates with them. By spotlighting and enhancing the discoverability of community-created content, darwinia.network ensures a seamless and enriching experience for all members.",
            ],
          },
          {
            title: "Community-Run Development",
            contents: [
              "The heart of darwinia.network beats with the rhythm of community collaboration. darwinia.network thrives on the contributions and feedback of our users. Every update, every new feature, and every piece of content is a testament to the collective effort, wisdom, and spirit of the Darwinia community.",
            ],
          },
          {
            title: "Transparency and Trust",
            contents: [
              "Trust is the foundation of any strong community. We are committed to transparency in all our processes, from content creation to platform development. Our public pull request process is a reflection of this commitment, ensuring that every action taken is visible, discussable, and open to feedback.",
            ],
          },
          {
            title: "Innovation and Adaptability",
            contents: [
              "The blockchain landscape is continuously evolving, and so is darwinia.network. Committed to staying at the cutting edge, darwinia.network embraces innovation and adapts to the ever-changing needs and aspirations of the Darwinia community.",
            ],
          },
        ],
      },
      {
        title: "Collaborative Building of darwinia.network",
        contents: [
          "You can report any issues or contribute to the improvement of darwinia.network on GitHub by opening an issue or submitting a pull request. When submitting a pull request, please allocate the required time to discuss your changes and adapt your work accordingly. Please don't ask for promotion for your personal business or website, except for special cases like conferences. Many thanks to all contributors dedicating time and effort to improving darwinia.network!",
        ],
      },
    ],
    contributors: new Array(14)
      .fill(0)
      .map((_, index) => ({ avatar: `/images/contributors/${index < 9 ? `0${index + 1}` : index + 1}.png` })),
    github: "https://github.com/darwinia-network/home/graphs/contributors",
  };
}
