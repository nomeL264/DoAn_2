// Hàm tạo frame cho xe
function create_car_frame(car) {
  const car_frame = document.createElement('div');
  car_frame.classList.add('car');
  car_frame.addEventListener('click', function(){
    car_click_handler(car.id)
  } );
  car_frame.innerHTML = `
<div class="car_overlay" id="${car.id}" >
              <div class="car_img" >
                <img src="${car.img}" alt="">
              </div>
              <div class="car_label">
                <span class="rent boder_frame">
                  <p class="rent_tittle">Đặt xe nhanh</p>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9733 7.70015L8.46667 14.2668C8.29334 14.5268 8.01335 14.6668 7.71335 14.6668C7.62002 14.6668 7.52667 14.6535 7.43334 14.6268C7.05334 14.5068 6.79335 14.1668 6.79335 13.7735V10.0135C6.79335 9.86015 6.64667 9.72682 6.46667 9.72682L3.78001 9.6935C3.44001 9.6935 3.12668 9.50016 2.97335 9.20682C2.82668 8.92016 2.84668 8.5735 3.03335 8.30017L7.53335 1.7335C7.76001 1.40016 8.18001 1.25349 8.56668 1.37349C8.94668 1.49349 9.20668 1.83349 9.20668 2.22682V5.98683C9.20668 6.14017 9.35335 6.2735 9.53335 6.2735L12.22 6.30682C12.56 6.30682 12.8733 6.49349 13.0267 6.79349C13.1733 7.08016 13.1533 7.42682 12.9733 7.70015Z" fill="#FFC634">
                  </path></svg>
                </span>
                <span class="rent boder_frame">
                  <p class="rent_tittle">Miễn thế chấp</p>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.06654 3.41201L3.30916 4.68289C3.50222 4.88033 3.81878 4.88389 4.01622 4.69084C4.21367 4.49778 4.21723 4.18122 4.02417 3.98378L2.73171 2.66192C4.08658 1.32458 5.9467 0.5 7.99999 0.5C12.1421 0.5 15.5 3.8579 15.5 8.00004C15.5 10.0709 14.6612 11.9454 13.3035 13.3031L11.9871 11.9806C11.7923 11.7849 11.4757 11.7842 11.28 11.979C11.0843 12.1738 11.0836 12.4904 11.2784 12.6861L12.5495 13.9631C11.2875 14.9276 9.71111 15.5001 7.99999 15.5001C3.85785 15.5001 0.5 12.1422 0.5 8.00004C0.5 6.27151 1.08422 4.68039 2.06654 3.41201Z" stroke="#5FCF86" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3364 5.92398H10.1909C10.0678 5.21142 9.48584 4.66675 8.78821 4.66675H5.12098C4.65092 4.66675 4.26666 5.07712 4.26666 5.57703C4.26666 5.6106 4.27412 5.64045 4.27785 5.67402C4.27412 5.68895 4.26666 5.70387 4.26666 5.72252V9.93815C4.26666 10.7067 4.89341 11.3334 5.65819 11.3334H10.3364C11.1012 11.3334 11.728 10.7067 11.728 9.93815V7.31551C11.728 6.547 11.1012 5.92398 10.3364 5.92398ZM10.1275 9.09876C9.87009 9.09876 9.65745 8.88984 9.65745 8.6287C9.65745 8.36755 9.87009 8.1549 10.1275 8.1549C10.3887 8.1549 10.6013 8.36755 10.6013 8.6287C10.6013 8.88984 10.3887 9.09876 10.1275 9.09876ZM5.12098 5.22635H8.78821C9.17992 5.22635 9.50822 5.52107 9.61641 5.92398H5.12098C4.95683 5.92398 4.82626 5.76729 4.82626 5.57703C4.82626 5.38303 4.95683 5.22635 5.12098 5.22635Z" fill="#5FCF86">
                  </path></svg>
                </span>
                <span class="rent boder_frame">
                  <p class="rent_tittle">Thuê theo giờ</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00026 14.1665C11.0268 14.1665 13.4803 11.7131 13.4803 8.68654C13.4803 5.66002 11.0268 3.20654 8.00026 3.20654C4.97374 3.20654 2.52026 5.66002 2.52026 8.68654C2.52026 11.7131 4.97374 14.1665 8.00026 14.1665Z" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 1.83325V3.20658" stroke="#72BDFF" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.15356 3.83984L3.88688 4.57318" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.8466 3.83984L12.1133 4.57318" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.00063 9.37309C8.37987 9.37309 8.6873 9.06566 8.6873 8.68642C8.6873 8.30719 8.37987 7.99976 8.00063 7.99976C7.6214 7.99976 7.31396 8.30719 7.31396 8.68642C7.31396 9.06566 7.6214 9.37309 8.00063 9.37309Z" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.00073 8.68647L9.71407 6.97314" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.31396 1.83325H8.6873" stroke="#72BDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  </path></svg>
                </span>
              </div>
              <div class="discount_frame boder_frame">
                <span>Giảm ${car.discount_amount}%</span>
              </div>
            </div>
            <div class="car_desc ">
              <div class="desc_tag">
                <div class="tags d_flex">
                  <span class="boder_frame tag_text">Số tự động</span>
                  <span class="boder_frame tag_text">Giao xe tận nơi</span>
                </div>
              </div>
              <div class="desc_name">
                <p>${car.name}</p>
              </div>
              <div class="desc_addr">
                <div class="sub_infor desc_addr_content d_flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M7.99999 1.83331C5.25999 1.83331 3.03333 4.05998 3.03333 6.79998C3.03333 10.06 7.15333 14.6733 7.32666 14.8666C7.49999 15.06 7.74666 15.1666 7.99999 15.1666C8.25332 15.1666 8.49999 15.06 8.67332 14.8666C9.11332 14.38 12.9667 9.98664 12.9667 6.79998C12.9667 4.05998 10.74 1.83331 7.99999 1.83331ZM7.99999 14.12C7.45999 13.4933 4.03333 9.46664 4.03333 6.79998C4.03333 4.61331 5.81332 2.83331 7.99999 2.83331C10.1867 2.83331 11.9667 4.61331 11.9667 6.79998C11.9667 9.05331 9.41332 12.52 7.99999 14.12Z" fill="#101840"></path><path d="M7.99999 1.83331C5.25999 1.83331 3.03333 4.05998 3.03333 6.79998C3.03333 10.06 7.15333 14.6733 7.32666 14.8666C7.49999 15.06 7.74666 15.1666 7.99999 15.1666C8.25332 15.1666 8.49999 15.06 8.67332 14.8666C9.11332 14.38 12.9667 9.98664 12.9667 6.79998C12.9667 4.05998 10.74 1.83331 7.99999 1.83331ZM5.91999 6.79998C5.91999 5.65331 6.85332 4.71998 7.99999 4.71998C9.14666 4.71998 10.08 5.65331 10.08 6.79998C10.08 7.94664 9.14666 8.87998 7.99999 8.87998C6.85332 8.87998 5.91999 7.94664 5.91999 6.79998Z" fill="#101840">
                  </path></svg>
                  <span>${car.address}</span>
                </div>
              </div>
              <div class="desc_line line_page"></div>
              <div class="desc_infor_price d_flex">
                <div class="desc_infor ">
                  <div class="star">
                    <svg class="star-rating" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6667 7.23331C14.7333 6.89998 14.4667 6.49998 14.1333 6.49998L10.3333 5.96665L8.59999 2.49998C8.53333 2.36665 8.46666 2.29998 8.33333 2.23331C7.99999 2.03331 7.59999 2.16665 7.39999 2.49998L5.73333 5.96665L1.93333 6.49998C1.73333 6.49998 1.59999 6.56665 1.53333 6.69998C1.26666 6.96665 1.26666 7.36665 1.53333 7.63331L4.26666 10.3L3.59999 14.1C3.59999 14.2333 3.59999 14.3666 3.66666 14.5C3.86666 14.8333 4.26666 14.9666 4.59999 14.7666L7.99999 12.9666L11.4 14.7666C11.4667 14.8333 11.6 14.8333 11.7333 14.8333C11.8 14.8333 11.8 14.8333 11.8667 14.8333C12.2 14.7666 12.4667 14.4333 12.4 14.0333L11.7333 10.2333L14.4667 7.56665C14.6 7.49998 14.6667 7.36665 14.6667 7.23331Z" fill="#FFC634">
                    </path></svg>
                    <span class="sub_infor">${car.rating}</span>
                  </div>
                  <span class="dot">•</span>
                  <div class="trip_num">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;"><g clip-path="url(#clip0_1087_41996)"><path d="M10.0625 1.21875C10.0625 1.06369 10.1887 0.9375 10.3438 0.9375H11.9688C12.1238 0.9375 12.25 1.06369 12.25 1.21875V2.89422H13.1875V1.21875C13.1875 0.546719 12.6408 0 11.9688 0H10.3438C9.67172 0 9.125 0.546719 9.125 1.21875V2.89422H10.0625V1.21875Z" fill="#5FCF86"></path><path d="M5.69806 15.0623C5.49325 14.7441 5.375 14.3673 5.375 13.9686V6.94092H1.09375C0.490656 6.94092 0 7.43157 0 8.03467V13.9686C0 14.5186 0.408156 14.9749 0.9375 15.051V15.5309C0.9375 15.7898 1.14737 15.9997 1.40625 15.9997C1.66513 15.9997 1.875 15.7898 1.875 15.5309V15.0623H5.69806V15.0623ZM1.875 8.65967C1.875 8.40079 2.08487 8.19092 2.34375 8.19092C2.60263 8.19092 2.8125 8.40079 2.8125 8.65967V13.3436C2.8125 13.6024 2.60263 13.8123 2.34375 13.8123C2.08487 13.8123 1.875 13.6024 1.875 13.3436V8.65967Z" fill="#5FCF86"></path><path d="M4.375 5.26562C4.375 5.11056 4.50119 4.98438 4.65625 4.98438H5.375V4.92547C5.375 4.61094 5.44687 4.31291 5.57506 4.04688H4.65625C3.98422 4.04688 3.4375 4.59359 3.4375 5.26562V6.00359H4.375V5.26562Z" fill="#5FCF86"></path><path d="M14.9062 3.83154H7.40625C6.80316 3.83154 6.3125 4.3222 6.3125 4.92529V13.9686C6.3125 14.5186 6.72066 14.9749 7.25 15.051V15.5309C7.25 15.7898 7.45987 15.9997 7.71875 15.9997C7.97763 15.9997 8.1875 15.7898 8.1875 15.5309V15.0623H14.125V15.5309C14.125 15.7898 14.3349 15.9997 14.5938 15.9997C14.8526 15.9997 15.0625 15.7898 15.0625 15.5309V15.051C15.5918 14.9749 16 14.5186 16 13.9686V4.92529C16 4.32217 15.5093 3.83154 14.9062 3.83154ZM9.125 13.3436C9.125 13.6024 8.91513 13.8123 8.65625 13.8123C8.39737 13.8123 8.1875 13.6024 8.1875 13.3436V5.55029C8.1875 5.29142 8.39737 5.08154 8.65625 5.08154C8.91513 5.08154 9.125 5.29142 9.125 5.55029V13.3436ZM13.6562 13.8123C13.3974 13.8123 13.1875 13.6024 13.1875 13.3436V5.55029C13.1875 5.29142 13.3974 5.08154 13.6562 5.08154C13.9151 5.08154 14.125 5.29142 14.125 5.55029V13.3436C14.125 13.6024 13.9151 13.8123 13.6562 13.8123Z" fill="#5FCF86"></path></g><defs><clipPath id="clip0_1087_41996"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
                    </svg>
                    <span class="sub_infor">${car.trip_number} chuyến</span>
                  </div>
                </div>
                <div class="desc_price">
                  <span class="price_origin sub_infor">${car.price}K</span>
                  <span class="discount_price">784K</span>
                  <span class="sub_infor">/ngày</span>
                </div>
              </div>
            </div>`;
  return car_frame;
}
//hàm lấy data từ json
function load_car() {
  $.getJSON('../json/cars.json', function (data) {
    const container_cars = $("#car_container");
    container_cars.empty();
    $.each(data.cars, function (index, car) {
      const car_frame = create_car_frame(car);
      container_cars.append(car_frame);
      // $('#car_container').append(car_frame);
    });
    click_event();
  }).fail(function (error) {
    console.error('Lỗi khi tải dữ liệu:', error);
  });
}
window.onload = load_car;


// --------hàm click---------
// function click_event() {
//   $('.car').on('click', function() {
//     try {
//       const carData = JSON.parse(decodeURIComponent($(this).data('cars'))); 
//       console.log('Giá trị data-cars:', carDataString);
// // Lấy dữ liệu từ thuộc tính data-cars
//       if (carData) {
//         localStorage.setItem('selected_car', JSON.stringify(carData)); // Lưu dữ liệu vào localStorage
//         window.location.href = '/html/car_detail.html'; // Chuyển hướng đến trang chi tiết xe
//       } else {
//         console.warn('Dữ liệu xe không hợp lệ hoặc bị thiếu.');
//       }
//     } catch (error) {
//       console.error('Có lỗi xảy ra khi xử lý dữ liệu xe:', error);
//     }
//   });
// }

function car_click_handler(id) {
  window.location.href = `/html/car_detail.html?id=${id}`;
}


