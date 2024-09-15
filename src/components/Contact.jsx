import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false });  // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    let validationErrors = {};

    if (!form.name) validationErrors.name = true;
    if (!form.email) validationErrors.email = true;
    if (!form.message) validationErrors.message = true;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_mp6qfuk',
      'template_ywi3igg',
      {
        from_name: form.name,
        to_name: 'Menes',
        from_email: form.email,
        to_email: 'makiesemenes@gmail.com',
        message: form.message,
      },
      'W2SKwfWtVqD8GJbmT'
    )
      .then(() => {
        setLoading(false);
        alert('Merci pour votre message, je vous répondrai aussi vite que possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
        setErrors({});  // Clear errors after successful submission
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Une erreur est survenue.');
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Restons en contact..</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Votre Nom & Prénom :</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nom & Prénom"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ${errors.name ? 'input-error' : ''}`}
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Votre adresse E-mail :</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ${errors.email ? 'input-error' : ''}`}
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Votre Message :</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Que puis-je faire pour vous ?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ${errors.message ? 'input-error' : ''}`}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:-[550px] h-[350px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
