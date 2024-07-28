'use client';

import { AppShell, Burger, Grid, Title, Image } from '@mantine/core';
import { IconFish } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Nav from '../components/Nav/Nav';
import Link from 'next/link';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function Page() {
    const [opened, { toggle }] = useDisclosure();

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
                            opened={ opened }
                            onClick={ toggle }
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <div>
                            <Link href='/'>
                                <Image
                                    h={50}
                                    w="auto"
                                    src="/images/logo.png"
                                />
                            </Link>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <ColorSchemeToggle />
                    </Grid.Col>
                </Grid>
            </AppShell.Header>

            <AppShell.Navbar><Nav /></AppShell.Navbar>

            <AppShell.Main>
                <Title order={1}>bluegill.world</Title>
                <Title order={3}>Fishing logbook app by Fadi Tawfig</Title>
            </AppShell.Main>
        </AppShell>
    )
}