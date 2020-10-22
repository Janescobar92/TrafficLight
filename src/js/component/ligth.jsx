import React from "react";

import PropTypes from "prop-types";

export const TrafficLigths = props => {
	return <div className={props.className} />;
};
TrafficLigths.propTypes = {
	className: PropTypes.string
};
