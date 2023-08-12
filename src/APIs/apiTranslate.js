export const translation = async (description) => {
  const res = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: description,
      source: 'en',
      target: 'es',
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(await res.json());
};
