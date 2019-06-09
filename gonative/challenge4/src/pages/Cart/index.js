import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

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
  static propTypes = {
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
          quantity: PropTypes.number,
        }),
      ),
    }).isRequired,
    total: PropTypes.number.isRequired,
    removeProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    title: 'Cart',
    headerTintColor: colors.secondary,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
  };

  render() {
    const {
      cart, total, removeProduct, updateProduct,
    } = this.props;

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
                      onChangeText={text => updateProduct(product.id, Number(text))
                      }
                    >
                      {product.amount}
                    </AmountInput>
                    <DeleteButton onPress={() => removeProduct(product)}>
                      <DeleteIcon name="times" />
                    </DeleteButton>
                  </Form>
                </CartItem>
              )}
            />
            <SubTotal>
              <SubTotalText>Total</SubTotalText>
              <SubTotalPrice>{total.toFixed(2)}</SubTotalPrice>
            </SubTotal>
          </Fragment>
        ) : (
          <EmptyMessage>There are no products in the cart.</EmptyMessage>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart,
  total: state.cart.data.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
