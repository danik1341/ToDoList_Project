"use client"
// import { Cardfrom } from '@/components/Cardform'
import { Navbar } from '@/components/Navbar'
// import Image from 'next/image'
import { Task } from '@/components/Task'
import { TaskEditor } from '@/components/TaskEditor'
export default function Home() {
  return (
    <div>
      <Task/>
      <TaskEditor/>
    </div>
  )
}
