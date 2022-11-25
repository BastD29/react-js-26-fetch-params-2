import React from 'react'
import { Link } from 'react-router-dom'

export default function Creature({ creature }) {
  return (
    <li>
        <Link to={`/creature/${creature.id}`}>
            {creature.name["name-USen"]}
        </Link>
    </li>
  )
}
