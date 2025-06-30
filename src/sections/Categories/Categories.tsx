import './Categories.scss';
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import { categoryItems } from "./catigoryItems";
import React from "react";

export const Categories = () => {
  const sliderNavId = 'categories-slider-navigation';

  return (
    <Section
      title='Explore our wide variety of categories'
      titleId='categories-title'
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <SliderNavigation
          mode='tile'
          id={sliderNavId}
        />
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        isBeyondTheViewportOnMobileS
        navigationTargetElementId={sliderNavId}
      >
        {categoryItems.map((item, index) => (
          <CategoryCard
            {...item}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}