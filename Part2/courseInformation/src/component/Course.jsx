const Course = ({course}) => {
    return (
        <>
            <h2> {course.name} </h2>
                {course.parts.map(part =>
                    <p key={part.id}>{part.name} {part.exercises}</p>
                )}
                <b>total of {course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises</b>
        </>
    )
}

export default Course