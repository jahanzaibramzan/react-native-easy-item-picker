
# react-native-easy-item-picker

## Getting started

`$ npm install react-native-easy-item-picker --save`

### Mostly automatic installation

`$ react-native link react-native-easy-item-picker`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-item-picker` and add `RNItemPicker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNItemPicker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNItemPickerPackage;` to the imports at the top of the file
  - Add `new RNItemPickerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-item-picker'
  	project(':react-native-easy-item-picker').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-item-picker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-item-picker')
  	```

## Usage
```javascript
import MyPicker from 'react-native-easy-item-picker'

const mOptions = [
    { key: "Option No 1", value: "opt1" },
    { key: "Option No 2", value: "opt2" },
    { key: "Option No 3", value: "opt3" },
]

	<MyPicker
        title={"Select alink"}
        noSelectionTxt={"Select a link"}

        selectedColor={"#000"}
        unSelectedColor={"#999"}
        arrowColor={"#000"}
        itemTxtColor={"#000"}
        txtFontFamily={{ fontFamily: /*FONT_NAME*/ }}

        titleStyle={{ color: "#000" }}
        bgContainerStyle={{ marginVertical: 20 }}

    	options={mOptions}
        onSelectChange={(item) => { console.log(item) }}
    />
```
  