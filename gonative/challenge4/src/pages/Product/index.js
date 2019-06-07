import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { colors } from '~./styles';
import {
  Container,
  ProductCard,
  Image,
  Info,
  Text,
  Name,
  Brand,
  Price,
  Button,
  ButtonText,
} from './styles';

class Product extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Product Details',
    headerTintColor: colors.secondary,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerRight: <View />,
  };

  addToCart = (product) => {
    // this.props.addProduct(product)
    // Success Message
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');
    return (
      <Container>
        <ProductCard>
          <Image source={{ uri: product.image }} />
          <Info>
            <Text>
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
            </Text>
            <Price>{`$ ${product.price}`}</Price>
          </Info>
          <Button
            onPress={() => {
              this.addToCart(product);
            }}
          >
            <ButtonText>Add to cart</ButtonText>
          </Button>
        </ProductCard>
      </Container>
    );
  }
}

export default Product;
