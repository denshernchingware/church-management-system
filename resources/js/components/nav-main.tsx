import { Link } from '@inertiajs/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';


export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

    const toggleGroup = (title: string) => {
        setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const isGroupOpen = (title: string) => openGroups[title] ?? false;

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        {item.items ? (
                            <>
                                <SidebarMenuButton
                                    asChild
                                    isActive={item.items.some((subItem) =>
                                        isCurrentUrl(subItem.href),
                                    )}
                                    tooltip={{ children: item.title }}
                                >
                                    <button
                                        onClick={() => toggleGroup(item.title)}
                                        className="flex w-full items-center gap-2"
                                    >
                                        {isGroupOpen(item.title) ? (
                                            <ChevronDown className="size-4" />
                                        ) : (
                                            <ChevronRight className="size-4" />
                                        )}
                                        <span>{item.title}</span>
                                    </button>
                                </SidebarMenuButton>
                                {isGroupOpen(item.title) && (
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem
                                                key={subItem.title}
                                            >
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={isCurrentUrl(
                                                        subItem.href,
                                                    )}
                                                >
                                                    <Link
                                                        href={subItem.href}
                                                        prefetch
                                                    >
                                                        {subItem.icon && (
                                                            <subItem.icon className="size-4" />
                                                        )}
                                                        <span>
                                                            {subItem.title}
                                                        </span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                )}
                            </>
                        ) : (
                            <SidebarMenuButton
                                asChild
                                isActive={isCurrentUrl(item.href)}
                                tooltip={{ children: item.title }}
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
