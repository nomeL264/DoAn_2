document.addEventListener("DOMContentLoaded", function () {
  // Đường dẫn tới file JSON
  fetch('../json/cars.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Chuyển đổi response thành JSON
    })
    .then(data => {
      let param = new URLSearchParams(window.location.search);
      let car_id = param.get("id");
      let cars=data.cars;
      let car = cars.find(c => c.id == car_id);
      // Lấy các phần tử từ DOM
      const big_img= document.querySelector('.big_img');
      const img_1= document.querySelector('.img_1');
      const img_2= document.querySelector('.img_2');
      const img_3= document.querySelector('.img_3');
      const detail_name= document.querySelector('.detail_name');
      const star_rate= document.querySelector('.star .sub_infor');
      const trip_num= document.querySelector('.trip_num .sub_infor');
      const desc_addr_content= document.querySelector('.desc_addr_content span');
      const seat_num= document.querySelector('.seat_num');
      const fuel_type= document.querySelector('.fuel_type');
      const locate_text = document.querySelector('.locate_text');
      const car_desc = document.querySelector('.car_desc_content p');
      const car_locate = document.querySelector('.car_locate');
      const origin_price = document.querySelector('.origin_price');
      const insurance_p = document.querySelector('.insurance_p');
      const discount_num = document.querySelector('.discount_number');
      const newest_price = document.querySelector('.newest_price');
      const rent_p = document.querySelector('.cost');
      const total = document.querySelector('.total');
      const total_price = document.querySelector('.total_p');
      // Gán dữ liệu từ JSON vào các phần tử
      big_img.src=car.img;
img_1.src=car.img_1;
img_2.src=car.img_2;
img_3.src=car.img_3;
detail_name.textContent=car.name;
star_rate.textContent=car.rating;
trip_num.textContent=car.trip_number;
desc_addr_content.textContent=car.address;
seat_num.textContent=car.seat_num;
fuel_type.textContent=car.fuel_type;
car_desc.textContent=car.car_desc;
locate_text.textContent=car.address;
car_locate .textContent=car.address;
origin_price .textContent=formatCurrency(parseFloat(car.price));
insurance_p.textContent=formatCurrency(parseFloat(car.insurance_p));
insurance_p.dataset.value=car.insurance_p;
discount_num.textContent=car.discount_amount;
newest_price.textContent=formatCurrency(parseFloat(car.newest_price));
rent_p.textContent=formatCurrency(parseFloat(car.newest_price));
rent_p.dataset.value=car.newest_price;
// ------tính tổng---------
let rent_value=parseFloat(rent_p.dataset.value);
let insurance_value=parseFloat(insurance_p.dataset.value);
let total_value=caclMoney(rent_value,insurance_value);
  total.textContent =formatCurrency(total_value);
  total_price.textContent =formatCurrency(total_value) ;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
function caclMoney(rent_p,insurance_p){
  let tottal_price= rent_p+insurance_p;
  return formatCurrency(tottal_price);
}
function formatCurrency(value, locale = 'vi-VN', currency = 'VND') {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
}
