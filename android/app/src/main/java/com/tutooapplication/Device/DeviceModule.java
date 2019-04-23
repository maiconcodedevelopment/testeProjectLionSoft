package com.tutooapplication.Device;

import android.content.ContextWrapper.*;
import android.provider.Settings;
import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import javax.annotation.Nonnull;

public class DeviceModule extends ReactContextBaseJavaModule {

    public ReactApplicationContext context;

    public DeviceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    @Override
    public String getName() {
        return "DeviceId";
    }

    @ReactMethod
    public void deviceId(Callback stringcallback){
        String androidId = Settings.Secure.getString(context.getContentResolver(),Settings.Secure.ANDROID_ID);
        stringcallback.invoke(androidId);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String DeviceID(){
        return Settings.Secure.getString(context.getContentResolver(),Settings.Secure.ANDROID_ID);
    }
}
