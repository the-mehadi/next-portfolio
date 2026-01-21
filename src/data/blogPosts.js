export const blogPosts = [
  {
    slug: "design-conferences-in-2022",
    title: "Mastering the OSI Model",
    category: "OS",
    date: "2022-02-23",
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
  // {
  //   slug: "design-digest-80",
  //   title: "Design digest #80",
  //   category: "Design",
  //   date: "2022-02-23",
  //   dateLabel: "Feb 23, 2022",
  //   image: "/assets/images/blog-3.jpg",
  //   excerpt:
  //     "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  //   content: [
  //     "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  //     "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  //     "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  //   ],
  // },
  // {
  //   slug: "ui-interactions-of-the-week",
  //   title: "UI interactions of the week",
  //   category: "Design",
  //   date: "2022-02-23",
  //   dateLabel: "Feb 23, 2022",
  //   image: "/assets/images/blog-4.jpg",
  //   excerpt:
  //     "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  //   content: [
  //     "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   ],
  // },
  // {
  //   slug: "the-forgotten-art-of-spacing",
  //   title: "The forgotten art of spacing",
  //   category: "Design",
  //   date: "2022-02-23",
  //   dateLabel: "Feb 23, 2022",
  //   image: "/assets/images/blog-5.jpg",
  //   excerpt: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   content: [
  //     "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   ],
  // },
  // {
  //   slug: "design-digest-79",
  //   title: "Design digest #79",
  //   category: "Design",
  //   date: "2022-02-23",
  //   dateLabel: "Feb 23, 2022",
  //   image: "/assets/images/blog-6.jpg",
  //   excerpt: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  //   content: [
  //     "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  //     "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  //     "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
  //   ],
  // },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

