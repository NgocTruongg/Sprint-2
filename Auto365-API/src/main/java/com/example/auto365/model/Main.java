package com.example.auto365.model;

class A {
    int a = 3;
    void print(){
        System.out.println("day la class A");
    }
}
class B extends A {
    int a = 4;
    void print(){
        System.out.println("day la class B");
    }
}
public class Main {
    public static void main(String[] args) {
        A c = new B();
        System.out.println("ket qua la : "+c.a + "=> c la bien");
        c.print();
    }
}

