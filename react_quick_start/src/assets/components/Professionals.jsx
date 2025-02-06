function Professionals() {
    return (
        <div className="bg-white m-4 p-4">
            {
                people.map((person =>(
                    <div key={person.id}>
                        <img src='' alt={person.name} /> 
                        <p><strong>{person.name}</strong>{person.professopn}{}</p>
                    </div>
                )))
            }
        </div>
    );
}