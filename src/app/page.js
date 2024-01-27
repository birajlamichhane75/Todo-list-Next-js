"use client"
import React, { useEffect, useState } from 'react';
import Displaylist from '../../component/Displaylist';
import Link from 'next/link';
import Deletetask from '../../component/Deletetask';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todolist = () => {
  const [rendertask, setrendertask] = useState(<h2 style={{'text-align':'center;'}}>Loading....</h2>);
  let { push } = useRouter();

  useEffect(() => {
    let fetchdata = async () => {
      let result = await displaytask();
      let data = result.data;

      setrendertask(data.map((e, i) => {
        return <>
          <div className='tasklist' key={i}>
            <div className='listinfo'>
              <p className='task'>{i + 1}.  {e.task}</p>
              <p className='desc'>{e.desc}</p>
            </div>
            <div className='feature'>
              <button className='edit' onClick={()=>{
                push("/"+e._id);
              }}>Edit</button>
              <Deletetask uid = {e._id}/>
              <input type="checkbox" className='check' />
            </div>
          </div>
        </>
      }))
    }
    fetchdata();
  }, []);

  let displaytask = async () => {
    let res = await fetch("http://localhost:3000/api/task",{cache:"no-cache"});
    res = await res.json();
    return res;
  }

  return (
    <>
      <div className='container'>
        <div className='box'>
          <div className='top'>
            <h1>To-Do-List</h1>
            <button className='btn'><Link href="/addtask">Add Task</Link></button>
          </div>


          <div className='list'>
            {rendertask}
          </div>


        </div>
      </div>
    </>
  );
}

export default Todolist;