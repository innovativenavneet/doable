/**
 * Firebase Anonymous Auth placeholder.
 * Implement signInAnonymously and auth state listener here.
 */

export async function signInAnonymously(): Promise<string | null> {
  // const credential = await signInAnonymously(auth);
  // return credential.user.uid;
  return null;
}

export async function getCurrentUserId(): Promise<string | null> {
  return null;
}

export function onAuthStateChanged(_callback: (uid: string | null) => void): () => void {
  return () => {};
}
