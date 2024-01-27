"use client"
import React, { useEffect, useState } from 'react';
import "../addtask/style.css"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';



const Edittask = ({params}) => {
    const [task, settask] = useState("");
    const [desc, setdesc] = useState("");
    let {push} = useRouter();

    useEffect(() => {
        getdata();
    }, []);

    let getdata = async() =>{
        let uid = params.edittask;
        let res = await fetch("http://localhost:3000/api/task/"+uid);
        res = await res.json();
        let dets = res.data;
        settask(dets.task)
        setdesc(dets.desc)
    }

    let updatedata  = async(event)=>{
        event.preventDefault()
        let uid = params.edittask;
        let res = await fetch("http://localhost:3000/api/task/"+uid,{
            method:"PUT",
            body:JSON.stringify({task,desc})
        })
        let data = await res.json();
        if(data.success){
            toast.success('Task updated Successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
            push("/")
        }
        
    }
    return ( 
           <>
            <div className='container1'>
                <div className='box1'>
                    <h1>Edit the Task and Description</h1>
                    <form>
                        <div className='taskinfo'>
                            <input 
                            value = {task}
                            onChange={(e)=>{
                                settask(e.target.value)
                            }}
                            type='text' className='addtask'></input>

                            <input 
                            value = {desc}
                            onChange={(e)=>{
                                setdesc(e.target.value)
                            }}

                            type='text' className='addtask'></input>
                        </div>
                        <button className='save' onClick={updatedata}>Update</button>
                        <button className='back'><Link href="/">Back</Link></button>
                    </form>

                </div>
            </div>
        </>

     );
}
 
export default Edittask;