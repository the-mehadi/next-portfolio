export const blogPosts = [
  {
    slug: "mastering-the-osi-model",
    title: "Mastering the OSI Model",
    category: "Networking",
    date: "2026-02-23",
    dateLabel: "Jan 16, 2026",
    image: "/assets/images/blogs/osi-1.png",
    excerpt: "Using a parcel analogy, the OSI Model shows how each layer packages, addresses, transports, routes, and finally delivers data correctly.",
    content: [
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ],
    articleLink:"https://www.linkedin.com/pulse/all-you-need-know-osi-model-mehedi-hasan-qhqdc",
  },
  {
    slug: "behind-the-scene-of-internet-tcp-vs-udp",
    title: "Behind the Scene TCP vs UDP",
    category: "Networking",
    date: "2026-02-07",
    dateLabel: "Feb 7, 2026",
    image: "/assets/images/blogs/tcp-vs-udp.png",
    excerpt: "আপনি যখন এই আর্টিকেলটি পড়ছেন বা facebook scroll  করতেছেন behind the scene  কি হচ্ছে? হাজার হাজার ডাটা প্যাকেট আদান প্রদান হচ্ছে। কোনোটি পৌঁছায় একদম নিখুঁতভাবে (TCP) আবার কোনটি পৌঁছায় সুপারফাস্ট গতিতে (UDP)। আজকের এই আর্টিকেলে আমরা বুঝার চেষ্টা করবো কোনটা কোথায় কিভাবে কেন ব্যবহার করে।",
    content: [
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ],
    articleLink:"https://www.linkedin.com/pulse/behind-scene-internet-tcp-vs-udp-mehedi-hasan-nlfwc",
  },  
  {
    slug: "best-fonts-every-designer",
    title: "Best fonts every designer",
    category: "Design",
    date: "2026-01-16",
    dateLabel: "Jan 16, 2026",
    image: "/assets/images/blog-2.jpg",
    excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    content: [
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      "Et harum quidem rerum facilis est et expedita distinctio.",
    ],
  },
  
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

