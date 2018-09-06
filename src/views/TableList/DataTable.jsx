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
            return {
                SAMPLE_PACKAGE: c.SAMPLE_PACKAGE,
                SGTIN: c.SGTIN,
                BATCHNUMBER: c.BATCHNUMBER,
                PRODUCTNDC:c.PRODUCTNDC,
                STARTMARKETINGDATE: c.STARTMARKETINGDATE,
                NDC_EXCLUDE_FLAG: c.NDC_EXCLUDE_FLAG,
                ENDMARKETINGDATE: c.ENDMARKETINGDATE,
                PACKAGEDESCRIPTION: c.PACKAGEDESCRIPTION,
                NDCPACKAGECODE: c.NDCPACKAGECODE,
                PRODUCTID: c.PRODUCTID,
                EXPIRYDATE: c.EXPIRYDATE,
                MANUFACTURER: c.MANUFACTURER,
                DRUG: c.DRUG,
                APPLICATIONNUMBER: c.APPLICATIONNUMBER,
                lotId: c.lotId,
                SSCC: c.SSCC
            };
          });
  
          // create a new "state" object without mutating
          // the original state object.
          const newState = Object.assign({}, this.state, {
            Products: newProducts
          });
          console.log("NewProduct"+newState.Products);
          // store the new state object in the component's state
          this.setState({newState});
          console.log("Products:"+this.state.Products);
        })
        .catch(error => console.log(error));
    }
  
    render() {
      //const { classes } = props;
      return (
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>All Products</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["SGTIN", "Sample Package", "Product NDC", "Batch Number",
                          "Start Marketing Date", "NDC Exclude Flag", "Package Description",
                          "NDC Package Code", "Product ID", "Expiry Date", "Drug",
                          "Manufacturer", "Application Number", "Lot ID", "SSCC"
                ]}
              tableData={this.state.Products}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={styles.cardTitleWhite}>
              Table on Plain Background
            </h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
        
      );
    }
  }

export default withStyles(styles)(MyTable);;