import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = -1;
        int b = -1;
        while (sc.hasNextInt()) {
            a = sc.nextInt();
            b = sc.nextInt();
            if (a == 0 && b == 0)
                break;
            System.out.println(a + b);
        }
    }
}