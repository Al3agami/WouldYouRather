import { connect } from 'react-redux'

const ErrorPage = (props) => {
    return (
        <div>
            <h3 className='center text-danger'>404 {props.match.params.msg}</h3>
        </div>
    );
}

export default connect()(ErrorPage)