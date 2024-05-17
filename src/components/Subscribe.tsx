import { useDeferredValue, useEffect, useRef, useState } from "react";
import { isValidEmail } from "../utils";

export default function Subscribe() {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const deferredEmail = useDeferredValue(email);

  const successResponseRef = useRef<HTMLDivElement | null>(null);
  const errorResponseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    setIsValid(!deferredEmail || !!isValidEmail(deferredEmail));
    if (successResponseRef.current) {
      successResponseRef.current.textContent = "";
    }
    if (errorResponseRef.current) {
      errorResponseRef.current.textContent = "";
    }
  }, [deferredEmail]);

  return (
    <div className="relative">
      <div className="relative">
        <form
          action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
          target="_blank"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="w-[360px] h-10 flex items-center"
        >
          <div
            className={`h-full px-medium flex items-center gap-medium border-y border-l rounded-l-[50px] transition-colors w-full ${
              isValid ? "focus-within:border-app-main border-white" : "border-red-600"
            }`}
          >
            <img alt="..." width={20} height={14} src="/images/email.svg" />
            <input
              className="text-t16 text-app-white focus-visible:outline-none bg-transparent w-full"
              placeholder="Your Mail Here"
              type="email"
              id="mce-EMAIL"
              name="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            disabled={!email || !isValid}
            className="h-full px-[15px] text-t16b text-app-black inline-flex items-center border border-white bg-app-white rounded-r-[50px] w-fit transition-[opacity,color] hover:bg-app-main hover:text-app-white hover:border-app-main disabled:cursor-not-allowed disabled:bg-app-white disabled:text-app-black disabled:border-app-white disabled:opacity-80"
          >
            Subscribe
          </button>

          <button className="absolute -z-50 opacity-0" type="submit" />
        </form>
      </div>
      <div className="clear absolute capitalize text-white left-0 max-w-[360px]" id="mce-responses">
        <div
          className="response text-t14 text-red-600"
          id="mce-error-response"
          style={{ display: "none" }}
          ref={errorResponseRef}
        />
        <div
          className="response text-t14 text-app-white"
          id="mce-success-response"
          style={{ display: "none" }}
          ref={successResponseRef}
        />
      </div>
    </div>
  );
}
