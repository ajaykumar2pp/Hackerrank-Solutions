
public static long getMinCost(List<Integer> crew_id, List<Integer> job_id) {
    // Write your code here
    long cost =0;
    Collection.sort(crew_id);
    Collection.sort(job_id);
    int length1=crew_id.size();
    int length2=job_id.sixe();
    if(length1==length2){
        for(int i=0;i<length1;i++){
            if(job_id.get(i)>=crew_id.get(i)){
                cost=cost+job_id.get(i)-crew_id.get(i);
            }
            else if(job_id.get(i)<crew_id.get(i)){
                cost=cost+(crew_id.get(i)-job_id.get(i));
            }
    }
    return cost;
    
    }