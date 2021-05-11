function Cards(props) {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 my-1'>
            <div className="card text-center bg-dark">
                <div className="card-body text-white">
                    <h5 className="card-title">{props.card}</h5>
                    <p className="card-text">Découvrez les {props.card} de la galaxie Star Wars</p>
                    <a href="#" className="btn btn-warning">Par ici !</a>
                </div>      
            </div>
        </div>
    )
}

export default Cards
