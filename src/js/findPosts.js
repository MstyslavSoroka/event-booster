export async function findPosts(apikey, keyword = '', country = '') {
  let url = `https://app.ticketmaster.com/discovery/v2/events.json?page=1&size=20&apikey=${apikey}`;

  if (keyword) {
    url += `&keyword=${encodeURIComponent(keyword)}`;
  }

  if (country) {
    url += `&countryCode=${country}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data._embedded?.events || [];
}
