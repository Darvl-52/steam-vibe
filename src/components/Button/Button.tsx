import './Button.scss';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Icon from "@/components/Icon";
import clsx from "clsx";

interface Props {
  href: string
  label: string;
  mode: '' | 'transparent' | 'black-10' | 'black-08';
  isLabelHidden: boolean
  className: string;
  iconName: string;
  iconPosition: 'before' | 'after';
  hasFillIcon: boolean;
  extraAttrs: Record<string, string>;
}

type PartialProps = Partial<Props>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export const Button = (
  {
    href,
    className,
    label,
    mode,
    isLabelHidden,
    iconName,
    iconPosition,
    hasFillIcon,
    extraAttrs
  }: PartialProps) => {

  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';
  const linkProps: LinkProps = {};
  const buttonProps: ButtonProps = {};
  const specificProps = isLink ? linkProps : buttonProps;
  const title = isLabelHidden ? label : undefined;
  const iconComponent = iconName && (
    <Icon
      className='button__icon'
      name={iconName}
      hasFill={hasFillIcon}
    />
  )
  return (
    <Component
      className={clsx(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className='button__label'>
                    {label}
                </span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}