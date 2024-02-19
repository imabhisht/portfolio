import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

const DiscordVerificationRoute = () => {
  return (
    <Route
      path="/.well-known/discord"
      exact
      render={() => (
        <div>
          {/*
            Replace the content below with the specific content you want to return
          */}
          {`dh=b640205682c94bdc24335a0122f2d192053d6d6a`}
        </div>
      )}
    />
  );
};

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              exact
              element={<Splash theme={propss.theme} setTheme={propss.setTheme} />}
            />
            {/* <Route
              path="/.well-known/discord"
              exact
              render={<DiscordVerificationRoute />}
            /> */}
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/experience"
              exact
              element={<Experience theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/education"
              element={<Education theme={propss.theme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/splash"
              element={<Splash theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={propss.theme} setTheme={propss.setTheme} />}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              exact
              element={<Splash theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/experience"
              exact
              element={<Experience theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/education"
              element={<Education theme={propss.theme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={propss.theme} setTheme={propss.setTheme} />}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
