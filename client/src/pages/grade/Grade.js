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
import { listGrade } from "../../redux/actions/grade/grade";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SexLine from "../../component/chart/grade/line/SexLine";
import SexBar from "../../component/chart/grade/bar/SexBar";

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
const Grade = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listGradeReducer = useSelector((state) => state.listGradeReducer);
  const { grade, error, loading } = listGradeReducer;

  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [seniority, setSeniority] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(listGrade());
  }, [city, center]);
  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "city",
      sortable: true,
      filter: true,
    },
    {
      headerName: "تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى",
      field: "تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى",
      sortable: true,
      filter: true,
      width: 350,
    },
    {
      headerName: "الاجمالى",
      field: "الاجمالى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "انشطة غير كاملة التوصيف",
      field: "انشطة غير كاملة التوصيف",
      sortable: true,
      filter: true,
    },
    {
      headerName: "المنظمات والهيئات الدولية و الاقليمية",
      field: "المنظمات والهيئات الدولية و الاقليمية",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "خدمات افراد الخدمة المنزلية للاسر الخاصة",
      field: "خدمات افراد الخدمة المنزلية للاسر الخاصة",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "الخدمات الاخرى",
      field: "الخدمات الاخرى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الفنون والابداع والتسلية",
      field: "الفنون والابداع والتسلية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الصحة والعمل الاجتمعى",
      field: "الصحة والعمل الاجتمعى",
      sortable: true,
      filter: true,
    },
    {
      headerName: "التعليم",
      field: "التعليم",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الادارة العامة والدفاع والضمان الاجتماعى",
      field: "الادارة العامة والدفاع والضمان الاجتماعى",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "الانشطة الادارية وخدمات الدعم",
      field: "الانشطة الادارية وخدمات الدعم",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الانسطة العلمية والتقنيه المتخصصة",
      field: "الانسطة العلمية والتقنيه المتخصصة",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "انشطة العقارات و التاجير",
      field: "انشطة العقارات و التاجير",
      sortable: true,
      filter: true,
    },
    {
      headerName: "التامين والوساطة المالية",
      field: "التامين والوساطة المالية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "المعلومات و الاتصالات",
      field: "المعلومات و الاتصالات",
      sortable: true,
      filter: true,
    },
    {
      headerName: "خدمات لغذاء و الاقامة",
      field: "خدمات لغذاء و الاقامة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "النقل والتخزين",
      field: "النقل والتخزين",
      sortable: true,
      filter: true,
    },
    {
      headerName: "تجارة جملة وتجزئة واصلاح مركبات",
      field: "تجارة جملة وتجزئة واصلاح مركبات",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "تشييد ويناء",
      field: "تشييد ويناء",
      sortable: true,
      filter: true,
    },
    {
      headerName: "امداد مائى و شبكات صرف صحى",
      field: "امداد مائى و شبكات صرف صحى",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "امداد كهرباء وغاز وبخار وتكييف",
      field: "امداد كهرباء وغاز وبخار وتكييف",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "صناعات تحويلية",
      field: "صناعات تحويلية",
      sortable: true,
      filter: true,
    },
    {
      headerName: "تعدين و محاجر",
      field: "تعدين و محاجر",
      sortable: true,
      filter: true,
    },
    {
      headerName: "زراعة وصيد",
      field: "زراعة وصيد",
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
      setResult(grade);
    } else if (city !== "" && seniority == "") {
      setResult(grade.filter((x) => x.city == city));
    } else if (city !== "" && seniority !== "") {
      setResult(
        grade.filter(
          (x) =>
            x.city == city &&
            x["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] ==
              seniority
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
      ) : grade ? (
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

                {grade

                  ?.filter(
                    (x, i) => grade.findLastIndex((y) => y.city == x.city) == i
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
                <option value="Egypt">اختر النوع</option>
                {grade

                  ?.filter((x) => x.city == city)

                  ?.map((dep) => (
                    <option
                      value={
                        dep[
                          "تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"
                        ]
                      }
                    >
                      {
                        dep[
                          "تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"
                        ]
                      }
                    </option>
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
                تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى 2017
              </Typography>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={result.length !== 0 ? result : grade}
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
                    <SexLine result={result?.length !== 0 ? result : grade} />
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
                    <SexBar result={result?.length !== 0 ? result : grade} />
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

export default Grade;
