const tokens = new Map<string, number>();

export function generateCsrfToken(): string {
  const token = Math.random().toString(36).substring(2, 34);
  tokens.set(token, Date.now());
  return token;
}

export function validateCsrfToken(
  clientToken: string,
  cookieToken: string
): boolean {
  if (clientToken !== cookieToken) return false;
  const createdAt = tokens.get(clientToken);
  if (!createdAt) return false;
  const age = Date.now() - createdAt;
  if (age > 1000 * 60 * 60 * 24) return false; // 24h expiry
  tokens.delete(clientToken);
  return true;
}
