import React, { useEffect, useRef } from "react";
import { WidgetInstance } from "friendly-challenge";

const Captcha = ({ onCaptchaSuccess }) => {
  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution) => {
    // console.log("Captcha was solved. The form can be submitted.");
    // console.log(solution);

    onCaptchaSuccess(true);
  };

  const errorCallback = (err) => {
    // console.log("There was an error when trying to solve the Captcha.");
    // console.log(err);

    onCaptchaSuccess(false);
  };

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, {
        startMode: "none",
        doneCallback: doneCallback,
        errorCallback: errorCallback,
        language: "fr",
      });
    }

    return () => {
      if (widget.current !== undefined) widget.current.reset();
    };
  }, [container]);

  return (
    <div
      ref={container}
      className="frc-captcha"
      data-sitekey="FCMMMF031G0O9TGE"
    />
  );
};

export default Captcha;
