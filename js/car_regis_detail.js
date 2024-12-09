// // gọi DOM
// const next_step = document.getElementById('next');
// const prev_step = document.getElementById('prev');
// const allRow = document.querySelectorAll('#row');
// const allStep = document.querySelectorAll('#step');
// let curStep = 0;

// next_step.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log("nghe nè")
//     if (curStep < allRow.length) {
//         curStep += 1;
//         allRow[curStep].style.display = 'flex';
//         allRow[curStep-1].style.display="none";
//         allRow[curStep+1].style.display="none"
//     }
// })
// Lấy tất cả các form
const forms = document.querySelectorAll('.form_bottom_1, .form_bottom_2, .form_bottom_3');
const switch_2=document.getElementById('num_2');
const switch_3= document.getElementById('num_3');
const tittle_2=document.getElementById('tittle_2');
const tittle_3=document.getElementById('tittle_3')
// Lấy nút "Kế tiếp" và "Quay lại"
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const nextText= nextButton.querySelector('p')
// Theo dõi trạng thái form hiện tại
let currentFormIndex = 0;

// Hàm hiển thị form dựa trên chỉ số
function showForm(index) {
    forms.forEach((form, i) => {
        form.style.display = i === index ? 'block' : 'none';
    });
}
function decorButton(index)
{
    if(index==1){
        prevButton.style.backgroundColor="#5fcf86";
        prevButton.style.color='white';
        switch_2.style.backgroundColor='#5fcf86';
        switch_2.style.color='white';
        tittle_2.style.color='#5fcf86';
        switch_3.style.backgroundColor='rgb(211, 214, 214)';
        switch_3.style.color='rgb(222, 227, 227)';
        tittle_3.style.color='rgb(222, 227, 227)'
    }
    else if (index>1){
        prevButton.style.backgroundColor="#5fcf86";
        prevButton.style.color='white';
        switch_3.style.backgroundColor='#5fcf86';
        switch_3.style.color='white';
        tittle_3.style.color='#5fcf86';
        nextText.textContent='Hoàn thành'
    }
    else{
        prevButton.style.backgroundColor='white';
        prevButton.style.color='#3333';
        switch_2.style.backgroundColor='rgb(211, 214, 214)';
        switch_2.style.color='rgb(222, 227, 227)';
        tittle_2.style.color='rgb(222, 227, 227)';
        switch_3.style.backgroundColor='rgb(211, 214, 214)';
        switch_3.style.color='rgb(222, 227, 227)';
        tittle_3.style.color='rgb(222, 227, 227)'
    }
}

// Sự kiện cho nút "Kế tiếp"
nextButton.addEventListener('click', function () {
    if (currentFormIndex < forms.length - 1) {
        currentFormIndex += 1; // Chuyển sang form kế tiếp
        showForm(currentFormIndex);
        decorButton(currentFormIndex);
    }
    else{
        alert('Đăng kí thành công')
    }
});

// Sự kiện cho nút "Quay lại"
prevButton.addEventListener('click', function () {
    if (currentFormIndex > 0) {
        currentFormIndex -= 1; // Quay lại form trước đó
        showForm(currentFormIndex);
        decorButton(currentFormIndex)
    }
});

// Hiển thị form đầu tiên khi tải trang
showForm(currentFormIndex);
