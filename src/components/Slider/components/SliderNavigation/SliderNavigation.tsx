import './SliderNavigation.scss';
import clsx from "clsx";
import Button from "@/components/Button";

interface Props {
  className?: string;
  id?: string;
  hasPagination?: boolean;
  mode?: '' | 'tile';
}

export function SliderNavigation(
  {
    className,
    id,
    hasPagination = true,
    mode = ''
  }: Props) {
  return (
    <div
      className={clsx(className, 'slider-navigation', {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=''
    >
      <Button
        className='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
        mode='black-10'
        iconName='arrow-left'
        label='Previous slide'
        iconPosition='before'
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      {hasPagination && (
        <div
          className='slider-navigation__pagination'
          data-js-slider-pagination=''
        />
      )}
      <Button
        className='slider-navigation__arrow-button slider-navigation__arrow-button--next'
        mode='black-10'
        iconName='arrow-right'
        label='Next slide'
        iconPosition='before'
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>
  )
}