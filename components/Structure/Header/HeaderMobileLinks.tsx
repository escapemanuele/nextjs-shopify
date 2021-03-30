import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ListWrapper, ListItemWrapper } from "./HeaderLinksStyle";
import * as ROUTES from "../../../constants/routes";
import { ALTERATIONS, REPAIRS, SHOP } from "../../../constants/categories";

function HeaderMobileLinks() {
  const router = useRouter();

  const isActiveLink = slug => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper active={isActiveLink(REPAIRS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={REPAIRS.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${REPAIRS.ICONCLASS}`} /> */}
            {REPAIRS.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(ALTERATIONS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={ALTERATIONS.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${ALTERATIONS.ICONCLASS}`} /> */}
            {ALTERATIONS.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(SHOP.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={SHOP.SLUG}>
          <a className="navLink">
            {/* <i className={`socialIcons ${SHOP.ICONCLASS}`} /> */}
            {SHOP.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
    </ListWrapper>
  );
}

export default HeaderMobileLinks;
