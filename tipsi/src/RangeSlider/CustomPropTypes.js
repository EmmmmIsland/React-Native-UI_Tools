/**
 * Created by wangl on 2017/4/25.
 */
import { PropTypes } from 'react'

export const StylePropType = PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ])
    ),
])

export const ThemePropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ])
    ),
])