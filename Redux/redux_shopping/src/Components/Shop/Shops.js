import {React} from 'react';
import {ScrollView, View} from 'react-native';
import Shop from './Shop';
import {connect} from 'react-redux';

const Shops = ({shops}) => {
  return (
    <View>
      <ScrollView>
        {shops.map(shop => (
          <Shop key={shop.id} shopData={shop} />
        ))}
        <View style={{height: 120}} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    shops: state.data.shops,
  };
};

export default connect(mapStateToProps)(Shops);
