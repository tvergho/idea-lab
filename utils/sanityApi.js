import client from './client';

export const getHomeData = async () => {
  const data = await client.fetch('*[_type == "page" && title == $title][0]', { title: 'Home' });
  return data;
};
