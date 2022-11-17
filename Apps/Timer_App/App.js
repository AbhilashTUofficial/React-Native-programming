import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

const Timer_App = () => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(10);
  const [secs, setSecs] = useState(10);
  const [state, changeState] = useState('START');

  const decHours = () => {
    hours > 0 ? setHours(_value => _value - 1) : setHours(23);
  };
  const incHours = () => {
    hours >= 23
      ? setHours(_value => (_value = 0))
      : setHours(_value => _value + 1);
  };

  const decMins = () => {
    mins > 0 ? setMins(_value => _value - 1) : setMins(59);
  };
  const incMins = () => {
    mins >= 59
      ? (setMins(_value => (_value = 0)), incHours())
      : setMins(_value => _value + 1);
  };

  const decSecs = () => {
    secs > 0 ? setSecs(_value => _value - 1) : setSecs(59);
  };
  const incSecs = () => {
    secs >= 59
      ? (setSecs(_value => (_value = 0)), incMins())
      : setSecs(_value => _value + 1);
  };

  // function task(i) {
  //   setTimeout(function() {
  //       console.log("hi")
  //   }, 1000 * i);
  // }

  // const startPause = () => {
  //   state == 'START'
  //     ? changeState(_value => (_value = 'STOP'))
  //     : changeState(_value => (_value = 'START'));

  //     for(var i=0; i<10;i++){

  //       task(1)

  //     }

  //     // setInterval(() => {
  //     //   if(state=='START'){
  //     //     decSecs()
  //     //   }else{
  //     //     clearInterval(startPause)
  //     //   }
  //     // }, 1000);

  // };

  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titleStyle}>Hours</Text>

          <TouchableOpacity style={styles.btnStyle} onPress={incHours}>
            <Text style={styles.btnTextStyle}>+</Text>
          </TouchableOpacity>

          <View style={styles.displayStyle}>
            <Text style={styles.timeTextStyle}>{hours}</Text>
          </View>

          <TouchableOpacity style={styles.btnStyle} onPress={decHours}>
            <Text style={styles.btnTextStyle}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titleStyle}>Mins</Text>

          <TouchableOpacity style={styles.btnStyle} onPress={incMins}>
            <Text style={styles.btnTextStyle}>+</Text>
          </TouchableOpacity>

          <View style={styles.displayStyle}>
            <Text style={styles.timeTextStyle}>{mins}</Text>
          </View>

          <TouchableOpacity style={styles.btnStyle} onPress={decMins}>
            <Text style={styles.btnTextStyle}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titleStyle}>Secs</Text>

          <TouchableOpacity style={styles.btnStyle} onPress={incSecs}>
            <Text style={styles.btnTextStyle}>+</Text>
          </TouchableOpacity>

          <View style={styles.displayStyle}>
            <Text style={styles.timeTextStyle}>{secs}</Text>
          </View>

          <TouchableOpacity style={styles.btnStyle} onPress={decSecs}>
            <Text style={styles.btnTextStyle}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.startStopBtnStyle}
        onPress={/*startPause*/ decHours}>
        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{state}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(45,45,45)',
  },

  displayStyle: {
    width: 60,
    height: 40,
    backgroundColor: '#ffffff',
    opacity: 0.8,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeTextStyle: {
    fontSize: 18,
    letterSpacing: 1,
    color: '#202020',
    fontWeight: 'bold',
  },
  titleStyle: {
    color: '#ffffff',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },

  btnStyle: {
    width: 60,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    margin: 1,
  },

  startStopBtnStyle: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTextStyle: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default Timer_App;
