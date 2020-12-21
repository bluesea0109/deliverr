import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Sandwich = ({ sandwich, number, inventory, handleAddSandwich }) => {
  const { name, price, ingredients } = sandwich
  const [enabledAddButton, setEnabledAddButton] = useState(true)

  useEffect(() => {
    Object.keys(ingredients).forEach((key) => {
      if (ingredients[key] > inventory[key]) {
        setEnabledAddButton(false)
      }
    })
  }, [inventory, ingredients, enabledAddButton])

  return (
    <div className='card'>
      <div className={`card__side card__side--front-${number + 1}`}>
        <div className={`card__title card__title--${number + 1}`}>
          <h4 className='card__heading'>{name}</h4>
        </div>

        <div className='card__details'>
          <ul>
            {Object.keys(ingredients).map((key) => {
              return (
                <li key={key}>
                  {key}: {ingredients[key]}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back card__side--back-${number + 1}`}
      >
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>Price</p>
            <p className='card__price-value'>${price}</p>
          </div>
          {enabledAddButton && (
            <button
              className='btn card__btn--white'
              onClick={() => handleAddSandwich(sandwich)}
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

Sandwich.propTypes = {
  sandwich: PropTypes.object,
  number: PropTypes.number,
  inventory: PropTypes.object,
  handleAddSandwich: PropTypes.func,
}

export default Sandwich
