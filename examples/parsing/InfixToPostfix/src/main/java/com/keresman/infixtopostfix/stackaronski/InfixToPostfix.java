package com.keresman.infixtopostfix.stackaronski;

import java.util.Stack;

public class InfixToPostfix {


    static int precedence(char op) {
        switch (op) {
            case '+':
            case '-':
                return 1;

            case '*':
            case '/':
                return 2;

            case '^':
                return 3;

            default:
                return -1;
        }
    }

    static String convert(String infix) {
        Stack<Character> stack = new Stack<>();
        StringBuilder postfix = new StringBuilder();

        for (int i = 0; i < infix.length(); i++) {

            char c = infix.charAt(i);

            // Ignore spaces
            if (c == ' ') {
                continue;
            }

            // If operand, add to output
            if (Character.isLetterOrDigit(c)) {
                postfix.append(c);
            }

            // Opening parenthesis
            else if (c == '(') {
                stack.push(c);
            }

            // Closing parenthesis
            else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    postfix.append(stack.pop());
                }
                stack.pop();
            }

            // Operator
            else {
                while (!stack.isEmpty()
                        && stack.peek() != '('
                        && precedence(stack.peek()) >= precedence(c)) {

                    postfix.append(stack.pop());
                }

                stack.push(c);
            }
        }

        // Pop remaining operators
        while (!stack.isEmpty()) {
            postfix.append(stack.pop());
        }

        return postfix.toString();
    }


}
