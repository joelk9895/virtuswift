import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-6">Your Blog Posts</h2>
      <div className="space-y-4">
        {/* This is a placeholder. In a real app, you'd fetch and display actual blog posts here */}
        <div className="flex justify-between items-center p-4 bg-card rounded-lg shadow">
          <div>
            <h3 className="text-xl font-semibold">Sample Blog Post</h3>
            <p className="text-muted-foreground">Last edited: 2 days ago</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/edit/1">Edit</Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}

