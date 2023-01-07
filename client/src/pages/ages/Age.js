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
import { listPopAge } from "../../redux/actions/ages/age";
import { LIST_POPULATIONS_AGE_FAILED } from "../../redux/type";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SexLine from "../../component/chart/age/line/SexLine";
import SexBar from "../../component/chart/age/bar/SexBar";
import ResidenceBar from "../../component/chart/age/bar/ResidenceBar";
import ResidenceLine from "../../component/chart/age/line/ResidenceLine";
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
const Age = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listAgeReducer = useSelector((state) => state.listAgeReducer);
  const { age, error, loading } = listAgeReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(listPopAge());
  }, [city, center, seniority]);
  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "المحافظة",
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
      headerName: "النوع",
      field: "النوع",
      sortable: true,
      filter: true,
    },
    {
      headerName: "+90",
      field: "+90",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-85",
      field: "-85",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-80",
      field: "-80",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-75",
      field: "-75",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-70",
      field: "-70",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-65",
      field: "-65",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-60",
      field: "-60",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-55",
      field: "-55",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-50",
      field: "-50",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-45",
      field: "-45",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-40",
      field: "-40",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-35",
      field: "-35",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-30",
      field: "-30",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-25",
      field: "-25",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-20",
      field: "-20",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-15",
      field: "-15",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-10",
      field: "-10",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-5",
      field: "-5",
      sortable: true,
      filter: true,
    },
    {
      headerName: "-1",
      field: "-1",
      sortable: true,
      filter: true,
    },
    {
      headerName: "أقل من سنة",
      field: "أقل من سنة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الإجمالى",
      field: "الإجمالى",
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
      setResult(age);
    } else if (city !== "" && seniority == "" && center == "") {
      setResult(age.filter((x) => x["المحافظة"] == city));
    } else if (city !== "" && seniority !== "" && center == "") {
      setResult(
        age.filter((x) => x["المحافظة"] == city && x["مدينة"] == seniority)
      );
    } else if (city !== "" && seniority !== "" && center !== "") {
      setResult(
        age.filter(
          (x) =>
            x["المحافظة"] == city &&
            x["مدينة"] == seniority &&
            x["شياخة"] == center
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
      ) : Age ? (
        <>
          <Row>
            <Col>
              <Form.Select
                aria-label="Default select example"
                style={{
                  marginBottom: "10px",

                  fontWeight: "bold",
                }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Egypt">الجمهورية</option>

                {age

                  ?.filter(
                    (x, i) =>
                      age.findLastIndex(
                        (y) => y["المحافظة"] == x["المحافظة"]
                      ) == i
                  )
                  ?.map((dep) => (
                    <option value={dep["المحافظة"]}>{dep["المحافظة"]}</option>
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
                {age
                  ?.filter(
                    (x, i) =>
                      age.findLastIndex((y) => y["مدينة"] == x["مدينة"]) == i
                  )
                  ?.filter((x) => x["المحافظة"] == city)

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
                {age
                  ?.filter(
                    (x) => x["المحافظة"] == city && x["مدينة"] == seniority
                  )
                  ?.map((dep) => (
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
                فئات السن 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result?.length !== 0 ? result : age}
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
                    <SexLine result={result?.length !== 0 ? result : age} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ResidenceLine
                      result={result?.length !== 0 ? result : age}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <SexBar result={result?.length !== 0 ? result : age} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ResidenceBar
                      result={result?.length !== 0 ? result : age}
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

export default Age;
