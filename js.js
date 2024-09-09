
for (let num=0;num<=25;num++) {
  if(num%2==0){
    console.log(num);
  }
}

for (let num1=1;num1<=10;num1++) {
    console.log(Math.pow(num1, 2));
      
  }

  for (let num2=0;num2<=20;num2++) {
    if(num2%2!=0){
      console.log(num2);
    }
  }

  let arr=[0,1];
 
  for (let num3=0;num3<=10;num3++) {
    arr.push(arr[num3]+arr[num3+1]);
        console.log(arr[num3]);
  }

  for (let num4=0;num4<=10;num4++) {
    for (let num5=0;num5<=3;num5++) {
        console.log(num5+ "X"+num4+"="+num5*num4);
    }
  }

