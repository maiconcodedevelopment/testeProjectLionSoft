package com.tutooapplication;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;

import javax.annotation.Nonnull;

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext context){
        super(context);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    @Override
    public HashMap<String,Object> getConstants(){
        final HashMap<String,Object> hashMap = new HashMap<>();
        hashMap.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);;
        hashMap.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);

        WritableMap map = Arguments.createMap();

        return hashMap;
    }

    @ReactMethod
    public void show(String message,int duration){
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }

    @ReactMethod
    public void showGet(String message,int duration){
        System.out.println(message);
    }

}
