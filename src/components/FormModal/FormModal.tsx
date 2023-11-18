'use client';
import React, { useState } from 'react';
import classes from './_formModal.module.scss';
const { formWrapper, form, inputWrapper, buttonWrapper } = classes;
import closeIcon from '../../../public/icons/close-circle.svg';
import Image from 'next/image';
import classNames from 'classnames';

interface FormModalProps {
  closeModal: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormModal: React.FC<FormModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    console.log(formData);
  };

  return (
    <div className={formWrapper}>
      <div className={classNames(form, 'p-32')}>
        <Image
          src={closeIcon}
          width={40}
          height={40}
          onClick={closeModal}
          className="cursor-pointer mb-16"
          alt="close form"
        />
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-space-between height-90">
          <div>
            <div className={inputWrapper}>
              <label htmlFor="name">Nimi:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={inputWrapper}>
              <label htmlFor="email">E-post:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={classNames(inputWrapper, 'mt-32')}>
              <label htmlFor="message">Sõnum:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className={buttonWrapper}>
            <button className="buttonRounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
