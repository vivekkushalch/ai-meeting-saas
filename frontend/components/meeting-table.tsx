// TanStack Table Component for Meetings
"use client"

import { useState, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table'
import { Meeting } from '@/components/shared/types'
import { MeetingDetailSheet } from './meeting-detail-sheet'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CalendarDays, ChevronDown, ChevronUp, Search } from 'lucide-react'

interface MeetingTableProps {
  meetings: Meeting[]
  tasksForMeeting: any[]
  onQuickSummaryAccess: (meetingId: string) => void
  onToggleTaskComplete?: (taskId: string) => void
  isLoading?: boolean
}

export function MeetingTable({ 
  meetings, 
  tasksForMeeting, 
  onQuickSummaryAccess, 
  onToggleTaskComplete,
  isLoading = false 
}: MeetingTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  // Define columns for the table
  const columns = useMemo<ColumnDef<Meeting>[]>(() => [
    {
      id: 'meeting',
      header: 'Meeting',
      accessorKey: 'title',
      minSize: 250,
      size: Number.MAX_SAFE_INTEGER,
      cell: ({ row }) => {
        const meeting = row.original
        const tasks = tasksForMeeting.filter(t => t.meetingId === meeting.id)
        const meetingDate = new Date(meeting.date)
        const time = meetingDate.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })
        const month = meetingDate.toLocaleDateString('en-US', { month: 'short' })
        const day = meetingDate.getDate()
        const isCompleted = meeting.status === 'completed'
        
        return (
          <MeetingDetailSheet 
            meeting={meeting} 
            tasksForMeeting={tasks}
          >
            <div className="flex items-start gap-3 min-w-0 cursor-pointer hover:bg-muted/50 p-2 -m-2 rounded-md transition-colors">
            {/* Time Block */}
            <div className={`flex flex-col items-start min-w-[80px] px-2 py-1.5 bg-gradient-to-r rounded-r-md border-l-2 ${
              isCompleted 
                ? 'bg-muted/20 border-l-muted-foreground/30'
                : `from-muted/30 to-muted/10 border-l-primary/50`
            }`}>
              <span className={`text-[10px] font-medium uppercase tracking-wider leading-none ${
                isCompleted ? 'text-muted-foreground/70' : 'text-muted-foreground'
              }`}>
                {month} {day}
              </span>
              <div className={`text-lg font-bold ${
                isCompleted ? 'text-muted-foreground' : 'text-foreground'
              }`}>
                {time}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className={`font-medium text-sm leading-tight line-clamp-2 ${
                  isCompleted ? 'text-muted-foreground' : ''
                }`}>
                  {meeting.title}
                </h3>
              </div>
              
              {/* Meeting Metadata */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {meeting.duration}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {tasks.length} tasks
                </span>
              </div>

              {/* Participants */}
              <div className="flex items-center gap-1 mt-1">
                <div className="flex -space-x-1">
                  {meeting.participants.slice(0, 3).map((participant, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[10px] font-medium"
                    >
                      {participant.charAt(0).toUpperCase()}
                    </div>
                  ))}
                </div>
                {meeting.participants.length > 3 && (
                  <span className="text-[10px] text-muted-foreground">
                    +{meeting.participants.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
          </MeetingDetailSheet>
        )
      },
    },
    {
      accessorKey: 'status',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-4 h-8"
          >
            Status
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        )
      },
      size: 100,
      minSize: 80,
      cell: ({ row }) => {
        const status = row.getValue('status') as string
        return (
          <Badge
            variant={status === 'completed' ? 'outline' : 'secondary'}
            className="text-xs"
          >
            {status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </Badge>
        )
      },
    },
    {
      accessorKey: 'date',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-4 h-8"
          >
            Date
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        )
      },
      size: 120,
      minSize: 100,
      cell: ({ row }) => {
        const dateStr = row.getValue('date') as string
        const dateObj = new Date(dateStr)
        return dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      },
    },
  ], [tasksForMeeting, onQuickSummaryAccess, onToggleTaskComplete])

  // Create table instance
  const table = useReactTable({
    data: meetings,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      pagination,
      globalFilter,
    },
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="rounded-md border bg-card overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b bg-muted/30">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="h-10 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-4 align-middle"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getRowModel().rows.length} of {meetings.length} results
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
