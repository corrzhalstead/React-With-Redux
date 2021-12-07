import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoView from "../../components/LogoView/index";
import NavBarDropDownView from "../../components/NavBarDropDownView/index";

export function HeaderView() {
  return (
    <>
      <Navbar className="logohome " expand="lg">
        <Container fluid className="navbar-bg mt-2 py-0 px-5">
          <Navbar.Brand href="/">
            <LogoView />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="my-2 my-lg-0">
              <NavBarDropDownView
                id="basic-navbar-nav"
                airlineName="American Airlines"
                bidTypesPath="/american-airlines/bidtypes"
                pilotsPath="/american-airlines/pilots"
              />
              <NavBarDropDownView
                id="basic-navbar-nav"
                airlineName="Alaska Airlines"
                bidTypesPath="/alaska-airlines/bidtypes"
                pilotsPath="/alaska-airlines/pilots"
              />
              <NavBarDropDownView
                id="basic-navbar-nav"
                airlineName="Frontier Airlines"
                bidTypesPath="/frontier-airlines/bidtypes"
                pilotsPath="/frontier-airlines/pilots"
              />
              <NavBarDropDownView
                id="basic-navbar-nav"
                airlineName="UPS"
                bidTypesPath="/ups/bidtypes"
                pilotsPath="/ups/pilots"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderView;
