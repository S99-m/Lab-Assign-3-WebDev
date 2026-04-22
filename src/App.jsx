import Heading from "./components/Heading";
import AddStudent from "./components/AddStudent";
import StudentsSummary from "./components/StudentsSummary";
import AllDetails from "./components/AllDetails";
import { useState } from "react";

function App(){
  const initialStudents=[
    {id:1,name:"Aman",score:78},
    {id:2,name:"Alex",score:58},
    {id:3,name:"Joy",score:78}
  ]
  const[students,setStudents]=useState(initialStudents)
  const updateScore = (index, newScore) => {
  const updated = students.map((s, i) =>
    i === index ? { ...s, score: Number(newScore) } : s
  )
  setStudents(updated)
}
  
  return(
    <div className="min-h-screen w-full flex flex-col items-center gap-10 py-10 px-4 bg-gradient-to-br from-black via-[#001f1f] to-[#003333]">
    <Heading/>
    <AddStudent students={students} setStudents={setStudents}/>
    <StudentsSummary students={students}/>
    <AllDetails students={students} updateScore={updateScore} />
    
    </div>
  )
}
export default App;