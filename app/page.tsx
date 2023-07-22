'use client';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        Welcome to Promptopia
        <Image  src="/assets/images/logo.svg" alt="Logo" width={40} height={40} className="mr-2" />
      </div>
    </main>
  )
}
