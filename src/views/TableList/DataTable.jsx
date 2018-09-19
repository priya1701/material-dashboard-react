import React, { Component } from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};



class MyTable extends Component {
    // default state object
    state = {
      Products: []
    };
  
    componentDidMount() {
      axios
        .get("http://13.126.150.151:3000/api/Product")
        .then(response => {

          //console.log("res.obj="+typeof response.data);
          // create an array of contacts only with relevant data
          // var res = JSON.parse(response);
          // console.log("res.obj="+typeof res);
          
          const newProducts = response.data.map(c => {
            return [
                 c.SAMPLE_PACKAGE,
                 c.SGTIN,
                 c.BATCHNUMBER,
                 c.PRODUCTNDC,
                 c.STARTMARKETINGDATE,
                 c.NDC_EXCLUDE_FLAG,
                 c.ENDMARKETINGDATE,
                 c.PACKAGEDESCRIPTION,
                 c.NDCPACKAGECODE,
                 c.PRODUCTID,
                 c.EXPIRYDATE,
                 c.MANUFACTURER,
                 c.DRUG,
                 c.APPLICATIONNUMBER,
                 c.lotId,
                 c.SSCC
            ];
          });
  
          // create a new "state" object without mutating
          // the original state object.
          const newState = Object.assign({}, {
            Products: newProducts
          });
          console.log("NewProduct"+newState.Products);
          // store the new state object in the component's state
          this.setState({Products: newState.Products});
          console.log("Products:"+Object.keys(this.state.Products));
        })
        .catch(error => console.log(error));
    }
  
    render() {
      const { classes } = this.props;
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>All Products</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p> */}
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Sample Package", "SGTIN", "Batch Number", "Product NDC",
                              "Start Marketing Date", "NDC Exclude Flag", "End Marketing Date",
                              "Package Description", "NDC Package Code", "Product ID", "Expiry Date", "Drug",
                              "Manufacturer","Drug", "Application Number", "Lot ID", "SSCC"
                    ]}
                  tableData={this.state.Products}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  }

export default withStyles(styles)(MyTable);;