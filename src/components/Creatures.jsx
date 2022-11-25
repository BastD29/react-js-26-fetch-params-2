import React, { useEffect } from 'react'
import { useState } from 'react'
import Creature from './Creature';

export default function Creatures() {

    const [creatures, setCreatures] = useState([]);

    // console.log(creatures);
    // console.log(Object.keys(creatures))
    // console.log(Object.values(creatures))

    useEffect(() => {
        const fetchCreatures = async () => {
            const data = await fetch(
                "https://acnhapi.com/v1/sea/"
            )

            const creatures = await data.json();
            setCreatures(creatures)
        }

        fetchCreatures();
    }, [])

    return (
        <>
            {Object.values(creatures).map((creature) => (
                <Creature key={creature.id} creature={creature} />
            ))}
        </>
    )
}
