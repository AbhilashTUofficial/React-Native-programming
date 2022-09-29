import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useState} from 'react';

const CalculatorApp = () => {
  const [result, setResult] = useState('');

  const handleEntry = e => {
    if (e === '⌫') {
      clearLast();
    } else if (e === '=') {
      calculate();
    } else if (e === '±') {
    } else if (e === '-') {
      if (checkLast(e)) {
        setResult(_result => _result + e);
      }
    } else if (e === '+') {
      if (checkLast(e)) {
        setResult(_result => _result + e);
      }
    } else if (e === '÷') {
      if (checkLast(e)) {
        setResult(_result => _result + e);
      }
    } else if (e === '×') {
      if (checkLast(e)) {
        setResult(_result => _result + e);
      }
    }
    if (e === 'C') {
      clearEverything();
    }
    if (!funcBtns.includes(e)) {
      setResult(_result => _result + e);
    }
  };

  const calculate = () => {
    console.log(result.substring(0, result.length - 1));

    if (funcBtns.includes(result[result.length - 1])) {
      clearLast();
    }

    setResult(_result => (eval(_result)).substring(0,_result.length-1));
  };
  const checkLast = e => {
    return !funcBtns.includes(result[result.length - 1]);
  };

  const clearLast = () => {
    setResult(_result => _result.substring(0, _result.length - 1));
  };

  const sub = () => {
    if (count > 0) {
      setCount(_count => _count - 1);
    }
  };

  const btns = [
    ['C', '±', '⌫', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
  ];
  const funcBtns = ['C', '±', '⌫', '÷', '×', '-', '+'];

  return (
    <View style={styles.body}>
      <View style={styles.screenViewStyle}>
        <Text style={styles.calcTextStyle}>8888888</Text>
        <Text style={styles.resultTextStyle}>{result}</Text>
      </View>

      <View style={{flex: 5, justifyContent: 'space-evenly'}}>
        {btns.map(i => {
          return (
            <View style={{flexDirection: 'row'}} key={i}>
              {i.map(j => {
                return (
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => handleEntry(j)}
                    key={j}>
                    <Text
                      style={
                        funcBtns.includes(j)
                          ? styles.funcBtnTextStyle
                          : styles.numBtnTextStyle
                      }>
                      {j}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.elongatedBtnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={sub}>
            <Text style={styles.numBtnTextStyle}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => handleEntry('=')}>
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
