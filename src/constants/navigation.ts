export enum NavigationSlugs {
  LEARN = "learn",
  CHARACTERS = "characters",
  LEADER_BOARD = "leader-board",
  PROFILE = "profile",
  QUESTS = "quests",
  SHOP = "shop",
}

export type ItemNav = {
  slug: NavigationSlugs;
  label: string;
  icon: string;
};

export const navigationList: ItemNav[] = [
  {
    slug: NavigationSlugs.LEARN,
    label: "Learn",
    icon: "/icons/learn.svg",
  },
  {
    slug: NavigationSlugs.CHARACTERS,
    label: "Characters",
    icon: "/icons/characters.svg",
  },
  {
    slug: NavigationSlugs.LEADER_BOARD,
    label: "Leader Board",
    icon: "/icons/leader-board.svg",
  },
  {
    slug: NavigationSlugs.PROFILE,
    label: "Profile",
    icon: "/icons/profile.svg",
  },
  {
    slug: NavigationSlugs.QUESTS,
    label: "Quests",
    icon: "/icons/quests.svg",
  },
  {
    slug: NavigationSlugs.SHOP,
    label: "Shop",
    icon: "/icons/shop.svg",
  },
];
