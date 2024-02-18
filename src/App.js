import React, { useState, useEffect } from 'react';

const TaskManager = () => {

  const [dateButton, setdatebutton] = useState(false);
  const [task, setTask] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [buttonClick, setButtonClick] = useState(false);
  const [tasksObject, setTasksObject] = useState({});
  const [displayTasks, setDisplayTasks] = useState([]);
  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('obj'));
    console.log("task from stroage",tasksFromStorage);
    if(tasksFromStorage){
    setTasksObject(tasksFromStorage);
    setButtonClick(true)
    }
 }, []);
 useEffect(() => {
  if(buttonClick){
  localStorage.setItem('obj', JSON.stringify(tasksObject));
  }
 }, [tasksObject,buttonClick]);
  function DateComponent() {
    const [month, setmonth] = useState(0);
    const [year, setyear] = useState(2020);
    const [cal, setcal] = useState([]);
    useEffect(()=>{
      generatecal()
    },[month,year])
    function generatecal() {
      let selyear = year;
      let selmonth = month;
      let firstday = new Date(selyear, selmonth, 1).getDay();
      let totaldays = new Date(selyear, selmonth + 1, 0).getDate();
      let newcal = [];
      for (let i = 0; i < firstday; i++) {
        newcal.push(<div />);
      }
      for (let j = 1; j <= totaldays; j++) {
        newcal.push(<div className="dayval" onClick={(e)=>handleClick(e)}>{j}</div>);
      }
      setcal(newcal);
    }
    function handleClick(e){
      const clickedDay = e.target.innerHTML;
      const selectedDate = new Date(year, month, clickedDay);
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setSelectedDate(formattedDate);
      }
    return (
      <div id="emptyspace">
        <div id="calenderplace">
          <select
            id="month"
            onChange={(e) => {
              setmonth(e.target.value);
            }}
          >
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
          <select
            id="year"
            onChange={(e) => {
              setyear(e.target.value);
            }}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <div className="days">
            <div className="day">Sun</div>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thu</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
          </div>
          <div id="calender">{cal}</div>
        </div>
      </div>
    );
  }
  function onChange() {
    let checkboxes = document.querySelectorAll("#checkbox");
    let taskclass = document.querySelectorAll("#taskwidth");
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          taskclass[index].classList.add("checked");
        } else {
          taskclass[index].classList.remove("checked");
        }
      });
    });
  }
  const renderTasks = () => {
    const taskElements = [];
    for (const [date, tasks] of Object.entries(tasksObject)) {
      taskElements.push(
        <div id="accordianbutton" key={date}>
          {date}
          <span id="dropdown" onClick={() => handleChangeDisplayTasks(date)}>
            ⇩
          </span>
        </div>
      );

      if (!displayTasks.includes(date)) {
        tasks.forEach((task) =>
          taskElements.push(
            <div className={`${date} taskvalue`} key={task}>
              <input type="checkbox" id="checkbox" onClick={onChange}/>
              <span id="taskwidth">{task}</span>
              <button className="delete" onClick={() => handleDeleteTask(date, task)}>
                Delete
              </button>
            </div>
          )
        );
      }
    }
    return taskElements;
  };
  const handleAddTask = () => {
    if (inputValue && selectedDate) {
      const dateKey = selectedDate;
      const newTask = {
        [dateKey]: [...(tasksObject[dateKey] || []), inputValue],
      };
      setTasksObject((prevTasks) => ({ ...prevTasks, ...newTask }));
    }
    setButtonClick(true);
    setTask('');
    setInputValue('');
  };

  const handleDeleteTask = (date, task) => {
    setTasksObject((prevTasks) => ({
      ...prevTasks,
      [date]: prevTasks[date].filter((t) => t !== task),
    }));

    setTasksObject((prev) => {
      const newTaskObj = {};
      for (const k in prev) {
        if (prev[k].length > 0) {
          newTaskObj[k] = prev[k];
        }
      }
      return newTaskObj;
    });
  };

  const handleChangeDisplayTasks = (date) => {
    setDisplayTasks((prevTasks) => {
      if (prevTasks.includes(date)) {
        return prevTasks.filter((key) => key !== date);
      } else {
        return [...prevTasks, date];
      }
    });
  };
  function handledatebutton(){
    setdatebutton(!dateButton)
  }
  return (
    <div id="taskplace">
      <div id="addtask" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' }}>
        <input
          type="text"
          placeholder="Add your to do task..."
          id="task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="addBut" onClick={handleAddTask}>
          Add
        </button>
        <br />
        <br />
        <span id="item-date" onClick={handledatebutton}>&#128197;</span> Date
      </div>
      {dateButton && <DateComponent />}
      {buttonClick && renderTasks()}
    </div>
  );
};

export default TaskManager;
