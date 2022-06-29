import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button color='green' text='Add' onClick={ onAdd } />
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