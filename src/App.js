import React, { useEffect, useState } from 'react';

//bootstrap component
import { Col, Container, Row } from 'react-bootstrap';

//component
import MovieCard from './components/MovieCard';

//styling
import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchMovie, setSearchMovie] = useState();

	const API_URL = 'http://www.omdbapi.com/?apikey=1f92cf61';

	const loadMovie = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
		console.log(movies);
	};

	useEffect(() => {
		loadMovie('superman');
	}, []);

	return (
		<>
			<Container fluid className="wrapper">
				<h2 className="text-center my-5">Movie Hub</h2>

				<Row className="justify-content-center align-items-center">
					<Col xs="12" lg="5">
						<div className="search-bar">
							<input
								placeholder="Enter something or movie"
								value={searchMovie}
								onChange={(e) => setSearchMovie(e.target.value)}
							/>

							<div
								onClick={() => loadMovie(searchMovie)}
								style={{ cursor: 'pointer' }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-search"
									viewBox="0 0 16 16"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</div>
						</div>
					</Col>
				</Row>

				<Row className="my-5">
					<Col xs="10" className="mx-auto">
						<Row className="justify-content-center">
							{movies ? (
								movies.map((movie) => (
									<Col
										xs="12"
										lg="4"
										className="mt-5"
										style={{ marginTop: '20px' }}
									>
										<MovieCard
											poster={movie.Poster}
											title={movie.Title}
											type={movie.Year}
											year={movie.Year}
										/>
									</Col>
								))
							) : (
								<h1 className="text-center">
									No movie found with this result {`"${searchMovie}"`}
								</h1>
							)}
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default App;
