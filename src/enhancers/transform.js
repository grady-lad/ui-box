import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string,
}

export const propAliases = {}

export const propValidators = {}

const transform = {
  className: 'tfrm',
  cssName: 'transform',
  jsName: 'transform',
  complexValue: true,
}
const transformOrigin = {
  className: 'tfrm-orgn',
  cssName: 'transform-origin',
  jsName: 'transformOrigin',
  complexValue: true,
}

export const propEnhancers = {
  transform: value => getCss(transform, value),
  transformOrigin: value => getCss(transformOrigin, value),
}
