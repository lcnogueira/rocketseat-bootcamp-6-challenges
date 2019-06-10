import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CategoryBar,
  CategoriesList,
  Category,
  Title,
  Loading,
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';

class Categories extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
      selectedCategory: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    }).isRequired,
    selectCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  render() {
    const {
      categories: { data, loading, selectedCategory },
      selectCategory,
    } = this.props;

    return (
      <Container>
        <CategoryBar>
          {loading ? (
            <Loading />
          ) : (
            <CategoriesList
              data={data}
              keyExtractor={category => String(category.id)}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item: category }) => (
                <Category
                  onPress={() => selectCategory(category)}
                  active={category.id === selectedCategory.id}
                >
                  <Title active={category.id === selectedCategory.id}>
                    {category.title}
                  </Title>
                </Category>
              )}
            />
          )}
        </CategoryBar>
      </Container>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
