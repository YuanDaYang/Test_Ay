function fibonacci(position){   
    if(position == 0)return 0 ;
    if(position == 1||position == 2)return 1 ;
    if(position>=3)return fibonacci(position-1)+fibonacci(position-2);         
}
console.log(fibonacci(20))

