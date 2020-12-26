import React from 'react';
import PropTypes from 'prop-types';
import { EmailIcon, PhoneIcon, AddressIcon } from './assets';
import styles from './styles.module.scss';

const ContactItem = ({
  val, icon: Icon, header, secondLine, onClick,
}) => {
  return (
    <button onClick={onClick} className="transparent" type="button">
      <div className={styles['contact-item']}>
        <h3 className={styles.header}>{header}</h3>
        <Icon className={styles.icon} />
        <h4 className={styles.line}>{val || ''}</h4>
        {secondLine && <h4 className={styles.line}>{secondLine}</h4>}
      </div>
    </button>
  );
};

const Contact = ({
  email, phone, address1, address2,
}) => {
  const onEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const onPhoneClick = () => {
    window.location.href = `tel:${phone.replace(/[^\d]/g, '')}`;
  };

  const onAddressClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${address1} ${address2}`);
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <div className={styles.wrapper}>
        <ContactItem val={email} header="Email" icon={EmailIcon} onClick={onEmailClick} />
        <ContactItem val={phone} header="Phone" icon={PhoneIcon} onClick={onPhoneClick} />
        <ContactItem val={address1} secondLine={address2} header="Address" icon={AddressIcon} onClick={onAddressClick} />
      </div>
    </section>
  );
};

Contact.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
};

export default Contact;
