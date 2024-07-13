enum NavigationKeys {
  LESSON = "review",
}

type ItemNav = {
  key: NavigationKeys;
  href: string;
  // icon: string;
};

export const navigationList: ItemNav[] = [
  {
    key: NavigationKeys.LESSON,
    href: "/lesson",
  },
];
