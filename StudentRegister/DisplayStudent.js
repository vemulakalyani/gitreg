import PropTypes from 'prop-types'
const DisplayStudent = props => {

    return <>{}
        <tr className="text-center">
            <td>{ props.student.id }</td>
            <td>{ props.student.name }</td>
            <td>{ props.student.batch}</td>
            <td>{props.student.course}</td>
            <td>
                <button disabled={props.actionhideflag} onClick={() => {
                    props.updateStudent(props.student.id)
                }} className="btn btn-info" >Edit</button>
                <button  disabled={props.actionhideflag} onClick={() => {
                    props.removeStudent(props.student.id)
                }} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    </>
}
DisplayStudent.propTypes={
    student:PropTypes.object,
    removeStudent:PropTypes.func,
    updateStudent:PropTypes.func,
    actionhideflag:PropTypes.bool
}

export default DisplayStudent