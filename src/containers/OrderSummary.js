import React from "react";
import { Button, Container, Header, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { authAxios } from "../utils";
import { orderSummaryUrl } from "../constants";


class OrderSummary extends React.Component {

    state = {
        data: null,
        error: null,
        loading: false
    }

    componentDidMount() {
        this.handleFetchOrder();

    }

    handleFetchOrder = () => {
        this.setState({ loading: true })
        authAxios
            .get(orderSummaryUrl)
            .then(res => {
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }

    render() {
        const { data, error, loading } = this.state;
        console.log(data);
        return (
            <Container>
                <Header as="h3">Order Summary</Header>
                {data && <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item #</Table.HeaderCell>
                            <Table.HeaderCell>Item Name</Table.HeaderCell>
                            <Table.HeaderCell>Item Price</Table.HeaderCell>
                            <Table.HeaderCell>Item Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Total Item Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {data.order_items.map((order_item, i) => {
                            return (
                                <Table.Row key={order_item.id}>
                                    <Table.Cell>
                                        {i}
                                    </Table.Cell>
                                    <Table.Cell>{order_item.item}</Table.Cell>
                                    <Table.Cell>Ksh {order_item.item_obj.price}</Table.Cell>
                                    <Table.Cell>{order_item.quantity}</Table.Cell>
                                    <Table.Cell>
                                        {order_item.item_obj.discount_price && (
                                            <Label color="green" ribbon>
                                                ON OFFER
                                            </Label>
                                        )}
                                        Ksh {order_item.final_price}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}

                        <Table.Row>
                            <Table.Cell />
                            <Table.Cell />
                            <Table.Cell />
                            <Table.Cell colSpan="2" textAlign="center">
                                Total: Ksh {data.total}
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan="5" textAlign="right">
                                <Button color="blue">Checkout</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>}
            </Container>
        )
    }
}

export default OrderSummary;