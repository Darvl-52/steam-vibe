import './Tabs.scss';
import clsx from "clsx";
import {
  getTabsElementsIdsFromTitle
} from "./utils/getTabsElementsIdsFromTitle";
import TabsNavigation from "./components/TabsNavigation";
import { TabsItem } from "@/types/types";

type Props = {
  className?: string;
  title: string;
  items: TabsItem[];
  navigationTargetElementId?: string;
}

export const Tabs = (
  {
    className,
    title,
    items,
    navigationTargetElementId = null
  }: Props) => {
  return (
    <div
      className={clsx(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId
      })}
    >
      {!navigationTargetElementId && (
        <div>
          <TabsNavigation
            id='tabs-navigation'
            title={title}
            items={items}
          />
        </div>
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {title, isActive} = item;

          const {buttonId, contentId} = getTabsElementsIdsFromTitle(title);

          return (
            <div
              className={clsx('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {item.items}
            </div>
          )
        })}
      </div>
    </div>
  )
}