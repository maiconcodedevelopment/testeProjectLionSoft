package com.tutooapplication;

import android.content.Context;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.view.Menu;
import android.view.MotionEvent;
import android.view.animation.Animation;

import com.facebook.react.ReactActivity;
import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    @Override
    public void onCreate(Bundle savedInstanceState,PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
    }

    public interface MainLambda{

        public void Main(Integer main);
    }

    @Override
    public void onDestroy(){
        super.onDestroy();

        MainLambda s = (Integer d) -> { System.out.println(d); } ;
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "tutooApplication";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }

    public Class<?>[] mainClass(){
        return new Class[]{ new MainActivity().getClass() };
    }

    @Override
    public boolean dispatchGenericMotionEvent(MotionEvent ev) {
        return super.dispatchGenericMotionEvent(ev);
    }

    public List<? extends String> getMainMaster(){
        return Arrays.<String>asList(
            new String("Yes List")
        );
    }

}
