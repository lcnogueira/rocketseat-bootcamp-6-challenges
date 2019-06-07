import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, CategoryBar, CategoriesList, Category, Title, Loading,
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';

class Categories extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <CategoryBar>
          {categories.loading ? (
            <Loading />
          ) : (
            <CategoriesList
              data={categories.data}
              keyExtractor={category => String(category.id)}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item: category }) => (
                <Category onPress={() => {}} active={category.id === 1}>
                  <Title active={category.id === 1}>{category.title}</Title>
                </Category>
              )}
            />
          )}
        </CategoryBar>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
