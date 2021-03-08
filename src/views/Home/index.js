import React, { useContext, useEffect } from 'react';
import BlogContext from '~/context/BlogContext';
import {
  Container,
  Title,
  List,
  ContainerList,
  AddButton,
  AddButtonText,
} from './styles';

const Home = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <Container>
      <AddButton onPress={addBlogPost}>
        <AddButtonText>Add Post</AddButtonText>
      </AddButton>
      <List
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => (
          <ContainerList key={index}>
            <Title>{item.title}</Title>
          </ContainerList>
        )}
      />
    </Container>
  );
};

export default Home;
