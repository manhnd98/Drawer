

# Sample Extension

[Chrome Devguide](https://developer.chrome.com/extensions/devguide)

The purpose of this extension is to reproduce the bug encountered with `@autoInjectable` from **tsyringe**. 

The installed extension will immediately throw an error visible in `chrome://extensions/`.

```javascript
Uncaught TypeError: Class constructor HelloService cannot be invoked without 'new'
```



## Setup

1. Import this Git-Repository into your favorite editor

2. From within the top level directory containing the file *package.json*, run:

   ``` bash
   npm install
   ```



### Scripts

**Build:**

```bash
npm run build
```

**Watch mode:**

```
npm run watch
```

**Cleanup:**

```bash
npm run clean
```



### Install extension to chrome

Make sure that the *dist* folder in your cloned project exists. If not **build** the project before you continue with the following steps.

1. Open a new tab and navigate to `chrome://extensions/`
2. Enable the developer mode on the top right corner 
3. Click `load unpacked extension` on the top left corner
4. From within the newly opened *Explorer Window* Navigate to the `dist` directory in this project
5. Click `Open`
6. Now activate the extension by toggling the switch to`On`

