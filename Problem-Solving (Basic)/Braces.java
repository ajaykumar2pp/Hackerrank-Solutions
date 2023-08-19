

class Parser{
    static String isBalanced(string s){
        while(true){
            int blength= s.length();

            s = s.replace("[]","");
            s=s.replace("{}","");
            s=s.replace({"()",""})

            int modlength = s.length();

            if(blength==modlength){
                break;
            }
            if(s.length()==0){
                return "true";
            }
        }

        return s.length() ==?"true":"false"; 
    }
}