"use client"

import React, { useEffect, useRef, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
// import 'antd/dist/antd.css';
// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null)
    const userMenu = (
        <Menu>
            <Menu.Item key="1">Item 1</Menu.Item>
            <Menu.Item key="2">Item 2</Menu.Item>
            <Menu.Item key="3">Item 3</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    );
    useEffect(() => {
        const setProvider = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProvider()
    }, [])

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
                            <li className="current"><a href="index.html" title="">Home</a></li>
                            <li className="has-children">
                                <a href="#0" title="">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="category.html">Design</a></li>
                                    <li><a href="category.html">Lifestyle</a></li>
                                    <li><a href="category.html">Photography</a></li>
                                    <li><a href="category.html">Vacation</a></li>
                                    <li><a href="category.html">Work</a></li>
                                    <li><a href="category.html">Health</a></li>
                                    <li><a href="category.html">Family</a></li>
                                    <li><a href="category.html">Relationship</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#0" title="">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="single-video.html">Video Post</a></li>
                                    <li><a href="single-audio.html">Audio Post</a></li>
                                    <li><a href="single-standard.html">Standard Post</a></li>
                                </ul>
                            </li>
                            <li><a href="styles.html" title="">Styles</a></li>
                            <li><a href="about.html" title="">About</a></li>
                            <li><a href="contact.html" title="">Contact</a></li>
                        </ul>

                        <a href="#0" title="Close Menu" className="s-header__overlay-close  close-mobile-menu" >Close</a>

                    </nav>

                </div>

                <a className="s-header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

                {
                    session?.user ?
                        <div>
                            <Dropdown.Button
                                style={{ float: 'right' }}
                                className="dropdown-btn"
                                overlay={userMenu}

                            >
                                <img src={session?.user?.image} />
                            </Dropdown.Button>
                        </div>
                        :
                        providers &&
                        Object.values(providers).map((provider, i) => (

                            <a className="s-header__search-trigger" key={i}>
                                <button key={provider.name} onClick={() => signIn(provider.id)} >Login</button>
                            </a>
                        ))
                }

            </header>

        </>
    )
}

export default Header