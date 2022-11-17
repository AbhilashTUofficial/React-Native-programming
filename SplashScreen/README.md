# Setup Splash-Screen
<br/>

### Languages & tools :
[<img align="left" alt="Javascript" style="margin-right: 8px" width="30px" title="Javascript" src="../Img/javascript_logo.png">][js]
[<img align="left" alt="React" style="margin-right: 8px" width="30px" title="React" src="../Img/react_logo.png">][react]


<br/><br/>

## Android :

1. Generate Splash screen.
2. Install Package.
3. Edit MainActivity.java
4. Create launch_screen.xml
5. Change background color.
6. Auto-hide Splash screen.

### 1. Generate Splash screen.

    First, head over to Appicon Website. Drag your image on the box provided, select 4x as your base size, select iOS, and Android, and click generate. 

    Next, extract the downloaded file and copy the iOS and Android folder to the assets folder located in the assets directory

<a href="https://appicon.co/#image-sets">Appicon website</a>

### 2. Install Package

    npm i react-native-splash-screen --save to install the RNSplashscreen package

### 3. Edit MainActivity.java

    // imports
    import android.os.Bundle;
    import org.devio.rn.splashscreen.SplashScreen; 
    
    // override methods
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

### 4. Create launch_screen.xml
```
    Next, create a file called launch_screen.xml in app/src/main/res/layout (create the layout folder if it doesn’t exist). Then, add the code below to the launch_screen.xml
```

```
    <?xml version="1.0" encoding="utf-8"?>
    <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:orientation="vertical" android:layout_width="match_parent"
        android:layout_height="match_parent">
        <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
    </RelativeLayout>
```

**Note**

    in android:src="@drawable/launch_screen"  with
    replace the launch_screen with the actual name of the image you generated from Appicon.

### 5. Change background color.

```
    Next, create a file called colors.xml in app/src/main/res/values/colors.xml (create the layout folder if it doesn’t exist). Then, add the code below to the

```
```
    <?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_dark">#000000</color>
</resources>
```
### 6. Auto-hide Splash screen

```
    Import the react-native-splash-screen package into the root component (App.js) of your React Native app
    Use useEffect() to hide the splash screen with the code below:
```
```
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
```

## Connect with me:  
<a href="https://grabify.link/4R6GH7" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-right: 8px"  />
</a>
<a href="https://grabify.link/JT8VTU" target="_blank">
<img src=https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white alt=facebook style="margin-right: 8px;" />
</a>
<a href="https://grabify.link/A7YGG0" target="_blank">
<img src=https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-right: 8px;" />
</a>  
<a href="https://grabify.link/DJ1KFZ" target="_blank">
<img src=https://img.shields.io/badge/gmail-%2300acee.svg?&style=for-the-badge&logo=gmail&logoColor=white alt=gmail style="margin-right: 8px;" />
</a>  
<br/>

[react]: https://github.com/AbhilashTUofficial/React-Native-Programming
[js]: https://github.com/AbhilashTUofficial/JavaScript-programming

