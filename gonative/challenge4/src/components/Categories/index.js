import React, { Component } from 'react';

import {
  Container, CategoryBar, CategoriesList, Category, Title,
} from './styles';

const categories = [
  {
    id: 1,
    title: 'Camisetas',
  },
  {
    id: 2,
    title: 'Camisas',
  },
  {
    id: 3,
    title: 'Calças',
  },
  {
    id: 4,
    title: 'Blusas',
  },
  {
    id: 5,
    title: 'Bonés',
  },
  {
    id: 6,
    title: 'Casacos',
  },
];

class Categories extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <CategoryBar>
          <CategoriesList
            data={categories}
            keyExtractor={category => String(category.id)}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item: category }) => (
              <Category onPress={() => {}} active={category.id === 1}>
                <Title active={category.id === 1}>{category.title}</Title>
              </Category>
            )}
          />
        </CategoryBar>
      </Container>
    );
  }
}

export default Categories;
