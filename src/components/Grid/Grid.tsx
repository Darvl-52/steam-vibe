import './Grid.scss';
import React from "react";
import clsx from "clsx";

type Props = {
  columns: number;
  children: React.ReactNode;
}

export const Grid = ({columns = 1, children}: Props) => {
  const items = React.Children.toArray(children);

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {items.map((child, index) => (
        <li
          className='grid__item'
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}