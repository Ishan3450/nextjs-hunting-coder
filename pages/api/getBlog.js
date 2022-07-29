// below is the example to get the blog data in json format with 2 urls example one is valid and another is invalid
// valid url : http://localhost:3000/api/getBlog?blogSlug=how-to-learn-javascript
// invalud url : http://localhost:3000/api/getBlog?blogSlug=lnslkfskdsdlkf

import * as fs from "fs";

export default async function handler(req, res) {
  const {slug} = req.query;

  fs.readFile(`blogdata/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "no such blog found !!" });
    }

    res.status(200).json(JSON.parse(data));
  });
}
