import PropTypes from 'prop-types'
import Button from './Button'
import Body from './Body'

const Header = ({title})=> {
  return (
    <header>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
        <Body />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
