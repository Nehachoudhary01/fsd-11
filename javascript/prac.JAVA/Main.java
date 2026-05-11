public class Main {

    public static void main(String[] args) {
        int num = 5;
        int fact = 1;
        for (int i = 0; i <= num; i++) {
            fact *= i;
        }
        System.out.println("The factorial of 5 is : " +fact);
    }
}
