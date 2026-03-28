import { useReducer, useRef, useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../const/Color';
const initialState = {
  count: 0,
  toggleTheme: false,
  todo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCR':
      return { ...state, count: state.count + 1 };

    case 'DECR':
      return { ...state, count: state.count - 1 };

    case 'RESET':
      return { ...state, count: 0 };

    case 'ADD_TODO':
      if (!action.payload.trim()) return state; // prevent empty
      return { ...state, todo: [...state.todo, action.payload] };

    case 'REMOVE_TODO':
      return {
        ...state,
        todo: state.todo.filter((_, i) => i !== action.payload),
      };

    case 'TOGGLETHEME':
      return { ...state, toggleTheme: !state.toggleTheme };
    default:
      return { ...state };
  }
};

export const LearnUseReducer = () => {
  const inputRef = useRef();
  const [todoInput, setTodoInput] = useState('');
  // const [toggleTheme, settoggleTheme] = useState(second)
  const [state, dispatch] = useReducer(reducer, initialState);
  const isLight = state.toggleTheme;
  let theme = isLight ? COLORS.light : COLORS.dark;
  console.log(state.todo);

  return (
    <View
      style={{ margin: 0, backgroundColor: theme.background, flex:1 }}
    >
      <View
        style={{
          padding: 10,
          flex:1
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            // padding:10
          }}
        >
          <Switch
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
            }}
            value={state.toggleTheme}
            onValueChange={() => dispatch({ type: 'TOGGLETHEME' })}
          />
          <Text
            style={{
              color: theme.text,
            }}
          >
            Theme : {isLight ? 'LIGHT' : 'DARK'}
          </Text>
        </View>
        <View>
          <Text
            style={{ alignSelf: 'center', fontSize: 24, color: theme.text }}
          >
            Count : {state.count}{' '}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Pressable
              onPress={() => dispatch({ type: 'INCR' })}
              style={{
                borderWidth: 1,
                padding: 3,
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 10,
                borderColor: theme.border,
                backgroundColor: theme.secondary,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: theme.textSecondary,
                  fontWeight: 'bold',
                }}
              >
                Increase++
              </Text>
            </Pressable>
            <Pressable
              onPress={() => dispatch({ type: 'DECR' })}
              style={{
                borderWidth: 1,
                padding: 3,
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 10,
                borderColor: theme.border,
                backgroundColor: theme.secondary,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: theme.textSecondary,
                  fontWeight: 'bold',
                }}
              >
                Decrease--
              </Text>
            </Pressable>
            <Pressable
              onPress={() => dispatch({ type: 'RESET' })}
              style={{
                borderWidth: 1,
                padding: 3,
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 10,
                borderColor: theme.border,
                backgroundColor: theme.secondary,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: theme.textSecondary,
                  fontWeight: 'bold',
                }}
              >
                Reset:0
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: theme.text,
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
            }}
          >
            TODO
          </Text>

          <TextInput
            placeholder="Enter your todo"
            style={{
              backgroundColor: theme.inputBackground,
              borderColor: theme.inputBorder,
              marginTop: 10,
              borderWidth:1,
              color: theme.text,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            keyboardType="ascii-capable"
            value={todoInput}
            onChangeText={setTodoInput}
            placeholderTextColor={theme.placeholder}
          />

          <View
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor:
                  todoInput.trim() === ''
                    ? theme.buttonDisabled
                    : theme.primary,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
                borderBlockColor: theme.border,
              }}
              disabled={todoInput.trim() === ''}
              onPress={() => {
                dispatch({ type: 'ADD_TODO', payload: todoInput });
                setTodoInput('');
              }}
            >
              <Text style={{color:theme.buttonText,fontWeight:'bold'}}>Add Todo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1}}>
          <Text
            style={{
              color: theme.text,
              fontSize: 20,
              marginTop: 20,
              alignSelf: 'center',
            }}
          >
            Todo List
          </Text>

          {state.todo.length === 0 && (
            <Text
              style={{ color: theme.textMuted, marginTop: 10, fontSize: 18 }}
            >
              No todos yet...
            </Text>
          )}

          <View style={{flex:1}}>
            <FlatList
            data={state.todo}
            style={{flex:1}}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  backgroundColor: theme.card,
                  // paddingVertical: 155,
                  borderRadius: 8,
                  // paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Text style={{ color: theme.text, alignSelf: 'center' ,fontSize:20}}>
                  {item}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    dispatch({ type: 'REMOVE_TODO', payload: index })
                  }
                >
                  <Text
                    style={{
                      color: theme.danger,
                      fontWeight: 'bold',
                      backgroundColor: theme.border,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderColor: theme.buttonText,
                      borderRadius: 10,
                      shadowColor: theme.shadow,
                      fontSize:20
                    }}
                  >
                    ✕
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          </View>
        </View>
      </View>
    </View>
  );
};
