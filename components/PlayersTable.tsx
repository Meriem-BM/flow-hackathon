'use client';

import React from "react";
import { useState, useEffect } from "react";
import { formatSalary } from "@/utils/helpers";

interface Player {
  id: number;
  firstname: string;
  lastname: string;
  goal: string;
  salary: number;
  devise: string;
}

export default function Players() {
  const [allPlayers, setAllPlayers] = useState<Array<Player>>([]);

  const fetchPlayers = async () => {
    const response = await fetch("/api/players");
    const data = await response.json();
    setAllPlayers(data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 uppercase">
              id
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Nom Complet
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Salaire Annuel
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              But
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {allPlayers.map((player) => (
            <tr key={player.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{player.id}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {player.firstname + " " + player.lastname}
              </th>
              <td className="px-6 py-4">{formatSalary(player.salary, player.devise)}</td>
              <td className="px-6 py-4">{player.goal}</td>
              <td className="px-6 py-4">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
