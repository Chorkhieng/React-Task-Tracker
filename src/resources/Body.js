import PropTypes from 'prop-types'

const Body = ()=> {
  return (
    <div>
        <textarea className='text-area' type='text'></textarea>
    </div>
  )
}

Body.defaultProps = {
    title: 'some text',
}


Body.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Body