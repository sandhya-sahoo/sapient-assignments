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
            landing: false,
        }
        this.findUniqueYear = this.findUniqueYear.bind(this);
        this.deligatedEvent = this.deligatedEvent.bind(this);
    }

    findUniqueYear(itemList) {
        let lunchYrArr = [],
          filterUniqueYear = [];
        if (itemList && itemList.length) {
          itemList.map((item) => {
            return lunchYrArr.push(item.launch_year);
          });
        }
        if (lunchYrArr.length) {
          lunchYrArr = lunchYrArr.sort();
          filterUniqueYear = lunchYrArr.filter(
            (item, index, arr) => arr.indexOf(item) === index
          );
        }
        return filterUniqueYear;
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
        let uniqueYearValues = this.findUniqueYear(this.props.data);
        return (
          <div
            className={styles.filterPanelContainer}
            onClick={(e) => this.deligatedEvent(e)}
          >
            <h3>Filters</h3>
            <div className={styles.header}>Lunch Year</div>
            <div className={styles.buttonContainer} id="yearBtn">
              {uniqueYearValues.length
                ? uniqueYearValues.map((item, index) => {
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