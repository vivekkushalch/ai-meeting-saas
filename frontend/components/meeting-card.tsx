"use client"

import { useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Meeting, Task } from "@/components/shared/types"
import { formatTime, formatMonth, getDayDifference, getRelativeTimeForCalendar } from "@/lib/utils/date"
import { MEETING_CARD_MAX_WIDTH, MEETING_TITLE_LINE_CLAMP } from "@/components/shared/constants"

export interface MeetingCardProps {
  meeting: Meeting;
  tasksForMeeting: Task[];
  onQuickSummaryAccess: (meetingId: string) => void;
  onToggleTaskComplete: (taskId: string) => void;
}

/* =========================================================
   Component
========================================================= */
export function MeetingCard({ meeting, tasksForMeeting }: MeetingCardProps) {
  const meetingDateStr = meeting.date;
  const meetingDate = new Date(meetingDateStr);
  const dayDiff = getDayDifference(meetingDate);

  const { time, month, day, isToday, isTomorrow, isCompleted } = useMemo(() => {
    const meetingDate = new Date(meetingDateStr);
    const now = new Date();
    
    return {
      time: formatTime(meetingDate),
      month: formatMonth(meetingDate),
      day: meetingDate.getDate(),
      isToday: dayDiff === 0,
      isTomorrow: dayDiff === 1,
      isCompleted: meeting.status === 'completed',
    };
  }, [meetingDateStr, dayDiff, meeting.status]);

  return (
    <div className={`p-6 border-b transition-all duration-200 hover:bg-muted/30 ${
      isCompleted ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start gap-4">
        {/* Time Block */}
        <TimeBlock
          time={time}
          isToday={isToday}
          isTomorrow={isTomorrow}
          month={month}
          day={day}
          isCompleted={isCompleted}
        />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-base mb-2 ${MEETING_TITLE_LINE_CLAMP} ${MEETING_CARD_MAX_WIDTH} ${
                isCompleted ? 'text-muted-foreground' : ''
              }`}>
                {meeting.title}
              </h3>
              
              {/* Meeting Metadata */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {meeting.duration}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {tasksForMeeting.length} tasks
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Badge 
                variant={isCompleted ? "secondary" : "default"}
                className="text-xs"
              >
                {meeting.status}
              </Badge>
            </div>
          </div>

          {/* Participants */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {meeting.participants.slice(0, 3).map((participant, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {participant.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
            {meeting.participants.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{meeting.participants.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   Time Block (Focused + Clean)
========================================================= */

interface TimeBlockProps {
  time: string
  isToday: boolean
  isTomorrow: boolean
  month: string
  day: number
  isCompleted: boolean
}

function TimeBlock({
  time,
  isToday,
  isTomorrow,
  month,
  day,
  isCompleted,
}: TimeBlockProps) {
  const now = new Date();
  const todayDate = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  
  const label = isToday
    ? todayDate
    : isTomorrow
    ? "Tomorrow"
    : `${month} ${day}` 

  return (
    <div className={`flex items-center gap-3 min-w-[100px] px-3 py-2.5 bg-gradient-to-r rounded-r-md border-l-2 ${
      isCompleted 
        ? 'bg-muted/20 border-l-muted-foreground/30'
        : `from-muted/30 to-muted/10 ${
            isToday || isTomorrow 
              ? 'border-l-primary/50' 
              : 'border-l-border/50'
          }`
    }`}>
      {/* Date/Context - Leading element */}
      <div className="flex flex-col items-start">
        <span className={`text-[10px] font-medium uppercase tracking-wider leading-none ${
          isCompleted ? 'text-muted-foreground/70' : 'text-muted-foreground'
        }`}>
          {isToday ? `TODAY ${todayDate}` : label}
        </span>
        <div className={`text-2xl font-bold mt-1 ${
          isCompleted ? 'text-muted-foreground' : 'text-foreground'
        }`}>
          {time}
        </div>
      </div>
    </div>
  )
}