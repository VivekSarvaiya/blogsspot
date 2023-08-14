"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from 'next/navigation'

import Loader from "../app/loader"
import { Dropdown, Avatar, } from "antd";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi"
import UserOutlined from '@ant-design/icons/UserOutlined';
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname()

  const items = [
    {
      key: "1",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: "Sign Out",
      icon: <RiLogoutCircleRLine />,
    },
  ];

  const onClick = ({ key }) => {
    switch (key) {
      case "2":
        signOut();
        break;

      default:
        console.log("defualt");
        break;
    }

  };

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
      setLoading(false)
    };
    setProvider();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <header className={`s-header ${pathname !== "/" ? "s-header--opaque" : ""}`}>
        <div className="s-header__logo">
          <a className="logo" href="index.html">
            <img src="/assets/Images/logo.svg" alt="Homepage" />
          </a>
        </div>

        <div className="row s-header__navigation">
          <nav className="s-header__nav-wrap">
            <h3 className="s-header__nav-heading h6">Navigate to</h3>

            <ul className="s-header__nav">
              <li className={`${pathname === "/" && "current"}`}><Link href="/">Home</Link></li>
              <li className="has-children">
                <a href="#0" title="">Categories</a>
                <ul className="sub-menu">
                  <li><a href="category.html">Design</a></li>
                  <li><a href="category.html">Lifestyle</a></li>
                  <li><a href="category.html">Photography</a></li>
                </ul>
              </li>
              <li className={`${pathname === "/about" && "current"}`}><Link href="/about">About</Link></li>
              <li className={`${pathname === "/contact" && "current"}`}><Link href="contact">Contact</Link></li>
            </ul>

            <a href="#0" title="Close Menu" className="s-header__overlay-close  close-mobile-menu">
              Close
            </a>
          </nav>
        </div>

        {/* <a className="s-header__toggle-menu" href="#0" title="Menu">
          <span>Menu</span>
        </a> */}

        {session?.user ? (
          <>
            <div className="s-header_write" >
              <Link href="/newblog">
                <FiEdit /> write
              </Link>
            </div>
            <div className="user_profile">
              <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar size={"large"} src={session?.user?.image} />
                </a>
              </Dropdown>
            </div>
          </>
        ) : (
          providers &&
          Object.values(providers).map((provider, i) => (
            <a className="s-header__search-trigger" key={i}>
              <div className="s-header_login" key={provider.name} onClick={() => signIn(provider.id)}>
                Login
              </div>
            </a>
          ))
        )}
      </header>
    </>
  );
};

export default Header;
