import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';

const r1 = ['', '', '', 1, 2, 3, 4];
const r2 = [5, 6, 7, 8, 9, 10, 11];
const r3 = [12, 13, 14, 15, 16, 17, 18];
const r4 = [19, 20, 21, 22, 23, 24, 25];
const r5 = [26, 27, 28, 29, 30, null, null];
const d = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const d1 = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const App = () => {
  const [dateDay, setDateDay] = useState('');
  const [eventName, setEventName] = useState('');
  const [list, setList] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <View style={{backgroundColor: '#EFF5FA', flex: 1, alignItems: 'center'}}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => {
          setShowWarning(false);
        }}>
        <View style={styles.centered_view}>
          <View style={styles.alertBox}>
            <View style={styles.titleView}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'JosefinSans-Bold',
                  fontSize: 20,
                }}>
                Note!
              </Text>
            </View>
            <Text
              style={{
                color: '#5A328B',
                fontFamily: 'JosefinSans-Bold',
                textAlign: 'center',
                paddingTop: 40,
                fontSize: 15,
              }}>
              Fill both fields
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#5A328B',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                height: 30,
                width: 70,
                marginLeft: 260,
                marginTop: 35,
              }}
              onPress={() => setShowWarning(false)}>
              <Text style={{color: 'white', fontFamily: 'JosefinSans-Bold'}}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.textHeading}>Event Planner</Text>

      <View
        style={{
          backgroundColor: '#EFF5FA',
          height: 270,
          width: 370,
        }}>
        <View
          style={{
            backgroundColor: '#5A328B',
            height: 40,
            flexDirection: 'row',
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {d1.map((ele, index) => (
            <Text style={styles.innerText} key={index}>
              {ele}
            </Text>
          ))}
        </View>

        <View style={{flexDirection: 'row'}}>
          {r1.map((ele, index) => {
            return (
              <TouchableOpacity
                style={styles.date}
                onPress={() => {
                  setDateDay(`${ele}-${d[index]}`);
                }}
                key={index}>
                <Text style={styles.text}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{flexDirection: 'row'}}>
          {r2.map((ele, index) => {
            return (
              <TouchableOpacity
                style={styles.date}
                onPress={() => {
                  setDateDay(`${ele}-${d[index]}`);
                }}
                key={index}>
                <Text style={styles.text}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{flexDirection: 'row'}}>
          {r3.map((ele, index) => {
            return (
              <TouchableOpacity
                style={styles.date}
                onPress={() => {
                  setDateDay(`${ele}-${d[index]}`);
                }}
                key={index}>
                <Text style={styles.text}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{flexDirection: 'row'}}>
          {r4.map((ele, index) => {
            return (
              <TouchableOpacity
                style={styles.date}
                onPress={() => {
                  setDateDay(`${ele}-${d[index]}`);
                }}
                key={index}>
                <Text style={styles.text}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{flexDirection: 'row'}}>
          {r5.map((ele, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.date}
                onPress={() => {
                  setDateDay(`${ele}-${d[index]}`);
                }}>
                <Text style={styles.text}>{ele}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#EFF5FA',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...styles.text,
            marginTop: 20,
            marginLeft: 10,
            fontFamily: 'JosefinSans-SemiBold',
          }}>
          Event Name:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Name"
          placeholderTextColor="grey"
          value={eventName}
          onChangeText={text => setEventName(text)}
        />
        <Text
          style={{
            ...styles.text,
            marginTop: 10,
            marginLeft: 10,
            fontFamily: 'JosefinSans-SemiBold',
          }}>
          Date/Day:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Date-Day"
          placeholderTextColor="grey"
          value={dateDay}
        />
      </View>

      <View
        style={{
          width: 370,
          backgroundColor: '#EFF5FA',
          paddingVertical: 24,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{...styles.buttons, backgroundColor: '#663399'}}
          onPress={() => {
            if (dateDay == '' || eventName == '') setShowWarning(true);
            else {
              setList([
                ...list,
                {
                  id: list.length + 1,
                  Ename: eventName,
                  date: dateDay,
                },
              ]);
              setEventName('');
              setDateDay('');
            }
          }}>
          <Text style={{color: 'white'}}>Add to Event</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.buttons,

            margin: 5,
            backgroundColor: '#C5578B',
          }}
          onPress={() => {
            setList([]);
          }}>
          <Text style={{color: 'white'}}>Remove All</Text>
        </TouchableOpacity>
      </View>

      <View
        elevation={5}
        style={{
          backgroundColor: 'white',
          height: 170,
          width: 370,
          borderRadius: 10,
          shadowColor: '#663399',
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: {
            height: 5,
            width: 5,
          },
        }}>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <Text
              key={item.id}
              style={{
                ...styles.text,
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}>{`${item.Ename}, ${item.date}`}</Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 50,
    margin: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },

  text: {
    color: '#663399',
    fontSize: 15,
    fontFamily: 'JosefinSans-SemiBold',
  },

  input: {
    borderBottomColor: '#663399',
    borderBottomWidth: 1,
    height: 40,
    width: 300,
    color: 'black',
  },

  innerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    width: 50,
    margin: 2,
    textAlign: 'center',
    fontFamily: 'JosefinSans-SemiBold',
  },

  textHeading: {
    fontSize: 30,
    fontFamily: 'JosefinSans-SemiBold',
    fontWeight: '600',
    color: '#5A328B',
    textAlign: 'center',
    paddingVertical: 20,
  },

  buttons: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    flex: 1,
  },

  centered_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },

  alertBox: {
    width: 350,
    height: 200,
    backgroundColor: '#EFF5FA',
    borderRadius: 10,
  },

  titleView: {
    backgroundColor: '#5A328B',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    width: 350,
  },
});
