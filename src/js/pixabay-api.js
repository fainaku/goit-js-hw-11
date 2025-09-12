export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const API_KEY = '52236687-26797aae28fcaf2822f6b1bf4';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
