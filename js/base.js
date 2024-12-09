// sự kiện click hiển thị drop-menu(notifications)
document.addEventListener("DOMContentLoaded",function(){
    const notifi_icon=document.getElementById("tb_icon")
    const menu_drop=document.getElementById("menu_drop")
    notifi_icon.addEventListener("click",function(){
      menu_drop.classList.toggle("d_flex")
    })
})