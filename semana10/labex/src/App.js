import React from "react";
import Header from "./components/Header";
import { Switch, Route, BrowserRoute, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/admpainel">
          <AdminHomePage />
        </Route>

        <Route exact path="/application">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/createtrip">
          <CreateTripPage />
        </Route>

        <Route exact path="/loginpage">
          <LoginPage />
        </Route>

        <Route exact path="/listtrips">
          <ListTripsPage />
        </Route>

        <Route exact path="/tripsdetails">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
