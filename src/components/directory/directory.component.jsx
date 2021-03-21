import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

import CollectionsContext from "../../contexts/collections/collections.context";

const Directory = () => {
  const collections = useContext(CollectionsContext)
  console.log(collections)
  return (
  <DirectoryMenuContainer>
    {Object.entries(collections).map(([key, value]) => (
      <MenuItem key={value.id} {...value} />
    ))}
  </DirectoryMenuContainer>
  )
};

export default Directory;
