'use client';

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {

    const { setColorScheme } = useMantineColorScheme();
    
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            variant="outline"
            size="xl"
            onClick={() => setColorScheme(computedColorScheme == 'light' ? 'dark' : 'light')}
        >
            { computedColorScheme == 'light' && <IconSun/>} 
            { computedColorScheme == 'dark' && <IconMoon/>} 
        </ActionIcon>
    );
}