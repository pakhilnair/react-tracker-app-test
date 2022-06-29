import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    // const onClick = (e) => {
    //     console.log(e)
    // }
  return (
    <button onClick={onClick} style={{ backgroundColor:color }} className='btn'>Add</button>
  )
}

Button.defaultProps = {
    color: 'black',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button