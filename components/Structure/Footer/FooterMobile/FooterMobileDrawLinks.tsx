import React from "react";
import Link from "next/link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useRouter } from "next/router";
import { ListWrapper, ListItemWrapper } from "./FooterMobileDrawLinksStyle";
import { Button, Dropdown } from "../../../utils";
import SignOutButton from "../../../Signin/SignOutButton";
import LoginButton from "../../../Signin/LoginButton";
import { ALTERATIONS, REPAIRS, SHOP } from "../../../../constants/categories";
import * as ROUTES from "../../../../constants/routes";
import useCustomer from "../../../../frontend-structure/user/hooks/useCustomer";
import { NexusGenObjects } from "../../../../generated/nexus-typegen";

const FooterMobileDrawLinks = () => {
  const router = useRouter();
  const [user, hasUser] = useCustomer();

  const isActiveLink = (slug) => router.asPath.indexOf(slug) !== -1;

  return (
    <ListWrapper>
      <ListItemWrapper>
        <Button
          color="transparent"
          href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
          target="_blank"
          className="navLink"
        >
          <i className="socialIcons fab fa-instagram" />
        </Button>
      </ListItemWrapper>
      <ListItemWrapper active={router.pathname === ROUTES.CART}>
        <Link href={ROUTES.CART}>
          <a className="navLink">
            <ShoppingCartIcon />
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(REPAIRS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={REPAIRS.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${REPAIRS.ICONCLASS}`} />
            {REPAIRS.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(ALTERATIONS.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={ALTERATIONS.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${ALTERATIONS.ICONCLASS}`} />
            {ALTERATIONS.TITLE}
          </a>
        </Link>
      </ListItemWrapper>
      <ListItemWrapper active={isActiveLink(SHOP.SLUG)}>
        <Link href={ROUTES.SHOPCATEGORY} as={SHOP.SLUG}>
          <a className="navLink">
            <i className={`socialIcons ${SHOP.ICONCLASS}`} />
            {SHOP.TITLE}
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
        <FooterAuth user={user} />
      </ListItemWrapper>
    </ListWrapper>
  );
};

const FooterAuth = ({ user }: { user: NexusGenObjects["User"] }) => {
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
          <Link href="/account">
            <a className="dropdownLink">Il mio account</a>
          </Link>,
          <SignOutButton className="dropdownLink" />,
        ]}
      />
    );
  } else {
    return <LoginButton color="primary" className="navLink" />;
  }
};

export default FooterMobileDrawLinks;
