// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  let allBlogs = [];

  let files_in_blogdata_dir = await fs.promises.readdir("blogdata");
  // below 2 commented lines only used when you want a specific amount of files
  // we will pass the count query string parameter to get the sepcific number of blogs
  // files_in_blogdata_dir = files_in_blogdata_dir.slice(0, parseInt(req.query.count))

  for (let i = 0; i < files_in_blogdata_dir.length; i++) {
    const single_blog_file = files_in_blogdata_dir[i];
    const single_blog_file_content = await fs.promises.readFile(
      `blogdata/${single_blog_file}`,
      "utf-8"
    );
    allBlogs.push(JSON.parse(single_blog_file_content));
  }

  res.status(200).json(allBlogs);
}
