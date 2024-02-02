import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'

export const AddGrades = () => {
    
  // function calculate_gwa(event) {
  //   event.defaultPrevented()


  //   let newSubject = {
  //     subject: event.target.subject.value, 
  //     prelim: event.target.prelim.value, 
  //     midterm: event.target.midterm.value, 
  //     prefinal: event.target.prefinal.value, 
  //     final: event.target.final.value, 
  //   }

  //   setSubject([...subjects, newSubject])
  // } 
  return (
    <div className=' border-black border-2 p-3 '>
        <section>
            {/* <span className='flex justify-evenly'>
                <span>Subject</span>
                <span>Grade</span>
            </span> */}
            <form className='flex flex-wrap justify-evenly gap-5'>
                <input type="text" name='subject' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the subject" required />
                <input type="text" name='prelim' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prelim grade" required />
                <input type="text" name='midterm' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Midterm grade" required />
                <input type="text" name='prefinal' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prefinals grade" required />
                <input type="text" name='final' className="bg-gray-50 border border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Finals grade" required />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </form>
        </section>
    </div>
  )
}
