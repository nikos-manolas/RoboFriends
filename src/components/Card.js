// import React, { Component } from 'react';
import React from 'react';

// class Card extends Component {
// 	render() {
// 		return <h1>hellzzz</h1>;
// 	}
// }
const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;