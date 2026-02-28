"use client"

import { Bot } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

export function AppLogo() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <div
      className={`relative flex items-center justify-between h-14 w-full transition-all duration-200 ease-in-out ${
        isCollapsed ? "justify-center px-0" : "px-3"
      }`}
    >
      {isCollapsed ? (
        // COLLAPSED
        <div className="relative h-10 w-10 flex flex-none items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg transition-transform hover:scale-105">
            <Bot className="h-6 w-6" />
          </div>
        </div>
      ) : (
        // EXPANDED
        <>
          <div className="flex items-center gap-3 min-w-0 transition-all duration-200 ease-in-out">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg flex-shrink-0">
              <Bot className="h-6 w-6" />
            </div>

            <div className="flex flex-col leading-tight min-w-0 transition-all duration-200 ease-in-out">
              <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent truncate">
                SupaMeet
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
