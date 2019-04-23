package com.example.alura;

import android.annotation.TargetApi;
import android.os.Build;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @TargetApi(Build.VERSION_CODES.N)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String[] m = new String[]{ "sim" };

        List<String> items = new ArrayList<>();

        items.add("A");
        items.add("B");
        items.add("C");
        items.add("D");
        items.add("E");

        items.forEach(item->System.out.println(item));

    }

    public void insertMainActivy(@Nullable String main){
    }

    public @Nullable String retorno(@Nullable String value){
        return value;
    }
}
