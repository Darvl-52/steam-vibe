import './CategoryCard.scss';
import { Image } from "minista";
import Icon from "@/components/Icon";

interface Props {
  title: string;
  images: string[];
}

export const CategoryCard = ({title, images}: Props) => {

  return (
    <a
      className='category-card'
      href='/movies'
    >
      <div className='category-card__images'>
        {images.map((item, index) => (
          <Image
            className='category-card__image'
            src={item}
            key={index}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {title}
        </h3>
        <Icon
          className='category-card__icon'
          name='arrow-right'
        />
      </div>
    </a>
  )
}