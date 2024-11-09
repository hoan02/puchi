export const protectedRoute: string[] = [
  "/characters",
  "/leader-board",
  "/learn",
  "/profile",
  "/quests",
  "/settings",
  "/shop",
];

export const localizedProtectedRoute = protectedRoute.map(
  (route) => `/:locale${route}(.*)`
);
