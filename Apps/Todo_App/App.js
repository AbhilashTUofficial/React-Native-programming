import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const Todo_App = () => {
  const [item, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const reload = () => {
    //"setLoading" is read-only
    // setLoading=true  x
    // setLoading(true) ✓

    setLoading(true);
    // setItems([...item, {key: item.length + 1, item: 'This is new item '}]);
    setLoading(false);
  };

  const addTodo=()=>{
    setItems([{key: item.length + 1, item: 'This is new item '},...item]);

  }
  const delTodo=(i)=>{
    setItems([{key: item.length + 1, item: 'This is new item '},...item]);

  }

  return (
    <View style={bodyStyle.body}>
      <View style={bodyStyle.appBarStyle}>
        <Text style={bodyStyle.appTitleStyle}>TODO APP</Text>
        <TouchableOpacity style={bodyStyle.addBtnStyle} onPress={addTodo}>
          <Text style={{color: '#ffffff', fontSize: 28}}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={false /*default value : false*/}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={reload} colors={['#9400d3']} />
        }>
        { item.map(i => {
          return (
            <View style={tileStyle.container} key={i.key}>

              <View style={tileStyle.tileKeyCont}>
                <Text style={tileStyle.textStyle}>{i.key} </Text>
              </View>

              <View style={tileStyle.tileItemCont}>
                <Text style={tileStyle.textStyle}>{i.item}</Text>
              </View>

              <TouchableOpacity style={tileStyle.doneBtnStyle} onPress={()=>this.delTodo(i.key)}>
                <Text style={tileStyle.doneBtnTextStyle}>✓</Text>
              </TouchableOpacity>



            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const bodyStyle = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'rgb(230,230,230)',
  },
  appBarStyle: {
    flexDirection: 'row',
    padding: 12,
    height: 60,
    backgroundColor: '#9400d3',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  appTitleStyle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  addBtnStyle: {
    color: '#ffffff',
    marginRight: 24,
  },
});

const tileStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 6,
    borderRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250)',
  },
  tileKeyCont: {
    width: 76,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(230,230,230)',
    borderWidth: 1,
    borderRadius: 6,
    margin: 8,
  },
  tileItemCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    margin: 8,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneBtnStyle:{
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(230,230,230)',
    borderWidth: 1,
    borderRadius: 6,
    margin: 8,
  },
  doneBtnTextStyle:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'#228b22'
  }
});

export default Todo_App;
