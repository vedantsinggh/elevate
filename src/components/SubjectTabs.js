import React from 'react';
import { Tabs, Tab } from '@mui/material';

const SubjectTabs = ({ subjects, selectedTab, handleTabChange }) => {
  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      variant="fullWidth"
      centered
    >
      {subjects.map((subject, index) => (
        <Tab key={subject.name} label={subject.name} />
      ))}
    </Tabs>
  );
};

export default SubjectTabs;
