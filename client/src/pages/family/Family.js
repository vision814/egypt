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
import { listFamily } from "../../redux/actions/family/family";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FamilyLine from "../../component/chart/family/line/FamilyLine";
import PeopleLine from "../../component/chart/family/line/PeopleLine";
import PeopleBar from "../../component/chart/family/bar/PeopleBar";
import FamilyBar from "../../component/chart/family/bar/FamilyBar";

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
const Family = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listFamilyReducer = useSelector((state) => state.listFamilyReducer);
  const { family, error, loading } = listFamilyReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(listFamily());
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
      headerName: "افراد عدد الحجرات 1",
      field: "1",
      sortable: true,
      filter: true,
    },
    {
      headerName: "افراد عدد الحجرات 2",
      field: "2",
      sortable: true,
      filter: true,
    },
    {
      headerName: "افراد عدد الحجرات 3",
      field: "3",
      sortable: true,
      filter: true,
    },
    {
      headerName: "افراد عدد الحجرات 4",
      field: "4",
      sortable: true,
      filter: true,
    },
    {
      headerName: "افراد عدد الحجرات +5",
      field: "افراد",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اسر+5",
      field: "اسر+5",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اسر4",
      field: "اسر4",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اسر3",
      field: "اسر3",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اسر2",
      field: "اسر2",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اسر1",
      field: "اسر1",
      sortable: true,
      filter: true,
    },
    {
      headerName: "معدل التزاحم",
      field: "معدل التزاحم",
      sortable: true,
      filter: true,
    },
    {
      headerName: "متوسط حجم الاسرة",
      field: "متوسط حجم الاسرة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عــدد الحجـــرات",
      field: "عــدد الحجـــرات",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اجمالي افراد",
      field: "اجمالي افراد",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اجمالي اسر",
      field: "اجمالي اسر",
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
      setResult(family);
    } else if (city !== "" && seniority == "" && center == "") {
      setResult(family.filter((x) => x.city == city));
    } else if (city !== "" && seniority !== "" && center == "") {
      setResult(
        family.filter((x) => x.city == city && x["مدينة"] == seniority)
      );
    } else if (city !== "" && seniority !== "" && center !== "") {
      setResult(
        family.filter(
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
      ) : family ? (
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

                {family

                  ?.filter(
                    (x, i) => family.findLastIndex((y) => y.city == x.city) == i
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
                {family
                  ?.filter(
                    (x, i) =>
                      family.findLastIndex((y) => y["مدينة"] == x["مدينة"]) == i
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
                {family
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
                فئات السن 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result.length !== 0 ? result : family}
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
                    <FamilyLine
                      result={result?.length !== 0 ? result : family}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <PeopleLine
                      result={result?.length !== 0 ? result : family}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <FamilyBar
                      result={result?.length !== 0 ? result : family}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <PeopleBar
                      result={result?.length !== 0 ? result : family}
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

export default Family;
