const Dispaly = (props) => {
    return(
        props.persons.map((person) => <li key={person.name} >{person.name}</li> )
    )
}

export default Dispaly