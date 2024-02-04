import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { AddGrades } from './component/AddGrades';
import { ShowGrades } from './component/ShowGrades';
import { useEffect, useState } from 'react';
function App() {
  
  const [subjects, setSubjects] = useState(JSON.parse(localStorage.getItem('subjects')) || [])

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects))
  }, [subjects])
  
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
