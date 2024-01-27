"use client"
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const Deletetask = ({ uid }) => {
    const router = useRouter();
    console.log(router)
    let deletedata = async () => {
        let res = await fetch("http://localhost:3000/api/task/" + uid, {
            method: "DELETE"
        })
        res = await res.json();
        if (res.success) {

            toast.success('Task Deleted Successfully!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setInterval(()=>{
                window.location.reload();
            },1500)
        }
    }
    return (
        <>
            <button className='del' onClick={deletedata}>Delete</button>
        </>
    );
}

export default Deletetask;