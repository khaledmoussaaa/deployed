'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../app/styles/page.module.css'

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitButton = document.getElementById('submitForm') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const project = document.getElementById('project') as HTMLSelectElement;
    const message = document.getElementById('message') as HTMLInputElement;

    if (form.current) {
      emailjs.sendForm('service_1kenzeu', 'template_yyhiwdb', form.current, 'jToFGp20BlatIIbZO')
        .then(() => {
          console.log('Done');
          submitButton.innerText = 'Request Sent Successfully';
          name.value = '';
          phone.value = '';
          email.value = '';
          project.value = '';
          message.value = '';
          setTimeout(() => {
            submitButton.innerText = 'Submit';
          }, 3000);
        })
        .catch((error) => {
          submitButton.innerText = 'Something Went Wrong ..';
          setTimeout(() => {
            submitButton.innerText = 'Try Again..';
            name.value = '';
            phone.value = '';
            email.value = '';
            project.value = '';
            message.value = '';
            setTimeout(() => {
              submitButton.innerText = 'Submit';
            }, 3000);
          }, 5000);
        });
    }
  };

  return (
    <>
      <div className={styles.information} id="footer-component">
        <div className={styles.infoLeft}>
          <h1>Let&rsquo;s Talk</h1>
          <p>
            Have some big idea or brand to develop and need help?
            Then reach out we&rsquo;d love to hear about your project
            and provide help
          </p>
          <div className={styles.info1}>
            <h3>Email</h3>
            <span>limstce@gmail.com</span>
          </div>
          <div className={styles.info2}>
            <ul>
              <li><h3>Social</h3></li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.infoRight} id='contactForm'>
          <label htmlFor="name">Name</label>
          <input type="text" name='user_name' id='name' required />

          <label htmlFor="phone">Phone</label>
          <input type="number" name='user_phone' id='phone' required />

          <label htmlFor="email">Email</label>
          <input type="email" name='user_email' id='email' required />

          <label htmlFor="project">What service are you interested in </label>
          <select name="user_project" id="project" className={styles.custom} required>
            <option value="empty">Select project type</option>
            <option value="UI/UX">UI/UX</option>
            <option value="BRANING">BRANDING</option>
            <option value="DEVELOPMENT">DEVELOPMENT</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Audio Service">Audio Service</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="user_message" cols={1} rows={5}></textarea>
          <button id='submitForm'>Submit</button>
        </form>
      </div>
    </>
  );
}
export default Footer;