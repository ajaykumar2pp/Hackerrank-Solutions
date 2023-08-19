import java.util.ArrayList;
import java.util.Collections;

public class FileProcessing {
    public static long minTime(ArrayList<Integer> files, int numCores, int limit) {
        long ans = 0;
        int k = 1;
        ArrayList<Integer> v = new ArrayList<>();

        for (int i = 0; i < files.size(); i++) {
            if (files.get(i) % numCores != 0) {
                ans += files.get(i);
            } else {
                v.add(files.get(i));
            }
        }

        Collections.sort(v);

        for (int i = v.size() - 1; i >= 0; i--) {
            if (k <= limit) {
                ans += (v.get(i) / numCores);
                k++;
            } else {
                ans += v.get(i);
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        ArrayList<Integer> files = new ArrayList<>();
        files.add(15);
        files.add(10);
        files.add(20);
        
        int numCores = 5;
        int limit = 2;
        
        long result = minTime(files, numCores, limit);
        System.out.println(result);
    }
}
