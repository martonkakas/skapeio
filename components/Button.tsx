import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  label: string,
  href: string
}

const Button = ({
  label,
  href
}: ButtonProps): ReactNode => (
  <Link 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center border border-white px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 relative group bg-black/50"
  >
    <span className="relative z-10">{label}</span>
    <div className="absolute top-[0.125rem] right-[0.125rem] border-transparent border-t-10 border-l-10 border-t-white group-hover:border-t-black transition-colors" />
    <div className="absolute top-[0.125rem] left-[0.125rem] w-2 h-2 border-t border-l border-white group-hover:border-black transition-colors" />
    <div className="absolute bottom-[0.125rem] right-[0.125rem] w-2 h-2 border-b border-r border-white group-hover:border-black transition-colors" />
  </Link>
);

export default Button;