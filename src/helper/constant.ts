import { githubLogo, googleLogo, indianFlag, instaLogo } from "../assets";

export interface TestmonialData {
  description: string;
  logo: string;
  title: string;
}
export const testmonialLogo: Array<TestmonialData> = [
  {
    logo: indianFlag,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Indian Army",
    title: "Indian Army",
  },
  {
    logo: googleLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Google Logo",
    title: "Google",
  },
  {
    logo: instaLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Insta Logo",
    title: "Instagram",
  },
  {
    logo: githubLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Github Logo",
    title: "Github",
  },
];

export const footerButtons = [
  {
    title: "Resources",
    buttons: [
      { title: "About", route: "", target: false },
      { title: "Jobs", route: "", target: false },
      { title: "Contact", route: "", target: false },
    ],
  },
  {
    title: "Quick Links",
    buttons: [
      { title: "Blogs", route: "blog", target: false },
      { title: "Portfolio", route: "", target: false },
      { title: "Pricing", route: "", target: false },
      { title: "Payments", route: "", target: false },
    ],
  },
  {
    title: "Legal",
    buttons: [
      { title: "Privacy Policy", route: "", target: false },
      { title: "Terms of Services", route: "", target: false },
      { title: "Cancellation", route: "", target: false },
      { title: "Refund", route: "", target: false },
    ],
  },
  {
    title: "Support",
    buttons: [
      { title: "GitHub", route: "", target: false },
      { title: "Help", route: "", target: false },
    ],
  },
];

export const reviews = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 16, 17, 18, 19, 20,
].map((item) => {
  return {
    title: "Google",
    message:
      '"Just want to give a quick thanks to Connor. Has always remained helpful and patient through all our companies needs. Goes above and beyond to ensure we receive service regardless of the excessive amount of work on his plate."',
    logo: googleLogo,
  };
});

export const typeOfProjects = [
  "Web Development",
  "Mobile Development",
  "Website Design",
  "Desktop App",
  "Toolbots",
  "Integration",
  "UI?UX",
  "Backend Development",
  "Web Scraper",
  "Discord Bots",
];
