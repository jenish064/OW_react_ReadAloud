import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons'


export default function Textedit() {
    const [dataEntry, setDataEntry] = useState("");
    const [playBtn, setPlayBtn] = useState(true);
    const [reading, setReading] = useState(false)


    function recordEntry(e) {
        setDataEntry(e.target.value);
    }

    function clearAll() {
        setDataEntry("");
        document.getElementById("data-entry").value = "";
    }

    const readText = (dataEntry) => {
        setReading(true)
        const reader = new SpeechSynthesisUtterance(dataEntry);
        window.speechSynthesis.speak(reader);
        reader.addEventListener('end', () => {
            setReading(false);
        })
    }

    function stopReading() {
        window.speechSynthesis.cancel()
        setPlayBtn(true)
        setReading(false)
    }

    function toggleBtn() {
        console.log(playBtn)
        setPlayBtn(!playBtn)
        playBtn ? speechSynthesis.pause() : speechSynthesis.resume();
    }



    return (
        <>
            <div className='container'>
                <label className="form-label"> <h2>Type anything</h2></label>
                <input id='data-entry' onChange={recordEntry} type="text" className="form-control" />
                <div className="form-text">
                    Total number of words: {dataEntry.split(" ").length - 1}
                    <br />
                    Total characters: {dataEntry.length}
                </div>
                <div>
                    <hr />
                    <h5>You entered: </h5> {dataEntry}
                </div>

                <button onClick={clearAll}>
                    Clear all
                </button>

                <hr />
                <button disabled={dataEntry === "" || reading} onClick={() => readText(dataEntry)}>
                    Read Aloud
                </button>

                <button onClick={stopReading}>
                    Stop
                </button>

                <button onClick={toggleBtn}>
                    <FontAwesomeIcon icon={playBtn ? faCirclePause : faCirclePlay} />
                    {playBtn ? "Pause" : "Resume"}
                </button>

            </div>
        </>
    )
}
