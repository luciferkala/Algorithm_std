import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.StringBuilder;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String input = "";
        while ((input = bf.readLine()) != null) {
            String[] arr = input.split(" ");
            int c = Integer.parseInt(arr[0]) + Integer.parseInt(arr[1]);
            String tmp = c + "\n";
            sb.append(tmp);
        }
        System.out.println(sb);
    }
}
