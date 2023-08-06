"use client"
import { AddTask } from '@/components/AddTask'
// import { Cardfrom } from '@/components/Cardform'
import { Navbar } from '@/components/Navbar'
// import Image from 'next/image'
import { Task } from '@/components/Task'

export default function Home() {
  return (
    <div>
      <Task/>
      <AddTask/>
    </div>
  )
}
