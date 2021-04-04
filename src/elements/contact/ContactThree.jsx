import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
class ContactThree extends Component {

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", open: false };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        if (this.name && this.email && this.message)
          this.setState({ open: true })
      })
      .catch(error => alert(error));
    e.PreventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-form--1">
        <div className="container">
          <center>
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">{this.props.contactTitle}</h2>
                <p className="description">
                  Connect with me via email:
                  <a href="mailto:zacthehobbit@outlook.com">
                    {" "}
                    zacthehobbit@outlook.com
                  </a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} netlify netlify-honeypot="bot-field" data-netlify="true">
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <label
                    style={{ float: "left", width: "48%" }}
                    htmlFor="item01"
                  >
                    <input
                      type="text"
                      name="name"
                      id="item01" value={name} onChange={this.handleChange}
                      placeholder="Name"
                    />
                  </label>

                  <label
                    style={{ float: "right", width: "48%" }}
                    htmlFor="item02"
                  >
                    <input
                      type="email"
                      name="email"
                      id="item02" value={email} onChange={this.handleChange}
                      placeholder="Email"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message" value={message} onChange={this.handleChange}
                      placeholder="Message"
                    />
                  </label>
                  <button
                    className="rn-btn btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Email sent!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
export default ContactThree;
