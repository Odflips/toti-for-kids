import React from "react";
import './App.css';
import DisplayCourse from "../mapeoJson"



function CardCourses() {
    return (


        <div>
            <div className="directory_menu" >
               
            </div >

            <article className="grid">
                <h2>Programming Courses</h2>
                <div className="information">
                    < DisplayCourse />
                </div>
            </article>
        </div>
    );
}

export default CardCourses;
