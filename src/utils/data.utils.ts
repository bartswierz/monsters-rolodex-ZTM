//When we return an await, we are returning a PROMISE.
//getData is going to receive some type 't', this type 't' will be what we return in a function inside the promise
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
