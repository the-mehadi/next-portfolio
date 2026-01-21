import React from "react";
import Link from "next/link";
import { blogPosts } from "../src/data/blogPosts";

function Blog() {
    return (
        <div>
            <article className="blog" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>
                <section className="blog-posts">
                    <ul className="blog-posts-list">
                        {blogPosts.map((post) => (
                            <li className="blog-post-item" key={post.slug}>
                                <Link href={post.articleLink || `/blog/${post.slug}`} target={post.articleLink ? "_blank" : "_self"}>
                                    <figure className="blog-banner-box">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                        />
                                    </figure>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <p className="blog-category">{post.category}</p>
                                            <span className="dot" />
                                            <time dateTime={post.date}>{post.dateLabel}</time>
                                        </div>
                                        <h3 className="h3 blog-item-title">{post.title}</h3>
                                        <p className="blog-text">{post.excerpt}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    )
}

export default Blog
