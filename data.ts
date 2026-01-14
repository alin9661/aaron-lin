
import { Github, Twitter, Linkedin } from 'lucide-react';

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
  role: string;
  stack: string[];
  fullDescription: string;
  images: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Nebula",
    category: "Crypto", // CRM or Crypto
    description: "Multi-sig blockchain treasury management",
    year: "2025",
    link: "https://nebulafi.vercel.app/",
    role: "Lead Developer",
    stack: ["Next.js", "Solana", "D3.js", "TypeScript"],
    fullDescription: `
      A blockchain treasury management system with multi-signature operations, governance 
      voting, and comprehensive audit trails for managing crypto-to-crypto sponsorship flows.

      NebuliFi provides secure, transparent treasury management for the NYU Blockchain 
      Lab. The system enables democratic governance over treasury operations through 
      eboard voting, while MSafe multi-signature integration ensures that no single party 
      can unilaterally move funds. Built on Aptos with Move smart contracts, the architecture 
      follows a minimal on-chain principle—essential logic lives on-chain while 
      flexibility-requiring features remain off-chain.
    `,
    images: [
      "https://picsum.photos/seed/lumina1/1600/900?grayscale",
      "https://picsum.photos/seed/lumina2/800/600?grayscale",
      "https://picsum.photos/seed/lumina3/800/600?grayscale"
    ]
  },
  {
    id: 2,
    title: "HypeChain",
    category: "Crypto",
    description: "AI-powered NFT authenticity verification",
    year: "2025",
    link: "https://hypechain.vercel.app/",
    role: "Founder",
    stack: ["Next.js", "Express.js", "Solana", "OpenRouter"],
    fullDescription: "An AI-powered NFT marketplace that combines computer vision authentication with blockchain technology to combat counterfeit goods in the resale market.\n\nHypeChain addresses a critical problem in the secondary market: counterfeit products. By leveraging AI-driven authenticity verification before minting items as NFTs on Solana, HypeChain creates a trustworthy marketplace where buyers can be confident in their purchases.",
    images: [
      "https://picsum.photos/seed/vantage1/1600/900?grayscale",
      "https://picsum.photos/seed/vantage2/800/600?grayscale",
      "https://picsum.photos/seed/vantage3/800/600?grayscale"
    ]
  },
  {
    id: 3,
    title: "LendX",
    category: "Crypto",
    description: "Decentralized peer-to-peer microlending platform",
    year: "2025",
    link: "https://lendxrp.vercel.app/",
    role: "Software Developer",
    stack: ["Ripple", "Next.js", "FastAPI", "XRPL"],
    fullDescription: "A decentralized peer-to-peer lending marketplace built on XRPL that democratizes access to credit for underserved populations in emerging markets.\n\nLendX addresses a fundamental challenge: 1.7 billion adults globally remain unbanked, locked out of traditional credit systems that require formal financial history. By leveraging XRPL's sub-cent transaction fees and 3-5 second settlement times, LendX makes microlending economically viable at scale—enabling peer-to-peer lending with trustless, blockchain-secured loan agreements.",

    images: [
      "https://picsum.photos/seed/echo1/1600/900?grayscale",
      "https://picsum.photos/seed/echo2/800/600?grayscale",
      "https://picsum.photos/seed/echo3/800/600?grayscale"
    ]
  },
  {
    id: 4,
    title: "Model Madness",
    category: "Deep Learning/Entertainment",
    description: "Head-to-head AI racing competition.",
    year: "2025",
    link: "https://github.com/JBurrell999/Model_Madness",
    role: "Senior UI Developer",
    stack: ["Vue.js", "Python", "AWS Lambda"],
    fullDescription: `
    An interactive RL racing duel where two World Model-based controllers compete head-to-head in real-time, with live parameter tuning to explore how learned policies adapt under competitive pressure.

    Model Madness brings the World Models framework (Ha & Schmidhuber) to life through head-to-head competition. Instead of evaluating AI agents in isolation, this system pits two learned controllers against each other in the CarRacing-v3 environment under identical conditions—providing a direct, interpretable comparison of different strategies and parameter configurations.
    `,
    images: [
      "https://picsum.photos/seed/mono1/1600/900?grayscale",
      "https://picsum.photos/seed/mono2/800/600?grayscale",
      "https://picsum.photos/seed/mono3/800/600?grayscale"
    ]
  },
  {
    id: 5,
    title: "FairMaps",
    category: "Politics",
    description: "Statistical gerrymandering detection tool",
    year: "2024",
    link: "https://github.com/alin9661/fairmaps",
    role: "Frontend Lead",
    stack: ["React", "WebBluetooth", "Three.js"],
    fullDescription: "A full-stack application that uses Monte Carlo Markov Chain simulation to generate thousands of alternative district maps, enabling statistically rigorous detection of gerrymandering patterns across U.S. voting districts.\n\nFairMaps tackles gerrymandering, one of the most significant threats to representative democracy, through computational statistics. Rather than relying on subjective assessments of district shapes, the application generates an ensemble of 10,000+ valid district configurations through MCMC simulation, then compares actual districts against this baseline to identify statistically significant manipulation.",
    images: [
      "https://picsum.photos/seed/aura1/1600/900?grayscale",
      "https://picsum.photos/seed/aura2/800/600?grayscale",
      "https://picsum.photos/seed/aura3/800/600?grayscale"
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Death of the Pixel",
    excerpt: "Why resolution independence is the only future for UI design in a spatial computing era.",
    date: "Oct 12, 2023",
    readTime: "4 min",
    tag: "Design Theory",
    link: "#"
  },
  {
    id: 2,
    title: "Typography as Infrastructure",
    excerpt: "Building design systems that rely on type scaling rather than arbitrary spacing units.",
    date: "Sep 28, 2023",
    readTime: "6 min",
    tag: "Typography",
    link: "#"
  },
  {
    id: 3,
    title: "Brutalism in React",
    excerpt: "Implementing raw aesthetic principals using modern component architecture without sacrificing performance.",
    date: "Aug 15, 2023",
    readTime: "5 min",
    tag: "Development",
    link: "#"
  },
  {
    id: 4,
    title: "Micro-interactions 101",
    excerpt: "How subtle animations guide user behavior and reduce cognitive load.",
    date: "Jul 22, 2023",
    readTime: "3 min",
    tag: "UX",
    link: "#"
  },
  {
    id: 5,
    title: "Dark Mode Engineering",
    excerpt: "It's not just color swapping. Handling contrast ratios and semantic colors at scale.",
    date: "Nov 30, 2025",
    readTime: "7 min",
    tag: "Engineering",
    link: "#"
  },
  {
    id: 6,
    title: "A Deeper Dive",
    excerpt: "Why Swiss design principles still dominate the web 70 years later.",
    date: "Nov 30, 2025",
    readTime: "5 min",
    tag: "History",
    link: "#"
  }
];

export const HOBBIES = [
  {
    id: 1,
    title: "Analog Photography",
    description: "Finding silence in the noise of the city. Shot on Leica M6.",
    image: "/gallery/IMG_0205.jpg"
  },
  {
    id: 2,
    title: "Big Ben, UK",
    description: "Golden hour over the Thames. London’s skyline frozen in time.",
    image: "/gallery/IMG_0241.jpg"
  },
  {
    id: 3,
    title: "Generative Art",
    description: "Exploring the intersection of chaos and code. p5.js experiments.",
    image: "/gallery/IMG_0602.jpg"
  },
  {
    id: 4,
    title: "Espresso Brewing",
    description: "The daily pursuit of the perfect extraction. Precision is key.",
    image: "/gallery/IMG_0605.jpg"
  },
  {
    id: 5,
    title: "Rockefeller Center, NY",
    description: "Taking in the Art Deco lines and energy of Midtown Manhattan.",
    image: "/gallery/IMG_1035.jpg"
  },
  {
    id: 6,
    title: "Yosemite National Park, CA",
    description: "Picture of Half Dome. Nature's grandeur.",
    image: "/gallery/IMG_2384.jpg"
  },
  {
    id: 7,
    title: "Gyeongbokgung Palace, KR",
    description: "Urban cycling. Connection between rider and road.",
    image: "/gallery/IMG_2659.jpg"
  },
  {
    id: 8,
    title: "Modular Synths",
    description: "Sound design with patch cables. Electronic meditation.",
    image: "/gallery/IMG_3039.jpg"
  },
  {
    id: 9,
    title: "Ceramics",
    description: "Shaping clay on the wheel. Tactile meditation.",
    image: "/gallery/IMG_3747.jpg"
  },
  {
    id: 10,
    title: "Nara Park, JP",
    description: "Studying glyphs and kerning. The voice of text.",
    image: "/gallery/IMG_6763.jpg"
  },
  {
    id: 11,
    title: "Osaka, JP",
    description: "Strategy and foresight. The 64 squares.",
    image: "/gallery/IMG_7201.jpg"
  },
  {
    id: 12,
    title: "Cherry Blossoms, JP",
    description: "Spring blooms in the land of the rising sun.",
    image: "/gallery/IMG_0548.jpg"
  },
  {
    id: 13,
    title: "Autumn Walk",
    description: "Golden leaves and crisp air. Seasonal transitions.",
    image: "/gallery/IMG_1097.jpg"
  },
  {
    id: 14,
    title: "Mountain Vista",
    description: "Panoramic views from the summit. Worth the climb.",
    image: "/gallery/IMG_1164.jpg"
  },
  {
    id: 15,
    title: "Urban Exploration",
    description: "Finding beauty in city corners and alleyways.",
    image: "/gallery/IMG_1364.jpg"
  },
  {
    id: 16,
    title: "Sunset Silhouette",
    description: "Chasing golden hour. Light and shadow play.",
    image: "/gallery/IMG_1380.jpg"
  },
  {
    id: 17,
    title: "Street Photography",
    description: "Capturing candid moments in the everyday.",
    image: "/gallery/IMG_1748.jpg"
  },
  {
    id: 18,
    title: "Night Cityscape",
    description: "City lights after dark. Urban nocturne.",
    image: "/gallery/IMG_2009.jpg"
  }
];

export const SOCIALS = [
  { id: 1, name: "GitHub", icon: Github, link: "https://github.com/alin9661" },
  { id: 2, name: "Twitter", icon: Twitter, link: "https://x.com/AaronLin9" },
  { id: 3, name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/aaron-lin0/" },
];

export const MENU_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Selected Works", href: "#work" },
  { label: "Journal", href: "#journal" },
  { label: "Life & Hobbies", href: "#hobbies" },
  { label: "Get in Touch", href: "#contact" },
];
