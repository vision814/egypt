import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ListGroup from "react-bootstrap/ListGroup";

//import TransitionAlerts from "../../component/populations/Alert";
//import PopulationTotal from "../../component/populations/PopulationTotal";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { listHousing } from "../../redux/actions/housing/housing";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import ResidenceLine from "../../component/chart/house/line/ResidenceLine";
import ResidenceBar from "../../component/chart/house/bar/ResidenceBar";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Housing = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listHousingReducer = useSelector((state) => state.listHousingReducer);
  const { housing, error, loading } = listHousingReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(listHousing());
  }, [city, center, seniority]);
  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "city",
      sortable: true,
      filter: true,
    },
    {
      headerName: "مدينة",
      field: "مدينة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "شياخة",
      field: "شياخة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "التبعية",
      field: "التبعية",
      sortable: true,
      filter: true,
    },

    {
      headerName: "غير متصل بالغاز طبيعي ",
      field: "غير متصل بالغاز طبيعي ",
      sortable: true,
      filter: true,
    },
    {
      headerName: "  بالغاز طبيعي متصل",
      field: "  بالغاز طبيعي متصل",
      sortable: true,
      filter: true,
    },
    {
      headerName: "غير متصل صرف صحي ",
      field: "غير متصل صرف صحي ",
      sortable: true,
      filter: true,
    },
    {
      headerName: "متصل صرف صحي",
      field: "متصل صرف صحي",
      sortable: true,
      filter: true,
    },
    {
      headerName: "غير متصل بمياه الشرب",
      field: "غير متصل بمياه الشرب",
      sortable: true,
      filter: true,
    },
    {
      headerName: "متصل بمياه الشرب  ",
      field: "متصل بمياه الشرب  ",
      sortable: true,
      filter: true,
    },
    {
      headerName: "غير متصل بالكهرباء",
      field: "غير متصل بالكهرباء",
      sortable: true,
      filter: true,
    },
    {
      headerName: " متصل بالكهرباء",
      field: " متصل بالكهرباء",
      sortable: true,
      filter: true,
    },
    {
      headerName: "إجمالي المباني*",
      field: "إجمالي المباني*",
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  useEffect(() => {
    if (city == "") {
      setResult(housing);
    } else if (city !== "" && seniority == "" && center == "") {
      setResult(housing.filter((x) => x.city == city));
    } else if (city !== "" && seniority !== "" && center == "") {
      setResult(
        housing.filter((x) => x.city == city && x["مدينة"] == seniority)
      );
    } else if (city !== "" && seniority !== "" && center !== "") {
      setResult(
        housing.filter(
          (x) =>
            x.city == city && x["مدينة"] == seniority && x["شياخة"] == center
        )
      );
    }
  }, [city, center, seniority]);
  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : housing ? (
        <>
          <Row>
            <Col>
              <Form.Select
                aria-label="Default select example"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Egypt">الجمهورية</option>

                {housing
                  ?.filter(
                    (x, i) =>
                      housing.findLastIndex((y) => y.city == x.city) == i
                  )
                  ?.map((dep) => (
                    <option value={dep.city}>{dep.city}</option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                style={{ marginBottom: "10px" }}
                value={seniority}
                onChange={(e) => setSeniority(e.target.value)}
                disabled={city == ""}
              >
                <option value="Egypt">اختر المدينة</option>
                {housing
                  ?.filter(
                    (x, i) =>
                      housing.findLastIndex((y) => y["مدينة"] == x["مدينة"]) ==
                      i
                  )
                  ?.filter((x) => x.city == city)
                  ?.map((dep) => (
                    <option value={dep["مدينة"]}>{dep["مدينة"]}</option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                style={{ marginBottom: "10px" }}
                value={center}
                onChange={(e) => setCenter(e.target.value)}
                disabled={city == "" || seniority == ""}
              >
                <option value="Egypt">اختر الشياخة</option>
                {housing
                  ?.filter((x) => x.city == city && x["مدينة"] == seniority)
                  .map((dep) => (
                    <option value={dep["شياخة"]}>{dep["شياخة"]}</option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography
                variant="h4"
                style={{ textAlign: "right", marginBottom: "10px" }}
              >
                الاتصال بالمرافق العام 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result.length !== 0 ? result : housing}
                  columnDefs={columnsDefs}
                  defaultColDef={defaultColDef}
                  rowSelection="multiple"
                  animateRows={true}
                />
              </div>
            </Col>
          </Row>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Graphs
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Line " {...a11yProps(0)} />
                <Tab label="Bar" {...a11yProps(1)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <Card>
                    <ResidenceLine
                      result={result?.length !== 0 ? result : housing}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card></Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <ResidenceBar
                      result={result?.length !== 0 ? result : housing}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card></Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </Container>
  );
};

export default Housing;
