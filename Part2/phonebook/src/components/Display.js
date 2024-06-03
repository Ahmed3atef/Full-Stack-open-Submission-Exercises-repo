const Dispaly = (props) => {
    return(
        props.persons.map((person) => <li key={person.id} >{person.name} {person.number}</li> )
    )
}

export default Dispaly