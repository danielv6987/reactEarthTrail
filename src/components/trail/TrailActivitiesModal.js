import React, {Component} from "react"
import Modal from 'react-modal'
import TrailActivitiesListItem from './TrailActivitiesListItem'

class TrailActivitiesModal extends Component {
    componentWillMount() {
        Modal.setAppElement('body')
    }

    render() {
        return (
            <Modal
                isOpen={true}
                contentLabel="Activies"
            >

                <div>
                    testing
                </div>
                <div className="results">
                    {this.props.activities.length === 0 ? (
                        <div>
                            <span>No Activies</span>
                        </div>
                    ) : (
                        this.props.activities.map((activity, index) => {
                            return <TrailActivitiesListItem key={index} {...activity} />
                        })
                    )}
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </Modal>
        )
    }
}

export default TrailActivitiesModal