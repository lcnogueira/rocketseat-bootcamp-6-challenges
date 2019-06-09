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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

class Product extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
    addProduct: PropTypes.func.isRequired,
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
    const { navigation, addProduct } = this.props;

    addProduct(product);
    navigation.navigate('Cart');
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

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
