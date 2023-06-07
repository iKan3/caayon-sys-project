import React from "react";
import { Form, } from "react-router-dom";

export function Jobs() {
    return (
        <div>
            <div><h2>Job Listing</h2></div>
            <div>
                <Form id="contact-form">
                    <label>
                        <span>Job Title</span>
                        <input
                            placeholder="Please enter the job title or the position you are interested in"
                            aria-label="First name"
                            type="text"
                            name="Title"
                        />
                    </label>
                    <label>
                        <span>Location</span>
                        <input
                            placeholder="Please enter your desired location, e.g., city, state, or country"
                            aria-label="Last name"
                            type="text"
                            name="last"
                        />
                    </label>
                    <label>
                        <span>Job Type</span>
                        <input
                            placeholder="Please select the type of job you are interested in, e.g., full-time, part-time, or internship"
                            aria-label="Last name"
                            type="text"
                            name="last"
                        />
                    </label>
                    <label>
                        <span>Education</span>
                        <input
                            placeholder="Please enter your highest level of education, e.g., high school diploma, associate's degree, or bachelor's degree"
                            aria-label="Last name"
                            type="text"
                            name="last"
                        />
                    </label>
                    <label>
                        <span>Details</span>
                        <input
                            placeholder="Please enter any additional details or requirements you are looking for,"
                            aria-label="Last name"
                            type="text"
                            name="last"
                        />
                    </label>
                </Form>
            </div>
            <br />
            <div><button type="submit">Save</button></div>
        </div>
    );
}
