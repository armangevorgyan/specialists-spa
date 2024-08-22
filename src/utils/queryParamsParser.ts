const objectToQueryString = (obj: Record<string, string | number | boolean>): string => {
  const params = new URLSearchParams(obj as Record<string, string>); // URLSearchParams requires all values to be strings
  return `?${params.toString()}`;
};

const queryStringToObject = (queryString: string): Record<string, string> => {
  const params = new URLSearchParams(queryString);
  const obj: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
};

export {
  objectToQueryString,
  queryStringToObject
};
