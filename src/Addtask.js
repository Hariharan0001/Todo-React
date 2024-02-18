import { useState,useEffect} from "react";
import "./App.css";
// export default function AddTask({selectdate,inputvalue,onClose}){
//   console.log("component called")
//   console.log("values",selectdate,inputvalue);
//   //const [taskdate,settaskdate]=useState('');
//   const [taskObject,setTaskObject]=useState({});
//   const [displaytask,setdisplaytask]=useState([]);
//   // useEffect(()=>{
//   //    // if(selectdate!==undefined){
//   //       settaskdate(selectdate)
//   //       console.log("taskdate",taskdate)
//   //     //}
//   // },[selectdate]);
//   //useEffect(()=>{
//     if(inputvalue && selectdate){
//     if(taskObject[selectdate]){
//       setTaskObject((previoustask)=>({
//         ...previoustask,
//         [selectdate]: [...previoustask[selectdate], inputvalue]
//       }))
//     }
//     else{
//       setTaskObject((previoustask)=>({
//         ...previoustask,
//         [selectdate]: [inputvalue]
//       }));
//     }
//   }
//  // },[inputvalue,selectdate],console.log(taskObject))
//   function handledelete(date,task){
//     setTaskObject((pretask)=>({
//       ...pretask,
//       [date]:pretask[date].filter((t)=>t!==task),
//   }))
//    setTaskObject((pre)=>{
//     let newtaskobj={};
//     for(let k in pre){
//       if(pre[k].length>0){
//         newtaskobj[k]=pre[k];
//       }
//     }
//     return newtaskobj;
//    })
//   }
//   function onChange() {
//     let checkboxes = document.querySelectorAll("#checkbox");
//     let taskclass = document.querySelectorAll("#taskwidth");
//     checkboxes.forEach((checkbox, index) => {
//       checkbox.addEventListener('change', () => {
//         if (checkbox.checked) {
//           taskclass[index].classList.add("checked");
//         } else {
//           taskclass[index].classList.remove("checked");
//         }
//       });
//     });
//   }
//   function handledisplaytask(date){
//     setdisplaytask((prevtask)=>{
//       if(prevtask.includes(date)){
//         return prevtask.filter((key)=>key!==date);
//       }
//       else{
//         return [...prevtask,date];
//       }
//     });
//   }
//   if(inputvalue){
//     var returnvalue=[];
//     for(let [date,tasks] of Object.entries(taskObject)){
//       returnvalue.push(<div id="accordianbutton" key={date}>{date}<span id="dropdown" onClick={()=>handledisplaytask(date)}>⇩</span></div>)
//       if(!displaytask.includes(date)){
//         tasks.map((task)=>(
//         returnvalue.push(
//         <div className={`${date} taskvalue`} key={task}>
//          <input type="checkbox" id="checkbox" onClick={onChange}/> <span id="taskwidth">{task}</span>{" "}
//          <button className="delete" onClick={()=>handledelete(date,task)}>Delete</button>
//         </div>
//         )
//       ))
//       }
//     }
//     console.log(returnvalue);
//   }
//   //if(inputvalue && selectdate){
//     return(
//       <>
//       {returnvalue}
//       </>
//     )
//   //  }
// }