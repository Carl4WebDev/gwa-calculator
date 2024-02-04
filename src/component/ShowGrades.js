
export const ShowGrades = ({subjects}) => {
  
    let totalGrade = 0;
    
    const subjectTotalGrade = (subject) => {
        const finalGradeSubject = (subject.finals * 0.40) + (subject.prefinal * 0.20) + (subject.midterm * 0.20)+ (subject.prelim * 0.20);
        totalGrade += finalGradeSubject;
        return finalGradeSubject.toFixed(2);
    }
    
    const gwa = () => {
        const gwaDisplay = totalGrade / subjects.length;

        if(gwaDisplay){
            return gwaDisplay.toFixed(2); 
        }else {
            return "calculating..."
        }

    }
  return (
    <div className='  p-3 '>
        <section className='grid grid-rows-2  md:grid-cols-2 '>
                {subjects && subjects.map((subject) => {

                        return (
                                <div className='grid text-center '  key={subject.subject}>
                                    <div className="grid grid-rows-6 auto-cols-auto bg-gray-50  border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
                                        
                                        <span  className="text-amber-400 bg-gray-50  border border-gray-300 font-bold text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            {subject.subject}
                                        </span><span  className="  bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            prelim: {subject.prelim}
                                        </span>
                                        <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            midtem: {subject.midterm}
                                        </span>
                                        <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            prefinal: {subject.prefinal}
                                        </span>
                                        <span  className="bg-gray-50 border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            finals: {subject.finals}
                                        </span>
                                        <span  className="text-blue-700  bg-gray-50 border border-gray-300 font-bold text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            Total grade: {subjectTotalGrade(subject)}
                                        </span> 
                                    </div>
                                    
                                </div>
                                
                            )
                        }
                    )
                }
            <span  className="text-blue-700  grid md:col-span-2 row-end-1  bg-gray-50 border text-center border-gray-300 font-bold text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                <span className=" text-amber-400 ">
                    GWA:                    
                </span>
                    {gwa() }
            </span> 
            {/* <span  className=" grid md:col-span-2 row-end-2  bg-gray-50 border text-left border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                <span className=" text-amber-400 grid grid-cols-2">                 
                    Grading System:
                    97.50 -100% (1.00) Excellent <br />
                    94.50 -97.49% (1.25) Very Good <br />
                    91.50 -94.49% (1.50) Very Good <br />
                    ✩88.50 -91.49% (1.75) Very Good <br />
                    <span>

                        85.50 -88.49% (2.00) Satisfactory <br />
                        82.50 -85.49% (2.25) Satisfactory <br />
                        79.50 -82.49% (2.50) Satisfactory <br />
                        76.50 -79.49% (2.75) Fair <br />
                        74.50 -76.49% (3.00) Fair <br />
                        Below 74.49% (5.00) Failed <br />
                        Dropped (DRP) Official Dropped <br />
                        Incomplete (INC) Incomplete Requirements <br />                 
                    </span>
                </span>
            </span>  */}
        </section>
    </div>
  )
}
