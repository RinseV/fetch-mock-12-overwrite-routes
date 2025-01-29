export const fetchStatus = async (url: string) => {
  const response = await fetch(url);
  return response.status;
}