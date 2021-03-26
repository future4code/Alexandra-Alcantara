import React from 'react';

export default class ListPlaylistPage extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.changePage}>Create a new playlist</button>
                <h2>Playlists</h2>
            </div>
        )
    }
}