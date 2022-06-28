import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button color='green' text='Hello' />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header