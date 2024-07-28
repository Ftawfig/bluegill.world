// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import '../app.css';

export const metadata = {
    title: 'bluegill.world - Fishing logbook by Fadi Tawfig',
    description: 'Fishing logbook by Fadi Tawfig',
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={theme}>
                   {children}
                </MantineProvider>
            </body>
        </html>
    );
}