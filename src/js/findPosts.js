export async function findPosts(apikey) {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${apikey}`
  );
  const data = await response.json();

  return data._embedded?.events;
}
