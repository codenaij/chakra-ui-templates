import type { Route } from "@/types/routes.type";

export const MenuItems: Route[] = [
  {
    name: "Getting Started",
    href: "getting-started",
    children: [
      {
        name: "Overview",
        href: "overview",
      },
    ],
  },
  {
    name: "Ecommerce",
    href: "ecommerce",
    children: [
      {
        name: "Product Lists",
        href: "product-lists",
      },
      {
        name: "Product Overviews",
        href: "product-overviews",
      },
      {
        name: "Product Features",
        href: "product-features",
      },
      {
        name: "Shopping Cart",
        href: "shopping-cart",
      },
    ],
  },
];
