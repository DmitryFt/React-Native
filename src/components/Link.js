import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Link = ({active, children, setVisibilityFilter, filter}) => (
  <TouchableOpacity
    onPress={() => setVisibilityFilter(filter)}
    disabled={active}>
    {children}
  </TouchableOpacity>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link;
