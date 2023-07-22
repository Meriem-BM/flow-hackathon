'use client';
import PlayersTable from '@/components/PlayersTable';
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="w-full">
      <Nav title={"List des joueurs"} main={true} />
      <PlayersTable />
    </main>
  )
}
