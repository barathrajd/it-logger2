import React from 'react'
import { useState } from 'react'

import M from "materialize-css/dist/js/materialize.min.js";



const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech,setTech] = useState('');

const onSubmit =() =>{
    if(message === ''|| tech === '') {
        M.toast({ html: 'Please Enter the message and tech'})
    } else{
    console.log(message, tech, attention);
    }
}




    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input  type="text" name='message' value={message} onChange={e =>setMessage 
                        (e.target.value) }/>
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                   <div className="input-field">
                       <select multiple name="tech" value={tech} className='input-field col s12'
                       onChange={e => setTech(e.target.value)}>
                           <option value="" disabled>
                               Select Technician
                           </option>
                           <option value="Barath Deva">Barath Deva</option>
                           <option value="Barath Raj">Barath raj</option>
                           <option value="Deva Barath">Deva Barath</option>
                       </select>
                    </div> 
                </div>
                <div className="row">
                    <p>
                        <label >
                            <input type="checkbox" className='filled-in'
                             checked={attention}
                             value= {attention} 
                             onChange={e =>{
                                 setAttention(!attention)
                             }} />
                             <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light
                btn" >Enter</a>
            </div>
        </div>
    )
}


const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal
