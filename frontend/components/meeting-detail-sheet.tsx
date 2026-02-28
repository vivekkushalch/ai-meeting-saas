// Meeting Detail Sheet Component - Summary-First Design with AI Chat & Transcript
"use client"

import { useState } from 'react'
import { Meeting, Task } from '@/components/shared/types'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, FileText, CheckSquare, MessageSquare, Video, MoreHorizontal, ChevronDown, Star, Target, Send, Bot, FileTextIcon, CheckCircle2, CalendarDays } from 'lucide-react'
import { formatTime, formatMonth, getRelativeTimeForCalendar } from '@/lib/utils/date'

interface MeetingDetailSheetProps {
  meeting: Meeting
  tasksForMeeting: Task[]
  children: React.ReactNode
}

export function MeetingDetailSheet({ meeting, tasksForMeeting, children }: MeetingDetailSheetProps) {
  const [activeTab, setActiveTab] = useState<'highlights' | 'summary' | 'transcript'>('highlights')
  const [showAllParticipants, setShowAllParticipants] = useState(false)
  
  const meetingDate = new Date(meeting.date)
  const calendarDay = meetingDate.getDate()
  const calendarMonth = meetingDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
  const calendarYear = meetingDate.getFullYear()
  const relativeTime = getRelativeTimeForCalendar(meetingDate)

  const completedTasks = tasksForMeeting.filter(t => t.completed).length
  const totalTasks = tasksForMeeting.length

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-[500px] sm:w-[600px] lg:w-[700px] overflow-y-auto !sm:max-w-none !max-w-none bg-background/95 backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle>Meeting Details</SheetTitle>
        </SheetHeader>
        {/* Meeting Title Section with Integrated Details */}
        <div className="px-6 py-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-3 min-w-[60px] border border-border/30">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{calendarMonth}</div>
              <div className="text-xl font-bold text-foreground mt-1">{calendarDay}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-xl font-semibold text-foreground leading-tight">{meeting.title}</h1>
              </div>
              
              {/* Interactive Metadata Row */}
              <div className="flex items-center gap-4 mb-3">
                <button 
                  className="flex items-center gap-2 px-3 py-1.5 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors border border-transparent hover:border-border/50"
                  onClick={() => {
                    // Open meeting link in new tab
                    window.open('https://zoom.us/j/123456789', '_blank')
                  }}
                >
                  <div className="w-4 h-4 rounded bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">Z</span>
                  </div>
                  <span className="text-sm text-foreground font-medium">Join Meeting</span>
                </button>
                
                <div className="flex items-center gap-1 px-3 py-1.5 bg-muted/10 rounded-lg">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{formatTime(meetingDate)}</span>
                </div>
                
                <div className="flex items-center gap-1 px-3 py-1.5 bg-muted/10 rounded-lg">
                  <Users className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{meeting.participants.length} attendees</span>
                </div>
                
                <div className="flex items-center gap-1 px-3 py-1.5 bg-muted/10 rounded-lg">
                  <CheckSquare className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{completedTasks}/{totalTasks} tasks</span>
                </div>
              </div>
              
              {/* Tags Section */}
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="secondary" className="text-xs">Q2 Planning</Badge>
                <Badge variant="secondary" className="text-xs">Budget Review</Badge>
                <Badge variant="outline" className="text-xs">Strategy</Badge>
                <Badge variant="outline" className="text-xs">Timeline</Badge>
                <Badge variant="outline" className="text-xs">Resources</Badge>
              </div>
            </div>
          </div>

          {/* Key Information - Minimal Combined Card */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-4 w-4 text-yellow-500" />
              <h2 className="text-lg font-semibold text-foreground">Key Information</h2>
            </div>
            <Card className="border-border/50 p-4">
              {/* Tab Navigation */}
              <div className="flex border-b border-border/30">
                <button 
                  onClick={() => setActiveTab('highlights')}
                  className={`flex-1 px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out ${
                    activeTab === 'highlights' 
                      ? 'text-foreground border-b-2 border-b-yellow-500 bg-yellow-50/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  Highlights
                </button>
                <button 
                  onClick={() => setActiveTab('summary')}
                  className={`flex-1 px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out ${
                    activeTab === 'summary' 
                      ? 'text-foreground border-b-2 border-b-yellow-500 bg-yellow-50/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  Summary
                </button>
                <button 
                  onClick={() => setActiveTab('transcript')}
                  className={`flex-1 px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out ${
                    activeTab === 'transcript' 
                      ? 'text-foreground border-b-2 border-b-yellow-500 bg-yellow-50/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  Transcript
                </button>
              </div>

              {/* Tab Content Container */}
              <div className="relative min-h-[200px] w-full overflow-hidden">
                {/* Highlights Content */}
                <div className={`p-3 absolute inset-0 w-full transition-all duration-300 ease-in-out overflow-y-auto ${
                  activeTab === 'highlights' 
                    ? 'opacity-100 transform translate-x-0 pointer-events-auto' 
                    : 'opacity-0 transform -translate-x-4 pointer-events-none'
                }`}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground mb-1 break-words">Project Timeline Approved</h4>
                      <p className="text-sm text-muted-foreground break-words">New milestones for Q2 delivery with updated resource allocation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground mb-1 break-words">Budget Increase</h4>
                      <p className="text-sm text-muted-foreground break-words">15% additional funding approved for testing and QA resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground mb-1 break-words">Next Deadline</h4>
                      <p className="text-sm text-muted-foreground break-words">Team leads to submit detailed plans by Friday EOD</p>
                    </div>
                  </div>
                </div>
                </div>

                {/* Summary Content */}
                <div className={`p-3 absolute inset-0 w-full transition-all duration-300 ease-in-out overflow-y-auto ${
                  activeTab === 'summary' 
                    ? 'opacity-100 transform translate-x-0 pointer-events-auto' 
                    : 'opacity-0 transform -translate-x-4 pointer-events-none'
                }`}>
                <div className="prose prose-sm max-w-none">
                  <p className="text-sm text-foreground leading-relaxed break-words">
                    {meeting.summary}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-xs">
                      Export →
                    </Button>
                  </div>
                </div>
                </div>

                {/* Transcript Content */}
                <div className={`p-3 absolute inset-0 w-full transition-all duration-300 ease-in-out overflow-y-auto ${
                  activeTab === 'transcript' 
                    ? 'opacity-100 transform translate-x-0 pointer-events-auto' 
                    : 'opacity-0 transform -translate-x-4 pointer-events-none'
                }`}>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-blue-600">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground break-words">John Doe</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">10:02 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground break-words">
                        Let's start by reviewing the project timeline we discussed last week. I've updated milestones based on team's feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-green-600">AS</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground break-words">Alice Smith</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">10:04 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground break-words">
                        Great! I think the new timeline looks much more realistic. The only concern I have is resource allocation for testing phase.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-purple-600">BJ</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground break-words">Bob Johnson</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">10:06 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground break-words">
                        I agree with Alice. We'll need at least two more QA engineers to meet the quality standards. I've prepared a detailed breakdown of the testing requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground mt-4">
                  Load full transcript (45 min) →
                </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Items - Sovereign Minimal Design */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Target className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-lg font-light text-foreground tracking-wide">Action Items</h2>
              <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 border-emerald-200">{totalTasks}</Badge>
            </div>
            <div className="space-y-1">
              {tasksForMeeting.slice(0, 6).map((task) => (
                <div key={task.id} className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white/80 transition-all duration-200">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                    task.completed 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'border-gray-300 hover:border-emerald-400'
                  }`}>
                    {task.completed && (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${
                        task.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                      }`}>
                        {task.text}
                      </span>
                      {!task.completed && (
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                      )}
                    </div>
                    {task.completed && (
                      <div className="flex items-center gap-1 text-xs text-emerald-600">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add Item
              </button>
              {totalTasks > 6 && (
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  View all {totalTasks}
                </button>
              )}
            </div>
          </div>

          {/* AI Assistant Chat Box */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-4 w-4 text-purple-500" />
              <h2 className="text-lg font-semibold text-foreground">AI Assistant</h2>
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">Online</Badge>
            </div>
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Hi! I can help you with this meeting. Ask me anything about the summary, action items, or generate follow-up emails.
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">AI Assistant</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask about this meeting..."
                    className="flex-1 px-3 py-2 text-sm border border-border/30 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Button size="sm" className="px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                    Summarize key points
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                    Generate follow-up email
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                    Extract decisions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Floating Action Bar */}
          <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border/50 px-6 py-3">
            <div className="flex items-center gap-2">
              <Button size="sm" className="flex-1">
                Join Meeting
              </Button>
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
