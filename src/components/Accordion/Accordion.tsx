import './Accordion.scss';
import React from "react";
import type { QuestionsItemsType } from "@/sections/Questions/config/config";

type Props = {
  id: string;
  name: string;
  isOpen: boolean;
  questionItem: QuestionsItemsType;
}

export const Accordion = (
  {
    id,
    name,
    isOpen,
    questionItem
  }: Props) => {
  return (
    <div className="accordion">
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
       <summary className="accordion__summary">
         <h3 className="accordion__title h5">
           <span role="term" aria-details={id}>
             {questionItem.title}
           </span>
         </h3>
       </summary>
      </details>
      <div
        className="accordion__content"
        id={id}
        role="definition"
      >
        <div className="accordion__content-inner">
          <div className="accordion__content__body">
            <p> { questionItem.description } </p>
          </div>
        </div>
      </div>
    </div>
  )
}