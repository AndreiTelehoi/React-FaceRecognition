import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 mt-5'>
                {'Enter an image url to get your face detected'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-50 center mb-2' type='text'/>
                    <button className='btn btn-outline-dark large grow w-30 link ph3 pv2'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;