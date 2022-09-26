import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useState} from 'react';

const CalculatorApp = () => {
  const [str, appendNum] = useState(str);
  // const numClick = (num) =>{
  //   if(num==7){
  //     appendNum(str => str + num);
  //   }

  // };
  const sub = () => {
    if (count > 0) {
      setCount(_count => _count - 1);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.screenViewStyle}>
        <Text style={styles.calcTextStyle}>8888888</Text>
        <Text style={styles.resultTextStyle}>8888888</Text>
      </View>

      <View style={{flex: 5, justifyContent: 'space-evenly'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>±</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>⌫</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnStyle} /*onPress={numClick("7")}*/>
            <Text style={styles.numBtnTextStyle}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.elongatedBtnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.funcBtnTextStyle}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#131313',
  },

  screenViewStyle: {
    flex: 2,
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    backgroundColor: '#000000',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  resultTextStyle: {
    margin: 20,
    color: '#ffffff',
    fontSize: 36,
    textTransform: 'uppercase',
  },

  calcTextStyle: {
    margin: 20,
    color: '#ffffff',
    opacity: 0.6,
    fontSize: 32,
    textTransform: 'uppercase',
  },

  btnStyle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
    borderRadius: 6,
    margin: '4%',
  },

  elongatedBtnStyle: {
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
    borderRadius: 6,
    margin: '4%',
  },

  numBtnTextStyle: {
    fontSize: 24,
    color: '#ffffff',
  },

  funcBtnTextStyle: {
    fontSize: 24,
    color: '#ff8c00',
  },
});

export default CalculatorApp;
