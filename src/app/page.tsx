import Image from 'next/image'
import { Hero } from '@/components/Hero'
import Features from '@/components/Features'
import NewArrival from '@/components/NewArrival'

export default function Home() {
  return (
    <main>
      < Hero />
      < Features />
      <NewArrival />
    </main>
  )
}
