import React from "react";
import './App.css';
import DisplayCourse from "../mapeoJson"


const display = document.querySelector("article");

function gridClick() {
    display.classList.add("grid");
    display.classList.remove("list");

}

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");

}

function card_courses() {
    return (


        <div>
            <div className="directory_menu" >
                <button onClick={gridClick} id="grid">Course</button>
                <button onClick={showList} id="list">Student portal</button>
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

export default card_courses;
