"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="bg-white w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                <a
                  className="category-panel-left-anchor flex py-[11px] "
                  href="/trang-thiet-bi-y-te/dung-cu-y-te"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_y_te_level_2_9b136905b5.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ y tế"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Dụng cụ y tế
                  </p>
                </a>
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/dung-cu-theo-doi"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_theo_doi_level_2_fac9d43d8f.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ theo dõi"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-tc11gt ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-10 mb-0 hover:font-medium text-base">
                    Dụng cụ theo dõi
                  </p>
                </a>
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/dung-cu-so-cuu"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_so_cuu_level_2_8c6a7cfa0d.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ sơ cứu"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Dụng cụ sơ cứu
                  </p>
                </a>
              </ListItem>
              <ListItem href="/docs/primitives/colors" title="Colors">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/khau-trang"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/khau_trang_level_2_6f09dcca5c.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Khẩu trang"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Khẩu trang
                  </p>
                </a>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
