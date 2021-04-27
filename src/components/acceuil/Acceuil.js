function Acceuil() {
    return (
        <div>
            <p>Acceuil</p>
            <div className="card text-center bg-dark" style={{width: 18 + "rem"}}>
                <img src="https://media.anakinworld.com/uploads/entries/square_medium/luke-skywalker-1211dc3c83b3799dfe1f9514e32f648f7c63b4ee.jpeg" className="card-img-top mx-auto d-block" alt="Luke Skywalker" style={{width: 9 + "rem"}} />
                <div className="card-body text-white">
                    <h5 className="card-title">Les personnages</h5>
                    <p className="card-text">Découvrez les personnages de la galaxie Star Wars</p>
                    <a href="" className="btn btn-warning">Par ici !</a>
                </div>      
            </div>
        </div>    
    );
}

export default Acceuil;