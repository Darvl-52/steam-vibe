import './Header.scss';
import Logo from "@/components/Logo";
import clsx from "clsx";
import Button from "@/components/Button";
import { BurgerButton } from "@/components/BurgerButton/BurgerButton";

type Props = {
  url: string;
  isFixed: boolean;
}

type headerMenuItems = {
  label: string;
  href: string;
}

export const Header = ({url, isFixed}: Props) => {

  const menuItems: headerMenuItems[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions'
    },
  ];

  return (
    <header
      className={clsx('header', {
        'is-fixed': isFixed,
      })}
      data-js-overlay-menu=''
    >
      <div className="header__inner container">
        <Logo loading='eager' />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=''
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map((item, index) =>
                <li
                  className='header__menu-item'
                  key={index}
                >
                  <a
                    href={item.href}
                    className={clsx('header__menu-link', {
                      'is-active': item.href === url
                    })}
                  >
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className='header__button'
              mode='transparent'
              label='Search'
              isLabelHidden
              iconPosition='before'
              iconName='search'
            />
            <Button
              className='header__button'
              mode='transparent'
              label='Notifications'
              isLabelHidden
              iconPosition='before'
              iconName='notification'
            />
          </div>
        </dialog>
        <BurgerButton
          extraAttrs={{
            'data-js-overlay-menu-burger-button': ''
          }}
          className='header__burger-button visible-tablet'
        />
      </div>
    </header>
  )
}