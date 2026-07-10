import { ReactNode } from 'react';

type HeadingProps = {
  index: string,
  title: string,
};

const textBoxStyle = {
  textBox: 'trim-both cap alphabetic',
};

const Heading = ({ 
  index, 
  title 
}: HeadingProps): ReactNode => (
  <div className="flex flex-col items-start gap-2 font-mono font-normal tracking-widest uppercase min-[82rem]:ml-[-1.5rem] min-[82rem]:flex-row min-[82rem]:gap-[0.5rem]">
    <span 
      className="text-xs opacity-50 w-[1rem]" 
      style={textBoxStyle}
    >{index}</span>
    <h2 
      className="text-3xl" 
      style={textBoxStyle}
    >{title}</h2>
  </div>
);

export default Heading;
