import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import * as fs from "fs";
// import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/Home.module.css";
import blogStyles from "../styles/Blog.module.css";

const Blog = (props) => {
  // console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Blogs</h1>

      <div className="mt-5">
        <Image
          src="/blogger.png"
          className="p-1"
          height={400}
          width={400}
        ></Image>

        {/* <img src="/blogger.png" alt="Blogger" height={400} width={400} /> */}
      </div>

      <p
        className={`${styles.description} rounded p-3 shadow-sm border ${blogStyles.blogQuote}`}
      >
        A well-executed blog sets you apart as an expert in your field.{" "}
        <i>
          <span className={`${blogStyles.blogQuoteAuthor} blockquote-footer`}>
            Penelope Trunk
          </span>
        </i>
      </p>

      <div className={`${styles.grid}`}>
        <div>
          <h2 className={blogStyles.blogsHeading}>Blogs</h2>
        </div>

        {blogs.map((blogItem) => {
          return (
            <Link key={blogItem.slug} href={`/blogpost/${blogItem.slug}`}>
              <a className={`${styles.card}`}>
                <div>
                  <h2>{blogItem.title}&rarr;</h2>
                </div>
                <div>
                  <p>{blogItem.metaDesc}.</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

// static site prerender generation
// export async function getStaticProps(context) {
//   let allBlogs = [];

//   let files_in_blogdata_dir = await fs.promises.readdir("blogdata");

//   for (let i = 0; i < files_in_blogdata_dir.length; i++) {
//     const single_blog_file = files_in_blogdata_dir[i];
//     const single_blog_file_content = await fs.promises.readFile(
//       `blogdata/${single_blog_file}`,
//       "utf-8"
//     );
//     allBlogs.push(JSON.parse(single_blog_file_content));
//   }

//   return {
//     props: { allBlogs },
//   };
// }

// this function runs server side to prerender the blogs content
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default Blog;
