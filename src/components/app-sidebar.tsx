import { ChevronDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { ScrollArea } from "./ui/scroll-area"
import Link from "next/link"

/*
  Getting Started
    intro
    quick start
  Prerequisites
    Tanstack table overview
    Column Def
  Core Concepts
    Table Component
    Styling System
    Functionality Injection
  Styling
    Table
    TableHead
    TableBody
    TableHeadRow
    TableBodyRow
    TableHeadCell
    TableBodyCell
  Functionalities
    Column Ordering
    Column Pinning
    Row Selection
    Row Reordering
    Inline Editing
    Sorting
    Pagination
*/

// Menu items.
const menu = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", url: "/introduction" },
      { title: "Quick Start", url: "/quick-start" },
    ]
  },
  {
    title: "Pre-requisites",
    items: [
      { title: "Tanstack Table", url: "/tanstack-table" },
      { title: "Column Def Type", url: "#" },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Table Component", url: "#" },
      { title: "Styling Methods", url: "#" },
      { title: "Functionality Injection", url: "#" },
    ]
  },
  {
    title: "Styling",
    items: [
      { title: "Table", url: "#" },
      { title: "TableHead", url: "#" },
      { title: "TableBody", url: "#" },
      { title: "TableHeadRow", url: "#" },
      { title: "TableBodyRow", url: "#" },
      { title: "TableHeadCell", url: "#" },
      { title: "TableBodyCell", url: "#" },
    ]
  },
  {
    title: "Functionalities",
    items: [
      { title: "Column Pinning", url: "#" },
      { title: "Column Ordering", url: "#" },
      { title: "Row Selection", url: "#" },
      { title: "Row Reordering", url: "#" },
      { title: "Inline Editing", url: "#" },
      { title: "Sorting", url: "#" },
      { title: "Pagination", url: "#" },
    ]
  }
]

export function AppSidebar() {
  return (
    <Sidebar>

      <SidebarHeader className="px-4">
        <Link href={"/"}>
          <h4 className="font-bold">
            <span>React</span>
            <span className="text-sky-500">One</span>
            <span>Table</span>
          </h4>
        </Link>
      </SidebarHeader>

      <ScrollArea className='h-[100%]'>
        <SidebarContent className="pb-40 gap-0">

          {menu.map((menuItem, index) => (
            <Collapsible key={index} defaultOpen>
              <SidebarGroup className="py-2">

                <SidebarGroupLabel asChild className="cursor-pointer">
                  <CollapsibleTrigger>
                    {menuItem.title}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>

                    <SidebarMenu>
                      {menuItem.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link href={item.url}>
                              {/* <item.icon /> */}
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>

                  </SidebarGroupContent>
                </CollapsibleContent>

              </SidebarGroup>
            </Collapsible>
          ))}

        </SidebarContent>
      </ScrollArea>

      {/* <SidebarFooter className="px-4">
        <h4 className="text-primary">
          Version 1.0.0
        </h4>
      </SidebarFooter> */}

    </Sidebar>
  )
}