import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem, removeallItem, removeItem} from '../redux/actions/listActions';
import Dialog from 'react-native-dialog';
import {connect} from 'react-redux';

const Home = ({items}) => {
  const dispatch = useDispatch();

  const removeallItemHandler = () => {
    dispatch(removeallItem());
  };

  const removeItemHandler = i => {
    dispatch(removeItem(i));
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>LIST({items.length})</Text>
      <View style={{alignItems: 'center'}}>
        {items.map(i => {
          return (
            <View key={items.indexOf(i)} style={style.items}>
              <Text style={style.itemName}>Item {items.indexOf(i) + 1}</Text>

              <Text>{i}</Text>

              <TouchableOpacity
                onPress={() => removeItemHandler(items.indexOf(i))}
                style={style.rmBtn}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={style.btns}>
          <AddBtn />
          <RemoveBtn handler={removeallItemHandler} />
        </View>
      </View>
    </View>
  );
};

const AddBtn = () => {
  const [visible, setVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const addItemHandler = itemName => {
    dispatch(addItem(itemName));
    setVisible(false);
  };

  const addItemPopUpHandler = () => {
    setVisible(!visible);
  };
  return (
    <TouchableOpacity onPress={addItemPopUpHandler} style={style.btn}>
      <Text>ADD</Text>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Add new item</Dialog.Title>
        <Dialog.Description>Enter the name of the item.</Dialog.Description>
        <Dialog.Input onChangeText={text => setItemName(text)} />
        <Dialog.Button label={'ADD'} onPress={() => addItemHandler(itemName)} />
        <Dialog.Button label={'DISCARD'} onPress={addItemPopUpHandler} />
      </Dialog.Container>
    </TouchableOpacity>
  );
};

const RemoveBtn = props => {
  return (
    <TouchableOpacity onPress={props.handler} style={style.btn}>
      <Text>REMOVE ALL</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 32,
  },
  items: {
    flexDirection: 'row',
    width: '60%',
  },
  itemName: {
    marginRight: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rmBtn: {
    alignSelf: 'center',
    marginLeft: 'auto',
    backgroundColor: 'white',
    elevation: 3,
  },
  btns: {
    flexDirection: 'row',
    width: '60%',
  },
  btn: {
    marginTop: 16,
    backgroundColor: 'white',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    elevation: 3,
    paddingHorizontal: 12,
  },
});

const mapStateToProps = state => {
  return {items: state.items};
};

export default connect(mapStateToProps)(Home);
