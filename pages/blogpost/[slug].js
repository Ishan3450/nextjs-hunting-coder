import React, { useState } from "react";
// import { useRouter } from "next/router";
// import * as fs from "fs";
import styles from "../../styles/Home.module.css";
import blogPostStyles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  const [blog, setblog] = useState(props.single_blog);

  return (
    <div className={blogPostStyles.container}>
      <main className={blogPostStyles.main}>
        {/* AND operation like 1(blog is set) and 1 = 1 and 0(blog is undefined) and 1 = 0  */}
        <h1>{blog && blog.title}</h1>
        <span className={`${blogPostStyles.blogAuthor} `}>
          by {blog && blog.author}
        </span>
        <span className={blogPostStyles.blogDate}>{blog && blog.date}</span>
        <hr className={blogPostStyles.hr} />

        <div className={blogPostStyles.blogContent}>{blog && blog.content}</div>
      </main>
    </div>
  );
};

// for static data prerendering
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "how-to-learn-javascript" }},
//       { params: { slug: "what-is-a-blog" }}
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   // console.log(context.params)
//   const { slug } = context.params;

//   let single_blog = fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

//   return {
//     props: { single_blog: JSON.parse(single_blog) },
//   };
// }

// for server side data prerendering
export async function getServerSideProps(context){
  // slug is already available in the context object
  const {slug} = context.query
  // console.log(slug)

  const single_blog_data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  const single_blog = await single_blog_data.json()

  return{
    props: { single_blog }
  }
}

export default Slug;
