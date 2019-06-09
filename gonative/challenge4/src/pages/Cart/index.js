import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { colors } from '~./styles';
import {
  Container,
  CartList,
  CartItem,
  Image,
  Info,
  Name,
  Brand,
  Price,
  Form,
  AmountInput,
  DeleteButton,
  DeleteIcon,
  EmptyMessage,
  SubTotal,
  SubTotalText,
  SubTotalPrice,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
    headerTintColor: colors.secondary,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
  };

  handleUpdate = () => {
    // this,props.removeCart(ammount)
    // Success Message
  };

  render() {
    const { cart } = this.props;

    return (
      <Container>
        {cart.data.length > 0 ? (
          <Fragment>
            <CartList
              data={cart.data}
              keyExtractor={product => String(product.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: product }) => (
                <CartItem key={product.id}>
                  <Image source={{ uri: product.image }} />
                  <Info>
                    <Name>{product.name}</Name>
                    <Brand>{product.brand}</Brand>
                    <Price>{`$ ${product.price}`}</Price>
                  </Info>
                  <Form>
                    <AmountInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      defaultValue={String(product.quantity)}
                      maxLength={2}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        if (/^\d+$/.test(text)) {
                          this.handleUpdate(text);
                        }
                      }}
                    >
                      {product.amount}
                    </AmountInput>
                    <DeleteButton onPress={() => {}}>
                      <DeleteIcon name="times" />
                    </DeleteButton>
                  </Form>
                </CartItem>
              )}
            />
            <SubTotal>
              <SubTotalText>Subtotal</SubTotalText>
              <SubTotalPrice>$ 200.00</SubTotalPrice>
            </SubTotal>
          </Fragment>
        ) : (
          <EmptyMessage>There are no products in the cart.</EmptyMessage>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: state.cart.data.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  ),
});

export default connect(mapStateToProps)(Cart);
