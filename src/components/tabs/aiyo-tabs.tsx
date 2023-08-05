import React, { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";
import './aiyo-tabs.css'

/*
TabItem
*/
interface TabItemProps {
    tab: string | ReactNode;
    index?: string;
    disabled?: boolean;
}

export const TabItem = (props: PropsWithChildren<TabItemProps>) => {
    const context = useContext(TabsContext);

    return (
        <div className={`tab-item ${props.index === context.index ? 'is-active' : ''}`}>
            {props.children}
        </div>
    );
}

TabItem.displayName = 'TabItem';

/*
TabNav
*/
interface TabNavProps {
    index?: string;
    disabled?: boolean;
}

const TabNav = (props: PropsWithChildren<TabNavProps>) => {
    const context = useContext(TabsContext);

    const doClick = () => {
        if (context.onSelect && !props.disabled && (typeof props.index === 'string')) {
            context.onSelect(props.index);
        }
    }

    return (
        <div
            className={`tab-nav ${props.index === context.index ? 'is-active' : ''} ${props.disabled ? 'is-disabled' : ''}`}
            onClick={doClick}
        >
            {props.children}
        </div>
    );
}

TabNav.defaultProps = {
    disabled: false
}

/*
Tabs
*/
interface TabsProps {
    defaultIndex?: string;
    onSelect?: (selectedIndex: string) => void;
    type?: 'line' | 'card';
}

interface ITabsContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
}

const TabsContext = createContext<ITabsContext>({ index: '0' });

export const AiyoTabs = (props: PropsWithChildren<TabsProps>) => {
    const [currentActive, setActive] = useState(props.defaultIndex);

    const doClick = (index: string) => {
        setActive(index);
        if (props.onSelect) {
            props.onSelect(index);
        }
    }

    const passedContext: ITabsContext = {
        index: currentActive ? currentActive : '0',
        onSelect: doClick
    }

    const renderChildren = () => {
        const tabsNavItems: ReactNode[] = [];
        const tabsContentItems = React.Children.map(props.children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabItemProps>;

            if (childElement.type.displayName === 'TabItem') {
                const indexStr = index.toString();

                tabsNavItems.push(
                    <TabNav key={indexStr} index={indexStr} {...childElement.props}>
                        {childElement.props.tab}
                    </TabNav>
                );

                return React.cloneElement(childElement, { index: indexStr });
            }
        });

        return (
            <>
                <div className="tabs-bar">
                    <div className="tab-nav-container">{tabsNavItems}</div>
                </div>
                <div className="tabs-content">
                    {tabsContentItems}
                </div>
            </>
        );
    }

    return (
        <div className={`aiyo-tabs tabs-${props.type}`} data-testid="test-tabs">
            <TabsContext.Provider value={passedContext}>
                {renderChildren()}
            </TabsContext.Provider>
        </div>
    );
}

AiyoTabs.defaultProps = {
    defaultIndex: '0',
    type: 'line'
}



/* interface TabNavPorps {
    title: string;
    key: string;
}
interface TabItemPorps {
    key: string;
}
interface TabPanelProps {
    tab: string;
    key: string;
}
interface TabsPorps {
    defaultActiveKey?: string;
}

const TabNav = (tabNavPorps: TabNavPorps) => {
    return (
        <button>{tabNavPorps.title}</button>
    );
}

const TabItem = (tabItemPorps: PropsWithChildren<TabItemPorps>) => {
    return (
        <div>{tabItemPorps.children}</div>
    );
}
export const TabPanel = (tabPanelProps: PropsWithChildren<TabPanelProps>) => {
    return (
        <>
            <TabNav title={tabPanelProps.tab} key={tabPanelProps.key} />
            <TabItem key={tabPanelProps.key}>
                {tabPanelProps.children}
            </TabItem>
        </>
    );
}

export const AiyoTabs = (tabsProps: PropsWithChildren<TabsPorps>) => {
     const panel =
        React.Children.map(tabsProps.children, (child, i) => {
            if (parseInt(tabsProps.defaultActiveKey ? tabsProps.defaultActiveKey : '1') === i + 1)
                return child;
        });
    return (
        <div>{panel}</div>
    ); 
    return (
        <div>{tabsProps.children}</div>
    )
} */