# react-native

- react-native/typescript/apollo/graphql

## 참고페이지

- https://reactnative.dev/docs/environment-setup
- https://reactnative.dev/docs/typescript

## 라이브러리

- UI : react-native-paper
- Toast : react-native-tiny-toast <https://www.npmjs.com/package/react-native-tiny-toast>
- Form : react-hook-form <https://react-hook-form.com/kr/get-started/>
- Webview : react-native-webview <https://github.com/react-native-community/react-native-webview>
- app generator : react-native-make <https://github.com/bamlab/react-native-make>
  > npm install --save-dev @bam.tech/react-native-make

## 오류사항

> Reload가 안될때

```
  rm -rf /usr/local/var/run/watchman && brew uninstall watchman && brew install watchman
```

> Build Error

##### android

- Uninstall Node Modules
- Clean Gradle (cd android && gradlew clean) 혹은 _sudo ./gradlew clean_
- now install back your modules (yarn install)

//ios

# Build & Deploy

## Android

- 참고페이지 <https://reactnative.dev/docs/signed-apk-android>

## Splash

- <https://github.com/crazycodeboy/react-native-splash-screen>
