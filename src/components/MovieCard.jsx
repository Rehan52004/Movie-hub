import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
	const { poster, title, type, year } = props;
	return (
		<>
			<Card
				className="bg-dark text-white"
				style={{
					height: '400px',
					width: '300px',
					objectFit: 'cover',
					overflow: 'hidden',
					margin: '0px auto',
				}}
			>
				<Card.Img
					src={poster === 'N/A' ? 'https://fakeimg.pl/300x400' : poster}
					alt="Card image"
				/>
				<Card.ImgOverlay
					style={{
						top: '70%',
						backgroundColor: '#35383a',
						borderRadius: '0px',
					}}
				>
					<Card.Text>{type}</Card.Text>
					<Card.Title>{title}</Card.Title>
				</Card.ImgOverlay>
			</Card>
		</>
	);
};

export default MovieCard;
