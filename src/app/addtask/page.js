"use client"
import React, { useState } from 'react';
import "../addtask/style.css"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';


const Addtask = () => {
    const [task, settask] = useState("");
    const [desc, setdesc] = useState("");
    let {push} = useRouter();

    let savetask = async(event) =>{
        

        let res = await fetch("http://localhost:3000/api/task",{
            method:"POST",
            body:JSON.stringify({task,desc})
        })
        res = await res.json();

        if(res.success){
            toast.success('Task addded successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });

            settask("")
            setdesc("")
        }
    }
    return (
        <>
            <div className='container1'>
                <div className='box1'>
                    <h1>Enter the Task and Description</h1>
                    <form onSubmit={()=>{
                        event.preventDefault();
                        if(task != "" && desc !=""){
                            savetask();
                            push("/")

                        }
                        else{
        
                            toast.error('Something is missing,Please check again!', {
                                position: "top-center",
                                autoClose: 1800,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                
                                });
                        }
                    }}>
                        <div className='taskinfo'>
                            <input 
                            value = {task}
                            onChange={(e)=>{
                                settask(e.target.value)
                            }}
                            type='text' className='addtask' placeholder='Enter the task'></input>

                            <input 
                            value = {desc}
                            onChange={(e)=>{
                                setdesc(e.target.value)
                            }}

                            type='text' className='addtask' placeholder='Enter the task description'></input>
                        </div>
                        <button className='save'>Save</button>
                        <button className='back'><Link href="/">Back</Link></button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Addtask;