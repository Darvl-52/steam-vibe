import './Plans.scss';
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import { planCard } from "./config/config";
import PlanCard from "@/components/PlanCard";
import TabsNavigation from "@/components/Tabs/components/TabsNavigation";
import Tabs from "@/components/Tabs";

export const Plans = () => {
  const tabsTitle = 'plans-tabs';
  const tabsNavigationId = 'plans-tabs-navigation'

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={(
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={planCard}
        />
      )}
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planCard.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          items: (
            <Grid columns={3}>
              {planGroup.items.map((planItem, index) => (
                <PlanCard
                  key={index}
                  title={planItem.title}
                  description={planItem.description}
                  price={planItem.price}
                />
              ))}
            </Grid>
          )
        }))}
      />
    </Section>
  )
}