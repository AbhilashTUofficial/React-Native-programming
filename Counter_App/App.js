import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const ClickMeApp = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(_count => _count + 1);
  const sub = () => {
    if(count>0){
      setCount(_count => _count - 1);
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>{count}</Text>
      {/* This will not work, because React-native buttons are very limited,
     need to use TouchableOpacity or other or other Components like that. */}
      {/* <Button style={styles.buttonStyle} title='Click Me'></Button> */}

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.subBtnStyle} onPress={sub}>
          <Text style={styles.btnTextStyle}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtnStyle} onPress={add}>
          <Text style={styles.btnTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(45,45,45)',
  },

  textStyle: {
    margin: 20,
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  addBtnStyle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    marginTop: 8,
    marginLeft: 1,
  },
  subBtnStyle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    marginTop: 8,
    marginRight: 1,
  },

  btnTextStyle: {
    fontSize: 32,
    color: '#ffffff',
  },
});

export default ClickMeApp;
