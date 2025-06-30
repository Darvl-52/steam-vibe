import './Social.scss';
import { socialLinksInterface } from "@/layouts/Footer/Footer";
import Button from "@/components/Button";
import clsx from "clsx";

interface Props {
  className?: string;
  links?: socialLinksInterface[];
}

export const Socials = ({className, links}: Props) => {
  return (
    <div className={clsx(className, 'soc1als')}>
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li
            className='soc1als__item'
            key={index}
          >
            <Button
              className='soc1als__link'
              mode='black-10'
              href='/'
              iconPosition='before'
              target='_blank'
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}