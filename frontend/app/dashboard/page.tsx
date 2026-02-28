"use client"

import React, { useState } from "react"
import { PlusCircle, Search, CalendarDays, CheckCircle2, LayoutDashboard, History, ArrowRight, Users, MessageSquare, Clock, ChevronDown, ChevronUp, Command } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { MeetingCard } from "@/components/meeting-card"
import { MeetingTable } from "@/components/meeting-table"
import { Meeting, Task } from "@/components/shared/types"
import { getTodayMeetings, getUpcomingMeetings, getCompletedMeetings } from "@/lib/utils/meeting"

// Mock data for now
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Project Alpha Kickoff - Long Meeting Title That Should Wrap Properly",
    date: today.toISOString(),
    duration: "1h 15m",
    status: "upcoming",
    participants: ["John Doe", "Alice Smith", "Bob Johnson"],
    summary: "Initial project kickoff meeting to discuss timeline, deliverables, and team responsibilities for the Alpha project."
  },
  {
    id: "2", 
    title: "Design Review Session",
    date: "2024-03-08T14:00:00",
    duration: "45m",
    status: "completed",
    participants: ["Alice Smith", "Charlie Davis"],
    summary: "Review of new design mockups and feedback session for the user interface redesign."
  },
  {
    id: "3",
    title: "Sprint Planning Meeting",
    date: today.toISOString(),
    duration: "2h",
    status: "upcoming",
    participants: ["John Doe", "Alice Smith", "Bob Johnson", "Charlie Davis", "Emma Wilson"],
    summary: "Quarterly sprint planning to discuss upcoming features, technical debt, and resource allocation for the next development cycle."
  },
  {
    id: "4",
    title: "Client Presentation - Q1 Results",
    date: "2024-03-05T16:00:00",
    duration: "1h 30m",
    status: "completed",
    participants: ["John Doe", "Alice Smith"],
    summary: "Quarterly business review presenting Q1 achievements, challenges, and roadmap for the upcoming quarter."
  },
  {
    id: "5",
    title: "Technical Architecture Discussion",
    date: tomorrow.toISOString(),
    duration: "1h",
    status: "upcoming",
    participants: ["Bob Johnson", "Charlie Davis", "Frank Miller"],
    summary: "Deep dive into microservices architecture, API design patterns, and database optimization strategies."
  },
  {
    id: "6",
    title: "Marketing Strategy Sync",
    date: "2024-03-09T13:00:00",
    duration: "45m",
    status: "completed",
    participants: ["Emma Wilson", "Grace Lee"],
    summary: "Alignment on marketing campaign strategy, social media approach, and content calendar for Q2."
  },
  {
    id: "7",
    title: "Daily Standup",
    date: today.toISOString(),
    duration: "30m",
    status: "upcoming",
    participants: ["John Doe", "Alice Smith", "Bob Johnson"],
    summary: "Quick daily sync to discuss progress and blockers for current sprint."
  },
  {
    id: "8",
    title: "Code Review Session",
    date: tomorrow.toISOString(),
    duration: "1h",
    status: "upcoming",
    participants: ["Charlie Davis", "Frank Miller", "Grace Lee"],
    summary: "Review recent pull requests, discuss code quality improvements, and plan refactoring efforts."
  }
]

const mockTasks: Task[] = [
  { id: "t1", meetingId: "1", text: "Prepare project timeline", completed: false },
  { id: "t2", meetingId: "1", text: "Review requirements document", completed: true },
  { id: "t3", meetingId: "1", text: "Finalize design mockups", completed: true },
  { id: "t4", meetingId: "3", text: "Create sprint backlog", completed: false },
  { id: "t5", meetingId: "3", text: "Assign story points", completed: false },
  { id: "t6", meetingId: "3", text: "Schedule sprint ceremonies", completed: true },
  { id: "t7", meetingId: "4", text: "Prepare presentation slides", completed: true },
  { id: "t8", meetingId: "4", text: "Practice demo flow", completed: false },
  { id: "t9", meetingId: "5", text: "Design marketing materials", completed: true },
  { id: "t10", meetingId: "6", text: "Document architecture decisions", completed: false },
  { id: "t11", meetingId: "6", text: "Review API contracts", completed: false }
]


// --- MAIN DASHBOARD PAGE ---
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [commandSearch, setCommandSearch] = useState("");

  // Use mock data for now
  const meetings = mockMeetings;
  const tasks = mockTasks;
  const meetingsLoading = false;
  const tasksLoading = false;

  // Handle keyboard shortcut for command palette
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
        setCommandSearch("");
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter command palette results
  const filteredCommandResults = {
    meetings: meetings.filter(meeting => 
      meeting.title.toLowerCase().includes(commandSearch.toLowerCase()) ||
      meeting.participants.some(p => p.toLowerCase().includes(commandSearch.toLowerCase()))
    ).slice(0, 3),
    tasks: tasks.filter(task => 
      task.text.toLowerCase().includes(commandSearch.toLowerCase())
    ).slice(0, 3),
    actions: [
      { title: "Create New Meeting", description: "Schedule a new meeting", icon: PlusCircle },
      { title: "View All Participants", description: "Browse all team members", icon: Users }
    ].filter(action => 
      action.title.toLowerCase().includes(commandSearch.toLowerCase()) ||
      action.description.toLowerCase().includes(commandSearch.toLowerCase())
    )
  };

  // Filter meetings based on active tab
  const filteredMeetings = meetings ? (() => {
    switch (activeTab) {
      case "today":
        return getTodayMeetings(meetings);
      case "upcoming":
        return getUpcomingMeetings(meetings);
      case "completed":
        return getCompletedMeetings(meetings);
      default:
        return meetings;
    }
  })() : [];

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-8 p-8 max-w-6xl mx-auto w-full bg-white">
            {/* Header Section */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div>
                <h1 className="text-2xl font-light text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your meetings and tasks</p>
              </div>
              <Button 
                variant="outline" 
                className="relative w-80 justify-start text-sm text-gray-500 border-gray-200 hover:bg-gray-50"
                onClick={() => setCommandPaletteOpen(true)}
              >
                <Search className="w-4 h-4 mr-3" />
                Search meetings, tasks... 
                <kbd className="absolute right-3 px-2 py-1 text-xs bg-gray-100 border border-gray-200 rounded">
                  ⌘K
                </kbd>
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-8">
                {/* Meeting Tabs */}
                <div>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-50 border border-gray-200">
                      <TabsTrigger value="today" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none text-sm font-medium">
                        Today
                      </TabsTrigger>
                      <TabsTrigger value="upcoming" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none text-sm font-medium">
                        Upcoming
                      </TabsTrigger>
                      <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none text-sm font-medium">
                        Completed
                      </TabsTrigger>
                    </TabsList>

                    <div className="mt-6">
                      <TabsContent value="today" className="mt-0">
                        <MeetingTable
                          meetings={filteredMeetings}
                          tasksForMeeting={tasks || []}
                          onQuickSummaryAccess={(id) => console.log('Summary', id)}
                          isLoading={meetingsLoading}
                        />
                      </TabsContent>

                      <TabsContent value="upcoming" className="mt-0">
                        <MeetingTable
                          meetings={filteredMeetings}
                          tasksForMeeting={tasks || []}
                          onQuickSummaryAccess={(id) => console.log('Summary', id)}
                          isLoading={meetingsLoading}
                        />
                      </TabsContent>

                      <TabsContent value="completed" className="mt-0">
                        <MeetingTable
                          meetings={filteredMeetings}
                          tasksForMeeting={tasks || []}
                          onQuickSummaryAccess={(id) => console.log('Summary', id)}
                          isLoading={meetingsLoading}
                        />
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tasks Section */}
                <div className="border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-sm font-medium text-gray-900">Recent Tasks</h2>
                    <p className="text-xs text-gray-500 mt-1">Across all meetings</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {tasksLoading ? (
                      <div className="space-y-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-3 bg-gray-100 animate-pulse rounded" />
                        ))}
                      </div>
                    ) : tasks && tasks.length > 0 ? (
                      tasks.slice(0, 5).map((task) => (
                        <div key={task.id} className="flex items-start gap-3">
                          <Checkbox
                            id={`task-${task.id}`}
                            checked={task.completed}
                            className="mt-0.5 border-gray-300"
                          />
                          <label
                            htmlFor={`task-${task.id}`}
                            className={`text-sm leading-relaxed cursor-pointer ${task.completed ? "line-through text-gray-400" : "text-gray-700"}`}
                          >
                            {task.text}
                          </label>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm text-center py-4">No active tasks</p>
                    )}
                    <Button variant="ghost" className="w-full text-xs text-gray-500 hover:text-gray-700 justify-start p-0 h-auto">
                      View all tasks <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="border border-gray-200 bg-gray-50">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-sm font-medium text-gray-900">AI Insights</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      You have <span className="font-semibold">3 meetings</span> today. 
                      Your first one starts in <span className="font-semibold">45 minutes</span>.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Productivity score</span>
                        <span className="font-medium text-gray-700">87%</span>
                      </div>
                      <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-sm font-medium text-gray-900">Overview</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total meetings</span>
                      <span className="text-sm font-medium text-gray-900">{meetings?.length || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Pending tasks</span>
                      <span className="text-sm font-medium text-gray-900">{tasks?.filter(t => !t.completed).length || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Completed today</span>
                      <span className="text-sm font-medium text-gray-900">{tasks?.filter(t => t.completed).length || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>

    {/* Command Palette Dialog */}
    <Dialog open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen}>
      <DialogContent className="p-0 max-w-lg w-[90vw] h-[70vh] max-h-[80vh] overflow-hidden">
        <DialogHeader className="px-4 pb-0 pt-4">
          <DialogTitle className="text-left">Command Palette</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search meetings, tasks, or commands..."
              className="pl-9"
              value={commandSearch}
              onChange={(e) => setCommandSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        
        {/* Command Categories - Fixed Height */}
        <div className="flex-1 overflow-y-auto min-h-[400px] max-h-[calc(70vh-120px)]">
          {filteredCommandResults.meetings.length > 0 && (
            <div className="border-t animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Meetings</h3>
              </div>
              <div className="px-2 space-y-1">
                {filteredCommandResults.meetings.map((meeting, index) => (
                  <div
                    key={meeting.id}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded cursor-pointer transition-all duration-150 hover:scale-[1.02] animate-in slide-in-from-left-2 duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CalendarDays className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{meeting.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {meeting.duration} • {meeting.participants.length} attendees
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filteredCommandResults.tasks.length > 0 && (
            <div className="border-t animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tasks</h3>
              </div>
              <div className="px-2 space-y-1">
                {filteredCommandResults.tasks.map((task, index) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded cursor-pointer transition-all duration-150 hover:scale-[1.02] animate-in slide-in-from-left-2 duration-200"
                    style={{ animationDelay: `${(filteredCommandResults.meetings.length + index) * 50}ms` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{task.text}</div>
                      <div className="text-xs text-muted-foreground">
                        {task.completed ? "Completed" : "Pending"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filteredCommandResults.actions.length > 0 && (
            <div className="border-t animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</h3>
              </div>
              <div className="px-2 space-y-1">
                {filteredCommandResults.actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded cursor-pointer transition-all duration-150 hover:scale-[1.02] animate-in slide-in-from-left-2 duration-200"
                    style={{ animationDelay: `${(filteredCommandResults.meetings.length + filteredCommandResults.tasks.length + index) * 50}ms` }}
                  >
                    <action.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {commandSearch && filteredCommandResults.meetings.length === 0 && filteredCommandResults.tasks.length === 0 && filteredCommandResults.actions.length === 0 && (
            <div className="px-4 py-8 text-center text-muted-foreground animate-in fade-in duration-300 flex items-center justify-center min-h-[200px]">
              No results found for "{commandSearch}"
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
