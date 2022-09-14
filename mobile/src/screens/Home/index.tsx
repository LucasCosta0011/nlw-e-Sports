import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';
import { View, Image, FlatList } from 'react-native';
import imglogo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';


import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={imglogo}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}