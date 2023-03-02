import React, { Component } from 'react'
import {ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class Toast extends Component {
  render() {
    return (
      <div>
           <ToastContainer/>
           <h1>Toast</h1>
           <button onClick={()=>{
            toast.success("success",{
                position :"top-center"
            })
            // toast.error("error",{
            //     position :"top-center"
            // })
           }}>SUCCESS</button>

<button onClick={()=>{
            toast.error("error",{
                position :"top-left"
            })
           }}>error</button>
      </div>
    )
  }
}