import { AppSidebar } from '@/components/app-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className='p-2 flex items-center gap-x-2'>
          <Button asChild size="icon" variant="outline">
            <SidebarTrigger className='cursor-pointer' />
          </Button>
          <Input type='search' placeholder='Search' />
        </div>
        <div className='p-2 pt-0'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default MainLayout