import React from 'react'

export class MovieFilterNav extends React.Component {
    filters = [
        { displayName: 'ALL', id: 1 },
        { displayName: 'DOCUMENTARY', id: 2 },
        { displayName: 'COMEDY', id: 3 },
        { displayName: 'HORROR', id: 4 },
        { displayName: 'CRIME', id: 5 },
    ]

    constructor(props) {
        super(props);
        this.state = {
            selectedFilterID: 1
        }
    }

    render() {
        return (
            <div className="main-nav">
                <ul>
                    {this.filters.map(filter => (
                        <li key={filter.id}
                            className={this.state.selectedFilterID === filter.id ? 'clickable selected' : 'clickable'}
                            onClick={() => this.setState({ selectedFilterID: filter.id })}>
                            {filter.displayName}
                        </li>
                    ))}
                </ul>
                <div>
                    <span>SORT BY</span>
                    <select>
                        <option>RELEASE DATE</option>
                        <option>RATING</option>
                        <option>DURATION</option>
                    </select>
                </div>
            </div>
        )
    }
}
