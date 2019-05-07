## Debugging

### reactotron

### react-devtools

On another terminal tab, run `yarn run react-devtool`. The `react-devtools` standalone application will open. Once you refresh the app, `react-devtools` will connect and you'll see the components tree, like the following image:
![react-devtools](https://user-images.githubusercontent.com/12154623/57313067-2dc0f780-70c5-11e9-9304-7f96c7befb6b.png)

## Troubleshooting

If you're debugging via USB and you have any trouble on using `react-devtools` you can run:

```
adb reverse tcp:8097 tcp:8097
```
