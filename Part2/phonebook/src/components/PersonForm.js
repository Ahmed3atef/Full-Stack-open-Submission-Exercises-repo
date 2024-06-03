const PersonForm = (props) => {
    return(
        <form onSubmit={props.onsubmit}>
            <div>
                name: <input onChange={props.nameChange} /><br/>
                number: <input onChange={props.numberChange}/>          
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm