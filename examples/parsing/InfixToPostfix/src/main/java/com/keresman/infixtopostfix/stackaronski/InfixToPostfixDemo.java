package com.keresman.infixtopostfix.stackaronski;

import java.util.Scanner;

public class InfixToPostfixDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter infix expression: ");
        String infix = sc.nextLine();

        String postfix = InfixToPostfix.convert(infix);
        System.out.println("Postfix expression: " + postfix);

        sc.close();
    }
}
