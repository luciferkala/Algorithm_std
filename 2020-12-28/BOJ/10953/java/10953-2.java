import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.StringBuilder;
import java.util.Arrays;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int t = Integer.parseInt(br.readLine());
        for (int i = 0; i < t; i++) {
            int[] tmp = Arrays.stream(br.readLine().split(",")).mapToInt(e -> Integer.parseInt(e)).toArray();
            sb.append((tmp[0] + tmp[1]) + "\n");
        }
        System.out.println(sb);
    }
}
