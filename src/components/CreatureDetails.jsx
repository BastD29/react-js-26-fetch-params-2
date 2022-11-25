import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreatureDetails() {

    // const navigate = useNavigate();
    // let params = useParams();

    // const [creature, setCreature] = useState();

    // const fetchCreature = async (id) => {
    //     const data = await fetch(
    //         `http://acnhapi.com/v1/sea/${id}`
    //     )

    //     const creature = await data.json();
    //     setCreature(creature);
    // }

    // useEffect(() => {
    //     fetchCreature(params.id)
    // }, [creature])

    const [creature, setCreature] = useState({ name: {} });

    // const params = useParams();
    const { id } = useParams();
    const navigate = useNavigate();

    // console.log(params);
    console.log({id});

    const fetchDetails = () => {
        fetch(`http://acnhapi.com/v1/sea/${id}`)
            .then(res => res.json())
            .then(data => setCreature(data))
    };

    useEffect(() => {
        fetchDetails();
    }, [])

    return (
        <>
            <button onClick={() => navigate(-1)}>
                Go back
            </button>
            {
                creature && (
                    <div>
                        <p>{creature.name["name-USen"]}</p>
                    </div>
                )
            }
        </>
    )
}
