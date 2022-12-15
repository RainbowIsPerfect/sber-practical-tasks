/* В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas три отрезка разных цветов. 
Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета. */

ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(15,25);
ctx.lineTo(100,25);
ctx.strokeStyle = "#e74c3c";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(15,50);
ctx.lineTo(100,50);
ctx.lineCap = "round";
ctx.strokeStyle = "#16a085";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(15,75);
ctx.lineTo(100,75);
ctx.lineCap = "square";
ctx.strokeStyle = "#2980b9";
ctx.stroke();
ctx.endPath();