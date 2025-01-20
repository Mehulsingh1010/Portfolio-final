import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "~/components/button";
import { DecoderText } from "~/components/decoder-text";
import { Divider } from "~/components/divider";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { Icon } from "~/components/icon";
import { Input } from "~/components/input";
import { Section } from "~/components/section";
import { Text } from "~/components/text";
import { tokens } from "~/components/theme-provider/theme";
import { Transition } from "~/components/transition";
import { useFormInput } from "~/hooks";
import { cssProps, msToNum, numToMs } from "~/utils/style";
import { baseMeta } from "~/utils/meta";
import styles from "./contact.module.css";

export const meta = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you're interested in discussing a project or if you just want to say hi",
  });
};

const MAX_NAME_LENGTH = 256;
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

export const Contact = () => {
  const errorRef = useRef();
  const name = useFormInput("");
  const email = useFormInput("");
  const message = useFormInput("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const initDelay = tokens.base.durationS;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!name.value) {
      setError("Please enter your name.");
      return;
    }

    if (name.value.length > MAX_NAME_LENGTH) {
      setError(`Name must be shorter than ${MAX_NAME_LENGTH} characters.`);
      return;
    }

    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message.value) {
      setError("Please enter a message.");
      return;
    }

    if (email.value.length > MAX_EMAIL_LENGTH) {
      setError(`Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`);
      return;
    }

    if (message.value.length > MAX_MESSAGE_LENGTH) {
      setError(`Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`);
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        "service_ifsfg0c",
        "template_zkyz8rd",
        {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        },
        "H3Gs4gw6l-vESwAyi"
      );
      setSuccess(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form className={styles.form} method="post" ref={nodeRef} onSubmit={handleSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== "exited"} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="name"
              label="Your name"
              type="text"
              maxLength={MAX_NAME_LENGTH}
              {...name}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition unmount in={error} timeout={msToNum(tokens.base.durationM)}>
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {error}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading level={3} as="h3" className={styles.completeTitle} data-status={status}>
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I&apos;ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

export default Contact;
