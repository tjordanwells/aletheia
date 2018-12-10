import React from 'react'
import Amplitude from 'amplitudejs'

Amplitude.init({
    "sermon": [
        {
            "id": 1,
            "date": "1/7/2018",
            "url": "../../../database/audio/2018-01-07 Matt 1 - Genealogy of Jesus.mp3"
        }
    ]
})

const Sermons = () => (
    <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Sermons</h1>
            </div>
        </div>
        <div id="single-song-player">
            <div className="bottom-container">
                <progress className="amplitude-song-played-progress" amplitude-main-song-played-progress="true" id="song-played-progress"></progress> 
            </div>
            <div className="time-container">
                <span className="current-time">
                    <span className="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span className="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
                </span>
                <span className="duration">
                    <span className="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span className="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
                </span>
                <div className="control-container">
                    <div className="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
                </div>
            </div>
            <div className="meta-container">
                <span amplitude-song-info="date" amplitude-main-song-info="true" className="song-name"></span>
            </div>
        </div>
    </div>
)

export default Sermons