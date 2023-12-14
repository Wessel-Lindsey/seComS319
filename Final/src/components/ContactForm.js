import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "../assets/css/contact.form.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <>
        <Button
          id="ContactForm"
          onClick={this.toggle}
          className="btn-round-color"
        >
        Contact Me
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="ContactForm"
          // className="popover-primary"
        >
          <PopoverHeader>Contact Me</PopoverHeader>
          <PopoverBody>
            <form action="#">
              <input placeholder="Name" type="text" id="name" required />
              <input placeholder="Email" type="email" id="email" required />
              <input placeholder="Subject" type="text" id="subject" required />
              <select name="Type of Project" id="type_project" required>
                <option hidden disabled selected value="">{" "}-- Type of Project --{" "}</option>
                <option value="Animation">Animation</option>
                <option value="Auidobook">Auidobook</option>
                <option value="Commercial">Commercial</option>
                <option value="eLearning/Coperate Training">eLearning/Coperate Training</option>
                <option value="IRV/Messaging Service">IRV/Messaging Service</option>
                <option value="Video Game">Video Game</option>
              </select>
              <textarea placeholder="How can I help you?" id="how_help"></textarea>
              <select name="How did you hear about me?" required id="hear_about_me">
                <option hidden disabled selected value="">{" "}-- How did you hear about me? --{" "}</option>
                <option value="Internet Search">Internet Search</option>
                <option value="Fivver">Fivver</option>
                <option value="Social Media">Social Media</option>
                <option value="Youtube">Youtube</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
              <button
                class="formBtn"
                type="submit"
                onClick={() => postMethod(
                  document.getElementById("name")?.value,
                  document.getElementById("email")?.value,
                  document.getElementById("subject")?.value,
                  document.getElementById("type_project")?.value,
                  document.getElementById("how_help")?.value,
                  document.getElementById("hear_about_me")?.value)}
              >{" "}Submit
              </button>
            </form>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}

function postMethod(name, email, subject, type_project, how_help, hear_about_me) {
  if(name != null){
    fetch("http://localhost:8081/addMessage", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Subject: subject,
        Project_Type: type_project,
        How_Help: how_help,
        Heared_About_Me: hear_about_me
      }),
    });
  }
}
