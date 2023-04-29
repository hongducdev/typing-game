import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
