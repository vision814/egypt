import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ListGroup from "react-bootstrap/ListGroup";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
//import TransitionAlerts from "../../component/populations/Alert";
//import PopulationTotal from "../../component/populations/PopulationTotal";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { listPop } from "../../redux/actions/populationAction/population";
import ChartLine from "../../component/chart/population/TotalPeople";
import ChartLineFamily from "../../component/chart/population/TotalFamily";
import TotalSex from "../../component/chart/population/TotalSex";
import TotalPopulation from "../../component/chart/population/TotalPopulation";
import ChartBarFamily from "../../component/chart/population/bar/TotalFamilyBar";
import TotalSexBar from "../../component/chart/population/bar/TotalSexBar";
import TotalPopBar from "../../component/chart/population/bar/TotalPopBar";
import TotalPeopleBar from "../../component/chart/population/bar/TotalPeopleBar";
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
const Populations = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listPopReducer = useSelector((state) => state.listPopReducer);
  const { populations, error, loading } = listPopReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState(populations);
  useEffect(() => {
    dispatch(listPop());
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
      headerName: "عدد الأفــــراد القاطنين بها",
      field: "عدد الأفــــراد القاطنين بها",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد الأفــــراد القاطنين بها اناث",
      field: "عدد الأفــــراد القاطنين بها اناث",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد الأفــــراد القاطنين بها ذكور",
      field: "عدد الأفــــراد القاطنين بها ذكور",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد المساكن العامة",
      field: "عدد المساكن العامة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "جملــة عدد أفراد الأسر",
      field: "جملــة عدد أفراد الأسر",
      sortable: true,
      filter: true,
    },
    {
      headerName: "إنــاث عدد أفراد الأسر",
      field: "إنــاث عدد أفراد الأسر",
      sortable: true,
      filter: true,
    },
    {
      headerName: "ذكــورعدد أفراد الأسر ",
      field: "ذكــورعدد أفراد الأسر ",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد الأسر",
      field: "عدد الأسر",
      sortable: true,
      filter: true,
    },
    {
      headerName: "إجمــالى عــدد السكـــان",
      field: "إجمــالى عــدد السكـــان",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد السكان اناث",
      field: "عدد السكان اناث",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد السكان ذكور",
      field: "عدد السكان ذكور",
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
      setResult(populations);
    } else if (city !== "" && seniority == "" && center == "") {
      setResult(populations.filter((x) => x.city == city));
    } else if (city !== "" && seniority !== "" && center == "") {
      setResult(
        populations.filter((x) => x.city == city && x["مدينة"] == seniority)
      );
    } else if (city !== "" && seniority !== "" && center !== "") {
      setResult(
        populations.filter(
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
      ) : populations ? (
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

                {populations

                  ?.filter(
                    (x, i) =>
                      populations.findLastIndex((y) => y.city == x.city) == i
                  )
                  ?.map((dep) => (
                    <option value={dep.city}>{dep.city}</option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
                value={seniority}
                onChange={(e) => setSeniority(e.target.value)}
                disabled={city == ""}
              >
                <option value="Egypt">اختر المدينة</option>
                {populations
                  ?.filter(
                    (x, i) =>
                      populations.findLastIndex(
                        (y) => y["مدينة"] == x["مدينة"]
                      ) == i
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
                {populations
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
                تعداد السكان 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result.length !== 0 ? result : populations}
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
                    <TotalSex
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <TotalPopulation
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <ChartLine
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineFamily
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <Card>
                    <TotalSexBar
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <TotalPopBar
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <TotalPeopleBar
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarFamily
                      result={result.length !== 0 ? result : populations}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </Container>
  );
};

export default Populations;
