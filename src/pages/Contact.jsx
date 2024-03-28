import emailjs from "@emailjs/browser";
import illustration from "../assets/images/contact/illustration.png";
import ScrollReveal from "scrollreveal";
import { useEffect, useRef } from "react";
// import Captcha from "../components/captcha";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const Contact = () => {
  // const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
  // const [errorCaptcha, setErrorCaptcha] = useState(false);
  // const [successSend, setSuccessSend] = useState(false);
  const box1Ref = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById("emailForm");

    // Vérifier tous les champs obligatoires
    // const requiredFields = ["name", "email", "surname", "subject", "message"];
    // let hasEmptyField = false;

    // requiredFields.forEach((fieldName) => {
    //   const field = form.elements[fieldName];
    //   if (!field.value.trim()) {
    //     hasEmptyField = true;
    //   }
    // });

    // if (hasEmptyField) {
    //   // Afficher un message d'erreur concernant les champs vides
    //   setErrorCaptcha(true);
    //   return;
    // }

    // Vérifier si le captcha est résolu
    // if (!isCaptchaSolved) {
    //   setErrorCaptcha(true);
    //   return;
    // }

    // Envoyer le formulaire
    emailjs
      .sendForm(
        "service_fhd2nly",
        "template_k0r3vit",
        "#emailForm",
        "7FUVxDYGr3haA5Uw2"
      )
      .then(
        (result) => {
          // setErrorCaptcha(false);
          // setIsCaptchaSolved(true);
          // setSuccessSend(true);
          alert("Votre message a bien été envoyé !");
          form.reset();
          // toast("Event has been created", {
          //   description: "Sunday, December 03, 2023 at 9:00 AM",
          //   action: {
          //     label: "Undo",
          //     onClick: () => console.log("Undo"),
          //   },
          // });
        }
        // (error) => {
        //   console.log(error.text);
        // }
      );
  };

  useEffect(() => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    ScrollReveal().reveal(box1Ref.current, config);
  }, []);

  return (
    <div className="pb-10">
      <Helmet>
        <title>Nous Contacter - Tous Albatros</title>
        <meta
          name="description"
          content="Contactez l'équipe de Tous Albatros. Nous sommes à votre disposition pour discuter et répondre à toutes vos questions. Remplissez le formulaire et envoyez-nous un message !"
        />
      </Helmet>
      <div
        className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto mt-32 md:px-10 md:gap-10"
        ref={box1Ref}
      >
        <div className="px-10 lg:px-0 lg:w-1/3">
          <h2 className="text-3xl font-semibold text-secondary">
            Nous sommes{" "}
            <span className="text-primary font-bold">à votre disposition</span>{" "}
            pour discuter
          </h2>
          <p className="mt-5 text-secondary">
            Notre équipe est disponible de 9h à 17h30, du lundi au jeudi et sera
            ravie d'échanger avec vous.
          </p>
          <img
            src={illustration}
            className="h-56 mx-auto"
            alt="Illustration Tous Albatros"
          />
        </div>
        <form
          action="POST"
          id="emailForm"
          onSubmit={handleFormSubmit}
          className="w-10/12 md:w-2/3 border p-5 md:p-10 rounded-lg mt-20 lg:mt-0"
        >
          <h1 className="text-secondary text-2xl md:text-4xl font-bold">
            Nous contacter
          </h1>
          <div className="flex flex-col lg:flex-row lg:gap-10 mt-10">
            <div className="lg:w-1/2">
              <div className="flex flex-col">
                <label className="text-secondary">
                  Nom : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  className="border rounded h-8 placeholder-placeholder pl-3"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label className="text-secondary">
                  Email : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border rounded h-8 placeholder-placeholder pl-3"
                  id="email-from"
                />
                <br />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col">
                <label className="text-secondary">
                  Prénom : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Prénom"
                  className="border rounded h-8 placeholder-placeholder pl-3"
                />
                <br />
              </div>
              <div className="flex flex-col">
                <label className="text-secondary">
                  Objet : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Objet"
                  className="border rounded h-8 placeholder-placeholder pl-3"
                  id="subject"
                />
                <br />
              </div>
            </div>
          </div>
          <div className="lg:mt-5">
            <label className="text-secondary">
              Message : <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Message"
              name="message"
              className="border rounded w-full placeholder-placeholder pl-3 pt-2"
              rows="6"
              id="message"
            />
          </div>
          {/* <Captcha
            onCaptchaSuccess={(success) => setIsCaptchaSolved(success)}
          />
          {errorCaptcha && (
            <p className="text-red-500 text-sm mt-5">
              Veuillez résoudre le Captcha
            </p>
          )} */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
            <p className="text-xs">
              <span className="text-red-500">*</span> Tous les champs sont
              obligatoires
            </p>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-1 rounded-xl mt-5 lg:mt-0"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
