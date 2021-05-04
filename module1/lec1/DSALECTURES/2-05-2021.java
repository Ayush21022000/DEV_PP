import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn= new Scanner(System.in);
    int nr= scn.nextInt();
    int nc= scn.nextInt();
    int mat[][]= new int[nr][nc];
    for(int i = 0 ; i <nr; i++){
        for(int j = 0 ; j <nc;j++){
            mat[i][j]=scn.nextInt();
            
        }
    }
    for(int c= 0 ; c<nc;c++){
        if(c%2==0){
            //even= top-->bottom
            for(int r=0;r<=nr-1;r++){
                System.out.println(mat[r][c]);
            }
        }else{
            //odd=bottom-->top
            for(int r=nr-1;r>=0;r--){
                System.out.println(mat[r][c]);
                
            }
        }
    }
 }

}
//spiral 
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        
        int nr = scn.nextInt();
        int nc = scn.nextInt();
        int mat[][] = new int[nr][nc];
        for(int i = 0 ; i < nr ; i++){
            for(int j = 0 ; j < nc ; j++){
                mat[i][j] = scn.nextInt();
            }
        }
        
        spiralDisplay(mat);
    }
    public static void spiralDisplay(int mat[][]){
        int rmin=0,cmin=0,rmax=mat.length-1,cmax=mat[0].length-1;
        int count=0;
        int totalEle=mat.length*mat[0].length;
        while(count<totalEle){
            for(int i= rmin,j=cmin;i<=rmax &&count<totalEle;i++){
                System.out.println(mat[i][j]);
                count++;
            }
            for(int i = rmax,j=cmin+1;j<=cmax&&count<totalEle;j++){
                System.out.println(mat[i][j]);
                count++;
            }
            for(int i = rmax-1,j=cmax;i>=rmin&&count<totalEle;i--){
                System.out.println(mat[i][j]);
                count++;
            }
            for(int i =rmin,j=cmax-1;j>=cmin+1&&count<totalEle;j--){
                System.out.println(mat[i][j]);
                count++;
            }
            rmin++;
            cmin++;
            rmax--;
            cmax--;
        }
    }

    

}
//matrix multiplication
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    
    int nr1= scn.nextInt();
    int nc1= scn.nextInt();
    
    int mat1[][]=new int[nr1][nc1];
    
    for(int i = 0 ; i <nr1;i++){
        for(int j = 0 ; j <nc1;j++){
            mat1[i][j]=scn.nextInt();
            
    }
    }
    int nr2= scn.nextInt();
    int nc2= scn.nextInt();
    
    int mat2[][]=new int[nr2][nc2];
    
    for(int i = 0 ; i <nr2;i++){
        for(int j = 0 ; j <nc2;j++){
            mat2[i][j]=scn.nextInt();
        }
    }

    //logic:
    if(nc1==nr2){
        //multiplication pos.
        int res[][]=new int [nr1][nc2];
        //matrix multiplication:
        for(int i = 0 ; i<res.length;i++){
            for(int j = 0 ; j<res[0].length;j++){
                for(int k=0;k<nc1;k++){
                    res[i][j]=res[i][j]+(mat1[i][k]*mat2[k][j]);
                }
            }
        }
        //display:
        for(int i = 0 ; i<res.length;i++){
            for(int j = 0 ; j<res[0].length;j++){
                System.out.print(res[i][j]+" ");
            }
            System.out.println();
        }
    }else{
        System.out.println("Invalid input");
    }
}
}
//2d array demo
import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args){
    Scanner scn = new Scanner(System.in);
    
    int nr= scn.nextInt();
    int nc= scn.nextInt();
    
    int mat[][]=new int[nr][nc];
    
    for(int i = 0 ; i <nr;i++){
        for(int j = 0 ; j <nc;j++){
            mat[i][j]=scn.nextInt();
            
        }
    } 
    //output
    for(int i = 0 ; i <nr;i++){
         for(int j = 0 ; j <nc;j++){
             System.out.print(mat[i][j]+" ");
             
    }
    System.out.println();
 }
}  }
//exit point
/*4
4
0
0
1
0
1
0
0
0
0
0
0
0
1
0
1
0*/