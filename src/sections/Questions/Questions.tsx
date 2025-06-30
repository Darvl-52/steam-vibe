import './Questions.scss';
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup";
import { QuestionsItems } from "@/sections/Questions/config/config";
import Accordion from "@/components/Accordion";

export const Questions = () => {

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={ <Button href='/support' label="Ask a Question" /> }
    >
      <AccordionGroup
        columns={2}
        isOrderedList
      >
        {QuestionsItems.map((question, index) => (
          <Accordion
            id={`question-${index}`}
            name='questions'
            isOpen={index === 0}
            questionItem={question}
            key={index}
          />
        ))}
      </AccordionGroup>
    </Section>
  )
}