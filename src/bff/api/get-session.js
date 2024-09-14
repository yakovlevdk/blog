import { transformSession } from "../transformers/transform-session";
export const getSession = async (hash) =>
  fetch(`http://localhost:3005/sessions/?hash=${hash}`)
    .then((loadedSession) => loadedSession.json())
    .then(
      ([loadedSession]) => loadedSession && transformSession(loadedSession)
    );
