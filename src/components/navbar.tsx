import React, { useState } from "react";
import { IconButton, styled, SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import { Hamburger, NavBarInfo, NavBarProps, RightCaret } from "../definitions";

export const Navbar = (props: NavBarProps) => {
    const { showDefaultNav } = props;
    const [selectedLink, setSelectedLink] = useState("");
    const linkInfo: NavBarInfo[] = [
        { location: "/", name: "home", text: "Home" },
        { location: "/edu", name: "edu", text: "Education" },
        { location: "/emp", name: "emp", text: "Employment" },
        { location: "/prj", name: "prj", text: "Projects" },
        { location: "/ctt", name: "ctt", text: "Contact" },];
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawerState(open);
            };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const buildLinkTos = () => {
        return (
            linkInfo.map((item, idx) =>
                <Link to={item.location}
                    className={"navbar-link " + (selectedLink === item.name ? " active" : "")}
                    onClick={() => setSelectedLink(item.name)}
                    style={!showDefaultNav ? {
                        marginBottom: "1em"
                    } : {}}>
                    {item.text}
                </Link>)
        );
    };

    const defaultNav = () => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                {buildLinkTos()}
            </div>
        );
    };

    const mobileNav = () => {
        return (
            <>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h2>Bart Kosa</h2>
                    <IconButton onClick={toggleDrawer(true)}><Hamburger /></IconButton>
                </div>
                <SwipeableDrawer
                    anchor="right"
                    open={drawerState}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: "30%",
                            backgroundColor: "#313131",
                        }
                    }}>
                    <DrawerHeader>
                        <div style={{ marginTop: "1em" }} onClick={toggleDrawer(false)}><RightCaret /></div>
                    </DrawerHeader>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "1em"
                    }}>
                        {buildLinkTos()}
                    </div>
                </SwipeableDrawer>
            </>
        );
    };
    return (
        showDefaultNav ? defaultNav() : mobileNav()
    );
};