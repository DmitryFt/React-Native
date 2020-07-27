import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterLink from '../components/FilterLink';
import {VisibilityFilters} from '../reducers/filtersSlice';

const FilterTodo = () => (
  <View style={styles.filterGroup}>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      <Text style={styles.filter}>All</Text>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      <Text style={styles.filter}>Active</Text>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      <Text style={styles.filter}>Completed</Text>
    </FilterLink>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    padding: 5,
  },
  filter: {
    margin: 5,
    backgroundColor: '#FFA500',
    borderRadius: 13,
    padding: 7,
    fontSize: 15,
  },
});

export default FilterTodo;
// export default App;
