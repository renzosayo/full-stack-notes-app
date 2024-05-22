export function handleSaveNewNote({
  title,
  body,
}: {
  title: string;
  body: string;
}): void {
  const URI = "http://localhost:3000/notes/create";
  Promise.resolve(callApi(URI, "POST", JSON.stringify({ title, body })));
}

export function handleClickUpdateNote({
  _id,
  title,
  body,
}: {
  _id: string;
  title: string;
  body: string;
}) {
  const URI = `http://localhost:3000/notes/update/${_id}`;
  alert(URI);
  Promise.resolve(callApi(URI, "POST", JSON.stringify({ title, body })));
}

export async function callApi(URI: string, method?: string, body?: string) {
  return await fetch(URI, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  });
}
