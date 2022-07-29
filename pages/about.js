import React from "react";
import Image from "next/image";
// import Script from "next/script";
// import styles from "../styles/Home.module.css";
import aboutStyle from "../styles/About.module.css";

const About = () => {
  return (
    <div className={aboutStyle.container}>
      <main className={aboutStyle.main}>
        <h1 className={aboutStyle.title}>
          About Hunting <a href="#">Coder</a>
        </h1>

        <div className="mt-5">
          <Image
            src="/aboutus.png"
            className="p-1"
            height={400}
            width={600}
          ></Image>
        </div>

        <div className={aboutStyle.grid}>
          <a className={`${aboutStyle.card}`}>
            <h2>Introduction</h2>
            <hr />
            <p>
              Hunting Coder is a Blogging web application in which bloggers will
              put various types of blogs on various topics and give their best
              to provide information on various topics and users or the
              serachers will get the solution by getting the information about
              their problems.
            </p>
          </a>

          <a className={aboutStyle.card}>
            <h2>Services Offered</h2>
            <hr />
            <p>
              On Hunting Coder one can come on site and read about different
              blogs and also if one is interested in expressing individual's
              thoughts then he/she can also create blogs and upload to Hunting
              Coder. An individual can also contact us about his/her queries
              too.
            </p>
            <div className="col-md-6 mt-4">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center ">
                  Create your own blogs
                  <span className="badge badge-primary badge-pill bg-primary">
                    New
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Tell us your concerns
                  <span className="badge badge-primary badge-pill bg-primary">
                    New
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Interact with your blogs
                  <span className="badge badge-primary badge-pill bg-success">
                    Upcoming
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Give comments on others' blogs
                  <span className="badge badge-primary badge-pill bg-success">
                    Upcoming
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Save your blogs locally
                  <span className="badge badge-primary badge-pill bg-success">
                    Upcoming
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center ">
                  Account Management
                  <span className="badge badge-primary badge-pill bg-success ">
                    Upcoming
                  </span>
                </li>
              </ul>
            </div>
          </a>

          <a className={aboutStyle.card}>
            <h2>Contact Us</h2>
            <p>
              One can tell about his/her concern about Hunting Coder, one can
              also give feedbacks on Hunting Coder, can report a bug to us. All
              that is possible through our contact page, an Individual can see
              it on the navigation bar.
            </p>
          </a>

          <a className={aboutStyle.card}>
            <h2>Features</h2>
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">User Interface</h5>
                <p className="card-text">
                  A very clean and simple User Interface. Which will help end
                  users to explore and easy to interact Hunting Coder.
                </p>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Interaction and Responsive</h5>
                <p className="card-text">
                As Hunting Coder is built in Next.js. Next.js is a very fast React based framework which makes Hunting Coder very fast to the end users without realoading the site single time.
                </p>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Cost and User Experience</h5>
                <p className="card-text">
                Currently Hunting Coder is free of cost to use and without a single ad on Hunting Coder. So we are focusing on user experience more.
                </p>
              </div>
            </div>

          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
