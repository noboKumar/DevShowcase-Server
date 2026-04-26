import { prisma } from "./lib/prisma";

async function main() {
  const userId = "RSsNjs8FeeXaw3OHV1ZFkL6xfaxs4W0A";

  const projects = [
    {
      userId: userId,
      title: "Quantum Dashboard",
      category: "Frontend",
      description:
        "A high-performance real-time analytics dashboard with customizable widgets and glassmorphism UI.",
      githubRepo: "https://github.com/example/quantum-dash",
      liveLink: "https://quantum-dash.vercel.app",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
      thumbnail: "https://i.ibb.co/b5fBYjhB/Quantum-Able.png",
    },
    {
      userId: userId,
      title: "Titan Engine",
      category: "Backend",
      description:
        "A distributed task queuing system designed for high-throughput background processing.",
      githubRepo: "https://github.com/example/titan-engine",
      liveLink: "https://titan-docs.io",
      techStack: ["Go", "Redis", "PostgreSQL", "gRPC"],
      thumbnail: "https://ibb.co/9kgvPwjS",
    },
    {
      userId: userId,
      title: "EcoMarket",
      category: "Full Stack",
      description:
        "A sustainable e-commerce platform with carbon footprint tracking for every purchase.",
      githubRepo: "https://github.com/example/ecomarket",
      liveLink: "https://ecomarket-live.com",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      thumbnail: "https://i.ibb.co/7dTzky5H/1600081080-home-ecomarket.png",
    },
    {
      userId: userId,
      title: "ZenithFit",
      category: "Mobile App",
      description:
        "Cross-platform fitness tracker with social challenges and biometric data visualization.",
      githubRepo: "https://github.com/example/zenithfit",
      liveLink: "https://apps.apple.com/zenithfit",
      techStack: ["React Native", "Firebase", "TypeScript", "HealthKit"],
      thumbnail: "https://ibb.co/d0jX2vSf",
    },
    {
      userId: userId,
      title: "Visionary AI",
      category: "AI / ML",
      description:
        "Real-time object detection and labeling tool for accessibility in smart homes.",
      githubRepo: "https://github.com/example/visionary-ai",
      liveLink: "https://visionary-demo.ai",
      techStack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
      thumbnail: "https://i.ibb.co/1fYN77Bb/Computervision-banner.webp",
    },
    {
      userId: userId,
      title: "CloudSentry",
      category: "DevOps / Infrastructure",
      description:
        "Automated infrastructure monitoring tool with Slack alerts and self-healing scripts.",
      githubRepo: "https://github.com/example/cloudsentry",
      liveLink: "https://cloudsentry.io",
      techStack: ["Terraform", "Kubernetes", "Prometheus", "AWS"],
      thumbnail: "https://ibb.co/YB1dsv5X",
    },
    {
      userId: userId,
      title: "GitFlow CLI",
      category: "CLI Tool",
      description:
        "Interactive command line tool to streamline git branching strategies for large teams.",
      githubRepo: "https://github.com/example/gitflow-cli",
      liveLink: "https://npmjs.com/package/gitflow-cli",
      techStack: ["Node.js", "Commander.js", "Inquirer", "Chalk"],
      thumbnail: "https://i.ibb.co/TMwsYqq5/1-IC99-GCNur-IT4qg-PPBAM6-Jg.png",
    },
    {
      userId: userId,
      title: "Scribe Extension",
      category: "Browser Extension / SDK",
      description: "AI-powered web highlighter and summarizer for researchers.",
      githubRepo: "https://github.com/example/scribe-ext",
      liveLink: "https://chrome.google.com/webstore/scribe",
      techStack: ["JavaScript", "WebExtensions API", "OpenAI API"],
      thumbnail: "https://ibb.co/sJd7rvgW",
    },
    {
      userId: userId,
      title: "PayBridge SDK",
      category: "API / SDK",
      description:
        "Unified SDK for integrating multiple payment gateways with a single interface.",
      githubRepo: "https://github.com/example/paybridge-sdk",
      liveLink: "https://docs.paybridge.com",
      techStack: ["TypeScript", "Axios", "Jest", "Rollup"],
      thumbnail:
        "https://i.ibb.co/nqBXP152/payment-processing-1024x662-png.webp",
    },
    {
      userId: userId,
      title: "Neon Racer",
      category: "Game",
      description:
        "Fast-paced 2D neon-themed racing game built for web browsers.",
      githubRepo: "https://github.com/example/neon-racer",
      liveLink: "https://neon-racer.io",
      techStack: ["Phaser 3", "JavaScript", "Socket.io"],
      thumbnail: "https://ibb.co/tw0S0pP4",
    },
    {
      userId: userId,
      title: "FlexiTable",
      category: "Open Source Library",
      description:
        "A highly performant, accessible React table component with built-in virtualization.",
      githubRepo: "https://github.com/example/flexitable",
      liveLink: "https://flexitable.js.org",
      techStack: ["React", "TypeScript", "Storybook"],
      thumbnail:
        "https://i.ibb.co/dwL3p3f4/react-tables-blog-banner-scaled.webp",
    },
    {
      userId: userId,
      title: "SecretVault",
      category: "Other",
      description:
        "Self-hosted encrypted password manager with zero-knowledge architecture.",
      githubRepo: "https://github.com/example/secretvault",
      liveLink: "https://secretvault.sh",
      techStack: ["Rust", "SQLite", "WebAssembly"],
      thumbnail: "https://ibb.co/pjcd5Vcb",
    },
    {
      userId: userId,
      title: "PixelArt Studio",
      category: "Frontend",
      description:
        "A collaborative pixel art editor with real-time multiplayer support.",
      githubRepo: "https://github.com/example/pixel-art",
      liveLink: "https://pixelart.studio",
      techStack: ["Vue.js", "Pusher", "Canvas API", "Pinia"],
      thumbnail:
        "https://i.ibb.co/kVQbgvHk/659c51b4-d197-4767-9043-344f723dec18-1920x1080.png",
    },
    {
      userId: userId,
      title: "LogStreamer",
      category: "Backend",
      description:
        "Real-time log ingestion and processing engine capable of 1M events per second.",
      githubRepo: "https://github.com/example/logstreamer",
      liveLink: "https://logstreamer.dev",
      techStack: ["Elixir", "Phoenix", "Kafka", "Elasticsearch"],
      thumbnail: "https://ibb.co/20Xcf11t",
    },
    {
      userId: userId,
      title: "TaskFlow Pro",
      category: "Full Stack",
      description:
        "Project management tool with Kanban boards, Gantt charts, and team chat.",
      githubRepo: "https://github.com/example/taskflow",
      liveLink: "https://taskflow-pro.com",
      techStack: ["T3 Stack", "Prisma", "PostgreSQL", "tRPC"],
      thumbnail:
        "https://i.ibb.co/4nVhcnh5/b776a7216807733-Y3-Jvc-Cw4-NDAw-LDY1-Nz-As-MCww.png",
    },
    {
      userId: userId,
      title: "RecipeRadar",
      category: "Mobile App",
      description:
        "AI-driven recipe suggestions based on ingredients you have in your fridge.",
      githubRepo: "https://github.com/example/reciperadar",
      liveLink: "https://reciperadar.app",
      techStack: ["Flutter", "Supabase", "Dart"],
      thumbnail: "https://ibb.co/JFdv6v77",
    },
    {
      userId: userId,
      title: "Sentimently",
      category: "AI / ML",
      description:
        "Customer feedback analysis tool using NLP to categorize user emotions.",
      githubRepo: "https://github.com/example/sentimently",
      liveLink: "https://sentimently.ai",
      techStack: ["Python", "PyTorch", "HuggingFace", "Flask"],
      thumbnail:
        "https://i.ibb.co/9kjW2cJB/Dashboard-measuring-customer-sentiment-analysis-784x441.png",
    },
    {
      userId: userId,
      title: "KubeDeploy",
      category: "DevOps / Infrastructure",
      description:
        "Zero-config deployment tool for Kubernetes clusters on any cloud provider.",
      githubRepo: "https://github.com/example/kubedeploy",
      liveLink: "https://kubedeploy.sh",
      techStack: ["Go", "Docker", "Helm", "Azure"],
      thumbnail: "https://ibb.co/BH7gfgCy",
    },
    {
      userId: userId,
      title: "ImageOptimizer CLI",
      category: "CLI Tool",
      description:
        "Lossless image compression tool supporting WebP, AVIF, and MozJPEG.",
      githubRepo: "https://github.com/example/img-opt-cli",
      liveLink: "https://npmjs.com/package/img-opt-cli",
      techStack: ["Node.js", "Sharp", "Babel"],
      thumbnail:
        "https://i.ibb.co/8nzjBQZh/47f0f59ea87f0d0f70000dadd7236c32.webp",
    },
    {
      userId: userId,
      title: "AudioVisualizer SDK",
      category: "API / SDK",
      description:
        "A high-performance Web Audio API wrapper for building music visualizers.",
      githubRepo: "https://github.com/example/av-sdk",
      liveLink: "https://av-sdk.dev",
      techStack: ["TypeScript", "Web Audio API", "Three.js"],
      thumbnail: "https://ibb.co/nMtk1tmS",
    },
  ];

  await prisma.projects.createMany({
    data: projects,
  });
}

main()
  .then(() => {
    console.log("Seeded successfully");
  })
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
