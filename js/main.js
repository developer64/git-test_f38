let age = prompt("Введите Ваш возраст")
switch(true) {
    case age > 18:
        alert("Мне больше 18")
        break;
    case age < 18 && age > 0:
        alert("Мне меньше 18")
        break;
    case age == 18:
        alert("Мне 18 лет")
    default:
        alert("Возраст указан не корректно")
    
} 


