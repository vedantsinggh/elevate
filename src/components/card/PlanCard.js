import React from 'react';
import styles from './PlanCard.module.css';

const PlanCard = ({ plan }) => {
  const { name, price, features, backgroundImage } = plan;

  const handleEnroll = () => {
    // Implement your enrollment logic here
    alert(`Enrolling in ${name} plan`);
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.planCard} style={cardStyle}>
      <div className={styles.cardContent}>
        <h2 className={styles.planName}>{name}</h2>
        <p className={styles.planPrice}>${price} / month</p>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>{feature}</li>
          ))}
        </ul>
        <button className={styles.enrollButton} onClick={handleEnroll}>Enroll</button>
      </div>
    </div>
  );
};

export default PlanCard;
