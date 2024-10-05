# 常用 Hooks

## useState

- 状态是变化的数据

```jsx
// 为组件添加状态
const [age, setAge] = useState(42);
const [name, setName] = useState("Taylor");
const [text, setText] = useState("hello");
const [check, setCheck] = useState(false);

const [newName, setNewName] = useState("小明");
const [newAge, setNewAge] = useState(18);
```

## useEffect

- useLayoutEffect 差不多相同, 看开发者使用场景

- 副作用

  - `React.useEffect(() => {  })` 每次渲染后都会执行此处的代码
  - `React.useEffect(() => {  }, [])` 这里的代码只会在组件挂载后执行
  - `React.useEffect(() => {  }, [a, b])` 这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行

```jsx
export interface VideoPlayerType {
  url: string;
  isPlaying: boolean;
}
type T = null | any;
const VideoPlayer = ({ url, isPlaying }: VideoPlayerType) => {
  const ref = React.useRef < T > null;

  React.useEffect(() => {
    if (isPlaying) {
      ref.current.play(); // 渲染期间不能调用 `play()`。
    } else {
      ref.current.pause(); // 同样，调用 `pause()` 也不行。
    }
  });
  return (
    <>
      <video ref={ref} src={url} loop playsInline></video>
    </>
  );
};
```

## useReducer

- 状态管理

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

```jsx
import React, { useReducer } from 'react';
import { produce } from 'immer';
interface Data {
    num: {
        num1: {
            num2: number;
            num3: {
                num4: number;
            };
        };
    };
}

interface Action {
    type: string;
    init: number;
}

const reducer = (state: Data, action: Action) => {
    console.log(state, action);
    switch (action.type) {
        case 'add':
            // return {
            //     ...state,
            //     num: state.num + action.init,
            // };
            return produce(state, (s) => {
                s.num.num1.num3.num4 += action.init;
            });
        case 'minus':
            return {
                ...state,
                num: state.num.num1.num3.num4 - action.init,
            };

        default:
            return state;
    }
};
const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<Data, Action>>(reducer, {
        num: {
            num1: {
                num2: 0,
                num3: {
                    num4: 4,
                },
            },
        },
    });
    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <div>{JSON.stringify(state.num)}</div>
            <div onClick={() => dispatch({ type: 'add', init: 1 })}> 加 </div>
        </div>
    );
};

export default App;
```
