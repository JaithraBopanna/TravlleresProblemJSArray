a=[];
b=[];

a[2]={src:'bangalore' , des:'delhi'};
a[1]={src:'delhi' , des:'chandigarh'};
a[0]={src:'chandigarh' , des:'srinagar'};
a[3]={src:'srinagar' , des:'leh'};

start='';
 init='';
//find start and dest
init=a[0].src;
for(i=1;i<a.length;i++){
	
	for(j=0;j<a.length;j++){
		if(init==a[j].des)
		{
		 init=a[i].src;;	
		 index=i;		
		}
}

}



start=a[index].des;
b[0]=a[index];

 for(j=1;j<a.length;j++){

 	for(i=0;i<a.length;i++){
 		if(start==a[i].src){
 			b[j]=a[i];
 			start=b[j].des;
 			break;
 		}
 	}

 }

console.log(a);

console.log(b);