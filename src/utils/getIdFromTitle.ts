export const getIdFromTitle = (title: string) => {
  return title.toLowerCase().replace(' ', '-')
}