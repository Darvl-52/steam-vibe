import './AccordionGroup.scss';
import React from 'react';
import clsx from "clsx";

type Props = {
  columns?: number;
  children: React.ReactNode;
  isOrderedList?: boolean;
};

type ListTagProps = React.HTMLAttributes<HTMLOListElement> | React.HTMLAttributes<HTMLUListElement>;

export const AccordionGroup = (
  {
    columns = 1,
    children,
    isOrderedList,
  }: Props) => {
  const childrenArray = React.Children.toArray(children);
  const itemsPerColumn = Math.ceil(childrenArray.length / columns);
  const ListTag = isOrderedList ? 'ol' : 'ul';

  const listProps: ListTagProps = {
    className: clsx('accordion-group', {
      [`accordion-group--${columns}-columns`]: columns > 1,
      ['accordion-group--has-counter']: isOrderedList,
    }),
  };

  return (
    <ListTag {...listProps}>
      {childrenArray.map((child, index) => (
        <li
          className={clsx('accordion-group__item', {
          ['accordion-group__item--last-column-item']: columns > 1 && itemsPerColumn / (index + 1) === 1
        })}
          key={index}>
          {child}
        </li>
      ))}
    </ListTag>);
};
