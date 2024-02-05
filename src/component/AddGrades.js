import React from 'react'

export const AddGrades = ({subjects,setSubjects}) => {
    
  const handleGwa = (event) => {
    event.preventDefault()

    let newSubject = {
      subject: event.target.subject.value, 
      prelim: event.target.prelim.value, 
      midterm: event.target.midterm.value, 
      prefinal: event.target.prefinal.value, 
      finals: event.target.finals.value,
      course_unit: event.target.course_unit.value
    }
    
    setSubjects([...subjects, newSubject])

    // const subject = event.target.subject.value
    // const prelim =  event.target.prelim.value
    // const midterm = event.target.midterm.value
    // const prefinal = event.target.prefinal.value
    // const finals = event.target.finals.value

    let resetInput = {
      subject: event.target.subject.value = "", 
      prelim: event.target.prelim.value = "",
      midterm: event.target.midterm.value = "",
      prefinal: event.target.prefinal.value = "",
      finals: event.target.finals.value = "",
      course_unit: event.target.course_unit.value = "",
    }
    return resetInput
  } 
  return (
    <div className='  p-3 '>
        <section>
            <form className='flex flex-wrap justify-evenly gap-5 text-center' onSubmit={handleGwa}>
                <div>
                  <span className='text-md text-gray-900 font-bold '>Enter Subject</span>
                  <input type="text" name='subject' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the subject" required />
                </div>

                <div>
                  <span className='text-md text-gray-900 font-bold'>Enter Prelim Grade</span>
                  <input type="text" name='prelim' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prelim grade" required />

                </div>
                <div>
                  <span className='text-md text-gray-900 font-bold'>Enter Midterm Grade</span>
                  <input type="text" name='midterm' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Midterm grade" required />
                </div>

                <div>
                  <span className='text-md text-gray-900 font-bold'>Enter Prefinals Grade</span>
                  <input type="text" name='prefinal' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prefinals grade" required />
                </div>
                <div>
                  <span className='text-md text-gray-900 font-bold'>Enter Finals Grade</span>
                  <input type="text" name='finals' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Finals grade" required />
                </div>
                <div>
                  <span className='text-md text-gray-900 font-bold'>Enter Course unit</span>
                  <input type="text" name='course_unit' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Course Unit" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </form>
        </section>
    </div>
  )
}
