import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.StringBuilder;
import java.util.Arrays;
import java.util.Optional;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String input = "";
        while ((input = bf.readLine()) != null) {
            Optional<Integer> tmp = Arrays.stream(input.split(" ")).map(i -> Integer.parseInt(i))
                    .reduce((accu, curr) -> {
                        return accu + curr;
                    });
            if (tmp.get() == 0)
                break;
            sb.append(tmp.get() + "\n");
        }
        System.out.println(sb);
    }
}
