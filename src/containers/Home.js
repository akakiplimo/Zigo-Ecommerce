import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{
      padding: "8em 0em", backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/3d.jpg'})`, backgroundRepeat: 'no-repeat', width: '100%', height: '100%'
    }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "2em", fontStyle: "oblique" }}>
              ZIGO STORE
            </Header>
            <p style={{ fontSize: "1.33em", fontStyle: 'italic', color: 'red' }}>
              "A one Stop shop for all your Enthusiast products."
            </p>
            {/* <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p> */}
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              rounded
              size="large"
              src="/assets/shopping-cart.gif"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Link to="/products">
              <Button color="black" size="huge">Our Products</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em", alignItems: "center", justifyContent: "center", display: "flex" }} vertical>
      <Grid columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Image
                size="tiny"
                src="/assets/icons/online.png"
              />
              Browse Variety
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Browse a variety of products based on your preference
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Image
                size="tiny"
                src="/assets/icons/sell.png"
              />
              Sell Variety
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Sell the products you are most familiar with
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>

            <Header as="h3" style={{ fontSize: "2em" }}>
              <Image
                size="tiny"
                src="/assets/icons/buy.png"
              />
              Buy Variety
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Select and buy from a wide variety of products
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em", alignItems: "center", justifyContent: "center", display: "flex" }} vertical>
      <Container text style={{ align: "center" }}>
        <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
          About Us
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This is a project inspired by the need for an advanced, customer-focused ecommerce solution to
          provide accessible and affordable products for niche communities of enthusiasts.
          Such as in in gaming, sneakers, electronics, mobile & technology, beauty & cosmetics etc...
        </p>
        <p style={{ fontSize: "1.33em" }}>
          It is a Portfolio Project by Adrian A. Kiplimo for Holberton School
          <br /><br />
          <a style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            href="https://www.holbertonschool.com/" target="_blank" rel="noreferrer">
            <Image
              rounded
              size="tiny"
              src="/assets/holberton.jpeg"
            />
          </a>
        </p>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="https://akakiplimo.carrd.co" target="_blank" rel="noreferrer">AUTHOR</a>
        </Divider>
        <Header as="h4" style={{ fontSize: "2em", textAlign: "center" }}>
          Adrian Abraham Kiplimo
        </Header>

        <Grid columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <a href="https://linkedin.com/in/adrian-a-kiplimo-55947a132/" target="_blank" rel="noreferrer">
                <Image
                  size="small"
                  src="/assets/in.png"
                />
              </a>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <a href="https://github.com/akakiplimo" target="_blank" rel="noreferrer">
                <Image
                  size="small"
                  src="/assets/github.png"
                />
              </a>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <a href="https://twitter.com/abracodeabra" target="_blank" rel="noreferrer">
                <Image
                  size="small"
                  src="/assets/tw.png"
                />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div align="center">
          <a href="https://github.com/akakiplimo/Zigo-Ecommerce" target="_blank" rel="noreferrer">
            <Button as="a" size="huge" color="black">
              Project GitHub Repo
            </Button>
          </a>
        </div>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
