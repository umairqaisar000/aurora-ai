'use client'
import { EMAIL_MARKETING_HEADER } from '@/constants/menu'
import { cn } from '@/lib/utils'
import { SideSheet } from '../sheet'
import { DataTable } from '../table'
import { Card } from '../ui/card'
import { TableCell, TableRow } from '../ui/table'
import Answers from './answers'

type CustomerTableProps = {
  domains: {
    customer: {
      Domain: {
        name: string
      } | null
      id: string
      email: string | null
    }[]
  }[]
  onSelect(email: string): void
  select: string[]
  onId(id: string): void
  id?: string
}

export const CustomerTable = ({
  domains,
  onSelect,
  select,
  onId,
  id,
}: CustomerTableProps) => {
  return (
    <DataTable headers={EMAIL_MARKETING_HEADER}>
      {domains.map((domain) =>
        domain.customer.map((c) => (
          <TableRow key={c.id}>
            <TableCell>
              <Card
                onClick={() => onSelect(c.email as string)}
                className={cn(
                  'rounded-full w-5 h-5 border-4 cursor-pointer',
                  select.includes(c.email as string) ? 'bg-violet-400' : 'bg-violet-200'
                )}
              />
            </TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell>
              <SideSheet
                title="Answers"
                description="Customer answers are stored by the bot when your customers respond back to the questions asked by the bot."
                trigger={
                  <Card
                    className="bg-violet-400 py-2 px-4 cursor-pointer text-gray-100 hover:bg-violet-500"
                    onClick={() => onId(c.id)}
                  >
                    View
                  </Card>
                }
              >
                <Answers id={id} />
              </SideSheet>
            </TableCell>
            <TableCell className="text-right">{c.Domain?.name}</TableCell>
          </TableRow>
        ))
      )}
    </DataTable>
  )
}
