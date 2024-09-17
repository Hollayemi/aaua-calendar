import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./AuthRouter";
import CalendarScreen from "../pages/calendar/CalendarScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startChecking } from "../actions/auth";
import LoadingScreen from "../pages/ui/LoadingScreen";
import Home from "../pages/home";
import MyList from "../pages/home/myList";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);


  if (checking){
    return <LoadingScreen />
  }

  return (
      <Router>
          <Routes>
              <Route
                  path="/*"
                  element={
                      <PublicRoute isAuth={!!id}>
                          <AuthRouter />
                      </PublicRoute>
                  }
              />
              <Route
                  path="/calendar"
                  element={
                      <PrivateRoute isAuth={!!id}>
                          <CalendarScreen />
                      </PrivateRoute>
                  }
              />
              <Route
                  path="/"
                  element={
                      <PublicRoute>
                          <Home />
                      </PublicRoute>
                  }
              />
              <Route
                  path="/list"
                  element={
                      <PrivateRoute isAuth={!!id}>
                          <MyList />
                      </PrivateRoute>
                  }
              />
          </Routes>
      </Router>
  );
};
export default AppRouter;
