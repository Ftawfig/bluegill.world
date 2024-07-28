'use client';

import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
    IconHome2,
    IconFish,
    IconFishHook,
    IconUser,
    IconLogout,
    IconSwitchHorizontal
} from '@tabler/icons-react';
import { useState } from 'react';
import classes from './NavbarMinimalColored.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

const navLinks = [
    { icon: IconHome2, label: 'Home' },
    { icon: IconFishHook, label: 'Catches' },
    { icon: IconFish, label: 'Species' },
    { icon: IconUser, label: 'Account' },
    { icon: IconLogout, label: 'Logout' }
];

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

export default function Nav() {
    const [active, setActive] = useState(2);

    const links = navLinks.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    );
}