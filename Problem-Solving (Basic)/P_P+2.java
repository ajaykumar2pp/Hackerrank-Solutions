import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Result {

    /*
     * Complete the 'minTime' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY files
     *  2. INTEGER numCores
     *  3. INTEGER limit
     */

    public static long minTime(List<Integer> files, int numCores, int limit) {
        long ans = 0;
        int k = 1;
        List<Integer> v = new ArrayList<>();

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
        List<Integer> files = new ArrayList<>();
        files.add(15);
        files.add(10);
        files.add(20);
        
        int numCores = 5;
        int limit = 2;
        
        long result = minTime(files, numCores, limit);
        System.out.println(result);
    }
}

