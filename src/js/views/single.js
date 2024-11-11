import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// 	 console.log (params) 
	//   const {theid}= useParams ()
	useEffect (()=>{
		actions.loadInfoPerson (params.theid)
	},[])
	return (
		<div className="jumbotron">
			<h1>{store.person?.properties?.name}</h1>
			<h1>{store.person?.properties?.gender}</h1>
			<h1>{store.person?.properties?.hair_color}</h1>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
