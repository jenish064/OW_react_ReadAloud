import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons'

export default function PnP(props) {
    return (
        <button>
            <FontAwesomeIcon icon={props.flag ? faCirclePlay : faCirclePause} /> {props.name}
        </button>)
}

PnP.prototype = {
    onclick: PropTypes.func
}