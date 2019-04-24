package com.example.alura;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

    interface shareFunctionTeste{

        double getValue();

    }

    interface shareFunctionLock{

        boolean teste(int n);

    }

    interface tvalueNumber{

        Collection<String> teste(Collection<String> cole);
    }

    interface valueNumber{
        boolean teste(int a,int b);
    }

    interface GetValue{

        int valueSetMotify(int value);

    }

    public static void filtro(List<String> lista, Predicate<String> condicao){
//        for(String aa:lista)
//            if(condicao.test(aa))
//                System.out.println(aa);
        lista.stream().filter(condicao::test).forEach(System.out::println);
    }

    class showMessage{

        public showMessage addStateListener(shareFunctionLock listener){
            System.out.println(listener.teste(5));
            System.out.println("------ end");
            return null;
        }

    }

    public class DiaSemanaConstrains{
        public static final int SEGUNDA = 1;
        public static final int TERCA = 2;
        public static final int QUARTA = 3;
    }


    @Test
    public void addition_isCorrect() {

        showMessage mg = new showMessage().addStateListener((v) -> v % 5 == 0);
        showMessage jg = new showMessage().addStateListener((w) -> w % 10 == 0);
        tvalueNumber ff = (cole) -> cole;

        GetValue value = (s) ->  s + 3;

        System.out.println(value.valueSetMotify(2));

        System.out.println("sim");

        Class[] classes = new Class[10];
        classes[0] = MainActivity.class;
        classes[1] = MainActivity.class;

        Integer[][] sf = new Integer[3][3];

        for (int s = 0 ; s < 3 ;s++){
            for(int a = 0 ; a < 3 ; a++){
                sf[s][a] = a;
            }
        }

        System.out.println(sf);


        //implementation
        Runnable ri = new Runnable() {
            @Override
            public void run() {
               System.out.println("Study lambda");
            }
        };

        Runnable r2 = () -> System.out.println("Study lambda 2");

        List Liat = Arrays.asList(
                "sim",
                "nao",
                "agora",
                "vai",
                "voce"
        );

//        Liat.forEach( x -> System.out.println(x));
//        Liat.forEach(System.out::println);

        filtro(Liat,(String s) -> s.startsWith("s"));
        filtro(Liat, (String s) -> s.startsWith("n"));

        System.out.println("-----");

        filtro(Liat, s -> false);

        ri.run();
        r2.run();

        shareFunctionTeste m;
        shareFunctionLock mm;
        valueNumber nn;
        m = () -> 333.4;
        mm = (int n) -> (n % 2) == 0;
        nn = ( a, b) -> {
            int w = a + b;
            return w % 4 == 0;
        };

        System.out.println(mm.teste(90));
        System.out.println(mm.teste(89));
        System.out.println(m.getValue());
        System.out.println(nn.teste(10,2));
        System.out.println(nn.teste(10,3));

        shareFunctionTeste a;
        a = () -> Math.random() * 100;

        System.out.println(a.getValue());

        ArrayList<String> list = new ArrayList<>();

        list.add("Sim");
        list.add("nao");
        list.add("not");
        list.add("default");

        list.forEach(name -> System.out.print(name));

        assertEquals(4, 2 + 2);
    }
}