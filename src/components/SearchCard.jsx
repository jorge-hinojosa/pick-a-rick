import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
  },
};

export default class Search extends React.PureComponent {
  render() {
    const { photoUrl = '', handle = '', location = '', id } = this.props;

    return (
      <div style={styles.card}>
        <Link
          to={`/profile/${id}`}
          style={{
            textDecoration: 'none',
            color: '#FFF',
          }}
          className="rick-card"
        >
          <div
            style={{
              border: '1px solid lightgray',
              borderRadius: 8,
              boxShadow: '0 3px 6px lightgray, 0 3px 6px',
              overflow: 'hidden',
            }}
          >
            <div style={styles.avatar}>
              <img src={photoUrl} alt="potential date"></img>

              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  bottom: '0',
                  borderRadius: 'inherit',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    margin: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <h6
                      style={{
                        fontSize: '18px ',
                        fontWeight: 'bold',
                        '-webkit-text-stroke-width': 1,
                        '-webkit-text-stroke-color': 'black',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {handle}
                    </h6>
                    {location && location !== 'unknown' && (
                      <span
                        style={{
                          fontSize: '16px ',
                          fontWeight: 'bold',
                          '-webkit-text-stroke-width': 1,
                          '-webkit-text-stroke-color': 'black',
                          marginTop: 4,
                        }}
                      >
                        {location}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Overlay for better legibility of User Info (JHC) */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  bottom: '0',
                  borderRadius: 'inherit',
                  backgroundColor: 'darkgrey',
                  opacity: '0.2',
                }}
              ></div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
