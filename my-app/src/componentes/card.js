import React from "react";
import './App.css';
import DisplayCourse from "../Container/mapeoJson"

const display = document.querySelector("article");



function card_courses() {
    return (


        <div>
            <article className="grid">
                <h2>Programming Courses</h2>
                <div className="information">
                    < DisplayCourse />
                  
                </div>
            </article>
        </div>
    );
}

export default card_courses;
