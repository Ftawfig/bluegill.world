'use client';

import { AppShell, Burger, Grid, rem, Button, Group, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Nav from '../components/Nav/Nav';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function Page() {
    const [opened, { toggle }] = useDisclosure();
    const { setColorScheme } = useMantineColorScheme();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Grid>
                    <Grid.Col span="auto">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <div>bluegill.world</div>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <ColorSchemeToggle />
                    </Grid.Col>
                </Grid>
            </AppShell.Header>

            <AppShell.Navbar><Nav /></AppShell.Navbar>

            <AppShell.Main>
                <h1>bluegill.world</h1>
                <h2>by Fadi Tawfig</h2>
            </AppShell.Main>
        </AppShell>
    )
}