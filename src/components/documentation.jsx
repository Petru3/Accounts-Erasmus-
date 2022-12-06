

function Documentation(props){
    return(
        <div className="section">
            <h3>{props.title}</h3>
            <a target="_blank" rel="noreferrer" href={props.link}>
                <button>Vezi informatiile</button>
            </a>
        </div>
    )
}

export default Documentation