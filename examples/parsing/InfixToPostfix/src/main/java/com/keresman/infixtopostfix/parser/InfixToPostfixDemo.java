package com.keresman.infixtopostfix.parser;


import java.io.IOException;

public class InfixToPostfixDemo {
    public static void main(String[] args) throws IOException {
        Parser parser = new Parser();
        parser.expr();
        System.out.println();
    }
}