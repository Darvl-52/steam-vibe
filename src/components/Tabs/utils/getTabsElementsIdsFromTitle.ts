import { getIdFromTitle } from "@/utils/getIdFromTitle";

export const getTabsElementsIdsFromTitle = (title: string) => {
  const titleFormated = getIdFromTitle(title);

  return {
    buttonId: `${titleFormated}-tab`,
    contentId: `${titleFormated}-tabpanel`
  }
}