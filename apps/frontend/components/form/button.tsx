import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import clsx from 'clsx';

export const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        'text-sm h-8 pl-3 pr-3 rounded-md gap-1 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer',
        props.className
      )}
    />
  );
};
