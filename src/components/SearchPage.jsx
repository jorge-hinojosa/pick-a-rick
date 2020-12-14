import React from 'react';
import { ProfileContext } from './ProfilesContextProvider';
import MinimalButton from './MinimalButton';
import SearchGrid from './SearchGrid';

class SearchPage extends React.Component {
  static contextType = ProfileContext;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  handleFilter = () => {
    this.context.dispatch({ type: 'FILTER_RICKS', payload: 'Earth' });
  };

  handleResetFilters = () => {
    this.context.dispatch({ type: 'RESET_RICKS' });
  };

  render() {
    const FILTER_SORT_APPLIED = this.context.mutatedProfiles;

    return (
      <React.Fragment>
        <main style={{ margin: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: FILTER_SORT_APPLIED ? 'space-between' : 'flex-end',
              marginBottom: 15,
            }}
          >
            {FILTER_SORT_APPLIED && (
              <button
                onClick={this.handleResetFilters}
                style={{
                  background: 'none',
                  color: 'blue',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                Reset Profiles
              </button>
            )}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MinimalButton onClick={this.handleFilter}>
                <img src="filter.svg" width={22} alt="filter" />
              </MinimalButton>

              <MinimalButton onClick={this.handleSortAscending}>
                <img src="./ascending.svg" width={22} alt="Sort ascending" />
              </MinimalButton>

              <MinimalButton onClick={this.handleSortDescending}>
                <img src="./descending.svg" width={22} alt="Sort descending" />
              </MinimalButton>
            </div>
          </div>

          <SearchGrid />
        </main>
      </React.Fragment>
    );
  }
}

export default SearchPage;
