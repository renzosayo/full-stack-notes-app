export function handleSaveNewNote({
  title,
  body,
}: {
  title: String;
  body: String;
}): void {
  const URI = "http://localhost:3000/notes/create";

  (async function () {
    await fetch(URI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
  })();
  // Bug: fetch post not pushing note to database
}
