export const baseUrl = 'https://corebiz-test.herokuapp.com/api/v1/newsletter';

export const subscribe = async (name, email) => {
  const request = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });

  return await request.json();
};
