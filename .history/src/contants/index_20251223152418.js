import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  neo4js,
  nodejs,
  bun,
  nextjs,
  expressjs,
  nestjs,
  reactjs,
  redux,
  tailwind,
  typescript,
  python,
  threejs,
  graphql,
  solidity,
  hardhat,
  foundry,
  truffle,
  brownie,
  theGraph,
  openZeppelin,
  chainLink,
  linux,
  meta,
  shopify,
  starbucks,
  tesla,
  st,
  nethermind,
  darBlockchain,
  bpp,
  halamint,
  carrent,
  jobit,
  hmt,
  tfn,
  atlk,
  crp,
  tripguide,
  mnif,
  asma,
  hatem,
  golri,
  capte,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Full Stack Engineer",
    icon: web,
  },
  {
    title: "Technical Lead / CTO",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps Expert",
    icon: backend,
  },
  {
    title: "3D & Immersive Web Dev",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJs",
    icon: nestjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "Foundry",
    icon: foundry,
  },
  {
    name: "The Graph",
    icon: theGraph,
  },
  {
    name: "ExpressJs",
    icon: expressjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Chief Technology Officer (CTO)",
    company_name: "Otraverse",
    icon: web, // Placeholder for Otraverse
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Defined and led the technology strategy for immersive e-commerce solutions.",
      "Developed front-end applications using React / Next.js with 3D integration (Three.js, React Three Fiber).",
      "Designed and implemented back-end services with NestJS / Node.js (REST & GraphQL APIs).",
      "Built scalable architectures using MongoDB and Redis.",
      "Implemented CI/CD pipelines and DevOps practices (Docker, Kubernetes, GitHub Actions).",
      "Led and mentored a cross-functional team (developers, designers, product managers).",
      "Acted as a hands-on Full Stack Engineer, delivering end-to-end features across front-end (Next.js), back-end (NestJS, GraphQL, Kafka), databases, and AWS cloud infrastructure.",
    ],
  },
  {
    title: "Chief Technology Officer (CTO)",
    company_name: "Halamint",
    icon: halamint,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Designed and developed a no-code SaaS platform for NFT marketplaces.",
      "Built scalable back-end APIs using NestJS, Kafka, and GraphQL.",
      "Developed front-end features with Next.js, focusing on performance and UX optimization.",
      "Automated AWS infrastructure using Terraform, Kubernetes, and ArgoCD.",
      "Owned the full software development lifecycle (SDLC), from architecture and implementation to deployment and production support.",
      "Managed and coordinated a team of 4 engineers and designers.",
    ],
  },
  {
    title: "Chief Technology Officer (CTO)",
    company_name: "Block Plus Plus",
    icon: bpp,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Developed web solutions for the sports and e-sports industry.",
      "Defined and implemented Full Stack JavaScript/TypeScript architectures.",
      "Designed microservices-based systems and CI/CD pipelines.",
      "Provided technical leadership, product follow-up, and stakeholder collaboration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Dar Blockchain",
    icon: darBlockchain,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Developed a crowdfunding platform based on REST APIs.",
      "Tech stack: Express.js, MongoDB, React.js.",
      "Integrated Web3 functionalities using Web3.js.",
      "Implemented unit testing and managed cloud deployments.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "STMicroelectronics",
    icon: st,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Administered a VMware cluster with 1000+ virtual machines.",
      "Migrated infrastructure to Microsoft Azure Cloud.",
      "Developed automation tools using Ansible, Terraform, and Packer.",
      "Managed Kubernetes clusters (VMware Tanzu).",
      "Optimized infrastructure performance and network reliability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Exceptional job leading the Ant'Like project, delivering on time with outstanding results. Your resilience and winning attitude truly shone through.",
    name: "Mohamed Mnif",
    designation: "CEO",
    company: "Dar Blockchain",
    image: mnif,
  },
  {
    testimonial:
      "Your leadership in blockchain innovation is transforming sports, setting us apart and redefining the fan experience.",
    name: "Asma Yousfi",
    designation: "CEO",
    company: "Block++ & Halamint",
    image: asma,
  },
  {
    testimonial:
      "Exceptional technical expertise, adept problem solving, and a deep sense of responsibility and commitment to every project.",
    name: "Hatem Aziez",
    designation: "CTO",
    company: "Dar Blockchain",
    image: hatem,
  },
];

const projects = [
  {
    name: "Golri",
    description:
      "The first application 100% dedicated to humor, connecting spectators, comedy clubs, and artists. Features automated ticketing, artist pre-qualification, and personalized comedy recommendations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: golri,
    source_code_link: "https://golri.app/",
  },
  {
    name: "Capte Dashboard",
    description:
      "A comprehensive dashboard for plantation management and ecological transition. Tracks agroforestry impacts, biodiversity conservation, and carbon sequestration methodology for sustainable agriculture.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "green-text-gradient",
      },
    ],
    image: capte,
    source_code_link: "https://appli.capte.tn/",
  },
  {
    name: "Halamint | هلامنت",
    description:
      "White-Label NFT Marketplace dedicated for sports and Esports to generate new revenue revenue streams and enhance fan-engagement",
    tags: [
      {
        name: "Solidity",
        color: "grey-text-gradient",
      },
      {
        name: "NestJs",
        color: "red-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hmt,
    source_code_link: "https://halamint.com/",
  },
  {
    name: "Cryptofoot",
    description:
      "First NFT-Marketplace dedicated for Soccer in North-Africa to enhance Fan-Engagement and Generare new revenue streams",
    tags: [
      {
        name: "Solidity",
        color: "grey-text-gradient",
      },
      {
        name: "Express.js",
        color: "yello-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crp,
    source_code_link: "https://www.cryptofoot.tn/",
  },
  {
    name: "Ant'Like | انطلق",
    description:
      " Entrepreneurs donation crowdfunding platform, FHS-funded, seeking to build community resilience and improve financial & social outcomes.",
    tags: [
      {
        name: "Solidity",
        color: "grey-text-gradient",
      },
      {
        name: "Express.js",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: atlk,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trufin.io",
    description:
      "TruFin provides institutional-grade Web3 primitives, that can be used as the foundational building blocks for complex digital asset strategies to reduce risk, generate rewards, securely on-chain.",
    tags: [
      {
        name: "Solidity",
        color: "grey-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "The Graph",
        color: "white-text-gradient",
      },
    ],
    image: tfn,
    source_code_link: "https://github.com/TruFin-io/staking-contracts",
  },
];

export { services, technologies, experiences, testimonials, projects };
