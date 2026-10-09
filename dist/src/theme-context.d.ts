export type Theme = 'light' | 'dark' | 'system' | (string & {});
export type ResolvedTheme = 'light' | 'dark' | (string & {});
export type ThemeProviderProps = {
    children: React.ReactNode;
    /** HTML attribute to apply theme (default: 'class') */
    attribute?: 'class' | 'data-theme' | `data-${string}`;
    /** Default theme if none is stored (default: 'system') */
    defaultTheme?: Theme;
    /** Enable color-scheme CSS property (default: true) */
    enableColorScheme?: boolean;
    /** Enable system theme detection (default: true) */
    enableSystem?: boolean;
    /** Storage key for theme persistence (default: 'theme') */
    storageKey?: string;
    /** List of available themes (default: ['light', 'dark', 'system']) */
    themes?: string[];
    /** Disable transitions during theme change */
    disableTransitionOnChange?: boolean;
    /** Force a specific theme (overrides user preference) */
    forcedTheme?: string;
    /** Nonce for CSP */
    nonce?: string;
};
export type UseThemeReturn = {
    /** Current theme setting */
    theme: string | undefined;
    /** Set the theme */
    setTheme: (theme: string) => void;
    /** Resolved theme (actual applied theme: 'light' or 'dark') */
    resolvedTheme: ResolvedTheme | undefined;
    /** System theme preference */
    systemTheme: ResolvedTheme | undefined;
    /** List of available themes */
    themes: string[];
    /** Forced theme if set */
    forcedTheme: string | undefined;
};
export declare function ThemeProvider({ children, attribute, defaultTheme, enableColorScheme, enableSystem, storageKey, themes, disableTransitionOnChange, forcedTheme, }: ThemeProviderProps): import("react").JSX.Element;
/**
 * Hook to access theme state and controls.
 * Returns default values during SSR to prevent hydration errors.
 */
export declare function useTheme(): UseThemeReturn;
//# sourceMappingURL=theme-context.d.ts.map