# React Native React 18 Examples

This repository implements examples of React 18 from the new [react.dev](https://react.dev/) in React Native.

## ⚠️ Warning ⚠️

This repo works on iOS but not Android. This repo uses the latest `react-native@0.72.0-rc.3` release, which does not have concurrent render support for Android. See this [discussion for more details](https://github.com/reactwg/react-native-new-architecture/discussions/94#discussioncomment-5880785).

## Road Map

This repo is currently under construction, here is the status of the examples that should be implemented:

| Feature                | Status | Docs                                                                        |
| ---------------------- | ------ | --------------------------------------------------------------------------- |
| Automatic batching     | ✅     | https://react.dev/blog/2022/03/08/react-18-upgrade-guide#automatic-batching |
| Strict Mode            | 🚧     | https://react.dev/reference/react/StrictMode                                |
| `useId`                | 🚧     | https://react.dev/reference/react/useId                                     |
| `useSyncExternalStore` | 🚧     | https://react.dev/reference/react/useSyncExternalStore                      |
| `startTransition`      | 🚧     | https://react.dev/reference/react/startTransition                           |
| `useTransition`        | ✅     | https://react.dev/reference/react/useTransition                             |
| `useDeferredValue`     | ✅     | https://react.dev/reference/react/useDeferredValue                          |
| Full Suspense support  | ✅     | https://react.dev/reference/react/Suspense                                  |

| Emoji | Definition   |
| ----- | ------------ |
| ✅    | Implemented  |
| 👷    | In progress  |
| 🚧    | Not started  |
| 🚫    | Not possible |

## React DevTools

In order to explore some of the new features like concurrent rendering, use `yarn devtools` to open the React DevTools.

Switch to the `Profiler` tab, record your interactions and then replay them to see how the renders are scheduled. [Read more at the React blog](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#reading-performance-data).

## Installation

```bash
yarn
```

## Usage

```bash
yarn ios
```

or

```bash
yarn android
```
