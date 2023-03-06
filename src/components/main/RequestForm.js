import { createRequest } from "@/services/createRequest";
import React, { useRef, useState } from "react";
import styles from "../../styles/requestForm.module.css";

export default function RequestForm() {
  const inputRef = useRef();
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputRef.current.value?.length < 1) {
      setIsSubmited(false);
      return setFieldError(true);
    }
    setIsLoading(true);
    await createRequest(inputRef.current.value, setError, setIsSubmited);
    setIsLoading(false);
    setFieldError(false);
    inputRef.current.value = "";
  };

  const renderTitle = () => {
    return (
      <div className={styles.form__titleContainer}>
        <h3>Request a list of headings</h3>
        <p>
          Please enter your email address to receive course titles, the topics
          will be emailed to you.
        </p>
      </div>
    );
  };

  const renderFieldError = () => {
    if (fieldError) {
      return <p>Fill the empty field</p>;
    }
    return null;
  };

  const renderFeedback = () => {
    if (error) {
      return (
        <div className={styles.form__feedback}>
          <p>{error}</p>
        </div>
      );
    }

    if (isSubmited) {
      return (
        <div className={styles.form__feedback}>
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13.5" cy="14.4956" r="13.5" fill="#29D089" />
            <path
              d="M10.6334 17.7659L7.15835 14.2909L6 15.4493L10.6334 20.0826L20.5621 10.154L19.4037 8.99561L10.6334 17.7659Z"
              fill="white"
              stroke="white"
            />
          </svg>
          <p>
            Your email has been successfully registered, headlines will be sent
            to you soon.
          </p>
        </div>
      );
    }
  };

  const renderImages = () => {
    return (
      <div className={styles.form__imagesContainer}>
        <img
          draggable={false}
          src="/images/envelopeLarge.png"
          className={styles.form__bigEnvelope}
        />
        <img
          draggable={false}
          src="/images/envelopeSmall.png"
          className={styles.form__smallEnvelope}
        />
      </div>
    );
  };

  const renderMobileSendButton = () => {
    return <button>Send</button>;
  };
  const renderForm = () => {
    return (
      <div className={styles.form__formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__inputContainer}>
            <input
              type="email"
              ref={inputRef}
              placeholder="AfshinT2Y@gmail.com"
            />
            {renderFieldError()}
          </div>
          {renderMobileSendButton()}
          {renderFeedback()}
        </form>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__leftSideWrapper}>
          {renderTitle()}
          {renderForm()}
        </div>
        {renderImages()}
      </div>
    </section>
  );
}
