"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import styles from "./Connect.module.css"
import Swal from "sweetalert2"
import { Land } from "../Energy/Land"
export const Connect = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_w3lym1a", "template_ntf1ao7", form.current, {
        publicKey: "JdlQJXiOnzPK2sVqs",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Hii! I Got Your Mail!!",
            showConfirmButton: false,
            timer: 1500,
          })
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "oops! Something went wrong!!",
            showConfirmButton: false,
            timer: 1500,
          })
        },
      ) //Promise Ends Here
  }

  return (
    <div className={styles.Main} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.description}>
        Have a project in mind or just want to chat? Fill out the form below, and I'll get back to you as soon as
        possible!
      </p>
      <div className={styles.DataForm}>
        <div className={styles.FirstPart}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className={styles.SecondPart}>
          <Land />
        </div>
      </div>
    </div>
  )
}
