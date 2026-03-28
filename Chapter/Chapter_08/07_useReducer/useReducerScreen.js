import { useReducer, useState } from 'react';
import {
  Pressable,
  Switch,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';

const initialState = {
  count: 0,
  toggleTheme: true,
  todo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    case "TOGGLE_THEME":
      return { ...state, toggleTheme: !state.toggleTheme };

    case "ADD_TODO":
      if (!action.payload.trim()) return state; // prevent empty
      return { ...state, todo: [...state.todo, action.payload] };

    case "REMOVE_TODO":
      return {
        ...state,
        todo: state.todo.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export const UseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const isLight = state.toggleTheme;

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: isLight ? "#f9fafb" : "#111827",
      }}
    >

      {/* Header */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: isLight ? "#000" : "#fff",
        }}
      >
        useReducer Demo
      </Text>

      {/* Theme Toggle */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <Text style={{ color: isLight ? "#000" : "#fff" }}>
          Theme
        </Text>
        <Switch
          value={state.toggleTheme}
          onValueChange={() => dispatch({ type: "TOGGLE_THEME" })}
        />
      </View>

      {/* Counter Section */}
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 18,
            color: isLight ? "#000" : "#fff",
            marginBottom: 10,
          }}
        >
          Count: {state.count}
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            style={btnStyle}
            onPress={() => dispatch({ type: "INCREMENT" })}
          >
            <Text style={btnText}>+1</Text>
          </Pressable>

          <Pressable
            style={btnStyle}
            onPress={() => dispatch({ type: "DECREMENT" })}
          >
            <Text style={btnText}>-1</Text>
          </Pressable>

          <Pressable
            style={[btnStyle, { backgroundColor: "#ef4444" }]}
            onPress={() => dispatch({ type: "RESET" })}
          >
            <Text style={btnText}>Reset</Text>
          </Pressable>
        </View>
      </View>

      {/* TODO Section */}
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 18,
            color: isLight ? "#000" : "#fff",
          }}
        >
          Todo List
        </Text>

        <TextInput
          placeholder="Add Todo..."
          value={input}
          onChangeText={setInput}
          placeholderTextColor="#9ca3af"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
            color: isLight ? "#000" : "#fff",
          }}
        />

        <Pressable
          style={[btnStyle, { marginTop: 10 }]}
          onPress={() => {
            dispatch({ type: "ADD_TODO", payload: input });
            setInput("");
          }}
        >
          <Text style={btnText}>Add Todo</Text>
        </Pressable>

        {/* Todo List */}
        {state.todo.length === 0 ? (
          <Text style={{ color: "#9ca3af", marginTop: 10 }}>
            No todos yet...
          </Text>
        ) : (
          <FlatList
            data={state.todo}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() =>
                  dispatch({ type: "REMOVE_TODO", payload: index })
                }
                style={{
                  padding: 12,
                  marginTop: 8,
                  borderRadius: 8,
                  backgroundColor: isLight ? "#e5e7eb" : "#374151",
                }}
              >
                <Text style={{ color: isLight ? "#000" : "#fff" }}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
};

// Styles
const btnStyle = {
  backgroundColor: "#2563eb",
  padding: 10,
  borderRadius: 8,
};

const btnText = {
  color: "#fff",
  fontWeight: "bold",
};