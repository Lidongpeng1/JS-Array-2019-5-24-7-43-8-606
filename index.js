// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('a is Array ? ' + Array.isArray(a));
console.log('b is Array ? ' + Array.isArray(b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(function(item){
	return item*2;
})
console.log(a);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var margin = [' ','+',','];
for(let pos = 0; pos < margin.length; pos++) {			//分别添加三种间隔
	let output = '';
	colors.forEach(function(item){						//拼接
		output = output + item + margin[pos];
	});
	output = output.substr(0,output.length - 1);		//删除末尾的字符
	console.log(output);
}


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(let i = 1; i < a.length; i++) {					//直接插入排序
	let temp = a[i];
  let j;
	for(j = i-1; j >= 0; j--) {
		if(a[j] < temp) {
			a[j+1] = a[j];
		}else {
			break;
		}
	}
	a[j+1] = temp;
}
console.log(a);


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a
var value = [];     //模拟map容器，value数组记录元素
var count = [];     //count数组记录与value数组下标相对应元素的频率
a.forEach(function(item){
	let pos = value.indexOf(item);		//标记item在value数组中的位置，-1为不包括
	if(pos == -1) {				//不包括，则新建			
		value.push(item);
		count.push(1);
	}else {						//包括，则计数器自增
		count[pos]++;
	}
});
var maxIndex = 0;
for(let i = 1; i < count.length; i++) {	//找出最大值的下标
	if(count[i] > count[maxIndex]) {
		maxIndex = i;
	}
}
console.log(value[maxIndex]);
