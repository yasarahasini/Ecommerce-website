

export const TOKEN_KEY = "token";


export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(TOKEN_KEY);
};


export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};


export const loginUser = (token: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
};


export const logoutUser = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
};
