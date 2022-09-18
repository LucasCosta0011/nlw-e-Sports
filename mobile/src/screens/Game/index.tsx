import { Entypo } from '@expo/vector-icons';

import { GameParams } from '../../@types/navigation';

import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { DuoMatch } from '../../components/DuoMatch';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import { styles } from './styles';
import { THEME } from '../../theme';


export function Game() {

  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  const [duo, setDuo] = useState<DuoCardProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  async function getDiscordUser(adsId: string){
    fetch(`http://192.168.0.103:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => setDiscordDuoSelected(data.discord));
  }

  function handleGoBack(){
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.0.103:3333/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => setDuo(data));
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
             name="chevron-thin-left"
             color={THEME.COLORS.CAPTION_300}
             size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          style={styles.cover}
          source={{uri: game.bannerUrl}}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duo}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard 
              data={item}
              onConnect={() => { getDiscordUser(item.id) }}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[ duo.length > 0 ? styles.contentList : styles.emptyListContent ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch 
          onClose={() => setDiscordDuoSelected('')}
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
        />
      </SafeAreaView>
    </Background>
  );
}