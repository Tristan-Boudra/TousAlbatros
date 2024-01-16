import React, { useEffect, useRef, useCallback, useState } from "react";
import { WidgetInstance } from "friendly-challenge";

const Captcha = ({ onCaptchaSuccess }) => {
  const [hasEmptyField, setHasEmptyField] = useState(false);
  const container = useRef();
  const widget = useRef();

  const doneCallback = useCallback(
    (solution) => {
      if (!hasEmptyField) {
        onCaptchaSuccess(true);
      } else {
        onCaptchaSuccess(false);
      }
    },
    [onCaptchaSuccess, hasEmptyField]
  );

  const errorCallback = useCallback(
    (err) => {
      onCaptchaSuccess(false);
    },
    [onCaptchaSuccess]
  );

  useEffect(() => {
    const initializeWidget = () => {
      if (!widget.current && container.current) {
        widget.current = new WidgetInstance(container.current, {
          startMode: "none",
          doneCallback: doneCallback,
          errorCallback: errorCallback,
          language: "fr",
        });
      }
    };

    initializeWidget();

    return () => {
      if (widget.current !== undefined) widget.current.reset();
      setHasEmptyField(false); // Réinitialiser l'état des champs vides
    };
  }, [container, doneCallback, errorCallback]);

  return (
    <div
      ref={container}
      className="frc-captcha"
      data-sitekey="FCMMMF031G0O9TGE"
    />
  );
};

export default Captcha;
