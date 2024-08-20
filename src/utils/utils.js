export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const formatDateYYYY = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();

  return `${year}/${month}/${day}`;
};

export const buildQueryString = (params) => {
  const filteredParams = Object.entries(params)
    .filter(([key, value]) => value)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  const queryString = new URLSearchParams(filteredParams).toString();
  return queryString ? `?${queryString}` : "";
};
