import { useEffect, useState } from "react";

export const ShowGrades = ({subjects}) => {
  
    const [creditPointsCourse, setCreditPointsCourse] = useState(0)
    const [courseGrade, setCourseGrade] = useState(0)

    useEffect(() => {

        const courseGrade = (subject) => {
            const {prelim, midterm, prefinal, finals} = subject;
            const courseGrade =  (prelim * 0.20)+ (midterm * 0.20) + (prefinal * 0.20) + (finals * 0.40) ;   
    
            
            if(courseGrade <= 97.50 || courseGrade === 100){
                setCreditPointsCourse(1);
                setCourseGrade(courseGrade)
            }
            if(courseGrade <= 94.50 || courseGrade >= 97.49){
                setCreditPointsCourse(1.25);
                setCourseGrade(courseGrade)
            }
            if(courseGrade <= 91.50 || courseGrade >= 94.49){
                setCreditPointsCourse(1.50);
                setCourseGrade(courseGrade)
            }
            return courseGrade.toFixed(2);
        }
        const courseGradePrint = courseGrade(subjects)
        console.log(courseGradePrint)
    }, [creditPointsCourse])


  return (
    <div className='  p-3 '>
        <section className='grid grid-rows-2  md:grid-cols-2 '>
                {subjects && subjects.map((subject) => {    
                        return (
                                <div className='grid text-center '  key={subject.subject}>
                                    <div className="grid grid-rows-6 auto-cols-auto bg-gray-50  border border-gray-300 font-bold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
                                        
                                        <span  className="text-amber-400 bg-gray-50  border border-gray-300 font-bold text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                                            {subject.subject} <br />
                                            Couse Unit: {subject.course_unit}
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
                                            Course Grade(CG): {courseGrade} <br />
                                            Credit Points Course(CPC): {creditPointsCourse}
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
                    {/* {gwa() } */}
            </span> 
            
        </section>
    </div>
  )
}
