import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';


class Course extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            course: { Title: "" }
        }
        this.handleChange = this.handleChange.bind(this);
     //   this.saveCourse = this.saveCourse.bind(this);
    };
    handleChange(event) {
        const course = this.state.course;
        course.Title = event.target.value;
        this.setState({course:course});
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Course Page</legend>

                        <div className="form-group">
                            <TextField
                                id="full-width"
                                label="Course"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Add Courses"
                                fullWidth
                                margin="normal"
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" onChange={this.saveCourse} className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Course;