import React, {useContext} from "react";

import CollectionsContext from "../../contexts/collections/collections.context"

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
  const collections = useContext(CollectionsContext);

  return (
    <div>
    {Object.entries(collections).map(([key, value]) => (
      <CollectionPreview key={value.id} {...value} />
    ))}
    </div>
  );
};

export default CollectionsOverview;
