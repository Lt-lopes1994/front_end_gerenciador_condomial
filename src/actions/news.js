export const getNews = (id, title, description, image, alt) => {
  return {
    type: 'GET_NEWS',
    id,
    title,
    description,
    image,
    alt,
  }
};