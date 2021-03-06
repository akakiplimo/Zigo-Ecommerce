import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";

class CustomLayout extends React.Component {

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div>
        <Menu inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item header>Products</Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              {authenticated ? (
                <React.Fragment>
                  <Dropdown
                    icon='cart'
                    loading={loading}
                    text={`${cart != null ? cart.order_items.length : 0} items`}
                    pointing
                    className='link item'
                  >
                    <Dropdown.Menu>
                      {cart && cart.order_items.map(order_item => {
                        return (
                          <Dropdown.Item key={order_item.id}>
                            {order_item.quantity} x {order_item.item}
                          </Dropdown.Item>
                        );
                      })}
                      {cart && cart.order_items.length < 1 ? <Dropdown.Item> No items in cart! </Dropdown.Item> : null}
                      <Dropdown.Divider />
                      <Dropdown.Item icon='arrow alternate circle right'
                        text='Checkout'
                        onClick={() => this.props.history.push('/order-summary')}
                      />
                    </Dropdown.Menu>
                  </Dropdown>

                  <Menu.Item header onClick={() => this.props.logout()}>
                    Logout
                  </Menu.Item>
                </React.Fragment>)
                : (
                  <React.Fragment>
                    <Link to="/login">
                      <Menu.Item header>Log in</Menu.Item>
                    </Link>
                    <Link to="/signup">
                      <Menu.Item header>Sign up</Menu.Item>
                    </Link>
                  </React.Fragment>
                )}

            </Menu.Menu>
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Link to="/">
                  <Header inverted as="h4" content="Home" />
                </Link>
                {/* <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List> */}
              </Grid.Column>
              <Grid.Column width={3}>
                <Link to="/products">
                  <Header inverted as="h4" content="Products" />
                </Link>
                {/* <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List> */}
              </Grid.Column>
              <Grid.Column width={3}>
                <a href="https://github.com/akakiplimo/Zigo-Ecommerce" target="_blank" rel="noreferrer">
                  <Header inverted as="h4" content="GitHub" />
                </a>
                {/* <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Zigo Store &#8482;" />
                <p>
                  All Rights Reserved &#169;
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image circular centered size="tiny" src="/assets/zigologo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
