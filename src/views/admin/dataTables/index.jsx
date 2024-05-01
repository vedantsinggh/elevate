import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel, Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import Banner from "../marketplace/components/Banner";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";

export default function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Tabs index={activeTab} onChange={handleTabChange}>
        <TabList>
          <Tab>Maths</Tab>
          <Tab>Chemistry</Tab>
          <Tab>Physics</Tab>
        </TabList>
        <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </SimpleGrid>
        <TabPanel>
        </TabPanel>
        <TabPanel>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </TabPanel>
        <TabPanel>
          <ColumnsTable columnsData={columnsDataColumns} tableData={tableDataColumns} />
        </TabPanel>
        <TabPanel>
          <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
        </TabPanel>
      </Tabs>
    </Box>
  );
}
