import React, { useState } from "react";
import Image from "next/image";
import contactStyles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  const textarea = {
    minHeight: '200px',
  }

  const handleFormSubmit = (_form) => {
    // prevent the form to reaload the page or to prevent the form to submit itself
    _form.preventDefault();

    // console.log(name, email, phone, desc);
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/contactPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success : ", data);
        alert("Thanks for contacting us !!")
        setphone('')
        setname('')
        setemail('')
        setdesc('')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };

  return (
    <div className={contactStyles.container}>
      <main className={contactStyles.main}>
        <h1 className={contactStyles.title}>Contact Us</h1>

        <div className="mt-5 mb-5">
          <Image
            src="/contactus.png"
            className="p-3"
            height={550}
            width={900}
          ></Image>

          {/* <img src="/blogger.png" alt="Blogger" height={400} width={400} /> */}
        </div>

        <div className={`${contactStyles.form} border p-4 `}>
          <h3>Contact Form</h3>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <label className="mb-2">Full Name</label>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="John Doe"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingName">
                    Enter your full name here
                  </label>
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-12 mb-3">
                <label className="mb-2">E-Mail</label>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="example@test.com"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingEmail">
                    Enter your correct email here
                  </label>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label className="mb-2">Contact No</label>
                <div className="form-floating mb-3">
                  <input
                    type="phone"
                    className="form-control"
                    id="floatingContact"
                    placeholder="+91 99999 55555"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingContact">Mobile no</label>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label className="mb-2">Elaborate your Concern</label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingDescription"
                    name="desc"
                    value={desc}
                    onChange={handleChange}
                    // Height of textarea is only working with the style component at the top of this file, min-height not even working with the css 
                    style={textarea}
                  >
                   
                  </textarea>
                  <label htmlFor="floatingDescription">
                    Describe your concern here
                  </label>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg col-md-12 mt-3"
              type="submit"
            >
              Submit Contact
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
