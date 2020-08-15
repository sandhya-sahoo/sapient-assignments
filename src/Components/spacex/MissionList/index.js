import React from "react";
import { connect } from "react-redux";
import MissionCard from "../MissionCard/index";
import FilterPanel from "../FilterPanel";
import ErrorComponent from "../ErrorComponent";
import { getItems } from "../../../Actions/action";
import styles from './product.module.css'

class MissionList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItem();
  }
  render() {
    return (
      <div className={styles.containerRow}>
        {this.props.product && this.props.product.length ? (
          <div className={styles.filterPanel}>
            <FilterPanel data={this.props.product} />
          </div>
        )
        : (null)
      }
        <div className={styles.row}>
          {this.props.product && this.props.product.length ? (
            this.props.product.map((item, index) => {
              return <MissionCard key={index} item={item} />;
            })
          ) : this.props.product && this.props.product.length == 0 ? (
            <h1>No missions for the filters set</h1>
          ) : (
            <ErrorComponent message={this.props.message} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    message: state.message
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getItem: () => {
      dispatch(getItems());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
