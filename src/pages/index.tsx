import { RootState } from '@store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const { language, name, age } = useSelector(({ userStore }: RootState) => userStore);
  
  return (
    <>
      <div>뭐만들지?</div>
      <div>{language}</div>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
};

export default Home;
