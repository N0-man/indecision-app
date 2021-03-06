import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal" //React Modal allows you to have yoour own styling
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearSelectedOption}>Ok</button>
    </Modal>
)

export default OptionModal