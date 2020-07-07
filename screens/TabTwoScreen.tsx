import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Commander le robot</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{ margin: 30 }}>Vous pouvez commander le robot en utilisant les boutons suivants</Text>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
        <Button
          style={{ marginRight: 20 }}
          icon={
            <Icon
              name="arrow-up"
              size={25}
              color="white"
            />
          }
          iconRight
          title=""
        />

        <Button
          style={{ marginRight: 20 }}
          icon={
            <Icon
              name="arrow-down"
              size={25}
              color="white"
            />
          }
          iconRight
          title=""
        />

        <Button
          style={{ marginRight: 20 }}
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          iconRight
          title=""
        />

        <Button
          style={{ marginRight: 20 }}
          icon={
            <Icon
              name="arrow-right"
              size={25}
              color="white"
            />
          }
          iconRight
          title=""
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
