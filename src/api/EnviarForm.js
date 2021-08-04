export const EnviarForm = async (payload) => {
  const url = "https://formularioprueba123.herokuapp.com/clientes";
  const req = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const res = await req.json();

  return res;
};
