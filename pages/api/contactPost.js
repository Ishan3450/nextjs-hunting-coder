import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    // console.log(req.body);

    const files_in_contactdata_dir = await fs.promises.readdir('contactdata');
    const user_name = req.body.name
    const new_file_name = (files_in_contactdata_dir.length+1) + "-" + user_name.replaceAll(' ', '-').toLowerCase();

    fs.writeFile(
      `contactdata/${new_file_name}.json`,
      JSON.stringify(req.body),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Contact submitted successfully with id : " + new_file_name);
        }
      }
    );
    res.status(200).json();
  } else {
    // Handle any other HTTP method
    res.status(200).json("Other method found than the POST method");
  }
}
