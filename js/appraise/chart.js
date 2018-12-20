/**
 * Created by 15345 on 2018/11/16.
 */
// 建立一个图表
Highcharts.chart('container', {
    style: {
        // fontFamily: "",
        // fontSize: '12px',
        // fontWeight: 'bold',
        // color: '#006cee'
    },
    credits:{
        enabled: false // 禁用版权信息
    },
    chart: {
        type: 'column',
        backgroundColor:'#eee', // 图表背景色
        borderRadius:'10px'// 边框样式
    },
    // 图例样式设置
    legend: {
        verticalAlign: 'top'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '课程特色',
            '课堂教学效果',
            '课后学习管理',
            '家校沟通',
             '校区综合管理'
        ],
        crosshair: true,
        type:"linear",
        tickWidth:0, // 去掉X轴线
        lineWidth:0 // 去掉刻度值
    },
    yAxis: {
        tickPositions: [ 3, 4, 5],
        min:0,
        title: {
            text: ''
        },
        tickPixelInterval:20,
        gridLineWidth:0,// 网格线宽度
        labels:{
            enabled:false
        }
    },
    // tooltip: {
    //     headerFormat: '<span  style="font-size:10px;color:blue;font-weight:bold">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //     '<td style="padding:0"><b>{point.y:.1f} 分</b></td></tr>',
    //     footerFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    // },
    plotOptions: {
        // column: {
        //     //pointPadding: 12,
        //     borderWidth: 0,
        //     dataLabels: {
        //         enabled: true,
        //         style:{
        //             // color:'#D7DEE9',
        //             fontSize:"8px"
        //         }
        //     }
        // }
    },
    //  数据列
    series: [{
        name: '真朴围棋平均',
        color : "#f00",
        data: [4.6, 4.8, 4.8, 4.6, 4.6],
        //borderWidth:1,
        //pointWidth:15,
        dataLabels: {
            enabled: true,
            style:{
                // color:'#D7DEE9',
                fontSize:"7px"
            }
        }
    }, {
        name: '武进区平均',
        color:"#000",
        data: [4.4, 4.6, 4.6, 4.5, 4.5],
        pointPadding: 0, //数据点之间的距离值
        groupPadding:0.2, //分组之间的距离值
        //borderWidth:0,
        pointWidth:5 //柱子之间的距离值
    }]
});

