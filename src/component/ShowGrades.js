import React from 'react'

export const ShowGrades = ({subjects}) => {
  
    
    function subjectTotalGrade() {
        return subjects.finals + subjects.prefinal + subjects.midtem + subjects.prelim
    }

    // function gwa() {
    //     console.log(subjectTotalGrade() / subjects.length)
    //     return subjectTotalGrade() / subjects.length
    // }
    
  return (
    <div className=' border-black border-2 p-3 '>
        <section className='grid grid-rows-2'>
                {subjects && subjects.map((subject) => {
                        return (
                                <div className='grid auto-rows-auto   grid-cols-6'>
                                    <span  className="bg-gray-50 text-wrap border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        Subject 1: {subject.subject}
                                    </span>
                                    <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        prelim: {subject.prelim}
                                    </span>
                                    <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        midtem: {subject.midtem}
                                    </span>
                                    <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        prefinal: {subject.prefinal}
                                    </span>
                                    <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        finals: {subject.finals}
                                    </span>
                                    <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                        Total grade: {(subject.finals + subject.prefinal + subject.midtem + subject.prelim) / 4 }
                                    </span> 
                                </div>
                                
                            )
                        }
                    )
                }
                <span  className="text-center bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "  >
                    Total grade: {subjectTotalGrade}
                </span> 
                
        </section>
    </div>
  )
}
