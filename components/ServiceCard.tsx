import Background from '@/components/Background';

import styles from '@/components/ServiceCard.module.css';

type ServiceCardProps = {
  index: string,
  title: string,
  description: string
}

const ServiceCard = ({
  index,
  title,
  description
}: ServiceCardProps) => (
  <div className={styles.ServiceCard}>
    <Background className={styles.ServiceCard__Background} />
    <div className={styles.ServiceCard__Content}>
      <div className={styles.ServiceCard__Heading}>
        <h3 className={styles.ServiceCard__Title}>{title}</h3>
        <div className={styles.ServiceCard__Index}>{index}</div>
      </div>
      <p className={styles.ServiceCard__Description}>{description}</p>
    </div>
  </div>
);

export default ServiceCard;