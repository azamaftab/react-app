import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class Course extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Course Page</legend>

                        <div class="form-group">
                            <TextField
                                id="full-width"
                                label="Course"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Add Courses"
                                fullWidth
                                margin="normal"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Course;