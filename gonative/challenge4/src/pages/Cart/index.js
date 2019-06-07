import React, { Component, Fragment } from 'react';

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

const fakeData = [
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
    quantity: 2,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
    quantity: 2,
  },
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
    quantity: 10,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
    quantity: 3,
  },
  {
    id: 5,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
    quantity: 2,
  },
  {
    id: 6,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
    quantity: 2,
  },
];

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
    return (
      <Container>
        {fakeData.length > 0 ? (
          <Fragment>
            <CartList
              data={fakeData}
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

export default Cart;
