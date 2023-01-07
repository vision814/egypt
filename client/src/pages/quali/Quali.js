import React, { useState, useEffect, useMemo } from "react";
import { Form, Button, Container, Row, Col,Card } from "react-bootstrap";
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
import { listQuali } from "../../redux/actions/quali/quali";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SexLine from "../../component/chart/quali/line/SexLine";
import SexBar from "../../component/chart/quali/bar/SexBar";
import ResidenceBar from "../../component/chart/quali/bar/ResidenceBar";
import ResidenceLine from "../../component/chart/quali/line/ResidenceLine";
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
const Quali = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listQualiReducer = useSelector((state) => state.listQualiReducer);
  const { quali, error, loading } = listQualiReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(listQuali());
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
      headerName: "النوع",
      field: "النوع",
      sortable: true,
      filter: true,
    },
    {
      headerName: "دكتوراه",
      field: "دكتوراه",
      sortable: true,
      filter: true,
    },
    {
      headerName: "ماجستير",
      field: "ماجستير",
      sortable: true,
      filter: true,
    },
    {
      headerName: "دبلوم عالى",
      field: "دبلوم عالى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "مؤهل جامعى",
      field: "مؤهل جامعى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "مؤهل فوق المتوسط",
      field: "مؤهل فوق المتوسط",
      sortable: true,
      filter: true,
    },
    {
      headerName: "مؤهل متوسط فنى",
      field: "مؤهل متوسط فنى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "ثانوية عامة/ أزهري",
      field: "ثانوية عامة/ أزهري",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اعدادية",
      field: "اعدادية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "ابتدائية",
      field: "ابتدائية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "تربية فكرية",
      field: "تربية فكرية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "محو أمية",
      field: "محو أمية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "يقرأ ويكتب بدون مؤهل",
      field: "يقرأ ويكتب بدون مؤهل",
      sortable: true,
      filter: true,
    },
    {
      headerName: "أمى",
      field: "أمى",
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
      setResult(quali);
    } else if (city !== "" && seniority == "" && center == "") {
      setResult(quali.filter((x) => x.city == city));
    } else if (city !== "" && seniority !== "" && center == "") {
      setResult(quali.filter((x) => x.city == city && x["مدينة"] == seniority));
    } else if (city !== "" && seniority !== "" && center !== "") {
      setResult(
        quali.filter(
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
      ) : quali ? (
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

                {quali

                  ?.filter(
                    (x, i) => quali.findLastIndex((y) => y.city == x.city) == i
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
                {quali
                  ?.filter(
                    (x, i) =>
                      quali.findLastIndex((y) => y["مدينة"] == x["مدينة"]) == i
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
                {quali
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
                المؤهلات التعليمية 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result.length !== 0 ? result : quali}
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
                    <SexLine result={result?.length !== 0 ? result : quali} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ResidenceLine
                      result={result?.length !== 0 ? result : quali}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <SexBar result={result?.length !== 0 ? result : quali} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ResidenceBar
                      result={result?.length !== 0 ? result : quali}
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

export default Quali;
