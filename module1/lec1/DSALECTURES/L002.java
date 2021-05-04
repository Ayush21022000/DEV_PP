import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int b = scn.nextInt();
      int n1 = scn.nextInt();
      int n2 = scn.nextInt();
  
      int d = getSum(b, n1, n2);
      System.out.println(d);
   }
  
   public static int getSum(int base, int n1, int n2){
       int rv=0,pow=1,carry=0;
       while(n1>0||n2>0||carry>0){
           int d1= n1 % 10;
           int d2= n2 % 10;
        
           int sum= d1+d2+carry;
           int digit= sum%base;
           carry= sum/base;
           
           rv=(digit*pow)+rv;
           
           n1=n1/10;
           n2=n2/10;
           pow= pow*10;
       }
       return rv;
   }
  }//next program is as under:_;

  import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int b = scn.nextInt();
      int n1 = scn.nextInt();
      int n2 = scn.nextInt();
  
      int d = getDifference(b, n1, n2);
      System.out.println(d);
   }
  
   public static int getDifference(int base, int n1, int n2){
       int rv=0,pow=1,borrow=0;
       while(n2>0){
           int d1= n1%10;
           int d2=n2%10;
           
           int diff= d2-d1-borrow;
           if(diff<0){
               diff=diff+base;
               borrow=1;
           } else{
               borrow=0;
           }
           rv=(diff*pow)+rv;
           n1=n1/10;
           n2=n2/10;
           pow=pow*10;
       }
        return rv;   
   }
  
  }
  // find element in an array:
  import java.io.*;
import java.util.*;

public class Main{
public static void main(String[] args){
    Scanner scn= new Scanner(System.in);
    int n= scn.nextInt();
    int arr[]=new int[n];
    for(int idx=0; idx<arr.length;idx++){
        arr[idx]= scn.nextInt();
        
    }
    int x= scn.nextInt();
    int res=find(arr,x);
    
    System.out.println(res);
 }
 public static int find(int arr[],int x){
     //logic
     for(int idx=0;idx<arr.length;idx++){
        if(arr[idx]==x){
            return idx;
        }
     }
     return -1;
 }

}
//span of an  array:
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args){
    Scanner scn= new Scanner(System.in);
    int n= scn.nextInt();
    int arr[]= new int[n];
    for(int idx=0;idx<arr.length;idx++){
        arr[idx]=scn.nextInt();
        
    }
    int res= spanOfArray(arr);
    System.out.println(res);
    
 }
public static int spanOfArray(int arr[]){
    int max=Integer.MIN_VALUE, min= Integer.MAX_VALUE;
    for(int val: arr){
        if (val>max){
            max=val;
            
        }
        if(val<min){
            min=val;
            
        }
    }
    return max- min ;
}
}
// reverse an array: 
import java.io.*;
import java.util.*;

public class Main{
  public static void display(int[] a){
    StringBuilder sb = new StringBuilder();

    for(int val: a){
      sb.append(val + " ");
    }
    System.out.println(sb);
  }

  public static void reverse(int[] arr){
    int lo=0;
    int hi = arr.length-1;
    while(lo<hi){
        int temp= arr[lo];
        arr[lo]=arr[hi];
        arr[hi]=temp;
        
        lo++;
        hi--;
    }
    
  }

public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());
    int[] a = new int[n];
    for(int i = 0; i < n; i++){
       a[i] = Integer.parseInt(br.readLine());
    }

    reverse(a);
    display(a);
 }

}
//pattern Z:
import java.util.*;

public class Main {

    public static void main(String[] args) {
        System.out.println("*****");
        System.out.println("   * ");
        System.out.println("  *  ");
        System.out.println(" *   ");
        System.out.println("*****");
        

    }
}
//grading:
import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      // input - don't change this code
      Scanner scn = new Scanner(System.in);
      int marks = scn.nextInt();
      // input - don't change this code
      
      if(marks>90){
          System.out.println("excellent");
      }  
      if(marks>80 && marks<=90 ){
          System.out.println("good");
      }
      if(marks>70 && marks<=80 ){
          System.out.println("fair");
   }
      if(marks>60 && marks<=70 ){
          System.out.println("meets expectations");
      }
      if(marks<=60){
          System.out.println("below par");
      }
  } 
      
  }