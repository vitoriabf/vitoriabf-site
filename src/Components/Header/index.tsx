import React, { useState } from "react";
import "./index.scss";
import icon from "../../assets/Icon.svg"
import { slide as Burger, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';

export function Header() {
    interface Burger {
        isOpen: boolean
        onClose: boolean
    }

    interface Item {
        itemKey: string;
        text:string;
    }

    interface SubMenu {
        children: React.ReactNode;
        title: string;
    }

    const [handleMenu, setHandleMenu] = useState(false);
    return (
        <>
            <header>
                <h2>vivs.</h2>
                <a onClick={() => setHandleMenu(!handleMenu)}><img src={icon} alt="Menu"/></a>
                <Burger className="burger-menu" isOpen={handleMenu} selectedKey={'entry'} onClose={() => setHandleMenu(false)}>
                    <Item itemKey={'portfolio'} text={'portfolio'}/>
                    <Item itemKey={'cv'} text={'CV'}/>
                    <Item itemKey={'about'} text={'about me'}/>
                </Burger>
            </header>
        </>

    )
}