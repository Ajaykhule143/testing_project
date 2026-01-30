import java.io.*;

class  Bubble {
    static void sort(int  arr[], int n){
        int i, j, temp;
        boolean swapped;

        for(i = 0; i < n - 1 ; i++) {
            swapped  = false;
            for(j = 0; j < n -1 ; j++){
                if(arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j  +1] temp;
                    swapped = true; 
                }
            }
        }
    }
}