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
  hatem
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
      title: "Blockchain Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Bun",
      icon: bun,
    },
    {
      name: "ExpressJs",
      icon: expressjs,
    },
    {
      name: "NestJs",
      icon: nestjs
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Neo4j",
      icon: neo4js
    },
    
    
    {
      name: "git",
      icon: git,
    },
    {
      name: 'Solidity',
      icon : solidity,
    },
    {
      name : 'Hardhat',
      icon: hardhat
    },
    {
      name: "Foundry",
      icon: foundry
    },
    {
      name: "Truffle",
      icon: truffle,
    },
    {
      name: "Brownie",
      icon: brownie,
    },
    {
      name: "The Graph",
      icon: theGraph,
    },
    {
      name: "ChainLink",
      icon: chainLink,
    },
    {
      name: "OpenZeppelin",
      icon: openZeppelin,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "System Administrator",
      company_name: "STMICROELETRONICS",
      icon: st,
      iconBg: "#383E56",
      date: "Apr 2019 - Oct 2021",
      points: [
        "Managed 10,000+ servers and VMs, achieving 99.9% uptime through proactive monitoring.",
        "Resolved 93% of outages, enhancing infrastructure reliability.",
        "Automated 85% of processes with Ansible, Juju, and Terraform, cutting configuration time significantly.",
        "Supported 40+ teams and 400 users, earning 97% positive feedback in system administration.",
        "Installed, upgraded, and patched Linux, Windows, SunOS, and VMware ESXi, boosting security and performance by 90%.",
      ],
    },
    {
      title: "Blockchain Engineer Intern",
      company_name: "Nethermind",
      icon: nethermind,
      iconBg: "#383E56",
      date: "March 2022 - May 2022",
      points: [
        "Supported Ethereum nodes and blockchain tools across cloud providers to achieve 99.9% HA Configured 2,000+ PoS Ethereum nodes for the merge.",
        "Contributed to Trufin.io using Solidity, TypeScript, and Hardhat, achieving a market cap of $103M in 2024."
      ],
    },
    {
      title: "Blockchain Engineer",
      company_name: "Dar Blockchain",
      icon: darBlockchain,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed the Ant'like project, a decentralized crowdfunding platform for small businesses, using Ethereum (Go-Eth, Clique), Solidity, Hardhat, OpenZeppelin, Node.js, and React with a team of three.",
        "Led the Decentralize IMPACT project, a DAO for selecting top Web3 startups in incubation cohorts.",
        "Coordinated a secure team during the final 15 days, ensuring successful project delivery under pressure and achieving 95% positive customer feedback.",
        "Launched both projects utilizing GitHub, Jenkins, Kubernetes, and AWS EKS, implementing rigorous unit and integration testing for smart contract security and reliability.",
      ],
    },
    {
      title: "Blockchain Engineer & Co-Founder",
      company_name: "Block++",
      icon: bpp,
      iconBg: "#383E56",
      date: "Nov 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "CTO & Co-Founder",
      company_name: "Halamint",
      icon: halamint,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Halamint | هلامنت",
      description:
        "White-Label NFT Marketplace dedicated for sports and Esports to generate new revenue revenue streams and enhance fan-engagement" ,
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
        "First NFT-Marketplace dedicated for Soccer in North-Africa to enhance Fan-Engagement and Generare new revenue streams" ,
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