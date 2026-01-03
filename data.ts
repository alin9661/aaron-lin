
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
    category: "Data Visualization", // CRM or Crypto
    description: "Real-time light synthesis control dashboard.",
    year: "2024",
    link: "https://nebulafi.vercel.app/",
    role: "Lead Developer",
    stack: ["Next.js", "Solana", "D3.js", "TypeScript"],
    fullDescription: "Lumina is a bespoke control interface designed for large-scale light installation art. The challenge was to visualize 50,000+ DMX channels in real-time while providing granular control to light technicians. \n\nWe utilized WebGL for the visualization layer to ensure 60fps performance on standard tablets. The UI adheres to a strict high-contrast dark mode to reduce eye strain in unlit control booths. The system allows for generative pattern creation using a node-based editor, which we built from scratch.",
    images: [
      "https://picsum.photos/seed/lumina1/1600/900?grayscale",
      "https://picsum.photos/seed/lumina2/800/600?grayscale",
      "https://picsum.photos/seed/lumina3/800/600?grayscale"
    ]
  },
  {
    id: 2,
    title: "HypeChain",
    category: "Design System",
    description: "Enterprise scalability framework.",
    year: "2023",
    link: "https://hypechain.vercel.app/",
    role: "Design Systems Architect",
    stack: ["TypeScript", "React", "Storybook", "Figma API"],
    fullDescription: "Vantage is a comprehensive design system built for a fintech conglomerate consolidating 12 distinct sub-brands. The goal was to create a 'themeable' core library that unified UX patterns while allowing distinct visual identities.\n\nThe result was a token-based architecture where semantic values (e.g., 'action-primary') could be mapped to different raw values per brand. This reduced development time for new features by 40% and ensured accessibility compliance across all digital touchpoints.",
    images: [
      "https://picsum.photos/seed/vantage1/1600/900?grayscale",
      "https://picsum.photos/seed/vantage2/800/600?grayscale",
      "https://picsum.photos/seed/vantage3/800/600?grayscale"
    ]
  },
  {
    id: 3,
    title: "LendX",
    category: "Mobile App",
    description: "Audio-first social networking.",
    year: "2023",
    link: "https://lendxrp.vercel.app/",
    role: "Product Designer & Dev",
    stack: ["React Native", "Swift", "Node.js", "PostGIS"],
    fullDescription: "Echo is an experimental social network that relies on geofenced audio 'drops'. Users leave voice messages at specific coordinates that can only be heard when another user physically visits that location.\n\nThe visual interface is radically minimalist, pushing users to focus on the auditory experience. We used map-based interactions as the primary navigation paradigm, requiring significant optimization of map rendering and GPS polling for battery efficiency.",
    images: [
      "https://picsum.photos/seed/echo1/1600/900?grayscale",
      "https://picsum.photos/seed/echo2/800/600?grayscale",
      "https://picsum.photos/seed/echo3/800/600?grayscale"
    ]
  },
  {
    id: 4,
    title: "Model Madness",
    category: "Fintech",
    description: "Predictive spending algorithms.",
    year: "2022",
    link: "https://github.com/JBurrell999/Model_Madness",
    role: "Senior UI Developer",
    stack: ["Vue.js", "Python", "AWS Lambda"],
    fullDescription: "Mono is a personal finance dashboard that uses predictive algorithms to forecast cash flow. Unlike traditional dashboards that look backward, Mono focuses on the 'future balance'.\n\nThe interface uses a timeline-based view rather than a ledger view. We implemented complex SVG charting that allows users to drag and drop future expenses to see how they impact their runway. The aesthetic is inspired by Swiss brutalism—raw data, no decoration.",
    images: [
      "https://picsum.photos/seed/mono1/1600/900?grayscale",
      "https://picsum.photos/seed/mono2/800/600?grayscale",
      "https://picsum.photos/seed/mono3/800/600?grayscale"
    ]
  },
  {
    id: 5,
    title: "FairMaps",
    category: "HealthTech",
    description: "Biometric feedback loops.",
    year: "2022",
    link: "https://github.com/alin9661/fairmaps",
    role: "Frontend Lead",
    stack: ["React", "WebBluetooth", "Three.js"],
    fullDescription: "Aura connects to wearable devices to visualize stress levels in real-time. We created a 'bio-feedback' mode where a generated 3D shape breathes in sync with the user's heart rate variability.\n\nThe challenge was handling the noisy data stream from Bluetooth Low Energy devices and smoothing it into a calming, fluid animation that didn't induce anxiety itself.",
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
    description: "Seeking perspective at 4000m. The thin air clears the mind.",
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
    description: "Admiring the raw honesty of concrete structures.",
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
    title: "Horology",
    description: "The mechanics of time. Escapements and springs.",
    image: "https://picsum.photos/seed/watch/800/800?grayscale"
  },
  {
    id: 13,
    title: "Botany",
    description: "Indoor jungle curation. Patience and growth.",
    image: "https://picsum.photos/seed/plants/800/800?grayscale"
  },
  {
    id: 14,
    title: "Woodworking",
    description: "Joinery and grain. Honors the material.",
    image: "https://picsum.photos/seed/wood/800/800?grayscale"
  },
  {
    id: 15,
    title: "Sci-Fi Lit",
    description: "Exploring future worlds and alternate realities.",
    image: "https://picsum.photos/seed/books/800/800?grayscale"
  },
  {
    id: 16,
    title: "Mixology",
    description: "Balancing flavors. Chemistry in a glass.",
    image: "https://picsum.photos/seed/cocktail/800/800?grayscale"
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
