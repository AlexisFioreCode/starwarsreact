function Cards(props) {
    return (
        <div>
            <div className="card text-center bg-dark col-6 col-sm-3">
                <div className="card-body text-white">
                    <h5 className="card-title">{props.cards.id}</h5>
                    <p className="card-text">Découvrez les personnages de la galaxie Star Wars</p>
                    <a href="" className="btn btn-warning">Par ici !</a>
                </div>      
            </div>
        </div>
    )
}

export default Cards