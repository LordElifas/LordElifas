export interface TabsProps {
    tabs: { id: string; title: string; dataLocator: string }[];
    currentTab: string;
    onChange: (tab: string) => void;
}
