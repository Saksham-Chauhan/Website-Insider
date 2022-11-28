import {
  benefits,
  discordWhiteLogo,
  githubLogo,
  githubWhite,
  googleLogo,
  impact,
  indianFlag,
  instaLogo,
  issue,
  linkedinWhite,
  performance,
  twitterWhite,
  workers,
  workspace,
} from "../assets";

export interface TestmonialData {
  description: string;
  logo: string;
  title: string;
  animationStyle?: string;
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
      { title: "About", route: "/About", target: false },
      { title: "Jobs", route: "/Jobs", target: false },
      { title: "Collaborate", route: "/Collaborate", target: false },
    ],
  },
  {
    title: "Quick Links",
    buttons: [
      { title: "Blogs", route: "/Blogs", target: false },
      {
        title: "Portfolio",
        route: "https://portfolio.koders.in/",
        target: true,
      },
      { title: "Pricing", route: "", target: false },
      { title: "Payments", route: "https://payments.koders.in/", target: true },
    ],
  },
  {
    title: "Legal",
    buttons: [
      { title: "Cancellation", route: "/Cancellation", target: false },
      { title: "Refund", route: "/Cancellation", target: false },
      { title: "Privacy Policy", route: "/PrivacyPolicy", target: false },
      { title: "Terms of Services", route: "/TermsOfServic", target: false },
    ],
  },
  {
    title: "Support",
    buttons: [
      { title: "Join Discord", route: "https://dsc.gg/koders", target: true },
      { title: "Help", route: "", target: false },
      { title: "GitHub", route: "https://github.com/koders-in", target: true },
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
  "UI/UX",
  "Backend Development",
  "Web Scraper",
  "Discord Bots",
];

export interface CardObject {
  isMobile?: boolean;
  translateX?: number;
  className?: string;
  title: string;
  description: string;
  price: string;
  services: Array<string>;
  aos?: string;
}
export const pricingCardData: Array<CardObject> = [
  {
    title: "Basic",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Basic Plus",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Premium",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Enterprise",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
];

export const whyWe = [
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Company",
    state: "01",
    html: '<p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">Rest assured. Unlike freelancers,<span class="text-main-lightTeal">  we are sticking till completion</span>.</p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "One Stop Solution",
    state: "02",
    html: ' <p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">Design+Frontend+Backend +Testing+QnA+Docs?<span class="text-main-lightTeal"> We do it all.</span></p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Quality + Satisfaction",
    state: "03",
    html: '<p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6"><span class="text-main-lightTeal">Quality </span>delivery with 100%<span class="text-main-lightTeal"> Satisfaction </span>or 100% refund.</p>',
  },
  {
    class: "text-center",
    title: "Your Code, Not Ours",
    state: "04",
    html: ' <p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">We’re giving <span class="text-main-lightTeal">IPR rights</span>, not just the source code.</p>',
  },
];

export const faq = [
  {
    question: "How long will it take to get a new website?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new mobile app?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new ui/ux?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new discord bot?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new desktop app?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new backend?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
];

export const pricingList = [
  "14,000$",
  "28,000$",
  "45,000$",
  "62,000$",
  "70,000$",
];
export const timeLineList = [
  "Less than one week",
  "Less than one month",
  "Less than one year",
  "More than one year",
];

export const socialMediaHandles = [
  {
    src: linkedinWhite,
    url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHkkfNKVtVB3QAAAYR0x2dA3c0i5YfwfSFl2SuYAa1O1u3Qo-Dauem_n-eeuKG0gRp9COXnLYet0RNUvrEAzdsDukF7eZB3SRKXii0KQI2nAu_xwR1gAz33Uh6Sw2J26qwLlxQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkoders-in",
  },
  {
    src: githubWhite,
    url: "https://github.com/koders-in",
  },
  {
    src: twitterWhite,
    url: "https://twitter.com/KodersHQ",
  },
  {
    src: discordWhiteLogo,
    url: "https://discord.com/invite/u3P2a8FpWD",
  },
];

export const jobTypes = [
  "All",
  "Tech & Development",
  "Design",
  "Content Creation",
  "Marketing",
  "Other",
];

interface TypeOfPiont {
  text: string;
  position: string;
  type: "top" | "bottom";
}

export const timelinePoints: Array<TypeOfPiont> = [
  {
    text: "Resume Submission",
    position: "left-[-70px] top-[-31px]",
    type: "bottom",
  },
  {
    text: "Group Discussion",
    position: "top-[-31px]",
    type: "top",
  },
  {
    text: "Technical Interview",
    position: "left-[-100px] top-[-31px]",
    type: "bottom",
  },
  {
    text: "HR Interview",
    position: "left-[-100px] top-[-31px]",
    type: "top",
  },
  {
    text: "Onboarding",
    position: "left-[-100px] top-[-31px]",
    type: "top",
  },
];

export const offersData = [
  [
    { icon: issue, text: "0 boss issues" },
    { icon: impact, text: "Real Impact" },
    { icon: benefits, text: "Benefits" },
  ],
  [
    { icon: workers, text: "Great <br/> Co-Workers" },
    { icon: performance, text: "Performance <br/> Awards" },
    { icon: workspace, text: "Dynamic <br/> Workspaces" },
  ],
];

export interface ObjectOfJob {
  title: string;
  location: string;
  type: string;
  experience: string;
  id?: number;
  duration?: string;
}

// description: item.snippet,
// logo: item.user.thumbnail,
// title: item.user.name,
// rating: item.rating,
// link: item.user.link,

export const discordReviews = [
  {
    user: {
      name: "Camel Juno",
      thumbnail:
        "https://cdn.discordapp.com/avatars/340813726103896064/624497f973f4629bc2c8467614803f81.webp?size=240",
    },
    snippet:
      "It's a pleasure and a relief to have Koders as a team of skilled individuals whom I can rely on when it comes to web dev. Fully recommend them and the service is totally worth its cost. Looking forward to more projects in the future!",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Neo",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet: "Great Experience friendly staff",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "SupremeCook",
      thumbnail:
        "https://cdn.discordapp.com/avatars/442921402279133196/2f0ba5e4d6c9f39dbacc02e49bb143cd.webp?size=240",
    },
    snippet: "Awesome Experience",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "GeorgePitlock",
      thumbnail:
        "https://cdn.discordapp.com/avatars/437902214413942786/3e60b26ddc05727d700b1bc592b9a3d8.webp?size=160",
    },
    snippet:
      "Nice idea, good work on niche projects, very happy with work I received however communication was a little slow at time",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Neo",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet:
      "Great Experience with good communication and staff! Very friendly and cooperative as well",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Troy",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet: "I didn't do a single thing",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Enz",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: " Speed and price and cleaness of code exceeded expectations",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Tarun",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: "Experience was grt",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Bolt",
      thumbnail:
        "https://cdn.discordapp.com/avatars/459764269043548162/b37c2b19eed5bc2daece6aeae82c71f3.webp?size=160",
    },
    snippet:
      "Amazing quality product delivered. The team is very professional. Even though it was a one of the most complicated projects, the results was great. Would definitely want to continue working with this team.",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "DiegoTod ",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: "Best experience",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Camel Juno",
      thumbnail:
        "https://cdn.discordapp.com/avatars/340813726103896064/624497f973f4629bc2c8467614803f81.webp?size=240",
    },
    snippet:
      " My second project with Koders and again, a smooth and professional experience. I always appreciate their patience with my requirements and how understanding they are. Thanks guys and here's to more future work together 🍻",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Ak456",
      thumbnail:
        "https://cdn.discordapp.com/avatars/654921782720987168/7f87f6d34270b4aac6f7713706bae069.webp?size=160",
    },
    snippet:
      "Amzing work in super fast timings , very understanding and helps a lot thank you koders",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Bilrd",
      thumbnail:
        "https://cdn.discordapp.com/avatars/687968347727593493/a_054de1f07ed3f87e7325ef2a1e76e8b8.webp?size=160",
    },
    snippet:
      "Very professional team to work with. Delivered a high quality solution that does exactly what I was looking for.",
    rating: 5,
    link: "",
  },
];
