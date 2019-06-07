import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from '~./styles';
import {
  Container, ProductsList, ProductItem, Image, Name, Brand, Price,
} from './styles';

import Categories from '~/components/Categories';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  static navigationOptions = {
    title: 'GoCommerce',
    headerTintColor: colors.secondary,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
  };

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  takeToProduct = (product) => {
    const { navigation } = this.props;
    navigation.navigate('Product', { product });
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Categories />
        <ProductsList
          data={products.data}
          keyExtractor={product => String(product.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <ProductItem onPress={() => this.takeToProduct(product)}>
              <Image source={{ uri: product.image }} />
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
              <Price>{`$ ${product.price}`}</Price>
            </ProductItem>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
