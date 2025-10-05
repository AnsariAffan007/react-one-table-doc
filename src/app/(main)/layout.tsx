import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className='p-2'>
          <SidebarTrigger className='cursor-pointer' />
        </div>
        <div className='p-2 pt-0'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default MainLayout