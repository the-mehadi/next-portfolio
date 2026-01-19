import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "../../../data/blogPosts";

export default function BlogDetailsPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <div className="main-content" style={{ width: "100%" }}>
        <article className="blog active" data-page="blog-details">
          <header>
            <h2 className="h2 article-title">{post.title}</h2>
            <div style={{ marginTop: 8 }}>
              <Link href="/#blog" style={{ color: "var(--orange-yellow-crayola)" }}>
                ← Back to home
              </Link>
            </div>
          </header>

          <section className="blog-posts">
            <div className="blog-post-item" style={{ listStyle: "none" }}>
              <figure className="blog-banner-box">
                <img src={post.image} alt={post.title} loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">{post.category}</p>
                  <span className="dot" />
                  <time dateTime={post.date}>{post.dateLabel}</time>
                </div>

                <p className="blog-text">{post.excerpt}</p>

                {Array.isArray(post.content) &&
                  post.content.map((p, idx) => (
                    <p className="blog-text" key={idx}>
                      {p}
                    </p>
                  ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

