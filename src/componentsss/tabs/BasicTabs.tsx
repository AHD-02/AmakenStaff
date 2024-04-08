import { useState } from 'react';

// material-ui
import { Box, Chip, Tab, Tabs } from '@mui/material';

// project import
import MainCard from 'componentsss/MainCard';
import { BasicTabsProps, ITabs, TabPanelProps } from './types';

// ==============================|| TAB PANEL ||============================== //

const  TabPanel = (props: TabPanelProps) =>  {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| TABS - BASIC ||============================== //

const BasicTabs = ({tabsItems, onChange, isCentered, initialValue}: BasicTabsProps) =>  {
  const [value, setValue] = useState(initialValue ?? 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(event, newValue)
    setValue(newValue)
  };

  
  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered={isCentered}>
            {tabsItems?.map((item: ITabs) => <Tab
              label={item.label}
              {...item.iconLabel ? {icon: <Chip label={item.iconLabel} color="primary" variant="light" size="small" />} : {}}
              iconPosition="end"
              {...a11yProps(0)}
            />)}
          </Tabs>
        </Box>
        {tabsItems[value].component && <TabPanel value={value} index={0}>
          {tabsItems[value].component}
        </TabPanel>}
      </Box>
    </MainCard>
  );
}

export default BasicTabs