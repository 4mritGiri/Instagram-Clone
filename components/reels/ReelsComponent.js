import React, { useState } from 'react';
import { REELS } from './../../data/reels';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={REELS}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({ item, index }) => (
        <>
          <SingleReel item={item} currentIndex={currentIndex} index={index} />
        </>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default ReelsComponent;
