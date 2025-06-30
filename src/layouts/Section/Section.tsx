import './Section.scss';
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  title?: string;
  titleId?: string;
  description?: string;
  isActionsHiddenOnMobile?: boolean;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const Section = (
  {
    className,
    title,
    titleId,
    description,
    children,
    actions,
    isActionsHiddenOnMobile = false
  }: Props) => {
  return (
    <section
      aria-labelledby={titleId}
      className={clsx(className, 'section container')}
    >
      <header className="section__header">
        <div className="section__info">
          <h2
            className="section__title h3"
            id={titleId}
          >
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div
            className={clsx('section__actions', {
              'hidden-mobile': isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}