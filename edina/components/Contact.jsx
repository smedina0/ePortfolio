import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_d12j594',
        'template_wzaoo2p',
        form.current,
        'nwhutFS_XIYD8vYTU'
      )
      .then(
        (result) => {
          console.log(result);
          const liveRegion = document.getElementById('toast-aria-live');
          if (liveRegion) {
            liveRegion.textContent = 'Message sent successfully!';
          }
          toast.success('Message Sent Successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById('myForm').reset();
        },
        (error) => {
          const liveRegion = document.getElementById('toast-aria-live');
          if (liveRegion) {
            liveRegion.textContent = 'Message failed to send.';
          }
          toast.error('Oops! Message Not Sent.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form
        className="contact_form"
        id="myForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="first_row">
          <label htmlFor="name">Name (required)</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
          />
        </div>

        <div className="second">
          <label htmlFor="user_email">Email (required)</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            aria-required="true"
          />
        </div>

        <div className="third">
          <label htmlFor="message">Message (required)</label>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
          ></textarea>
        </div>

        <div className="edina_tm_button">
          <button type="submit" className="color">
            Submit
          </button>
        </div>
      </form>

      {/* ARIA live region for screen reader announcements */}
      <div
        id="toast-aria-live"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      ></div>

      <ToastContainer role={undefined} />

      {/* Visually hidden screen reader style */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default Contact;
