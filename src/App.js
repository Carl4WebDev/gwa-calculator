import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { AddGrades } from './component/AddGrades';
import { ShowGrades } from './component/ShowGrades';
import { useState } from 'react';
function App() {

  // const subjects = [
  //   {subject: "Mathematics", prelim: 90, midtem: 91, prefinal: 89, finals: 90},
  //   {subject: "Computer Programming", prelim: 92, midtem: 95, prefinal: 83, finals: 94},
  //   {subject: "Intro to computing", prelim: 92, midtem: 94, prefinal: 87, finals: 99},
  // ]
  
  const [subjects, setSubjects] = useState([
    {subject: "Mathematics", prelim: 90, midtem: 91, prefinal: 89, finals: 90},
    {subject: "Computer Programming", prelim: 92, midtem: 95, prefinal: 83, finals: 94},
    {subject: "Intro to computing", prelim: 92, midtem: 94, prefinal: 87, finals: 99},
  ])

  console.log(subjects[0].finals)
  
  return (
    <div className=''>
      <Header />
      <AddGrades subjects={subjects} setSubjects={setSubjects} />
      <ShowGrades subjects={subjects}/>
      <Footer />
    </div>
  );
}

export default App;
