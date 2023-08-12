"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { Dropdown, Avatar, message, Button } from "antd";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const items = [
    {
      key: "1",
      label: "Profile",
      icon: <RiLogoutCircleRLine />,
    },
  ];

  const onClick = ({ key }) => {

    message.info(`You have been logges out`);
  };

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <>
      <header className="s-header">
        <div className="s-header__logo">
          <a className="logo" href="index.html">
            <img src="/assets/Images/logo.svg" alt="Homepage" />
          </a>
        </div>

        <div className="row s-header__navigation">
          <nav className="s-header__nav-wrap">
            <h3 className="s-header__nav-heading h6">Navigate to</h3>

            <ul className="s-header__nav">
              <li className="current">
                <a href="index.html" title="">
                  Home
                </a>
              </li>
              <li className="has-children">
                <a href="#0" title="">
                  Categories
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="category.html">Design</a>
                  </li>
                  <li>
                    <a href="category.html">Lifestyle</a>
                  </li>
                  <li>
                    <a href="category.html">Photography</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html" title="">
                  About
                </a>
              </li>
              <li>
                <a href="contact.html" title="">
                  Contact
                </a>
              </li>
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

            <div className="user_profile">
              <Dropdown menu={{ items, onClick, }} placement="bottom" arrow>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar size={"large"} src={session?.user?.image} />
                </a>
              </Dropdown>
            </div>
            <div className="logout_button" onClick={signOut}>
              <RiLogoutCircleRLine />
            </div>
          </>
        ) : (
          providers &&
          Object.values(providers).map((provider, i) => (
            <a className="s-header__search-trigger" key={i}>
              <button key={provider.name} onClick={() => signIn(provider.id)}>
                Login
              </button>
            </a>
          ))
        )}
      </header>
    </>
  );
};

export default Header;
