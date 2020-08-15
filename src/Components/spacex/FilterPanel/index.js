import React from 'react';
import {connect} from 'react-redux';
import{ getAllFilteredItem } from '../../../Actions/action';
import Button from '../Button';
import styles from './filterPanel.module.css';

class FilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            lunch: false,
            landing: false
        }
        this.deligatedEvent = this.deligatedEvent.bind(this);
    }

    deligatedEvent(e) {
        if (e.target.parentNode.id === "yearBtn" && e.target.value != "") {
          this.setState(
            {
              year: e.target.value,
            },
            () => {
              this.props.getAllFilteredItem(
                this.state.lunch,
                this.state.landing,
                this.state.year
              );
            }
          );
        }
        if (e.target.parentNode.id == "lunch" && e.target.value != "") {
          this.setState(
            {
              lunch: e.target.value,
            },
            () => {
              this.props.getAllFilteredItem(
                this.state.lunch,
                this.state.landing,
                this.state.year
              );
            }
          );
        }
        if (e.target.parentNode.id == "landing" && e.target.value != "") {
          this.setState(
            {
              landing: e.target.value,
            },
            () => {
              this.props.getAllFilteredItem(
                this.state.lunch,
                this.state.landing,
                this.state.year
              );
            }
          );
        }
    }
    
    render() {
        const lunchyears = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019, 2020];
        
        return (
          <div
            className={styles.filterPanelContainer}
            onClick={(e) => this.deligatedEvent(e)}
          >
            <h3>Filters</h3>
        <div className={styles.header}>Lunch Year {this.state.lunch}</div>
            <div className={styles.buttonContainer} id="yearBtn">
              {lunchyears.length
                ? lunchyears.map((item, index) => {
                    return (
                      <Button
                        onClick={() =>
                          this.props.getAllFilteredItem(
                            this.state.lunch,
                            this.state.landing,
                            this.state.year
                          )
                        }
                        value={item}
                        active={this.state.year == item ? true: false }
                      />
                    );
                  })
                : null}
            </div>
            <div>
              <div className={styles.header}>Successful Lunch</div>
              <div className={styles.buttonContainer} id="lunch">
                <Button
                  onClick={() =>
                    this.props.getAllFilteredItem(
                      this.state.lunch,
                      this.state.landing,
                      this.state.year
                    )
                  }
                  value="true"
                  active={this.state.lunch == "true" ? true : false }
                />
                <Button
                  onClick={() =>
                    this.props.getAllFilteredItem(
                      this.state.lunch,
                      this.state.landing,
                      this.state.year
                    )
                  }
                  value="false"
                  active={this.state.lunch == "false" ? true : false }
                />
              </div>
            </div>
            <div>
              <div className={styles.header}>Successful Landing</div>
              <div className={styles.buttonContainer} id="landing">
                <Button
                  onClick={() =>
                    this.props.getAllFilteredItem(
                      this.state.lunch,
                      this.state.landing,
                      this.state.year
                    )
                  }
                  value="true"
                  active={this.state.landing == "true" ? true : false }

                />
                <Button
                  onClick={() =>
                    this.props.getAllFilteredItem(
                      this.state.lunch,
                      this.state.landing,
                      this.state.year
                    )
                  }
                  value="false"
                  active={this.state.landing == "false" ? true : false }


                />
              </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getAllFilteredItem: (lunch, landing, year) => {
        dispatch(getAllFilteredItem(lunch, landing, year));
      },
    };
  };
export default connect(null, mapDispatchToProps)(FilterPanel);