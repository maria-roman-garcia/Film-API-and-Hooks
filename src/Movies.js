import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Spinner, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
import './Movies.css';
import Iconos from './Icons';

const Movies = () => {
    const [isLoading, setStateIsLoading] = useState(true);
    // JSON Peliculas
    const [allMovies, setStateAllMovies] = useState([]);
    // Json Generos
    const [generoJson, setStategeneroJson] = useState([]);
    // Llamamos a la api y hacemos setStateAllMovies(jsonInfo) y setStategeneroJson(jsonInfo.genres)
    let url = "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json";
    useEffect(() => {
        fetch(url)
            .then(urlInfo => {
                return urlInfo.json();
            })
            .then(jsonInfo => {
                console.log(jsonInfo);
                setStateAllMovies(jsonInfo.movies);
                setStategeneroJson(jsonInfo.genres);
                setStateIsLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // Peliculas FAV por id
    const [myFavFilms, setStatemyFavFilms] = useState([]);
    // Generos Seleccionados
    const [generoSeleccionado, setStategeneroSeleccionado] = useState([]);
    //Estado del boton de favoritas
    const [botonFav, setStateBotonFav] = useState(false);
    // Para el modal que enseña la peli al azar
    const [modalInfo, setModal] = useState({
        modal: false,
        randomMovie: null
    });
    const toggle = () => setModal({ modal: !modalInfo.modal, randomMovie: Math.floor(Math.random() * allMovies.length) });
    // Boton que te lleva al principio de la pagina
    let onClickUp = () => {
        scroll.scrollToTop();
    }

    // FILTRO Peliculas que se muestran...las de genero seleccionado + Favoritas
    let MoviesShow = allMovies.filter(pelicula => {
        let noSeQuiereFiltrarPorGenero = generoSeleccionado.length === 0;
        let cumpleCondicionDeGenero = generoSeleccionado.some(filtroGenero => pelicula.genres.some(e => e === filtroGenero));
        let noSeQuiereFiltrarPorFavoritas = !botonFav;
        let esPeliculaFavorita = myFavFilms.some(fav => pelicula.id === fav);
        return (noSeQuiereFiltrarPorGenero || cumpleCondicionDeGenero) && (noSeQuiereFiltrarPorFavoritas || esPeliculaFavorita);
    }
    )
    // Estructura de las cards de las pelis
    let movieCard = (movie, index) => {
        return (
            <Card>
                <CardImg className="imagenPeli" src={movie.posterUrl} alt={movie.title} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1541415109140-571dd7c83b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} />
                <CardBody>
                    <CardTitle><h3>{movie.title} ({movie.year})</h3></CardTitle>
                    <CardSubtitle><span className="span">Director:</span> {movie.director}</CardSubtitle>
                    <CardText>
                        <div>
                            <span className="span">Resumen:</span> {movie.plot}
                        </div>
                        <div>
                            <span className="span">Actores:</span> {movie.actors}
                        </div>
                        <div style={{ display: 'flex' }}>
                            {movie.genres.map(e => <p className="generoPeli">{e}</p>)}
                        </div>
                    </CardText>
                    <div className="alinearBotones">
                        {
                            myFavFilms.some(e => e === movie.id)
                                ? <Button color="danger" onClick={() => {
                                    setStatemyFavFilms((prevState) => [...prevState.filter(e => e !== movie.id)])
                                }}>{Iconos[Iconos.length - 1]} Eliminar de favoritas</Button>

                                : <Button color="info" onClick={() => {
                                    setStatemyFavFilms((prevState) => [...prevState, movie.id])
                                }}>{Iconos[Iconos.length - 2]} Añadir a favoritas</Button>
                        }
                    </div>
                </CardBody>
            </Card>
        )
    }

    return (
        <div className="container-fluid justifyCenter">
            {isLoading
                ? (<Spinner color="info" style={{ width: '7rem', height: '7rem', marginTop: "10rem" }} />)
                : (<div>
                    {/* FILTRO POR GÉNERO--> Los añadimos al array de generoSeleccionado */}
                    <div className="row">
                        <h3 className="span justifyCenter" style={{ width: "100%", marginTop: "1rem" }}>¿Qué género te gustaría descubrir?</h3>
                        <p className="justifyCenter" style={{ width: "100%" }}>¡Selecciona todos los que quieras!</p>
                    </div>
                    <div className="row justifyCenter">
                        <div className="col-12 col-md-9">
                            {(generoJson || []).map((genero, index) =>
                                generoSeleccionado.some(e => e === genero)
                                    ? <Button color="info" style={{ margin: "3px" }} onClick={() => {
                                        setStategeneroSeleccionado((prevState) => [...prevState.filter(el => el !== genero)]);
                                    }}>{Iconos[index]} {genero}</Button>
                                    : <Button color="secondary" style={{ margin: "3px" }} onClick={() => {
                                        setStategeneroSeleccionado((prevState) => [...prevState, genero]);
                                    }}>{Iconos[index]} {genero}</Button>
                            )}
                            {/* MODAL "AL AZAR"--> Enseña una peli al azar */}
                            <Button color="warning" style={{ margin: "3px" }} onClick={toggle}>{Iconos[Iconos.length - 3]} ¡Al azar!</Button>
                            {modalInfo.modal &&
                                <Modal isOpen={modalInfo.modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} charCode="X">¡Sorpresa!</ModalHeader>
                                    <ModalBody>
                                        {movieCard(allMovies[modalInfo.randomMovie])}
                                    </ModalBody>
                                </Modal>
                            }
                        </div>
                    </div>
                    {/* FILTRO POR FAVORITAS...true/false*/}
                    <div className="row justifyCenter">
                        <h3 className="span justifyCenter" style={{ width: "100%", marginTop: "1rem" }}>Ver mis peliculas favoritas</h3>
                        {botonFav
                            ? <Button color="info" style={{ margin: "3px" }} onClick={() => setStateBotonFav(!botonFav)}>{Iconos[Iconos.length - 2]} Favoritas</Button>
                            : <Button color="secondary" style={{ margin: "3px" }} onClick={() => setStateBotonFav(!botonFav)}>{Iconos[Iconos.length - 2]} Favoritas</Button>
                        }
                    </div>

                    {/* SE PINTAN TODAS LAS PELIS--> Dependiendo de generos y favs...ver MoviesShow(aplica filtro)*/}
                    <div className="row spaceAround">
                        {MoviesShow.length === 0
                            ? <div className="row" style={{margin:"1rem 0 4rem 0"}}>
                                <div className="col-12 col-md-6 justifyCenter ">
                                    <img src="https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif" alt="what are you waiting for?" style={{width : "250px", borderRadius: "20px"}}></img>
                                </div>
                                <div className="col-12 col-md-6 alignCenter justifyCenter">
                                <p>No tienes pelis favoritas...¿A qué esperas?</p>
                                </div>
                            </div>
                            : (MoviesShow || []).map((movie, index) => {
                                return (
                                    <div className="card col-12 col-md-5" key={index}>
                                        {movieCard(movie, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row justifyCenter">
                        <Button className="flotante" onClick={onClickUp} color="warning">IR ARRIBA</Button>
                    </div>
                </div>)
            }
        </div >
    )
}

export default Movies;