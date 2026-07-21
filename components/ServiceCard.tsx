import Background from '@/components/Background';
import { cn } from '@/lib/utils';

import styles from '@/components/ServiceCard.module.css';

type ServiceCardProps = {
  index: number,
  title: string,
  description: string
}

const textBoxStyle = {
  textBox: 'trim-both cap alphabetic',
};

const ServiceCard = ({
  index,
  title,
  description
}: ServiceCardProps) => (
  <div className={cn(styles.Card, 'card group transition-colors duration-300')}>
    <Background className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className={cn(styles.Card__Content, 'p-6 lg:p-8')}>
      <div className="z-1 flex items-start gap-2 font-mono tracking-widest">
        <h3 className="flex-1 text-lg uppercase" style={textBoxStyle}>
          {title}
        </h3>
        <div className="text-xs opacity-50 w-[1rem]" style={textBoxStyle}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      <p className="opacity-75 text-sm md:text-lg">
        {description}
      </p>
    </div>
  </div>
);

export default ServiceCard;