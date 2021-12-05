import { Box } from "@chakra-ui/layout";
import "./App.css";
import { Main } from "./layout/main";
import { Sidebar } from "./layout/sidebar";
import { useMediaQuery } from "@chakra-ui/react";
import { SmallDeviceInfo } from "./components/SmallDeviceInfo";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./pages/settings";
import { ManagePatients } from "./pages/manage_patients";

function App() {
  const [smDevice] = useMediaQuery("(max-width: 989px)");

  return !smDevice ? (
    <Box className="App">
      <Box position="fixed">
        <Sidebar />
      </Box>
      <Box marginLeft="220px">
        <Routes>
          <Route path={"/"} exact element={<Main />} />
          <Route path={"/settings"} exact element={<Settings />} />
          <Route path={"/manage-patients"} exact element={<ManagePatients />} />
          <Route path={"/*"} exact element={<Main />} />
        </Routes>
      </Box>
    </Box>
  ) : (
    <SmallDeviceInfo />
  );
}

export default App;
