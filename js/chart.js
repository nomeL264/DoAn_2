const xValues = ["January","Febuary","March","April","May","Jun","July","August","September","October"];

new Chart("mix_line_chart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [600,620,520,500,700,650,600,550,600,650],
      borderColor: "rgba(255, 99, 132,1)",
      fill: false
    }, { 
      data: [552,590,600,570,550,650,690,720,800,820],
      borderColor: "rgba(54, 162, 235, 1)",
      fill: false
    }, { 
      data: [500,550,560,600,580,750,770,800,770,820],
      borderColor: "rgba(255, 159, 64, 1)",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    title:{
      display:true,
      text:"Thống kê số lượng đơn hàng"
    }
  }
});
// ----small_chart_1-----
var xValue = ["TP.Hồ chí Minh", "Đà Nẵng", "TP.Hà Nội","Sài Gòn"];
var yValues = [40,30,20,10];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("small_chart_1", {
  type: "pie",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Địa điểm có mật độ xe cao"
    }
  }
});

// -----small-chart_2--------
var x3 = ["Tháng 8", "Tháng 9", "Tháng 10",];
var yValues = [655, 699, 744,];
var barColors = ["rgba(255, 159, 64, 0.2)", "rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)",];

new Chart("small_chart_2", {
  type: "bar",
  data: {
    labels: x3,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Số lượng khách hàng mới"
    }
  }
});
