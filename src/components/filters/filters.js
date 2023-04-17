import PropTypes from 'prop-types'

const Filters = ({ showMenu, onHandleFilterMenu}) => {
    return (
        <fieldset className="flex flex-row items-center justify-between w-3/12" >
            <legend className="text-lg font-bold py-4">Show</legend>
            <span>
                <input
                    className='mr-4'
                    type="radio"
                    name='menu'
                    value='sandwiches'
                    checked={showMenu === 'sandwiches'}
                    onChange={onHandleFilterMenu}/>
                <label
                    className='text-lg font-semibold'
                    htmlFor='sandwich'>
                    Sandwiches
                </label>
            </span>
            <span>
                <input
                    className='mr-4'
                    type="radio"
                    name='menu'
                    value='extras'
                    checked={showMenu === 'extras'}
                    onChange={onHandleFilterMenu}/>
                <label
                    className='text-lg font-semibold'
                    htmlFor='extras'>
                        Extras
                </label>
            </span>
            <span>
                <input
                    className='mr-4'
                    type="radio"
                    name='menu'
                    value='all'
                    checked={showMenu === 'all'}
                    onChange={onHandleFilterMenu}/>
                <label
                    className='text-lg font-semibold'
                    htmlFor='all'>
                        All
                        </label>
            </span>
        </fieldset>
    );
}

Filters.prototypes = {
    showMenu: PropTypes.string,
    onHandleFilterMenu: PropTypes.func
}

export default Filters;
