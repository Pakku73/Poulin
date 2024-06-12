// import { PropsWithChildren } from 'react';

// type Props = {};

// export const Button = ({ children }: PropsWithChildren<Props>) => {
//   return <button>{children}</button>;
// };
export const Button = (props) => {
  console.log(props);

  return (
    <button
      className={`uppercase bg-RoseRed text-white p-2 rounded-lg transition ease-in-out duration-300 hover:bg-NewGrey ${
        props.variant === 'cream' ? 'bg-red-500' : 'bg-blue-500'
      }`}
    >
      {props.text}
    </button>
  );
};