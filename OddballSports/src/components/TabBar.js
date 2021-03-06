import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from 'react-native'
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import AppLoading from 'expo-app-loading';


const TabBar = (props) => {

  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const {
    navigation: {state: {index, routes}},
    getLabelText,
    style,
    activeTintColor,
    inactiveTintColor,
    renderIcon,
    jumpTo,
    showLabel,
    backgroundFeaturedIcon,
    tabFeatured,
    activeFeaturedTintColor,
    inactiveFeatureTintColor
  } = props;
  return (
    <SafeAreaView style={{
      flexDirection: 'row',
      height: 50,
      width: '100%',
      ...style
    }}>
      {
        routes.map((route, idx) => (
          <SafeAreaView
            key={route.key}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => jumpTo(route.key)}
            >
              <View style={styles.iconContainer}>
                <View style = {route.key == tabFeatured ? [{backgroundColor: backgroundFeaturedIcon}, styles.customIcon]: styles.defaultIcon}>
                  {renderIcon({
                    route,
                    focused: index === idx,
                    tintColor: index === idx ?
                      route.key !== tabFeatured ?
                        activeTintColor
                        :
                        activeFeaturedTintColor
                      :
                      route.key !== tabFeatured ?
                        inactiveTintColor
                        :
                        inactiveFeatureTintColor
                  })}
                </View>
                {}

                {showLabel ? <Text style={[styles.iconLabel, {color: index === idx ? activeTintColor : inactiveTintColor}]}>
                  {route.key !== tabFeatured ? getLabelText({
                    route,
                  }) : null}
                </Text> : null}
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        ))
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  customIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    transform: [
      { translateY: -20}
    ]
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLabel: {
    fontSize: 9,
    fontWeight: '600',
    fontFamily: 'LuckiestGuy_400Regular',
  }
})

export default TabBar;