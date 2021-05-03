import React from 'react';
import Axios from 'axios';
import Cards from './cards/Cards';

class Acceuil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
            data: null,
            cards: null
        }       
    }
    componentDidMount() {
        Axios.get("https://swapi.dev/api/")

        .then((response) => {
            console.log(Object.keys(response.data))
            let cards = Object.keys(response.data).map((card)=>{
                return <Cards card={card} />
            });

            this.setState({
                loaded: true,
                data: response.data,
                cards: cards
            })
        })
        .catch((error) => {
            this.setState({
                loaded: true,
                error: error
            })
        })
    }
    render() {
        if(this.state.loaded) {
            if(this.state.error) {
                return(
                    <p>Une erreur est survenue :-(. Message : {this.state.error.message}</p>
                );
            }
            return(
                <section className="container">
                    <h2 className="Starfont">Acceuil</h2>
                    <div className="row">
                        {this.state.cards}
                    </div>
                </section>
            );
        }
        return(
            <p>Vos données sont en cours de chargement</p>
        );
    }
}   
    


export default Acceuil;
