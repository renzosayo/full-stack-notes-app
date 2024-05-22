const HOSTNAME = "localhost";
const PORT = 3000;

export function handleSaveNewNote({
  title,
  body,
}: {
  title: string;
  body: string;
}): void {
  const URI = `http://${HOSTNAME}:${PORT}/notes/`;
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
  const URI = `http://${HOSTNAME}:${PORT}/notes/`;
  Promise.resolve(callApi(URI, "PUT", JSON.stringify({ title, body, _id })));
}

export function handleClickDeleteNote({ _id }: { _id: string }) {
  const URI = `http://${HOSTNAME}:${PORT}/notes/`;
  Promise.resolve(callApi(URI, "POST", JSON.stringify({ _id })));
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
