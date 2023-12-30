'use client';
import React, { FormEvent, useState } from 'react';
import classes from './_formModal.module.scss';
const { formWrapper, form, inputWrapper, buttonWrapper, close, loadingWrapper } = classes;
import closeIcon from '../../../public/icons/close-circle.svg';
import Image from 'next/image';
import classNames from 'classnames';
import { useLocaleContext } from '../LocaleContextProvider/LocaleContextProvider';
import { ThreeCircles } from 'react-loader-spinner';
interface FormModalProps {
  closeModal: () => void;
  product: { title: string };
  isContact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  lang: string;
  productTitle: string;
}

const FormModal: React.FC<FormModalProps> = ({ closeModal, product, isContact }) => {
  const { currentLocale } = useLocaleContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: `Küsimus ${product.title} kohta.

    `,
    lang: currentLocale,
    productTitle: product.title,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setLoading(false);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    } finally {
      closeModal();
    }
  };

  return (
    <div className={formWrapper}>
      <div className={classNames(form, 'p-32')}>
        {loading && (
          <div className={loadingWrapper}>
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#b08401"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        <Image
          src={closeIcon}
          width={30}
          height={30}
          onClick={closeModal}
          className={classNames(close, 'cursor-pointer mb-16')}
          alt="close form"
        />
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-space-between height-90 ">
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
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
          </div>
          <div className={buttonWrapper}>
            <button disabled={loading} className="buttonRounded" type="submit">
              Saata
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
