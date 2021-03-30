import React from "react";
import Link from "next/link";

// @material-ui/core components
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { useRouter } from "next/router";
import { Button, Dropdown } from "../../utils";

import LoginButton from "../../Signin/LoginButton";
import SignOutButton from "../../Signin/SignOutButton";
import CartButton from "../../Cart/CartButton";
import * as ROUTES from "../../../constants/routes";
import { ALTERATIONS, REPAIRS, SHOP } from "../../../constants/categories";

import { ListWrapper, ListItemWrapper } from "./HeaderLinksStyle";
import useCustomer from "../../../frontend-structure/user/hooks/useCustomer";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

function HeaderLinks() {
  const router = useRouter();

  const [user] = useCustomer();

  const isActiveLink = (slug) => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper active={isActiveLink(REPAIRS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={REPAIRS.SLUG}>
          <a className="navLink">
            <Tooltip
              id="repair-tooltip"
              title="Ripara i tuoi abiti"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${REPAIRS.ICONCLASS}`} />
                {REPAIRS.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(ALTERATIONS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={ALTERATIONS.SLUG}>
          <a className="navLink">
            <Tooltip
              id="alterations-tooltip"
              title="Modifica e rinnova!"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${ALTERATIONS.ICONCLASS}`} />
                {ALTERATIONS.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(SHOP.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={SHOP.SLUG}>
          <a className="navLink">
            <Tooltip
              id="shop-tooltip"
              title="Visita il negozio"
              placement="bottom"
            >
              <span>
                <i className={`socialIcons ${SHOP.ICONCLASS}`} />
                {SHOP.TITLE}
              </span>
            </Tooltip>
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper>
        <Dropdown
          caret
          noLiPadding
          navDropdown
          buttonText="Informazioni"
          buttonProps={{
            className: "navLink",
            color: "transparent",
          }}
          buttonIcon={HelpOutlineIcon}
          dropdownList={[
            <Link href={ROUTES.HOWITWORKS}>
              <a className="dropdownLink">Come funziona</a>
            </Link>,
            <Link href={ROUTES.FAQ}>
              <a className="dropdownLink">FAQ</a>
            </Link>,
            <Link href={ROUTES.CONTACTS}>
              <a className="dropdownLink">Contatti</a>
            </Link>,
          ]}
        />
      </ListItemWrapper>
      <ListItemWrapper>
        <Tooltip
          id="instagram-tooltip"
          title="Seguici su Instagram :)"
          placement="bottom"
        >
          <span>
            <Button
              color="transparent"
              href="https://www.instagram.com/la.moscanera/"
              target="_blank"
              className="navLink"
            >
              <i className="socialIcons fab fa-instagram" />
            </Button>
          </span>
        </Tooltip>
      </ListItemWrapper>
      <ListItemWrapper>
        <Tooltip
          id="cart-tooltip"
          title="Vai al tuo carrello"
          placement="bottom"
        >
          <span>
            <CartButton color="transparent" className="navLink" />
          </span>
        </Tooltip>
      </ListItemWrapper>
      <ListItemWrapper>
        <HeaderAuth user={user} />
      </ListItemWrapper>
    </ListWrapper>
  );
}

const HeaderAuth = ({ user }: { user: NexusGenObjects["User"] }) => {
  if (user) {
    return (
      <Dropdown
        caret
        noLiPadding
        navDropdown
        buttonText={user.displayName}
        buttonProps={{
          className: "navLink",
          color: "transparent",
        }}
        buttonIcon={AccountCircle}
        dropdownList={[
          <Link href={ROUTES.ACCOUNT}>
            <a className="dropdownLink">Il mio account</a>
          </Link>,
          <SignOutButton className="dropdownLink" />,
        ]}
      />
    );
  }

  return (
    <Tooltip
      id="login-tooltip"
      title="Accedi al tuo account"
      placement="bottom"
    >
      <span>
        <LoginButton color="primary" className="navLink" />
      </span>
    </Tooltip>
  );
};

export default HeaderLinks;
